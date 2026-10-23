create table if not exists public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.privacy_consents (
  user_id uuid primary key references auth.users (id) on delete cascade,
  consent_version text not null,
  consented_at timestamptz not null default now(),
  revoked_at timestamptz
);

create table if not exists public.analytics_events (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  event_type text not null check (event_type in ('signup', 'login', 'game_start')),
  game_id text check (game_id in ('starcatch', 'neon', 'moonhop', 'crystals', 'orbit')),
  created_at timestamptz not null default now(),
  check ((event_type = 'game_start' and game_id is not null) or (event_type <> 'game_start' and game_id is null))
);

alter table public.analytics_events
  drop constraint if exists analytics_events_game_id_check;
alter table public.analytics_events
  drop constraint if exists kagan_analytics_game_id_allowed;
alter table public.analytics_events
  add constraint kagan_analytics_game_id_allowed
  check (game_id in ('starcatch', 'neon', 'moonhop', 'crystals', 'tacstrike', 'orbit', 'bubblepop', 'garden', 'skycourier', 'pulse', 'maze', 'tinytower', 'coral', 'meteorguard', 'lantern', 'pixelchef', 'crystalbreak', 'starcourier', 'snowslalom', 'runemath', 'lighthouse', 'starlight', 'honeytrail', 'meadowrace', 'icebreak', 'dustrunner', 'skyforge', 'radarjump', 'mosscape', 'glowdrift', 'copperloop', 'snakegarden', 'flapcloud', 'pongduel', 'mineralmines', 'numberforge', 'boxvoyage', 'lightmatrix', 'bullseye', 'skylinehop', 'starinvaders', 'towercraft', 'deepmaze', 'beatlanes', 'pipeworks', 'minigolf', 'colorshift', 'quickdraw', 'blockdrop', 'harborcatch', 'pairgarden'));

create table if not exists public.referral_participants (
  user_id uuid primary key references auth.users (id) on delete cascade,
  referral_code text not null unique check (referral_code ~ '^[A-Z0-9]{6,12}$'),
  cash_paid_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.referral_conversions (
  referred_user_id uuid primary key references auth.users (id) on delete cascade,
  referrer_user_id uuid not null references public.referral_participants (user_id) on delete cascade,
  confirmed_at timestamptz not null default now(),
  check (referred_user_id <> referrer_user_id)
);

create or replace function public.enforce_referral_participant_limit()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  perform pg_advisory_xact_lock(97124501);
  if (select count(*) from public.referral_participants) >= 5 then
    raise exception 'The program is limited to five referral participants';
  end if;
  return new;
end;
$$;

revoke all on function public.enforce_referral_participant_limit() from public, anon, authenticated;
drop trigger if exists referral_participant_limit on public.referral_participants;
create trigger referral_participant_limit
  before insert on public.referral_participants
  for each row execute function public.enforce_referral_participant_limit();

create index if not exists analytics_events_created_at_idx
  on public.analytics_events (created_at desc);
create index if not exists analytics_events_user_id_idx
  on public.analytics_events (user_id, created_at desc);

alter table public.admin_users enable row level security;
alter table public.privacy_consents enable row level security;
alter table public.analytics_events enable row level security;
alter table public.referral_participants enable row level security;
alter table public.referral_conversions enable row level security;

revoke all on public.admin_users, public.privacy_consents, public.analytics_events,
  public.referral_participants, public.referral_conversions from anon, authenticated;

create or replace function public.is_kagan_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.admin_users
    where user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_kagan_admin() from public, anon;
grant execute on function public.is_kagan_admin() to authenticated;

create or replace function public.handle_kagan_signup()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  consent_version text;
  referral_code text;
begin
  if tg_op = 'INSERT' and new.raw_user_meta_data ->> 'tracking_consent' = 'true' then
    consent_version := coalesce(new.raw_user_meta_data ->> 'consent_version', 'unknown');
    insert into public.privacy_consents (user_id, consent_version)
    values (new.id, consent_version)
    on conflict (user_id) do nothing;
  end if;

  if new.email_confirmed_at is not null
    and (tg_op = 'INSERT' or old.email_confirmed_at is null)
    and exists (
      select 1 from public.privacy_consents
      where user_id = new.id and revoked_at is null
    ) then
    insert into public.analytics_events (user_id, event_type)
    values (new.id, 'signup')
    on conflict do nothing;

    referral_code := upper(coalesce(new.raw_user_meta_data ->> 'referral_code', ''));
    if referral_code <> '' then
      insert into public.referral_conversions (referred_user_id, referrer_user_id)
      select new.id, participant.user_id
      from public.referral_participants as participant
      where participant.referral_code = referral_code
        and participant.user_id <> new.id
      on conflict (referred_user_id) do nothing;
    end if;
  end if;
  return new;
end;
$$;

revoke all on function public.handle_kagan_signup() from public, anon, authenticated;
drop trigger if exists on_kagan_auth_signup on auth.users;
drop trigger if exists on_kagan_auth_email_confirmed on auth.users;
create trigger on_kagan_auth_signup
  after insert on auth.users
  for each row execute function public.handle_kagan_signup();
create trigger on_kagan_auth_email_confirmed
  after update of email_confirmed_at on auth.users
  for each row execute function public.handle_kagan_signup();

create or replace function public.admin_add_referral_participant(p_user_id uuid, p_referral_code text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_kagan_admin() then
    raise exception 'Administrator access required';
  end if;
  if p_referral_code is null or upper(p_referral_code) !~ '^[A-Z0-9]{6,12}$' then
    raise exception 'Referral code must contain 6 to 12 letters or numbers';
  end if;
  insert into public.referral_participants (user_id, referral_code)
  values (p_user_id, upper(p_referral_code));
end;
$$;

revoke all on function public.admin_add_referral_participant(uuid, text) from public, anon;
grant execute on function public.admin_add_referral_participant(uuid, text) to authenticated;

create or replace function public.record_user_event(p_event_type text, p_game_id text default null)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := (select auth.uid());
begin
  if current_user_id is null then
    raise exception 'Authentication required';
  end if;
  if p_event_type is null or p_event_type not in ('login', 'game_start') then
    raise exception 'Unsupported event type';
  end if;
  if p_event_type = 'game_start' and (p_game_id is null or p_game_id not in ('starcatch', 'neon', 'moonhop', 'crystals', 'tacstrike', 'orbit', 'bubblepop', 'garden', 'skycourier', 'pulse', 'maze', 'tinytower', 'coral', 'meteorguard', 'lantern', 'pixelchef', 'crystalbreak', 'starcourier', 'snowslalom', 'runemath', 'lighthouse', 'starlight', 'honeytrail', 'meadowrace', 'icebreak', 'dustrunner', 'skyforge', 'radarjump', 'mosscape', 'glowdrift', 'copperloop', 'snakegarden', 'flapcloud', 'pongduel', 'mineralmines', 'numberforge', 'boxvoyage', 'lightmatrix', 'bullseye', 'skylinehop', 'starinvaders', 'towercraft', 'deepmaze', 'beatlanes', 'pipeworks', 'minigolf', 'colorshift', 'quickdraw', 'blockdrop', 'harborcatch', 'pairgarden')) then
    raise exception 'Unsupported game';
  end if;
  if p_event_type = 'login' and p_game_id is not null then
    raise exception 'Login events cannot include a game';
  end if;
  if exists (
    select 1 from public.privacy_consents
    where user_id = current_user_id and revoked_at is null
  ) then
    insert into public.analytics_events (user_id, event_type, game_id)
    values (current_user_id, p_event_type, p_game_id);
  end if;
end;
$$;

revoke all on function public.record_user_event(text, text) from public, anon;
grant execute on function public.record_user_event(text, text) to authenticated;

create or replace function public.revoke_tracking_consent()
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  update public.privacy_consents
  set revoked_at = now()
  where user_id = (select auth.uid()) and revoked_at is null;
end;
$$;

revoke all on function public.revoke_tracking_consent() from public, anon;
grant execute on function public.revoke_tracking_consent() to authenticated;

create or replace function public.grant_tracking_consent(p_consent_version text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := (select auth.uid());
begin
  if current_user_id is null then
    raise exception 'Authentication required';
  end if;
  if p_consent_version is null or length(p_consent_version) > 40 then
    raise exception 'Invalid consent version';
  end if;
  insert into public.privacy_consents (user_id, consent_version, consented_at, revoked_at)
  values (current_user_id, p_consent_version, now(), null)
  on conflict (user_id) do update
    set consent_version = excluded.consent_version,
        consented_at = excluded.consented_at,
        revoked_at = null;
end;
$$;

revoke all on function public.grant_tracking_consent(text) from public, anon;
grant execute on function public.grant_tracking_consent(text) to authenticated;

create or replace function public.admin_get_summary()
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.is_kagan_admin() then
    raise exception 'Administrator access required';
  end if;
  return (
    select jsonb_build_object(
      'signups', count(*) filter (where event_type = 'signup'),
      'logins', count(*) filter (where event_type = 'login'),
      'game_starts', count(*) filter (where event_type = 'game_start')
    )
    from public.analytics_events
  );
end;
$$;

create or replace function public.admin_get_events(p_limit integer default 100)
returns table (email text, account_name text, event_type text, game_id text, occurred_at timestamptz)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.is_kagan_admin() then
    raise exception 'Administrator access required';
  end if;
  return query
    select u.email::text,
           coalesce(u.raw_user_meta_data ->> 'name', ''),
           e.event_type,
           e.game_id,
           e.created_at
    from public.analytics_events as e
    join auth.users as u on u.id = e.user_id
    order by e.created_at desc
    limit least(greatest(coalesce(p_limit, 100), 1), 500);
end;
$$;

create or replace function public.admin_get_referrals()
returns table (
  user_id uuid,
  email text,
  account_name text,
  referral_code text,
  confirmed_referrals bigint,
  eligible_cash_som integer,
  cash_paid_at timestamptz
)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.is_kagan_admin() then
    raise exception 'Administrator access required';
  end if;
  return query
    select participant.user_id,
           u.email::text,
           coalesce(u.raw_user_meta_data ->> 'name', ''),
           participant.referral_code,
           count(conversion.referred_user_id),
           case
             when count(conversion.referred_user_id) >= 4 then 50
             else 0
           end,
           participant.cash_paid_at
    from public.referral_participants as participant
    join auth.users as u on u.id = participant.user_id
    left join public.referral_conversions as conversion
      on conversion.referrer_user_id = participant.user_id
    group by participant.user_id, participant.created_at, u.email, u.raw_user_meta_data,
             participant.referral_code, participant.cash_paid_at
    order by count(conversion.referred_user_id) desc, participant.created_at asc;
end;
$$;

create or replace function public.admin_mark_referral_cash_paid(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_kagan_admin() then
    raise exception 'Administrator access required';
  end if;
  update public.referral_participants as participant
  set cash_paid_at = now()
  where participant.user_id = p_user_id
    and participant.cash_paid_at is null
    and (
      select count(*) from public.referral_conversions as conversion
      where conversion.referrer_user_id = participant.user_id
    ) >= 4;
  if not found then
    raise exception 'No eligible unpaid referral reward found';
  end if;
end;
$$;

revoke all on function public.admin_get_summary() from public, anon;
revoke all on function public.admin_get_events(integer) from public, anon;
revoke all on function public.admin_get_referrals() from public, anon;
revoke all on function public.admin_mark_referral_cash_paid(uuid) from public, anon;
grant execute on function public.admin_get_summary() to authenticated;
grant execute on function public.admin_get_events(integer) to authenticated;
grant execute on function public.admin_get_referrals() to authenticated;
grant execute on function public.admin_mark_referral_cash_paid(uuid) to authenticated;
