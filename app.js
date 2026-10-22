const games = [
  { id: "starcatch", title: "Звёздный ловец", genre: "Аркада", studio: "Kagan Games", initials: "01", art: "starcatch", tag: "ЛОВИ ЗВЁЗДЫ", description: "Лови падающие звёзды и уворачивайся от метеоров.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "neon", title: "Неоновые гонки", genre: "Гонки", studio: "Kagan Games", initials: "02", art: "neon", tag: "НЕ СТОЛКНИСЬ", description: "Мчись по неоновой трассе и маневрируй между препятствиями.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "moonhop", title: "Лунный прыжок", genre: "Платформер", studio: "Kagan Games", initials: "03", art: "moonhop", tag: "ВЫШЕ К ЗВЁЗДАМ", description: "Прыгай по платформам всё выше и не падай в бездну.", controls: "← → и Пробел — прыгать; на телефоне коснись поля" },
  { id: "crystals", title: "Кристальная память", genre: "Головоломка", studio: "Kagan Games", initials: "04", art: "crystals", tag: "НАЙДИ ПАРЫ", description: "Открывай кристаллы и собирай одинаковые пары.", controls: "Нажимай на кристаллы мышью или пальцем" },
  { id: "tacstrike", title: "Тактический прорыв", genre: "Тактический шутер", studio: "Kagan Games", initials: "05", art: "tactical", tag: "ЗАДАНИЕ: ПРОРЫВ", description: "Оригинальный одиночный тактический шутер: целься, перезаряжайся и останови волну ботов.", controls: "Мышь — цель и огонь · WASD — движение · R — перезарядка · на телефоне веди и касайся поля" }
];

const rankings = {
  games: games.map((game) => ({
    name: game.title, subtitle: `${game.genre} · ${game.studio}`, initials: game.initials
  })),
  developers: [],
  studios: [{
    name: "Kagan Games",
    subtitle: games.map((game) => game.title).join(" · "),
    initials: "KG"
  }]
};

const genres = ["Все игры", ...new Set(games.map((game) => game.genre))];
let activeGenre = "Все игры";
let searchQuery = "";
let authMode = "register";
let toastTimeout;
let currentGameId = null;
let gameFrameId = 0;
let gameLastFrame = 0;
let gameState = null;
const supabaseConfig = window.KAGAN_SUPABASE_CONFIG || {};
const supabaseClient = window.supabase?.createClient && supabaseConfig.url && supabaseConfig.anonKey
  ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
  : null;
let currentUser = null;
const gameCanvas = document.querySelector("#game-canvas");
const gameContext = gameCanvas.getContext("2d");
const gameKeys = new Set();
const gameWidth = gameCanvas.width;
const gameHeight = gameCanvas.height;

function gameCard(game) {
  return `<article class="game-card">
    <div class="game-cover game-cover-${game.art}">
      <span class="cover-tag">${game.tag}</span><span class="cover-symbol" aria-hidden="true">${{ starcatch: "✦", neon: "↗", moonhop: "☾", crystals: "◇", orbit: "✹", tactical: "⌖" }[game.art]}</span><span class="cover-initials">${game.initials}</span>
    </div>
    <div class="game-card-info">
      <h3 class="game-card-title">${game.title}</h3>
      <p class="game-description">${game.description}</p>
      <div class="game-card-meta"><span>${game.genre}</span><span>${game.studio}</span></div>
      <button class="button button-primary game-link" type="button" data-play-game="${game.id}">Играть <span>▶</span></button>
    </div>
  </article>`;
}

function filteredGames() {
  return games.filter((game) => {
    const matchesGenre = activeGenre === "Все игры" || game.genre === activeGenre;
    const searchable = `${game.title} ${game.genre} ${game.studio}`.toLocaleLowerCase("ru");
    return matchesGenre && searchable.includes(searchQuery.toLocaleLowerCase("ru"));
  });
}

function renderGames() {
  const featured = document.querySelector("#featured-games");
  const catalog = document.querySelector("#catalog-games");
  const results = filteredGames();
  featured.innerHTML = games.map(gameCard).join("");
  catalog.innerHTML = results.map(gameCard).join("");
  document.querySelector("#catalog-count").textContent = `${results.length} ${results.length === 1 ? "игра" : results.length >= 2 && results.length <= 4 ? "игры" : "игр"}`;
  document.querySelector("#empty-games").hidden = results.length > 0;
}

function renderFilters() {
  const container = document.querySelector("#genre-filters");
  container.innerHTML = genres.map((genre) => `<button class="filter-chip${genre === activeGenre ? " active" : ""}" type="button" data-genre="${genre}">${genre}</button>`).join("");
  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-genre]");
    if (!button) return;
    activeGenre = button.dataset.genre;
    renderFilters();
    renderGames();
  }, { once: true });
}

function renderRankings(type = "games") {
  const list = rankings[type];
  if (list.length === 0) {
    document.querySelector("#ranking-list").innerHTML = `<p class="ranking-empty">${type === "developers" ? "Проверенных профилей отдельных разработчиков пока нет. Не будем придумывать авторов или их места в рейтинге." : "В каталоге пока нет студий."}</p>`;
    return;
  }
  document.querySelector("#ranking-list").innerHTML = list.map((entry) => `
    <div class="ranking-row">
      <span class="rank-number" aria-hidden="true">✦</span>
      <div class="rank-identity"><span class="rank-avatar">${entry.initials}</span><div>
        <div class="rank-name">${entry.name}</div><div class="rank-subtitle">${entry.subtitle}</div>
      </div></div>
      <span class="rank-score">${type === "games" ? "Игра" : "Компания"}<small>${type === "games" ? "без оценки" : "указана у игры"}</small></span>
    </div>`).join("");
}

function navigate(page) {
  const validPage = ["home", "catalog", "rankings", "developers"].includes(page) ? page : "home";
  document.querySelectorAll(".page-section").forEach((section) => section.classList.toggle("active", section.id === `page-${validPage}`));
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.page === validPage));
  if (validPage === "catalog") renderGames();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("visible"), 3000);
}

function updateAuthMode(mode) {
  authMode = mode;
  document.querySelectorAll(".auth-mode").forEach((button) => {
    const selected = button.dataset.authMode === mode;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  const nameInput = document.querySelector('[name="name"]');
  nameInput.closest(".form-label").hidden = mode === "login";
  nameInput.required = mode === "register";
  const passwordInput = document.querySelector('[name="password"]');
  passwordInput.autocomplete = mode === "login" ? "current-password" : "new-password";
  document.querySelector("#tracking-consent-label").hidden = mode === "login";
  document.querySelector("#referral-code-label").hidden = mode === "login";
  document.querySelector("#grant-consent").hidden = mode !== "login" || !currentUser;
  document.querySelector("#revoke-consent").hidden = mode !== "login" || !currentUser;
  document.querySelector(".auth-submit").innerHTML = mode === "login" ? "Войти <span>→</span>" : "Создать аккаунт <span>→</span>";
  document.querySelector("#auth-error").textContent = "";
}

const referralInput = document.querySelector('[name="referralCode"]');
const referralCodeFromUrl = new URLSearchParams(location.search).get("ref");
if (referralCodeFromUrl) {
  referralInput.value = referralCodeFromUrl.replace(/[^a-z0-9]/gi, "").slice(0, 12).toUpperCase();
}

function updateAccountButton() {
  const button = document.querySelector("#account-button");
  const sidebarButton = document.querySelector(".button-sidebar");
  if (currentUser) {
    button.textContent = currentUser.user_metadata?.name || currentUser.email;
    button.title = "Нажми, чтобы выйти";
    button.dataset.logout = "true";
    sidebarButton.textContent = "Аккаунт и приватность";
  } else {
    button.textContent = "Войти";
    button.removeAttribute("title");
    delete button.dataset.logout;
    sidebarButton.textContent = "Войти в аккаунт";
  }
}

async function recordUserEvent(eventType, gameId = null) {
  if (!supabaseClient || !currentUser) return;
  try {
    const { error } = await supabaseClient.rpc("record_user_event", {
      p_event_type: eventType,
      p_game_id: gameId
    });
    if (error) throw error;
  } catch (error) {
    console.error("Не удалось записать событие аккаунта:", error.message);
    showToast("Не удалось обновить статистику аккаунта.");
  }
}

function startGame(id) {
  const game = games.find((item) => item.id === id);
  if (!game) return;
  void recordUserEvent("game_start", id);
  currentGameId = id;
  gameState = {
    score: 0, elapsed: 0, spawn: 0, lives: 3, ended: false,
    playerX: gameWidth / 2, playerY: 440, playerVY: -11,
    collected: 0, grounded: false,
    objects: [], bullets: [], particles: [],
    platforms: [], matched: new Set(), opened: [], attempts: 0, lockTime: 0
  };
  if (id === "moonhop") {
    gameState.playerY = 442;
    gameState.playerVY = 0;
    gameState.grounded = true;
    gameState.platforms = [{ x: 390, y: 470, w: 180 }, ...Array.from({ length: 9 }, (_, index) => ({
      x: 90 + Math.random() * 720, y: 410 - index * 75, w: 100 + Math.random() * 45
    }))];
  }
  if (id === "tacstrike") {
    gameState.health = 100;
    gameState.ammo = 12;
    gameState.reserveAmmo = 36;
    gameState.kills = 0;
    gameState.reloadTime = 0;
    gameState.attackTime = 2.6;
    gameState.muzzleTime = 0;
    gameState.cameraX = 0;
    gameState.cameraY = 0;
    gameState.crosshairX = gameWidth / 2;
    gameState.crosshairY = gameHeight / 2;
    gameState.targets = Array.from({ length: 4 }, (_, index) => ({
      x: 280 + index * 135 + Math.random() * 35,
      y: 215 + Math.random() * 65,
      phase: Math.random() * Math.PI * 2,
      alive: true
    }));
  }
  if (id === "crystals") {
    const icons = ["✦", "◆", "☾", "●", "❋", "⬟", "✧", "⬢"];
    gameState.cards = [...icons, ...icons].sort(() => Math.random() - 0.5);
  }
  document.querySelector("#game-dialog-title").textContent = game.title;
  document.querySelector("#game-dialog-description").textContent = game.description;
  document.querySelector("#game-controls").textContent = game.controls;
  document.querySelector("#game-score").textContent = id === "crystals" ? "Ходы: 0" : id === "tacstrike" ? "Боты: 0 / 4" : "Счёт: 0";
  const dialog = document.querySelector("#game-dialog");
  if (!dialog.open) dialog.showModal();
  gameKeys.clear();
  gameLastFrame = performance.now();
  cancelAnimationFrame(gameFrameId);
  gameFrameId = requestAnimationFrame(runGameFrame);
}

function endGame(message) {
  if (!gameState || gameState.ended) return;
  gameState.ended = true;
  gameState.endMessage = message;
}

function updateGame(delta) {
  const state = gameState;
  if (!state || state.ended) return;
  state.elapsed += delta;
  const movingLeft = gameKeys.has("ArrowLeft") || gameKeys.has("KeyA");
  const movingRight = gameKeys.has("ArrowRight") || gameKeys.has("KeyD");

  if (currentGameId === "starcatch") {
    state.playerX = Math.max(48, Math.min(gameWidth - 48, state.playerX + (Number(movingRight) - Number(movingLeft)) * 420 * delta));
    state.spawn += delta;
    if (state.spawn > 0.58) {
      state.spawn = 0;
      state.objects.push({ x: 34 + Math.random() * (gameWidth - 68), y: -20, r: 12, speed: 145 + Math.random() * 110, bad: Math.random() < 0.26 });
    }
    state.objects = state.objects.filter((item) => {
      item.y += item.speed * delta;
      if (Math.abs(item.x - state.playerX) < 35 && Math.abs(item.y - 490) < 28) {
        if (item.bad) state.lives -= 1;
        else state.collected += 10;
        if (state.lives <= 0) endGame("Метеоры сбили твой корабль.");
        return false;
      }
      return item.y < gameHeight + 20;
    });
    state.score = state.collected + Math.floor(state.elapsed * 2);
  } else if (currentGameId === "neon") {
    state.playerX = Math.max(300, Math.min(660, state.playerX + (Number(movingRight) - Number(movingLeft)) * 360 * delta));
    state.spawn += delta;
    if (state.spawn > Math.max(0.38, 0.95 - state.elapsed * 0.012)) {
      state.spawn = 0;
      state.objects.push({ lane: Math.floor(Math.random() * 3), y: -75, speed: 240 + Math.min(180, state.elapsed * 4) });
    }
    state.objects = state.objects.filter((obstacle) => {
      obstacle.y += obstacle.speed * delta;
      const obstacleX = 350 + obstacle.lane * 130;
      if (Math.abs(obstacleX - state.playerX) < 43 && obstacle.y > 430 && obstacle.y < 520) {
        endGame("Столкновение! Попробуй ещё раз.");
        return false;
      }
      return obstacle.y < gameHeight + 60;
    });
    state.score = Math.floor(state.elapsed * 10);
  } else if (currentGameId === "moonhop") {
    if (gameKeys.has("Space") && state.grounded) {
      state.playerVY = -610;
      state.grounded = false;
    }
    const previousY = state.playerY;
    state.playerX += (Number(movingRight) - Number(movingLeft)) * 300 * delta;
    state.playerX = (state.playerX + gameWidth) % gameWidth;
    state.playerVY += 610 * delta;
    state.playerY += state.playerVY * delta;
    if (state.playerVY > 0) {
      for (const platform of state.platforms) {
        if (previousY + 28 <= platform.y && state.playerY + 28 >= platform.y &&
          state.playerX + 18 > platform.x && state.playerX - 18 < platform.x + platform.w) {
          state.playerY = platform.y - 28;
          state.playerVY = 0;
          state.grounded = true;
          break;
        }
      }
    }
    if (state.playerY < 220) {
      const shift = 220 - state.playerY;
      state.playerY = 220;
      state.grounded = false;
      state.score += Math.floor(shift);
      state.platforms.forEach((platform) => { platform.y += shift; });
      state.platforms = state.platforms.filter((platform) => platform.y < gameHeight + 35);
      while (state.platforms.length < 10) {
        const highest = Math.min(...state.platforms.map((platform) => platform.y));
        state.platforms.push({ x: 40 + Math.random() * 780, y: highest - (58 + Math.random() * 40), w: 90 + Math.random() * 45 });
      }
    }
    if (state.playerY > gameHeight + 30) endGame("Прыжок не удался. Попробуй снова!");
  } else if (currentGameId === "tacstrike") {
    const movingForward = gameKeys.has("KeyW") || gameKeys.has("ArrowUp");
    const movingBackward = gameKeys.has("KeyS") || gameKeys.has("ArrowDown");
    state.cameraX += (Number(movingRight) - Number(movingLeft)) * 175 * delta;
    state.cameraX = Math.max(-115, Math.min(115, state.cameraX));
    state.cameraY += (Number(movingBackward) - Number(movingForward)) * 110 * delta;
    state.cameraY = Math.max(-70, Math.min(70, state.cameraY));
    if (gameKeys.has("Space")) fireTacticalWeapon(state);
    if (state.fireCooldown > 0) state.fireCooldown -= delta;
    if (state.reloadTime > 0) {
      state.reloadTime -= delta;
      if (state.reloadTime <= 0) {
        const loaded = Math.min(12, state.reserveAmmo);
        state.ammo = loaded;
        state.reserveAmmo -= loaded;
      }
    }
    state.muzzleTime = Math.max(0, state.muzzleTime - delta);
    state.attackTime -= delta;
    if (state.attackTime <= 0 && state.targets.some((target) => target.alive)) {
      state.health = Math.max(0, state.health - 8);
      state.attackTime = 2.1 + Math.random() * 1.2;
      if (state.health <= 0) endGame(`Задание провалено. Ты остановил ${state.kills} из 4 ботов.`);
    }
    state.targets.forEach((target) => {
      if (!target.alive) return;
      target.phase += delta * 1.7;
      target.x += Math.sin(target.phase) * 24 * delta;
    });
    if (state.kills === state.targets.length) endGame("Задание выполнено! Район зачищен.");
  }
  if (currentGameId === "crystals" && state.matched.size === 16) {
    endGame(`Все пары собраны за ${state.attempts} ходов!`);
  }
}

function drawGame() {
  const ctx = gameContext;
  const state = gameState;
  if (!state) return;
  const gradients = {
    starcatch: ["#102132", "#253358"], neon: ["#15122e", "#32194b"],
    moonhop: ["#17223a", "#3d4167"], crystals: ["#18253a", "#34294e"],
    tacstrike: ["#263c3c", "#1b2425"]
  };
  const background = ctx.createLinearGradient(0, 0, gameWidth, gameHeight);
  background.addColorStop(0, gradients[currentGameId][0]);
  background.addColorStop(1, gradients[currentGameId][1]);
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
  for (let i = 0; i < 65; i += 1) {
    const x = (i * 137 + 31) % gameWidth;
    const y = (i * 89 + 19 + state.elapsed * (4 + i % 9)) % gameHeight;
    ctx.globalAlpha = 0.3 + (i % 5) * 0.12;
    ctx.fillStyle = "#e7f4ff";
    ctx.beginPath(); ctx.arc(x, y, i % 9 === 0 ? 2 : 1, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
  ctx.textAlign = "center";

  if (currentGameId === "starcatch") {
    drawShip(ctx, state.playerX, 490, "#aef27b");
    state.objects.forEach((item) => {
      ctx.fillStyle = item.bad ? "#ff796f" : "#ffe88b";
      ctx.shadowColor = ctx.fillStyle; ctx.shadowBlur = 17;
      ctx.beginPath(); ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffffff"; ctx.font = "12px sans-serif"; ctx.fillText(item.bad ? "✹" : "✦", item.x, item.y + 4);
    });
    drawHud(ctx, `Звёзды: ${state.score}`, `Жизни: ${"♥".repeat(Math.max(0, state.lives))}`);
  } else if (currentGameId === "neon") {
    ctx.fillStyle = "#151728"; ctx.fillRect(260, 0, 440, gameHeight);
    ctx.strokeStyle = "#4d3d83"; ctx.lineWidth = 4; ctx.setLineDash([26, 22]); ctx.lineDashOffset = -state.elapsed * 120;
    ctx.beginPath(); ctx.moveTo(406, 0); ctx.lineTo(406, gameHeight); ctx.moveTo(553, 0); ctx.lineTo(553, gameHeight); ctx.stroke(); ctx.setLineDash([]);
    roundedRect(ctx, state.playerX - 26, 455, 52, 76, 13, "#d5f36a");
    roundedRect(ctx, state.playerX - 17, 465, 34, 25, 8, "#a9e7e9");
    state.objects.forEach((obstacle) => roundedRect(ctx, 350 + obstacle.lane * 130 - 25, obstacle.y, 50, 70, 12, "#f2759c"));
    drawHud(ctx, `Дистанция: ${state.score}`, "Уклоняйся от препятствий");
  } else if (currentGameId === "moonhop") {
    state.platforms.forEach((platform) => roundedRect(ctx, platform.x, platform.y, platform.w, 13, 6, "#d8e89b"));
    drawShip(ctx, state.playerX, state.playerY, "#d7adff");
    drawHud(ctx, `Высота: ${state.score}`, "Прыгай по платформам");
  } else if (currentGameId === "crystals") {
    const cardW = 136, cardH = 102, gap = 12, startX = 184, startY = 54;
    state.cards.forEach((icon, index) => {
      const column = index % 4, row = Math.floor(index / 4);
      const x = startX + column * (cardW + gap), y = startY + row * (cardH + gap);
      const revealed = state.matched.has(index) || state.opened.includes(index);
      roundedRect(ctx, x, y, cardW, cardH, 13, revealed ? "#b7dd6f" : "#343d63");
      ctx.fillStyle = revealed ? "#182533" : "#bcc9ef";
      ctx.font = revealed ? "42px sans-serif" : "36px sans-serif";
      ctx.fillText(revealed ? icon : "✧", x + cardW / 2, y + cardH / 2 + 13);
    });
    drawHud(ctx, `Ходы: ${state.attempts}`, `Найдено пар: ${state.matched.size / 2} / 8`);
  } else if (currentGameId === "tacstrike") {
    drawTacticalScene(ctx, state);
  }
  if (state.ended) {
    ctx.fillStyle = "#080b16bb"; ctx.fillRect(0, 0, gameWidth, gameHeight);
    ctx.fillStyle = "#f4f1e9"; ctx.font = "700 38px Manrope, sans-serif"; ctx.fillText("Игра окончена", gameWidth / 2, 235);
    ctx.fillStyle = "#d5f36a"; ctx.font = "20px 'DM Sans', sans-serif"; ctx.fillText(state.endMessage || `Счёт: ${state.score}`, gameWidth / 2, 280);
    ctx.fillStyle = "#c4c5d1"; ctx.font = "15px 'DM Sans', sans-serif"; ctx.fillText("Нажми «Начать заново», чтобы сыграть ещё раз", gameWidth / 2, 325);
  }
}

function roundedRect(ctx, x, y, width, height, radius, fill) {
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
  ctx.fill();
}

function fireTacticalWeapon(state) {
  if (state.fireCooldown > 0 || state.reloadTime > 0 || state.ended) return;
  if (state.ammo <= 0) {
    startTacticalReload(state);
    return;
  }
  state.ammo -= 1;
  state.fireCooldown = 0.22;
  state.muzzleTime = 0.08;
  const target = state.targets.find((enemy) => {
    if (!enemy.alive) return false;
    const enemyX = enemy.x - state.cameraX;
    const targetY = enemy.y + state.cameraY;
    const bodyTop = targetY - 66;
    const bodyBottom = targetY + 28;
    return Math.abs(state.crosshairX - enemyX) < 40 &&
      state.crosshairY >= bodyTop && state.crosshairY <= bodyBottom;
  });
  if (target) {
    target.alive = false;
    state.kills += 1;
  }
}

function startTacticalReload(state) {
  if (state.reloadTime > 0 || state.ammo === 12 || state.reserveAmmo === 0) return;
  state.reloadTime = 1.1;
}

function drawTacticalScene(ctx, state) {
  const sky = ctx.createLinearGradient(0, 0, 0, 365);
  sky.addColorStop(0, "#a5b2a1");
  sky.addColorStop(1, "#536d65");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, gameWidth, 365);

  ctx.fillStyle = "#d0c7ad";
  ctx.fillRect(0, 244, gameWidth, 110);
  for (let x = 35; x < gameWidth; x += 112) {
    const shift = Math.sin(state.elapsed * 0.22 + x) * 3;
    ctx.fillStyle = x % 2 ? "#65716b" : "#786f5c";
    ctx.fillRect(x - state.cameraX * 0.22 + shift, 145, 72, 128);
    ctx.fillStyle = "#9a967f";
    ctx.fillRect(x + 10 - state.cameraX * 0.22 + shift, 163, 15, 23);
    ctx.fillRect(x + 43 - state.cameraX * 0.22 + shift, 163, 15, 23);
    ctx.fillStyle = "#3d514e";
    ctx.fillRect(x + 10 - state.cameraX * 0.22 + shift, 205, 50, 42);
  }

  const ground = ctx.createLinearGradient(0, 275, 0, gameHeight);
  ground.addColorStop(0, "#8d8a72");
  ground.addColorStop(1, "#373d37");
  ctx.fillStyle = ground;
  ctx.beginPath();
  ctx.moveTo(0, 287);
  ctx.lineTo(gameWidth, 287);
  ctx.lineTo(gameWidth, gameHeight);
  ctx.lineTo(0, gameHeight);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "#c3b38b";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 288);
  ctx.lineTo(gameWidth, 288);
  ctx.stroke();

  state.targets.forEach((target) => {
    if (!target.alive) return;
    const x = target.x - state.cameraX;
    const y = target.y + state.cameraY;
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = "#232a28";
    ctx.beginPath();
    ctx.ellipse(0, 2, 21, 11, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#394944";
    ctx.fillRect(-13, -42, 26, 48);
    ctx.fillStyle = "#b6a98e";
    ctx.beginPath();
    ctx.arc(0, -51, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#202a28";
    ctx.fillRect(-12, -56, 24, 7);
    ctx.fillRect(-9, -67, 18, 12);
    ctx.fillStyle = "#252d2b";
    ctx.fillRect(-20, -37, 8, 28);
    ctx.fillRect(12, -37, 8, 28);
    ctx.fillStyle = "#141b1b";
    ctx.fillRect(-10, 6, 8, 23);
    ctx.fillRect(2, 6, 8, 23);
    ctx.restore();
  });

  ctx.fillStyle = "#202724";
  ctx.beginPath();
  ctx.moveTo(372, 560);
  ctx.lineTo(421, 460);
  ctx.lineTo(541, 460);
  ctx.lineTo(590, 560);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#48534c";
  ctx.fillRect(438, 468, 84, 22);
  ctx.fillStyle = "#8a9b85";
  ctx.fillRect(456, 472, 48, 4);

  if (state.muzzleTime > 0) {
    ctx.fillStyle = "#ffd987";
    ctx.beginPath();
    ctx.moveTo(480, 472);
    ctx.lineTo(464, 434);
    ctx.lineTo(480, 443);
    ctx.lineTo(496, 434);
    ctx.closePath();
    ctx.fill();
  }

  ctx.strokeStyle = "#e9f4e5";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(state.crosshairX - 13, state.crosshairY);
  ctx.lineTo(state.crosshairX - 4, state.crosshairY);
  ctx.moveTo(state.crosshairX + 4, state.crosshairY);
  ctx.lineTo(state.crosshairX + 13, state.crosshairY);
  ctx.moveTo(state.crosshairX, state.crosshairY - 13);
  ctx.lineTo(state.crosshairX, state.crosshairY - 4);
  ctx.moveTo(state.crosshairX, state.crosshairY + 4);
  ctx.lineTo(state.crosshairX, state.crosshairY + 13);
  ctx.stroke();
  ctx.fillStyle = "#e9f4e5";
  ctx.beginPath();
  ctx.arc(state.crosshairX, state.crosshairY, 1.5, 0, Math.PI * 2);
  ctx.fill();

  roundedRect(ctx, 22, 48, 170, 47, 7, "#101716bb");
  ctx.fillStyle = "#f1f0e6";
  ctx.textAlign = "left";
  ctx.font = "600 15px 'DM Sans', sans-serif";
  ctx.fillText("ЗАДАНИЕ: ПРОРЫВ", 34, 68);
  ctx.fillStyle = "#c7d0c0";
  ctx.font = "12px 'DM Sans', sans-serif";
  ctx.fillText(`Здоровье ${state.health}% · Боты ${state.kills}/4`, 34, 86);
  ctx.textAlign = "right";
  ctx.fillStyle = "#f1f0e6";
  ctx.font = "600 15px 'DM Sans', sans-serif";
  ctx.fillText(state.reloadTime > 0 ? "ПЕРЕЗАРЯДКА…" : `${state.ammo} / ${state.reserveAmmo}`, gameWidth - 25, 67);
  ctx.textAlign = "center";
  if (state.reloadTime > 0) {
    ctx.fillStyle = "#f2e0a8";
    ctx.font = "600 13px 'DM Sans', sans-serif";
    ctx.fillText("Перезарядка", gameWidth / 2, 38);
  }
}

function drawShip(ctx, x, y, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = color;
  ctx.shadowColor = color; ctx.shadowBlur = 18;
  ctx.beginPath(); ctx.moveTo(0, -27); ctx.lineTo(25, 22); ctx.lineTo(0, 13); ctx.lineTo(-25, 22); ctx.closePath(); ctx.fill();
  ctx.restore();
}

function drawHud(ctx, left, right) {
  ctx.textAlign = "left"; ctx.font = "600 17px 'DM Sans', sans-serif";
  ctx.fillStyle = "#f4f1e9"; ctx.fillText(left, 24, 32);
  ctx.textAlign = "right"; ctx.fillStyle = "#c7d3db"; ctx.fillText(right, gameWidth - 24, 32);
  ctx.textAlign = "center";
}

function runGameFrame(now) {
  if (!document.querySelector("#game-dialog").open) return;
  const delta = Math.min((now - gameLastFrame) / 1000, 0.04);
  gameLastFrame = now;
  if (currentGameId === "crystals" && gameState.lockTime > 0) {
    gameState.lockTime -= delta;
    if (gameState.lockTime <= 0) {
      gameState.opened = [];
      if (gameState.matched.size === 16) endGame(`Все пары собраны за ${gameState.attempts} ходов!`);
    }
  } else {
    updateGame(delta);
  }
  drawGame();
  document.querySelector("#game-score").textContent = currentGameId === "crystals"
    ? `Ходы: ${gameState.attempts} · Пары: ${gameState.matched.size / 2} / 8`
    : currentGameId === "tacstrike"
      ? `Боты: ${gameState.kills} / 4 · ${gameState.ammo} / ${gameState.reserveAmmo}`
    : `Счёт: ${gameState.score}`;
  gameFrameId = requestAnimationFrame(runGameFrame);
}

function canvasPoint(event) {
  const bounds = gameCanvas.getBoundingClientRect();
  return { x: (event.clientX - bounds.left) * gameWidth / bounds.width, y: (event.clientY - bounds.top) * gameHeight / bounds.height };
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-play-game]");
  if (button) startGame(button.dataset.playGame);
});

document.querySelector("#close-game").addEventListener("click", () => document.querySelector("#game-dialog").close());
document.querySelector("#restart-game").addEventListener("click", () => startGame(currentGameId));
document.querySelector("#game-dialog").addEventListener("close", () => {
  cancelAnimationFrame(gameFrameId);
  gameKeys.clear();
});
document.addEventListener("keydown", (event) => {
  if (!document.querySelector("#game-dialog").open) return;
  if (currentGameId === "tacstrike" && event.code === "KeyR" && gameState) {
    event.preventDefault();
    startTacticalReload(gameState);
  }
  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(event.key)) event.preventDefault();
  if (event.key === "Escape") document.querySelector("#game-dialog").close();
  gameKeys.add(event.code);
});
document.addEventListener("keyup", (event) => gameKeys.delete(event.code));
gameCanvas.addEventListener("pointerdown", (event) => {
  const point = canvasPoint(event);
  if (currentGameId === "tacstrike" && gameState && !gameState.ended) {
    gameState.crosshairX = point.x;
    gameState.crosshairY = point.y;
    fireTacticalWeapon(gameState);
    return;
  }
  if (currentGameId !== "crystals" && gameState && !gameState.ended) {
    gameState.playerX = Math.max(35, Math.min(gameWidth - 35, point.x));
    if (currentGameId === "moonhop" && gameState.grounded) {
      gameState.playerVY = -610;
      gameState.grounded = false;
    }
    return;
  }
  if (currentGameId !== "crystals" || !gameState || gameState.ended || gameState.lockTime > 0 || gameState.opened.length >= 2) return;
  const column = Math.floor((point.x - 184) / 148);
  const row = Math.floor((point.y - 54) / 114);
  if (column < 0 || column > 3 || row < 0 || row > 3) return;
  const index = row * 4 + column;
  if (gameState.matched.has(index) || gameState.opened.includes(index)) return;
  gameState.opened.push(index);
  if (gameState.opened.length === 2) {
    gameState.attempts += 1;
    if (gameState.cards[gameState.opened[0]] === gameState.cards[gameState.opened[1]]) {
      gameState.opened.forEach((cardIndex) => gameState.matched.add(cardIndex));
      gameState.opened = [];
    } else {
      gameState.lockTime = 0.8;
    }
  }
});
gameCanvas.addEventListener("pointermove", (event) => {
  if (!gameState || gameState.ended) return;
  if (currentGameId === "tacstrike") {
    const point = canvasPoint(event);
    gameState.crosshairX = point.x;
    gameState.crosshairY = point.y;
    return;
  }
  if (currentGameId === "crystals") return;
  if (event.pointerType === "touch" || event.buttons === 1) {
    const point = canvasPoint(event);
    gameState.playerX = Math.max(35, Math.min(gameWidth - 35, point.x));
  }
});

document.querySelectorAll("[data-page]").forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  navigate(link.dataset.page);
  history.replaceState(null, "", `#${link.dataset.page}`);
}));

document.querySelectorAll('a[href="#home"], a[href="#catalog"], a[href="#rankings"], a[href="#developers"]').forEach((link) => {
  if (link.dataset.page) return;
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const page = link.getAttribute("href").slice(1);
    navigate(page);
    history.replaceState(null, "", `#${page}`);
  });
});

document.querySelector("#global-search").addEventListener("input", (event) => {
  searchQuery = event.target.value.trim();
  renderGames();
  if (searchQuery && !document.querySelector("#page-catalog").classList.contains("active")) {
    navigate("catalog");
    history.replaceState(null, "", "#catalog");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.querySelector("#global-search").focus();
  }
  if (event.key === "Escape" && document.querySelector("#auth-dialog").open) {
    document.querySelector("#auth-dialog").close();
  }
});

document.querySelectorAll("[data-open-auth]").forEach((button) => button.addEventListener("click", async () => {
  if (button.dataset.logout) {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) {
        showToast("Не удалось выйти из аккаунта.");
        console.error("Ошибка выхода:", error.message);
        return;
      }
      currentUser = null;
      updateAccountButton();
      showToast("Вы вышли из аккаунта.");
    } catch (error) {
      console.error("Ошибка выхода:", error.message);
      showToast("Не удалось выйти из аккаунта.");
    }
    return;
  }
  updateAuthMode("register");
  document.querySelector("#auth-error").textContent = supabaseClient
    ? ""
    : "Настоящая регистрация пока не настроена. Владелец сайта должен подключить backend.";
  document.querySelector("#auth-dialog").showModal();
}));

document.querySelectorAll("[data-auth-mode]").forEach((button) => button.addEventListener("click", () => updateAuthMode(button.dataset.authMode)));

document.querySelector("#auth-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!supabaseClient) {
    document.querySelector("#auth-error").textContent = "Регистрация пока недоступна: backend ещё не настроен.";
    return;
  }
  const formData = new FormData(event.currentTarget);
  const email = String(formData.get("email")).trim().toLowerCase();
  const error = document.querySelector("#auth-error");
  const password = String(formData.get("password"));
  const submitButton = document.querySelector(".auth-submit");
  submitButton.disabled = true;
  error.textContent = "";
  try {
    if (authMode === "register") {
      const { data, error: authError } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: String(formData.get("name")).trim(),
            tracking_consent: formData.get("trackingConsent") === "on",
            consent_version: "2026-10-14",
            ...(formData.get("trackingConsent") === "on"
              ? { referral_code: String(formData.get("referralCode")).trim().toUpperCase() }
              : {})
          }
        }
      });
      if (authError) throw authError;
      if (data.session) currentUser = data.user;
      document.querySelector("#auth-dialog").close();
      event.currentTarget.reset();
      updateAccountButton();
      showToast(data.session ? "Аккаунт создан." : "Проверь почту, чтобы подтвердить регистрацию.");
      return;
    }

    const { data, error: authError } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (authError) throw authError;
    currentUser = data.user;
    await recordUserEvent("login");
    document.querySelector("#auth-dialog").close();
    event.currentTarget.reset();
    updateAccountButton();
    showToast(`С возвращением, ${currentUser.user_metadata?.name || currentUser.email}!`);
  } catch (authError) {
    error.textContent = authError.message || "Не удалось выполнить запрос. Попробуй ещё раз.";
    console.error("Ошибка аккаунта:", authError.message);
  } finally {
    submitButton.disabled = false;
  }
});

document.querySelector("#revoke-consent").addEventListener("click", async () => {
  if (!supabaseClient || !currentUser) return;
  try {
    const { error } = await supabaseClient.rpc("revoke_tracking_consent");
    if (error) throw error;
  } catch (error) {
    console.error("Не удалось отозвать согласие:", error.message);
    document.querySelector("#auth-error").textContent = "Не удалось сохранить отзыв согласия. Попробуй ещё раз.";
    return;
  }
  document.querySelector("#auth-error").textContent = "Согласие отозвано. Новые входы и запуски игр не будут записываться.";
});

document.querySelector("#grant-consent").addEventListener("click", async () => {
  if (!supabaseClient || !currentUser) return;
  try {
    const { error } = await supabaseClient.rpc("grant_tracking_consent", { p_consent_version: "2026-10-14" });
    if (error) throw error;
  } catch (error) {
    console.error("Не удалось сохранить согласие:", error.message);
    document.querySelector("#auth-error").textContent = "Не удалось сохранить согласие. Попробуй ещё раз.";
    return;
  }
  document.querySelector("#auth-error").textContent = "Согласие сохранено. Новые события аккаунта будут записываться.";
});

document.querySelectorAll(".ranking-tab").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".ranking-tab").forEach((tab) => {
    const selected = tab === button;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
  });
  renderRankings(button.dataset.ranking);
}));

renderFilters();
renderGames();
renderRankings();
if (supabaseClient) {
  supabaseClient.auth.getSession().then(({ data, error }) => {
    if (error) {
      console.error("Не удалось восстановить аккаунт:", error.message);
      return;
    }
    currentUser = data.session?.user || null;
    updateAccountButton();
  }).catch((error) => {
    console.error("Не удалось проверить сеанс:", error.message);
    showToast("Не удалось проверить сеанс аккаунта.");
  });
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    currentUser = session?.user || null;
    updateAccountButton();
  });
} else {
  document.querySelector("#account-button").disabled = true;
  document.querySelectorAll("[data-open-auth]").forEach((button) => {
    if (button.id !== "account-button") button.disabled = true;
  });
  document.querySelector(".sidebar-note").textContent = "Вход и регистрация временно недоступны: backend ещё не настроен.";
}
navigate(location.hash.slice(1) || "home");
