const config = window.KAGAN_SUPABASE_CONFIG || {};
const statusElement = document.querySelector("#admin-status");
const loginForm = document.querySelector("#admin-login");
const dashboard = document.querySelector("#admin-dashboard");
const errorElement = document.querySelector("#admin-error");
const client = window.supabase?.createClient && config.url && config.anonKey
  ? window.supabase.createClient(config.url, config.anonKey)
  : null;

function setStatus(message) {
  statusElement.textContent = message;
}

function displayEventLabel(eventType) {
  return ({
    signup: "Регистрация",
    login: "Вход",
    game_start: "Запуск игры"
  })[eventType] || "Другое событие";
}

function displayGameLabel(gameId) {
  return ({
    starcatch: "Звёздный ловец",
    neon: "Неоновые гонки",
    moonhop: "Лунный прыжок",
    crystals: "Кристальная память",
    orbit: "Защитник орбиты"
  })[gameId] || "—";
}

function formatDate(value) {
  return new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function appendCell(row, value) {
  const cell = document.createElement("td");
  cell.textContent = value;
  row.append(cell);
}

async function loadDashboard(user) {
  setStatus("Проверяю права доступа…");
  try {
    const [{ data: summary, error: summaryError }, { data: events, error: eventsError }] = await Promise.all([
      client.rpc("admin_get_summary"),
      client.rpc("admin_get_events", { p_limit: 100 })
    ]);
    if (summaryError || eventsError) throw summaryError || eventsError;

    document.querySelector("#admin-identity").textContent = `Вошли как ${user.email}`;
    document.querySelector("#signup-total").textContent = summary.signups;
    document.querySelector("#login-total").textContent = summary.logins;
    document.querySelector("#game-total").textContent = summary.game_starts;
    const rows = document.querySelector("#event-rows");
    rows.replaceChildren();
    if (events.length === 0) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 4;
      cell.className = "admin-empty";
      cell.textContent = "Пока нет событий от пользователей, давших согласие.";
      row.append(cell);
      rows.append(row);
    } else {
      events.forEach((item) => {
        const row = document.createElement("tr");
        appendCell(row, item.account_name ? `${item.account_name} · ${item.email}` : item.email);
        appendCell(row, displayEventLabel(item.event_type));
        appendCell(row, displayGameLabel(item.game_id));
        appendCell(row, formatDate(item.occurred_at));
        rows.append(row);
      });
    }
    loginForm.hidden = true;
    dashboard.hidden = false;
    setStatus("Данные доступны только назначенному администратору.");
  } catch (error) {
    console.error("Не удалось загрузить закрытую панель:", error.message);
    try {
      const { error: signOutError } = await client.auth.signOut();
      if (signOutError) console.error("Не удалось завершить сеанс без прав администратора:", signOutError.message);
    } catch (signOutError) {
      console.error("Не удалось завершить сеанс без прав администратора:", signOutError.message);
    }
    loginForm.hidden = false;
    dashboard.hidden = true;
    setStatus(error.message?.includes("Administrator access required")
      ? "Доступ запрещён. Этот аккаунт не назначен администратором."
      : "Не удалось загрузить панель. Проверьте настройки backend и повторите попытку.");
  }
}

async function initialize() {
  if (!client) {
    setStatus("Backend не подключён. Сначала настройте Supabase по инструкции в README.");
    return;
  }
  try {
    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    if (data.session) {
      await loadDashboard(data.session.user);
    } else {
      setStatus("Войдите с аккаунтом, который владелец назначил администратором.");
      loginForm.hidden = false;
    }
  } catch (error) {
    console.error("Не удалось проверить сеанс администратора:", error.message);
    setStatus("Не удалось проверить сеанс. Обновите страницу и попробуйте снова.");
  }
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!client) return;
  const formData = new FormData(loginForm);
  const submitButton = loginForm.querySelector("button[type=submit]");
  submitButton.disabled = true;
  errorElement.textContent = "";
  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: String(formData.get("email")).trim().toLowerCase(),
      password: String(formData.get("password"))
    });
    if (error) throw error;
    await loadDashboard(data.user);
  } catch (error) {
    errorElement.textContent = "Не удалось войти. Проверь почту, пароль и подключение.";
    console.error("Ошибка входа в админ-панель:", error.message);
  } finally {
    submitButton.disabled = false;
  }
});

document.querySelector("#admin-logout").addEventListener("click", async () => {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;
    dashboard.hidden = true;
    loginForm.reset();
    loginForm.hidden = false;
    setStatus("Вы вышли. Войти может только назначенный администратор.");
  } catch (error) {
    setStatus("Не удалось завершить сеанс. Попробуйте ещё раз.");
    console.error("Ошибка выхода из панели:", error.message);
  }
});

void initialize();
