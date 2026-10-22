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

create index if not exists analytics_events_created_at_idx
  on public.analytics_events (created_at desc);
create index if not exists analytics_events_user_id_idx
  on public.analytics_events (user_id, created_at desc);

alter table public.admin_users enable row level security;
alter table public.privacy_consents enable row level security;
alter table public.analytics_events enable row level security;

revoke all on public.admin_users, public.privacy_consents, public.analytics_events from anon, authenticated;

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
begin
  if new.raw_user_meta_data ->> 'tracking_consent' = 'true' then
    consent_version := coalesce(new.raw_user_meta_data ->> 'consent_version', 'unknown');
    insert into public.privacy_consents (user_id, consent_version)
    values (new.id, consent_version)
    on conflict (user_id) do nothing;

    insert into public.analytics_events (user_id, event_type)
    values (new.id, 'signup');
  end if;
  return new;
end;
$$;

revoke all on function public.handle_kagan_signup() from public, anon, authenticated;
drop trigger if exists on_kagan_auth_signup on auth.users;
create trigger on_kagan_auth_signup
  after insert on auth.users
  for each row execute function public.handle_kagan_signup();

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
  if p_event_type = 'game_start' and (p_game_id is null or p_game_id not in ('starcatch', 'neon', 'moonhop', 'crystals', 'orbit')) then
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

revoke all on function public.admin_get_summary() from public, anon;
revoke all on function public.admin_get_events(integer) from public, anon;
grant execute on function public.admin_get_summary() to authenticated;
grant execute on function public.admin_get_events(integer) to authenticated;
