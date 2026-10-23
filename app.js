const games = [
  { id: "starcatch", title: "Звёздный ловец", genre: "Аркада", studio: "Kagan Games", initials: "01", art: "starcatch", tag: "ЛОВИ ЗВЁЗДЫ", description: "Лови падающие звёзды и уворачивайся от метеоров.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "neon", title: "Неоновые гонки", genre: "Гонки", studio: "Kagan Games", initials: "02", art: "neon", tag: "НЕ СТОЛКНИСЬ", description: "Мчись по неоновой трассе и маневрируй между препятствиями.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "moonhop", title: "Лунный прыжок", genre: "Платформер", studio: "Kagan Games", initials: "03", art: "moonhop", tag: "ВЫШЕ К ЗВЁЗДАМ", description: "Прыгай по платформам всё выше и не падай в бездну.", controls: "← → и Пробел — прыгать; на телефоне коснись поля" },
  { id: "crystals", title: "Кристальная память", genre: "Головоломка", studio: "Kagan Games", initials: "04", art: "crystals", tag: "НАЙДИ ПАРЫ", description: "Открывай кристаллы и собирай одинаковые пары.", controls: "Нажимай на кристаллы мышью или пальцем" },
  { id: "tacstrike", title: "Тактический прорыв", genre: "Тактический шутер", studio: "Kagan Games", initials: "05", art: "tactical", tag: "КАМПАНИЯ · 10 УРОВНЕЙ", description: "Пройди десять заданий на разных картах: отбивайся от стреляющих ботов и вызывай авиаудар.", controls: "Мышь — цель и огонь · WASD — движение · R — перезарядка · E — авиаудар · на телефоне веди и касайся поля" },
  { id: "bubblepop", title: "Пузырьковый переполох", genre: "Аркада", studio: "Kagan Games", initials: "06", art: "bubble", tag: "ЛОПНИ ВСЕ", description: "Лопай пузырьки, пока они не улетели, и набери 12 попаданий.", controls: "Нажимай на пузырьки мышью или пальцем" },
  { id: "garden", title: "Садовая эстафета", genre: "Аркада", studio: "Kagan Games", initials: "07", art: "garden", tag: "СОБЕРИ УРОЖАЙ", description: "Лови спелые яблоки и уворачивайся от колючек.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "skycourier", title: "Небесный курьер", genre: "Приключение", studio: "Kagan Games", initials: "08", art: "sky", tag: "ДОСТАВЬ 8", description: "Летай между облаками, собирай восемь посылок и обходи дроны.", controls: "WASD / стрелки или веди пальцем по полю" },
  { id: "pulse", title: "Ритм-мастер", genre: "Ритм", studio: "Kagan Games", initials: "09", art: "pulse", tag: "ПОПАДИ В РИТМ", description: "Останови бегущий импульс в целевой зоне десять раз.", controls: "Пробел или касание — остановить импульс" },
  { id: "maze", title: "Лабиринт светлячка", genre: "Головоломка", studio: "Kagan Games", initials: "10", art: "maze", tag: "НАЙДИ ВЫХОД", description: "Проведи светлячка через лабиринт к светящимся воротам.", controls: "WASD / стрелки или касайся соседних клеток" },
  { id: "tinytower", title: "Башня на ветру", genre: "Аркада", studio: "Kagan Games", initials: "11", art: "tower", tag: "ПОСТРОЙ 10 ЭТАЖЕЙ", description: "Точно ставь движущиеся блоки и построй высокую башню.", controls: "Пробел или касание — поставить блок" },
  { id: "coral", title: "Коралловый ныряльщик", genre: "Приключение", studio: "Kagan Games", initials: "12", art: "coral", tag: "7 ЖЕМЧУЖИН", description: "Ныряй за семью жемчужинами, уворачиваясь от морских мин.", controls: "WASD / стрелки или веди пальцем по полю" },
  { id: "meteorguard", title: "Метеорный дозор", genre: "Экшен", studio: "Kagan Games", initials: "13", art: "meteor", tag: "ЗАЩИТИ ГОРОД", description: "Разбивай метеоры до того, как они достигнут земли.", controls: "Нажимай на метеоры мышью или пальцем" },
  { id: "lantern", title: "Тайна фонарей", genre: "Головоломка", studio: "Kagan Games", initials: "14", art: "lantern", tag: "ЗАПОМНИ СВЕТ", description: "Повторяй последовательности огоньков и пройди пять раундов.", controls: "Нажимай на огоньки мышью или пальцем" },
  { id: "pixelchef", title: "Пиксельный повар", genre: "Аркада", studio: "Kagan Games", initials: "15", art: "chef", tag: "ЗАКРОЙ ЗАКАЗ", description: "Лови ингредиенты в правильном порядке и приготовь три блюда.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "crystalbreak", title: "Кристальный отбой", genre: "Аркада", studio: "Kagan Games", initials: "16", art: "break", tag: "РАЗБЕЙ 20 КРИСТАЛЛОВ", description: "Отбивай шар платформой и разбей все кристальные блоки.", controls: "← → / A-D или веди мышью; на телефоне веди пальцем" },
  { id: "starcourier", title: "Звёздный курьер", genre: "Экшен", studio: "Kagan Games", initials: "17", art: "courier", tag: "ПРОЛОМИСЬ К ЦЕЛИ", description: "Пройди сквозь строй дронов и сбей десять перехватчиков.", controls: "← → / A-D — движение · удерживай Пробел для стрельбы" },
  { id: "snowslalom", title: "Снежный слалом", genre: "Гонки", studio: "Kagan Games", initials: "18", art: "snow", tag: "ФИНИШ ЗА 32 СЕКУНДЫ", description: "Объезжай снежные заносы и доберись до финиша.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "runemath", title: "Мастер рун", genre: "Головоломка", studio: "Kagan Games", initials: "19", art: "runes", tag: "РЕШИ 8 ПРИМЕРОВ", description: "Решай примеры и выбери верную руну.", controls: "Нажми один из четырёх ответов мышью или пальцем" },
  { id: "lighthouse", title: "Прыжок маяка", genre: "Платформер", studio: "Kagan Games", initials: "20", art: "lighthouse", tag: "ФИНИШ ЗА 32 СЕКУНДЫ", description: "Перепрыгивай камни и добеги до безопасного маяка за 32 секунды.", controls: "Пробел или касание поля — прыгать" },
  { id: "starlight", title: "Светлячок-рейс", genre: "Аркада", studio: "Kagan Games", initials: "21", art: "starcatch", tag: "СВЕТИТЬСЯ В ПУТИ", description: "Лови светлячков и уворачивайся от тёмных всплесков.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "honeytrail", title: "Медовый маршрут", genre: "Приключение", studio: "Kagan Games", initials: "22", art: "garden", tag: "МЕД И УЛЫБКИ", description: "Собирай сладкие капли и избегай жёлтых шипов.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "meadowrace", title: "Лесная гонка", genre: "Гонки", studio: "Kagan Games", initials: "23", art: "neon", tag: "ТОРОПИСЬ В ПУТИ", description: "Маневрируй по лесной трассе и не попадай в кусты.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "icebreak", title: "Льдинный штурм", genre: "Аркада", studio: "Kagan Games", initials: "24", art: "snow", tag: "СНЯТИЕ ЛЬДА", description: "Разбивай ледяные блоки и собирай кристаллы на бегу.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "dustrunner", title: "Пыльный маршрут", genre: "Экшен", studio: "Kagan Games", initials: "25", art: "meteor", tag: "ПЫЛЕВЫЕ ВСПЛЕСКИ", description: "Уклоняйся от пыльных всплесков и держи темп.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "skyforge", title: "Небесная кузня", genre: "Аркада", studio: "Kagan Games", initials: "26", art: "sky", tag: "ЛЕТИ ВЫШЕ", description: "Лови звёздные детали и обгоняй небесные помехи.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "radarjump", title: "Прыжок по радарам", genre: "Платформер", studio: "Kagan Games", initials: "27", art: "lighthouse", tag: "НЕ ОСТАНОВИСЬ", description: "Прыгай между радарами и не потеряй темп.", controls: "Пробел или касание поля — прыгать" },
  { id: "mosscape", title: "Моховой путь", genre: "Приключение", studio: "Kagan Games", initials: "28", art: "garden", tag: "ЛЕСНОЙ КЛЮЧ", description: "Собирай ароматные капли и проходи по зелёным тропам.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "glowdrift", title: "Светящийся дрейф", genre: "Гонки", studio: "Kagan Games", initials: "29", art: "pulse", tag: "ДРЕЙФ ЯРКИХ МИГАЛОК", description: "Трогай линии и не сбивайся с ритма в ночи.", controls: "← → / A-D или веди пальцем по полю" },
  { id: "copperloop", title: "Медный круг", genre: "Экшен", studio: "Kagan Games", initials: "30", art: "break", tag: "КРУГ В ПЛОСКОСТИ", description: "Огибай медные кольца и сохраняй спокойствие на старте.", controls: "← → / A-D или веди пальцем по полю" },
  ...window.KaganExtraGames.games.map((game, index) => ({ ...game, studio: "Kagan Games", initials: String(index + 31).padStart(2, "0") }))
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
const bonusArcadeGames = ["starlight", "honeytrail", "meadowrace", "icebreak", "dustrunner", "skyforge", "radarjump", "mosscape", "glowdrift", "copperloop"];
const rewardGameIds = new Set([
  "crystals", "tacstrike", "bubblepop", "garden", "skycourier", "pulse", "maze",
  "tinytower", "coral", "meteorguard", "lantern", "pixelchef", "crystalbreak",
  "starcourier", "snowslalom", "runemath", "lighthouse",
  ...window.KaganExtraGames.games.map((game) => game.id)
]);
const gameWinReward = 10;
const tacticalMaps = [
  { id: "canyon", name: "Каньон", sky: ["#b8784e", "#e7bd83"], ground: ["#a4764d", "#574335"], accent: "#d6aa6d" },
  { id: "snowbase", name: "Снежная база", sky: ["#8aaec0", "#d5e3e5"], ground: ["#b5c9c7", "#536a72"], accent: "#d4edf0" },
  { id: "harbor", name: "Порт", sky: ["#647f87", "#c0bba5"], ground: ["#777b70", "#3e4947"], accent: "#e0a65e" }
];
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
const walletStorageKey = "kagan-games-wallet-v1";
const settingsStorageKey = "kagan-games-settings-v1";
const profileStatsStorageKey = "kagan-games-profile-stats-v1";
const cosmeticItems = [
  { id: "aurora", name: "Северное сияние", currency: "kurut", cost: 60, color: "#56f0d0", description: "Бирюзовые акценты всего сайта" },
  { id: "sunrise", name: "Золотой рассвет", currency: "kurut", cost: 50, color: "#ffca70", description: "Тёплые золотые акценты" },
  { id: "ocean", name: "Глубокий океан", currency: "kurut", cost: 45, color: "#6caeff", description: "Холодные синие акценты" },
  { id: "violet", name: "Лиловый космос", currency: "kurut", cost: 45, color: "#c39bff", description: "Мягкие фиолетовые акценты" },
  { id: "forest", name: "Лесной мох", currency: "kurut", cost: 35, color: "#a6d77c", description: "Спокойные зелёные акценты" }
];

function readLocalJson(key, fallback, label) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error(`Не удалось загрузить ${label}:`, error.message);
    showToast(`Не удалось загрузить ${label} из этого браузера.`);
    return fallback;
  }
}

function writeLocalJson(key, value, label) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Не удалось сохранить ${label}:`, error.message);
    showToast(`Не удалось сохранить ${label}. Проверь настройки хранилища браузера.`);
    return false;
  }
}

const walletData = readLocalJson(walletStorageKey, {}, "кошелёк");
const savedWallet = walletData && typeof walletData === "object" && !Array.isArray(walletData) ? walletData : {};
const gameWallet = {
  kurut: Number.isSafeInteger(savedWallet.kurut) && savedWallet.kurut >= 0 ? savedWallet.kurut : 0,
  boorsok: Number.isSafeInteger(savedWallet.boorsok) && savedWallet.boorsok >= 0 ? savedWallet.boorsok : 0,
  unlocked: Array.isArray(savedWallet.unlocked) ? savedWallet.unlocked.filter((id) => cosmeticItems.some((item) => item.id === id)) : [],
  equipped: cosmeticItems.some((item) => item.id === savedWallet.equipped) && Array.isArray(savedWallet.unlocked) && savedWallet.unlocked.includes(savedWallet.equipped)
    ? savedWallet.equipped
    : "default"
};
const settingsData = readLocalJson(settingsStorageKey, {}, "настройки игр");
const savedSettings = settingsData && typeof settingsData === "object" && !Array.isArray(settingsData) ? settingsData : {};
const avatarOptions = ["🦊", "🐼", "🐸", "🐯", "🐙", "🐹", "🦄", "🤖"];
const gamePreferences = {
  viewMode: savedSettings.viewMode === "first" ? "first" : "third",
  avatar: avatarOptions.includes(savedSettings.avatar) ? savedSettings.avatar : "🦊"
};
const profileStatsData = readLocalJson(profileStatsStorageKey, {}, "статистику профиля");
const savedProfileStats = profileStatsData && typeof profileStatsData === "object" && !Array.isArray(profileStatsData) ? profileStatsData : {};
const profileStats = {
  starts: Number.isSafeInteger(savedProfileStats.starts) && savedProfileStats.starts >= 0 ? savedProfileStats.starts : 0,
  wins: Number.isSafeInteger(savedProfileStats.wins) && savedProfileStats.wins >= 0 ? savedProfileStats.wins : 0,
  kurutEarned: Number.isSafeInteger(savedProfileStats.kurutEarned) && savedProfileStats.kurutEarned >= 0
    ? savedProfileStats.kurutEarned
    : (Number.isSafeInteger(savedProfileStats.wins) && savedProfileStats.wins >= 0 ? savedProfileStats.wins * gameWinReward : 0),
  games: Array.isArray(savedProfileStats.games) ? [...new Set(savedProfileStats.games.filter((id) => games.some((game) => game.id === id)))] : [],
  recentGames: Array.isArray(savedProfileStats.recentGames) ? [...new Set(savedProfileStats.recentGames.filter((id) => games.some((game) => game.id === id)))] : [],
  favorites: Array.isArray(savedProfileStats.favorites) ? [...new Set(savedProfileStats.favorites.filter((id) => games.some((game) => game.id === id)))] : []
};

function saveWallet() {
  return writeLocalJson(walletStorageKey, gameWallet, "кошелёк");
}

function saveGamePreferences() {
  return writeLocalJson(settingsStorageKey, gamePreferences, "настройки игр");
}

function saveProfileStats() {
  return writeLocalJson(profileStatsStorageKey, profileStats, "статистику профиля");
}

function renderProfile() {
  const displayName = currentUser?.user_metadata?.name?.trim() || "";
  const email = currentUser?.email || "";
  document.querySelector("#profile-status").textContent = currentUser ? "АККАУНТ KAGAN GAMES" : "ГОСТЬ";
  document.querySelector("#profile-account-title").textContent = currentUser ? displayName || "Игрок Kagan Games" : "Играй как гость";
  document.querySelector("#profile-email").textContent = currentUser
    ? email
    : "Войди в аккаунт, чтобы увидеть имя и почту. Игры доступны и без входа.";
  document.querySelector("#profile-avatar").textContent = gamePreferences.avatar;
  document.querySelector("#profile-account-action").textContent = currentUser ? "Выйти из аккаунта" : "Войти или создать аккаунт";
  document.querySelector("#profile-account-action").dataset.logout = currentUser ? "true" : "";
  if (!currentUser) delete document.querySelector("#profile-account-action").dataset.logout;
  document.querySelector("#profile-starts").textContent = String(profileStats.starts);
  document.querySelector("#profile-games").textContent = String(profileStats.games.length);
  document.querySelector("#profile-wins").textContent = String(profileStats.wins);
  document.querySelector("#profile-kurut").textContent = String(gameWallet.kurut);
  document.querySelector("#profile-boorsok").textContent = String(gameWallet.boorsok);
  renderAvatarOptions();
  renderPlayerLibrary();
  renderAchievements();
}

function renderAvatarOptions() {
  const options = document.querySelector("#avatar-options");
  if (!options) return;
  options.innerHTML = avatarOptions.map((avatar) => `<button class="avatar-option${gamePreferences.avatar === avatar ? " active" : ""}" type="button" data-avatar="${avatar}" aria-label="Выбрать аватар ${avatar}" aria-pressed="${gamePreferences.avatar === avatar}">${avatar}</button>`).join("");
}

function renderPlayerLibrary() {
  const renderList = (selector, ids, emptyMessage) => {
    const container = document.querySelector(selector);
    if (!container) return;
    const selectedGames = ids.map((id) => games.find((game) => game.id === id)).filter(Boolean).slice(0, 4);
    container.innerHTML = selectedGames.length
      ? selectedGames.map((game) => `<button class="library-game" type="button" data-play-game="${game.id}"><span class="library-game-icon">${gamePreferences.avatar}</span><span><b>${game.title}</b><small>${game.genre}</small></span><span aria-hidden="true">▶</span></button>`).join("")
      : `<p class="library-empty">${emptyMessage}</p>`;
  };
  renderList("#favorite-games", profileStats.favorites, "Отмечай игры звёздочкой, чтобы собрать свою подборку.");
  renderList("#recent-games", profileStats.recentGames, "Запусти игру — она появится здесь.");
}

function renderAchievements() {
  const achievements = [
    { id: "first-launch", icon: "▶", title: "Первый запуск", description: "Запусти любую игру.", progress: profileStats.starts, goal: 1 },
    { id: "explorer", icon: "⌕", title: "Исследователь", description: "Попробуй пять разных игр.", progress: profileStats.games.length, goal: 5 },
    { id: "first-win", icon: "✦", title: "Первая победа", description: "Заверши любую игру с победой.", progress: profileStats.wins, goal: 1 },
    { id: "champion", icon: "♛", title: "Чемпион", description: "Одержи десять побед.", progress: profileStats.wins, goal: 10 },
    { id: "kurut-collector", icon: "$", title: "Куруткики в деле", description: "Заработай 100 куруткиков за победы.", progress: profileStats.kurutEarned, goal: 100 }
  ];
  const container = document.querySelector("#profile-achievements");
  container.innerHTML = achievements.map((achievement) => {
    const unlocked = achievement.progress >= achievement.goal;
    const progress = Math.min(achievement.progress, achievement.goal);
    const percentage = Math.round(progress / achievement.goal * 100);
    return `<article class="achievement-card${unlocked ? " unlocked" : ""}" data-achievement="${achievement.id}">
      <span class="achievement-icon" aria-hidden="true">${achievement.icon}</span>
      <div class="achievement-copy"><h3>${achievement.title}</h3><p>${achievement.description}</p>
        <div class="achievement-progress" role="progressbar" aria-label="${achievement.title}" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="${achievement.goal}">
          <span style="width:${percentage}%"></span>
        </div>
      </div>
      <span class="achievement-status">${unlocked ? "Получено" : `${progress} / ${achievement.goal}`}</span>
    </article>`;
  }).join("");
}

function renderWallet() {
  const kurut = document.querySelector("#wallet-kurut");
  const boorsok = document.querySelector("#wallet-boorsok");
  if (kurut) kurut.textContent = String(gameWallet.kurut);
  if (boorsok) boorsok.textContent = String(gameWallet.boorsok);
  const shop = document.querySelector("#cosmetic-shop");
  if (!shop) return;
  shop.innerHTML = cosmeticItems.map((item) => {
    const unlocked = gameWallet.unlocked.includes(item.id);
    const equipped = gameWallet.equipped === item.id;
    const canAfford = gameWallet[item.currency] >= item.cost;
    const action = equipped ? "Надето" : unlocked ? "Надеть" : `Открыть · ${item.cost} куруткиков`;
    return `<article class="cosmetic-card${equipped ? " equipped" : ""}" style="--cosmetic-color:${item.color}">
      <span class="cosmetic-swatch" aria-hidden="true"></span>
      <div><h3>${item.name}</h3><p>${item.description}</p></div>
      <button class="button button-outline cosmetic-action" type="button" data-cosmetic="${item.id}" ${equipped || (!unlocked && !canAfford) ? "disabled" : ""}>${action}</button>
    </article>`;
  }).join("");
  document.documentElement.dataset.gameSkin = gameWallet.equipped;
  renderProfile();
}

function purchaseOrEquipCosmetic(id) {
  const item = cosmeticItems.find((cosmetic) => cosmetic.id === id);
  if (!item) return;
  const previousWallet = { ...gameWallet, unlocked: [...gameWallet.unlocked] };
  if (!gameWallet.unlocked.includes(id)) {
    if (gameWallet[item.currency] < item.cost) {
      showToast(`Нужно ещё ${item.cost - gameWallet[item.currency]} куруткиков.`);
      return;
    }
    gameWallet[item.currency] -= item.cost;
    gameWallet.unlocked.push(id);
  }
  gameWallet.equipped = id;
  if (!saveWallet()) {
    Object.assign(gameWallet, previousWallet);
    return;
  }
  renderWallet();
  showToast(`${item.name}: внешний вид включён.`);
}

function awardGameCompletion() {
  const previousBalance = { kurut: gameWallet.kurut, boorsok: gameWallet.boorsok };
  gameWallet.kurut += gameWinReward;
  gameWallet.boorsok += 1;
  if (!saveWallet()) {
    Object.assign(gameWallet, previousBalance);
    return;
  }
  profileStats.kurutEarned += gameWinReward;
  saveProfileStats();
  renderWallet();
  showToast(`За прохождение: +${gameWinReward} куруткиков и +1 боорсок.`);
}

function gameCoverHue(id) {
  const index = games.findIndex((game) => game.id === id);
  return (Math.max(index, 0) * 137.508) % 360;
}

let coverIllustrationSequence = 0;

function coverIllustration(art, index) {
  const artScenes = {
    starcatch: `<circle cx="285" cy="96" r="53" fill="url(#coverGlow)"/><circle cx="285" cy="96" r="36" fill="url(#coverOrb)"/><path d="M225 113c22 25 89 31 122 4" fill="none" stroke="#fff8d4" stroke-opacity=".76" stroke-width="3"/><path d="m120 61 5 12 12 5-12 5-5 12-5-12-12-5 12-5zM186 139l3 7 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fff4c0"/>`,
    neon: `<path d="M44 174 106 151l55-46 68-15 74 28 45 56H44z" fill="#141522" fill-opacity=".68"/><path d="M93 164 157 95l57-12 58 21 38 58" fill="none" stroke="#ff86d1" stroke-width="4"/><path d="m166 149 15-30 56-8 24 38z" fill="#e9f8ff" fill-opacity=".91"/><path d="m190 121 8-15 31-4 15 19z" fill="#acddf3"/><circle cx="188" cy="151" r="8" fill="#151522" stroke="#fff" stroke-width="3"/><circle cx="250" cy="151" r="8" fill="#151522" stroke="#fff" stroke-width="3"/>`,
    moonhop: `<circle cx="282" cy="74" r="43" fill="#f5edca"/><circle cx="301" cy="58" r="39" fill="#554679"/><path d="m62 177 42-37 40 18 34-51 42 48 33-24 65 46z" fill="#242840"/><path d="M74 165h87m29-29h68m-130 37h133" stroke="#d7f292" stroke-width="8" stroke-linecap="round"/><path d="m215 74 5-13 5 13 13 5-13 5-5 13-5-13-13-5z" fill="#fff8d5"/>`,
    crystals: `<path d="m160 35 47 29 12 66-42 39-45-35 4-64z" fill="url(#coverOrb)" stroke="#e5fbff" stroke-opacity=".88" stroke-width="3"/><path d="m160 35 17 99 42-4-12-66z" fill="#fff" fill-opacity=".22"/><path d="m265 62 28 20 5 40-28 22-27-24 2-38z" fill="#ffcf85" fill-opacity=".8" stroke="#fff1c4" stroke-width="2"/><circle cx="100" cy="144" r="13" fill="none" stroke="#d9f5fa" stroke-width="3"/><circle cx="105" cy="139" r="3" fill="#fff"/>`,
    tactical: `<path d="M35 157h330v44H35z" fill="#161e20" fill-opacity=".65"/><path d="m51 157 62-82 65 82m23 0 46-58 58 58m-240 0v-36h30v36m122 0v-27h36v27" fill="#273d39" stroke="#c5b47d" stroke-opacity=".7" stroke-width="3"/><path d="M282 32v72m-12-62h24" stroke="#ead9a5" stroke-width="2"/><path d="M109 132h36l-5 27h-27zm7-18h23v21h-23z" fill="#c4d0ad"/><circle cx="122" cy="103" r="13" fill="#d2bd99"/>`,
    bubble: `<circle cx="180" cy="100" r="52" fill="url(#coverOrb)" fill-opacity=".4" stroke="#c6fbff" stroke-width="4"/><circle cx="180" cy="100" r="33" fill="#e3ffff" fill-opacity=".15"/><path d="M155 78q20-19 38 1" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="6"/><circle cx="275" cy="65" r="24" fill="none" stroke="#f8c6ff" stroke-width="4"/><circle cx="100" cy="140" r="14" fill="none" stroke="#c0f9ff" stroke-width="3"/>`,
    garden: `<path d="M190 171c-2-56 8-84 38-117m-36 65c-37-33-59-28-67-23 10 33 32 43 68 39m20-52c31-25 53-21 64-15-8 28-29 39-63 32" fill="none" stroke="#b5e88b" stroke-width="8" stroke-linecap="round"/><circle cx="198" cy="121" r="29" fill="#ef9b63"/><path d="M197 94q8-18 23-17" fill="none" stroke="#e1f3a2" stroke-width="7" stroke-linecap="round"/><circle cx="122" cy="150" r="7" fill="#f8d987"/><circle cx="268" cy="147" r="9" fill="#f8d987"/>`,
    sky: `<path d="M61 143c0-15 12-27 28-27 6-22 39-24 50-4 22-5 37 8 37 25 0 13-9 23-22 23H82c-13 0-21-7-21-17zm119-48c0-11 9-20 21-20 5-16 30-18 38-3 16-4 27 6 27 18 0 10-7 17-17 17h-52c-10 0-17-5-17-12z" fill="#edf5f1" fill-opacity=".8"/><path d="m167 115 54-14 43 8 30 20-77 8-50 20-18-4 28-25-37 4-8-9z" fill="#f8e39a" stroke="#fff9df" stroke-width="2"/><path d="m213 112 23 19 36-4-19-15z" fill="#8fc8d3"/>`,
    pulse: `<path d="M54 133h34l16-31 23 61 27-87 30 109 22-72 19 31h71" fill="none" stroke="#fff0a5" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/><circle cx="200" cy="129" r="61" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="2"/><circle cx="200" cy="129" r="79" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="200" cy="129" r="7" fill="#fff"/>`,
    maze: `<path d="M90 50h224v145H90z" fill="#18242c" fill-opacity=".65" stroke="#d6f4c0" stroke-width="4"/><path d="M145 52v39h58v44h-59v56m116-139v37h-58v48h59v54m-114-77h56m57 0h57" fill="none" stroke="#a6e4c2" stroke-width="8" stroke-linecap="square"/><circle cx="117" cy="169" r="8" fill="#f8e895"/><path d="m286 57 11 5-11 5-5 11-5-11-11-5 11-5 5-11z" fill="#fff"/>`,
    tower: `<path d="m87 177 48-42h54l39 42zm53-47 31-35h55l26 35zm54-40 25-30h42l21 30z" fill="#e5c28b" stroke="#fff1c8" stroke-width="3"/><path d="M95 177h178m-105-47h96m-68-40h72" stroke="#6c5046" stroke-width="5"/><path d="m290 46 25 15-14 20-29-12z" fill="#d8f08e"/>`,
    coral: `<path d="M100 182v-61l-22-20m22 41 26-30m80 68v-81l-24-25m24 48 25-35m54 93v-57l22-22m-22 42-27-28" fill="none" stroke="#77e0c1" stroke-width="10" stroke-linecap="round"/><circle cx="198" cy="95" r="29" fill="url(#coverOrb)" stroke="#e3ffff" stroke-width="3"/><circle cx="191" cy="88" r="7" fill="#fff" fill-opacity=".75"/><circle cx="91" cy="68" r="4" fill="#fff"/><circle cx="291" cy="80" r="6" fill="#fff"/>`,
    meteor: `<path d="m261 44 38 18-18 35-38-18z" fill="#ffcf8b" stroke="#fff1c4" stroke-width="3"/><path d="m244 74-67 53 50-7-48 43 73-53-39 7z" fill="#ff9b6e" fill-opacity=".72"/><circle cx="119" cy="150" r="17" fill="#f7c77b" fill-opacity=".35"/><circle cx="119" cy="150" r="8" fill="#fff0b8"/><path d="M66 182h265" stroke="#ffe5aa" stroke-opacity=".5" stroke-width="3"/>`,
    lantern: `<path d="M169 62h62l-8 86-23 24-23-24z" fill="#f2c980" fill-opacity=".35" stroke="#ffeab4" stroke-width="4"/><path d="M181 73h38l-5 61-14 16-15-16z" fill="url(#coverGlow)"/><path d="M176 61q24-24 48 0m-52 88h69" fill="none" stroke="#ffeab4" stroke-width="4" stroke-linecap="round"/><circle cx="200" cy="108" r="65" fill="none" stroke="#fff0bb" stroke-opacity=".2" stroke-width="2"/><path d="m280 58 5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#fff"/>`,
    chef: `<path d="M122 102h146l-12 68q-60 24-122 0z" fill="#212b32" stroke="#f1dfc4" stroke-width="4"/><path d="M132 115q62 25 126 0" fill="none" stroke="#f1c87e" stroke-width="5"/><circle cx="161" cy="107" r="16" fill="#f27d69"/><circle cx="199" cy="101" r="17" fill="#f4d779"/><circle cx="235" cy="108" r="15" fill="#86c879"/><path d="M148 70q-12-21 4-31m48 28q-12-21 4-31m40 35q-12-21 4-31" fill="none" stroke="#fff0d4" stroke-opacity=".7" stroke-width="4" stroke-linecap="round"/>`,
    break: `<path d="m75 73 61-23 52 21-60 24zM188 71l58-23 63 22-59 24zM74 108l58-23 55 21-58 24zM188 107l59-23 61 23-60 23zM130 144l58-22 58 23-59 23z" fill="#9ee4e7" stroke="#e8ffff" stroke-width="3"/><path d="m182 145 17-27 20 21-17 22z" fill="#fff2a4"/><path d="M80 184h243" stroke="#f8dc9e" stroke-width="7" stroke-linecap="round"/>`,
    courier: `<path d="m83 139 110-32 109 32-109 32z" fill="#ece7ce" stroke="#fff" stroke-width="3"/><path d="m193 107 16-52 20 49 54 35-82-10-82 10 54-35 20-49z" fill="#d5f36a"/><path d="m193 139-30 47 30-10 30 10z" fill="#f19b75"/><circle cx="192" cy="139" r="8" fill="#fff"/>`,
    snow: `<path d="m47 169 83-107 58 70 49-56 107 93z" fill="#d9eef1"/><path d="m130 62 23 32-23-7-22 20zm107 14 20 29-22-7-20 11z" fill="#fff"/><path d="m50 169 74-20 88 20 66-18 66 18z" fill="#93c5ce"/><path d="M78 183h245" stroke="#f7ffff" stroke-opacity=".82" stroke-width="4"/>`,
    runes: `<path d="m200 42 78 42v83l-78 42-78-42V84z" fill="#29233b" stroke="#ead699" stroke-width="4"/><path d="m200 66 54 30v57l-54 29-54-29V96z" fill="none" stroke="#cdb7ff" stroke-opacity=".7" stroke-width="3"/><path d="M176 133V97l24 36V97m24 36V97" fill="none" stroke="#fff1b2" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="200" cy="126" r="67" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/>`,
    lighthouse: `<path d="M168 175h64l-8-99h-48z" fill="#f0dfbd" stroke="#fff" stroke-width="3"/><path d="M166 78h68l-12-23h-44z" fill="#de8469"/><path d="M178 101h44m-43 24h42m-41 24h40" stroke="#ad806d" stroke-width="5"/><path d="m187 56 12-24 13 24" fill="#f1d984"/><path d="m232 85 99-33-96 54m-4 5 98 43-99-19" fill="#ffe19b" fill-opacity=".18"/><path d="M97 182h210" stroke="#fff" stroke-opacity=".45" stroke-width="3"/>`
  };
  const gameScenes = {
    starlight: `<path d="M52 160q42-76 101-10t102-18q37-50 87-10" fill="none" stroke="#b8ffcf" stroke-opacity=".65" stroke-width="5"/><circle cx="161" cy="111" r="28" fill="url(#coverGlow)"/><path d="m161 72 8 25 25 8-25 8-8 25-8-25-25-8 25-8z" fill="#f5ffd1"/><circle cx="294" cy="62" r="14" fill="#b9ffd0"/><circle cx="294" cy="62" r="31" fill="none" stroke="#b9ffd0" stroke-opacity=".45"/>`,
    honeytrail: `<path d="M71 162c41-43 72 22 113-20s75 21 145-50" fill="none" stroke="#f1d27b" stroke-width="8" stroke-linecap="round"/><path d="M150 81c0-18 15-31 33-31s33 13 33 31c0 25-33 52-33 52s-33-27-33-52z" fill="#f4be53" stroke="#fff0a8" stroke-width="4"/><circle cx="183" cy="79" r="12" fill="#fff0af"/><path d="m274 125 12 20-24 0z" fill="#fff0a8"/>`,
    meadowrace: `<path d="M37 172h326M69 184 143 91h100l89 93" fill="#28352c" stroke="#86ca83" stroke-width="4"/><path d="m133 148 19-36 62-10 36 43z" fill="#e9eddd"/><path d="m165 125 9-13 32-5 17 18z" fill="#9dc4c4"/><circle cx="159" cy="146" r="9" fill="#17232b" stroke="#fff" stroke-width="3"/><circle cx="232" cy="146" r="9" fill="#17232b" stroke="#fff" stroke-width="3"/><path d="M83 82v34m-11-17h22m171-46v34m-11-17h22" stroke="#d8f0aa" stroke-width="3"/>`,
    icebreak: `<path d="m71 76 62-27 58 23-63 26zm117-3 61-26 69 22-64 27zM70 115l60-27 62 22-61 28zm119-2 61-26 67 25-64 27zM130 151l60-27 62 25-63 28z" fill="#b7eef5" stroke="#f1ffff" stroke-width="3"/><path d="m181 114 23-26 13 24 25 13-28 6-14 25-5-28z" fill="#fff6d2"/><path d="m58 183 85-4 80 5 116-4" fill="none" stroke="#a9e4ee" stroke-width="4"/>`,
    dustrunner: `<circle cx="264" cy="99" r="41" fill="#f6b36d" fill-opacity=".78"/><path d="M224 95q38 25 81 0m-82 17q35 19 75 5m-60 20q28 12 56 5" fill="none" stroke="#fff0c5" stroke-opacity=".65" stroke-width="4"/><path d="M50 172h300M86 150l22-43 25 43m79 16 29-58 33 58" fill="none" stroke="#e5b17d" stroke-width="5"/><path d="m133 72 7 16 17 6-17 7-7 17-7-17-17-7 17-6z" fill="#fff2d0"/>`,
    skyforge: `<path d="M65 161 107 96h53l42-51 49 59h47l37 58z" fill="#e9d5a5" fill-opacity=".88"/><path d="m106 96 30 1 24 36-43-12-21 40h-31zm96-51 31 59-37-10-34 35 15-44z" fill="#8fd8e0"/><path d="M208 57v87m-27-54h54" stroke="#fff1bd" stroke-width="5"/><path d="m283 69 5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#fff"/>`,
    radarjump: `<circle cx="204" cy="115" r="70" fill="#172735" fill-opacity=".35" stroke="#9ce8d1" stroke-width="3"/><circle cx="204" cy="115" r="44" fill="none" stroke="#9ce8d1" stroke-opacity=".7" stroke-width="2"/><circle cx="204" cy="115" r="15" fill="none" stroke="#9ce8d1" stroke-opacity=".8" stroke-width="2"/><path d="M204 115 268 71" stroke="#d7f38b" stroke-width="5"/><path d="m86 175 37-25 34 18 39-42 35 35 41-29 45 43z" fill="#29354b"/><path d="M270 145h62" stroke="#f2d889" stroke-width="6"/>`,
    mosscape: `<path d="M64 177q17-63 51-77 5-44 51-50 33-46 82-8 53-22 84 34 34 17 38 63v38z" fill="#79a478" fill-opacity=".58"/><path d="M111 170q13-44 43-46 17-45 54-23 26-37 54-5 39-6 47 41 20 5 25 33z" fill="#b9d28b"/><circle cx="207" cy="113" r="15" fill="#f1d680"/><path d="m207 83 5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#fff0ae"/>`,
    glowdrift: `<path d="M52 166c52-2 52-105 112-105 55 0 43 106 102 106 36 0 40-49 80-49" fill="none" stroke="#fb8cdc" stroke-width="9" stroke-linecap="round"/><path d="M52 166c52-2 52-105 112-105 55 0 43 106 102 106 36 0 40-49 80-49" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="2"/><circle cx="164" cy="60" r="15" fill="#fff2a3"/><circle cx="266" cy="166" r="12" fill="#a6f5ec"/><path d="m315 73 5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#fff"/>`,
    copperloop: `<ellipse cx="204" cy="119" rx="98" ry="57" fill="none" stroke="#d98f64" stroke-width="16" transform="rotate(-19 204 119)"/><ellipse cx="204" cy="119" rx="98" ry="57" fill="none" stroke="#ffe1ae" stroke-opacity=".8" stroke-width="3" transform="rotate(-19 204 119)"/><circle cx="276" cy="86" r="12" fill="#fff0ba"/><path d="M77 170h263" stroke="#d98f64" stroke-opacity=".55" stroke-width="3"/>`,
    snakegarden: `<path d="M80 150c0-37 46-42 65-18s-10 45 17 45 18-34 42-40 36 17 55 17 38-20 38-46" fill="none" stroke="#9de183" stroke-width="17" stroke-linecap="round"/><circle cx="297" cy="104" r="20" fill="#9de183"/><circle cx="304" cy="99" r="3" fill="#17251f"/><circle cx="294" cy="99" r="3" fill="#17251f"/><circle cx="119" cy="89" r="10" fill="#f4d879"/><circle cx="208" cy="73" r="9" fill="#ef9c67"/>`,
    flapcloud: `<path d="M68 151c0-16 13-28 29-28 8-28 47-30 59-4 24-7 45 9 45 29 0 16-12 27-30 27H95c-17 0-27-9-27-24zm132-55c0-12 10-21 22-21 6-19 34-21 43-4 18-4 29 7 29 20 0 11-8 19-19 19h-57c-11 0-18-6-18-14z" fill="#eef8f5"/><path d="m145 121 47-17 30 8 31 21-73 8-35 21-14-4 20-23-31 4-6-8z" fill="#ffdc85" stroke="#fff" stroke-width="2"/><path d="m198 113 22 18 31-3-18-14z" fill="#78b8d6"/>`,
    pongduel: `<path d="M200 51v131" stroke="#fff" stroke-opacity=".32" stroke-dasharray="7 8" stroke-width="3"/><rect x="71" y="90" width="15" height="65" rx="7" fill="#6af2dc"/><rect x="315" y="76" width="15" height="65" rx="7" fill="#ff85c8"/><circle cx="214" cy="119" r="15" fill="#fff5cf"/><path d="M99 171h201" stroke="#c3d9e3" stroke-opacity=".4" stroke-width="3"/>`,
    mineralmines: `<path d="m91 144 22-67 51-24 51 24 23 67-48 40h-53z" fill="#354455" stroke="#a8c9dd" stroke-width="4"/><path d="m168 53 9 42-24 43 37 23-1 23m14-81 30-13m-93 29-30-8" fill="none" stroke="#b5f3fa" stroke-width="6"/><path d="m260 63 31 18-12 41-29 23-23-27 7-39z" fill="url(#coverOrb)" stroke="#eaffff" stroke-width="3"/><circle cx="113" cy="157" r="6" fill="#f4d879"/>`,
    numberforge: `<path d="M105 57h70v70h-70zM187 57h70v70h-70zM105 139h70v52h-70zM187 139h70v52h-70z" fill="#453756" stroke="#ead99d" stroke-width="3"/><text x="140" y="104" fill="#fff1c4" font-size="35" text-anchor="middle" font-family="Manrope">2</text><text x="222" y="104" fill="#fff1c4" font-size="35" text-anchor="middle" font-family="Manrope">4</text><text x="140" y="177" fill="#d7f38b" font-size="29" text-anchor="middle" font-family="Manrope">8</text><path d="m281 70 36 35-36 35" fill="none" stroke="#f5df91" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
    boxvoyage: `<path d="M69 79h263v112H69z" fill="#24303a" stroke="#deb978" stroke-width="4"/><path d="M103 103h46v46h-46zm75 0h46v46h-46zm75 0h46v46h-46z" fill="#37434a" stroke="#a9c0bd" stroke-width="3"/><path d="m178 103 23-17 23 17v46l-23 18-23-18z" fill="#c79b64" stroke="#f1dcaf" stroke-width="3"/><path d="m191 126 9 9 18-22" fill="none" stroke="#fff0bc" stroke-width="4"/>`,
    lightmatrix: `<rect x="111" y="59" width="53" height="53" rx="12" fill="#ffe58c"/><rect x="177" y="59" width="53" height="53" rx="12" fill="#a77bdb"/><rect x="243" y="59" width="53" height="53" rx="12" fill="#7fe4d2"/><rect x="111" y="126" width="53" height="53" rx="12" fill="#91c9ff"/><rect x="177" y="126" width="53" height="53" rx="12" fill="#f1a5c8"/><rect x="243" y="126" width="53" height="53" rx="12" fill="#f5d88c"/><path d="M204 41v-13m0 177v-13M94 119H80m239 0h-14" stroke="#fff" stroke-width="3"/>`,
    bullseye: `<circle cx="198" cy="111" r="68" fill="#f2e9ce"/><circle cx="198" cy="111" r="51" fill="#da715e"/><circle cx="198" cy="111" r="34" fill="#f2e9ce"/><circle cx="198" cy="111" r="17" fill="#d45e51"/><path d="m270 47 18 37-12 26 15 27-15 28m-26-95 39 3" fill="none" stroke="#efd59a" stroke-width="5"/>`,
    skylinehop: `<path d="M56 180V116h70v64m0 0v-88h75v88m0 0v-53h73v53m0 0v-104h58v104z" fill="#242a42" stroke="#b0cae5" stroke-width="3"/><path d="M76 131h17m-17 18h17m50-58h17m-17 18h17m59 34h17m-17 18h17m48-82h17m-17 18h17" stroke="#ffe19a" stroke-width="4"/><path d="m112 98 8-16 8 16 16 6-16 7-8 16-8-16-16-7z" fill="#fff4ca"/>`,
    starinvaders: `<path d="M75 69h34v25H75zm60 21h34v25h-34zm62-23h34v25h-34zm60 24h34v25h-34zm-91 43h34v25h-34z" fill="#ff9f7a" stroke="#ffe0ad" stroke-width="2"/><path d="m203 105 21 47h-17l-6 24-7-24h-17z" fill="#b7eff4" stroke="#fff" stroke-width="2"/><path d="M200 47v-17m-112 92-12 12m237-13 12 12" stroke="#f5e3a5" stroke-width="3"/>`,
    towercraft: `<path d="m94 179 59-34 55 34zm56-42 47-33 50 33zm48-41 39-27 42 27z" fill="#e8c278" stroke="#fff0bc" stroke-width="4"/><path d="M108 181h202" stroke="#f7db8c" stroke-width="5"/><path d="m311 55 10 20-24 0z" fill="#d9ed96"/><path d="m316 84-7 18m17-20 8 18" stroke="#fff" stroke-opacity=".65" stroke-width="3"/>`,
    deepmaze: `<path d="M91 56h218v128H91z" fill="#16242a" fill-opacity=".5" stroke="#aedbc1" stroke-width="3"/><path d="M130 56v40h45v-22h44v62h-45v48m90-128v40h-45m0 18h44v42h-43m-90-22h44" fill="none" stroke="#8cc9a8" stroke-width="8"/><path d="m128 155 7 16 17 6-17 7-7 16-7-16-17-7 17-6z" fill="#f4dc8e"/><path d="M269 52v28m-10-18h20" stroke="#f5df95" stroke-width="4"/>`,
    beatlanes: `<path d="M89 173V71m67 102V71m67 102V71m67 102V71" stroke="#b79af7" stroke-opacity=".58" stroke-width="3"/><path d="M72 143h238" stroke="#f5e392" stroke-width="5"/><circle cx="122" cy="113" r="14" fill="#ff96d6"/><circle cx="189" cy="93" r="14" fill="#9ee9df"/><circle cx="256" cy="121" r="14" fill="#ffd47b"/><path d="M82 71h68m18 0h68m18 0h45" stroke="#fff" stroke-opacity=".2" stroke-width="2"/>`,
    pipeworks: `<path d="M103 69h63v63h-63zm85 0h63v63h-63zm-85 82h63v63h-63zm85 0h63v63h-63z" fill="#263940" stroke="#8fd9ce" stroke-width="3"/><path d="M134 70v31h31m-94 82h63v-50m53-34h31v31m32 52h-31v-19" fill="none" stroke="#68d3c2" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><circle cx="134" cy="70" r="10" fill="#ffe394"/><path d="m289 160 13 23h-26z" fill="#b9e983"/>`,
    minigolf: `<path d="M66 65h269v133H66z" fill="#426a55"/><path d="M88 94h84m35 0h101m-220 67h85m42 0h62" stroke="#b8d590" stroke-width="7" stroke-linecap="round"/><circle cx="120" cy="125" r="12" fill="#fff"/><circle cx="302" cy="135" r="18" fill="#15231c" stroke="#e4d596" stroke-width="4"/><path d="M121 125 181 95" stroke="#f7d57d" stroke-width="3" stroke-dasharray="6 5"/><path d="M191 87v58" stroke="#f4e9bd" stroke-width="3"/><path d="M194 88h45l-5 18h-40z" fill="#e87f68"/>`,
    colorshift: `<path d="M99 65h54v121H99zm74 0h54v121h-54zm74 0h54v121h-54z" fill="#263244" stroke="#fff" stroke-opacity=".3" stroke-width="2"/><path d="M99 130h54m74-36h54" stroke="#f1d989" stroke-width="11"/><circle cx="126" cy="94" r="13" fill="#ff8abf"/><path d="m199 104 17 29h-34z" fill="#8ee7d5"/><path d="m254 143 16-16 16 16-16 16z" fill="#c5a8ff"/>`,
    quickdraw: `<path d="M200 46v30m0 84v30m-58-72h-30m176 0h-30m-97-41-21-21m121 121-21-21m0-79 21-21m-121 121 21-21" stroke="#f4dfa4" stroke-width="6" stroke-linecap="round"/><circle cx="200" cy="118" r="51" fill="#12251e" stroke="#9be99f" stroke-width="5"/><path d="m177 118 15 15 32-35" fill="none" stroke="#b7ef93" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
    blockdrop: `<path d="M128 53h45v45h-45zm45 0h45v45h-45zm-45 45h45v45h-45zm45 45h45v45h-45zm45 0h45v45h-45z" fill="#9bdfe7" stroke="#e8ffff" stroke-width="3"/><path d="M260 56h45v45h-45zm45 0h45v45h-45zm-45 45h45v45h-45z" fill="#ed9ed8" stroke="#fff" stroke-width="3"/><path d="M85 186h229" stroke="#f4d97f" stroke-width="5"/>`,
    harborcatch: `<path d="M59 151q68 51 137 0t145 0v39H59z" fill="#67bad0" fill-opacity=".65"/><path d="M93 107h151l-19 46H112z" fill="none" stroke="#f3e6c6" stroke-width="5"/><path d="M113 109 139 152m26-43 4 44m44-43-25 43" stroke="#f3e6c6" stroke-width="3"/><path d="M270 96q20-21 40 0-20 20-40 0zm-61-34q14-17 29 0-15 17-29 0z" fill="#e7d18c"/><path d="m292 76 14-11v22z" fill="#ed9671"/>`,
    pairgarden: `<path d="M145 150c-42-15-38-65 4-68 23-2 35 17 36 38 1-21 13-40 36-38 42 3 46 53 4 68l-40 28z" fill="#a4d98b" stroke="#edffd5" stroke-width="3"/><path d="M185 120c-19-30-40-24-43-7m80 7c19-30 40-24 43-7" fill="none" stroke="#f1f6c5" stroke-width="4"/><circle cx="120" cy="77" r="5" fill="#ffe298"/><circle cx="277" cy="148" r="6" fill="#f5c78b"/>`
  };
  const fallback = artScenes.starcatch;
  const sceneId = `cover-${coverIllustrationSequence += 1}`;
  const motif = (gameScenes[games[index]?.id] || artScenes[art] || fallback)
    .replace(/url\(#coverGlow\)/g, `url(#coverGlow-${sceneId})`)
    .replace(/url\(#coverOrb\)/g, `url(#coverOrb-${sceneId})`);
  const drift = (index * 29) % 100;
  const game = games[index];
  const motifLabel = game?.genre || "ИГРА";
  const titleWords = (game?.title || "Kagan Games").split(/\s+/);
  const titleLine = titleWords.length > 2 ? `${titleWords[0]} ${titleWords[1]}` : titleWords.join(" ");
  return `<svg class="cover-illustration" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><defs><radialGradient id="coverGlow-${sceneId}"><stop stop-color="#fff6c7" stop-opacity=".95"/><stop offset="1" stop-color="#ffbc73" stop-opacity="0"/></radialGradient><linearGradient id="coverOrb-${sceneId}" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#f8fbff"/><stop offset=".48" stop-color="hsl(${(gameCoverHue(game?.id || "") + 24) % 360} 88% 76%)"/><stop offset="1" stop-color="hsl(${gameCoverHue(game?.id || "")} 78% 48%)"/></linearGradient></defs><g opacity=".12" fill="none" stroke="#fff"><path d="M${30 + drift} 23h110M284 58h84M44 133h34M318 151h42"/><circle cx="${45 + drift}" cy="52" r="2"/><circle cx="337" cy="39" r="2"/><circle cx="76" cy="93" r="1.5"/></g><g>${motif}</g><g class="cover-editorial"><path d="M24 177h91" stroke="#fff" stroke-opacity=".6"/><text x="24" y="196">${motifLabel.toLocaleUpperCase("ru")}</text><text x="375" y="194" text-anchor="end">${String(index + 1).padStart(2, "0")} / 50</text></g><title>${titleLine}</title></svg>`;
}

function gameCard(game) {
  const favorite = profileStats.favorites.includes(game.id);
  return `<article class="game-card">
    <div class="game-cover game-cover-${game.art}" data-cover-game="${game.id}" style="--cover-hue:${gameCoverHue(game.id)}">
      <button class="game-favorite${favorite ? " active" : ""}" type="button" data-favorite-game="${game.id}" aria-label="${favorite ? "Убрать из избранного" : "Добавить в избранное"}: ${game.title}" aria-pressed="${favorite}">★</button>
      ${coverIllustration(game.art, games.indexOf(game))}
      <span class="cover-tag">${game.tag}</span>
      <span class="cover-brand"><b>KG</b><i>KAGAN GAMES</i></span>
      <span class="cover-title">${game.title}</span><span class="cover-initials">${game.initials}</span>
      <button class="cover-play" type="button" data-play-game="${game.id}" aria-label="Играть: ${game.title}">ИГРАТЬ <span aria-hidden="true">↗</span></button>
      ${rewardGameIds.has(game.id) ? `<span class="game-reward-badge" title="За победу: +${gameWinReward} куруткиков"><b aria-hidden="true">$</b> +${gameWinReward} куруткиков</span>` : ""}
    </div>
    <div class="game-card-info">
      <h3 class="game-card-title">${game.title}</h3>
      <p class="game-description">${game.description}</p>
      <div class="game-card-meta"><span>${game.genre}</span><span>${game.studio}</span></div>
      <button class="button button-primary game-link" type="button" data-play-game="${game.id}">Играть <span>▶</span></button>
    </div>
  </article>`;
}

function toggleFavoriteGame(id) {
  if (!games.some((game) => game.id === id)) return;
  const previousFavorites = profileStats.favorites;
  profileStats.favorites = profileStats.favorites.includes(id)
    ? profileStats.favorites.filter((favoriteId) => favoriteId !== id)
    : [id, ...profileStats.favorites];
  if (!saveProfileStats()) {
    profileStats.favorites = previousFavorites;
    return;
  }
  renderGames();
  renderPlayerLibrary();
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
  featured.innerHTML = games.slice(0, 5).map(gameCard).join("");
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
  const validPage = ["home", "catalog", "rankings", "developers", "profile"].includes(page) ? page : "home";
  document.querySelectorAll(".page-section").forEach((section) => section.classList.toggle("active", section.id === `page-${validPage}`));
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.page === validPage));
  if (validPage === "catalog") renderGames();
  if (validPage === "profile") renderProfile();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("visible"), 3000);
}

function authSetupMessage() {
  return supabaseConfig.url && supabaseConfig.anonKey
    ? "Не удалось загрузить модуль Supabase. Проверь подключение к сети и доступность Supabase CDN."
    : "Создание аккаунта сейчас не настроено: в supabase-config.js не заполнены URL проекта Supabase и публичный anon/publishable key. Это должен настроить владелец сайта.";
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
  renderProfile();
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
  profileStats.starts += 1;
  if (!profileStats.games.includes(id)) profileStats.games.push(id);
  profileStats.recentGames = [id, ...profileStats.recentGames.filter((recentId) => recentId !== id)].slice(0, 12);
  saveProfileStats();
  renderProfile();
  void recordUserEvent("game_start", id);
  currentGameId = id;
  gameState = {
    score: 0, elapsed: 0, spawn: 0, lives: 3, ended: false,
    viewMode: gamePreferences.viewMode,
    playerX: gameWidth / 2, playerY: 440, playerVY: -11,
    collected: 0, grounded: false,
    objects: [], bullets: [], particles: [],
    platforms: [], matched: new Set(), opened: [], attempts: 0, lockTime: 0
  };
  const extraState = window.KaganExtraGames.start(id, gameWidth, gameHeight);
  if (extraState) gameState = Object.assign(gameState, extraState);
  if (id === "neon" || bonusArcadeGames.includes(id)) gameState.lives = 3;
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
    gameState.airSupport = 3;
    gameState.airstrikeTime = 0;
    gameState.airstrikeRuns = [];
    gameState.airstrikeEffects = [];
    gameState.enemyBullets = [];
    gameState.playerX = gameWidth / 2;
    gameState.level = 1;
    gameState.levelKills = 0;
    gameState.levelTransition = 0;
    gameState.reloadTime = 0;
    gameState.attackTime = 2.6;
    gameState.muzzleTime = 0;
    gameState.cameraX = 0;
    gameState.cameraY = 0;
    gameState.crosshairX = gameWidth / 2;
    gameState.crosshairY = gameHeight / 2;
    createTacticalTargets(gameState);
  }
  if (id === "crystals") {
    const icons = ["✦", "◆", "☾", "●", "❋", "⬟", "✧", "⬢"];
    gameState.cards = [...icons, ...icons].sort(() => Math.random() - 0.5);
  }
  if (id === "maze") {
    gameState.maze = [
      "############",
      "#S.....#####",
      "######.#####",
      "#......#####",
      "#.##########",
      "#..........#",
      "##########E#"
    ];
    gameState.mazeX = 1;
    gameState.mazeY = 1;
    gameState.mazeMoveTime = 0;
    gameState.moves = 0;
  }
  if (id === "tinytower") {
    gameState.blocks = [{ x: 330, y: 485, w: 300 }];
    gameState.blockX = 330;
    gameState.blockDirection = 1;
    gameState.blockWidth = 300;
    gameState.layer = 0;
  }
  if (id === "pulse") {
    gameState.pulseX = 80;
    gameState.pulseDirection = 1;
    gameState.targetX = 250 + Math.random() * 460;
    gameState.hits = 0;
    gameState.misses = 0;
  }
  if (id === "lantern") {
    gameState.round = 1;
    gameState.sequence = [];
    gameState.sequenceStep = 0;
    gameState.sequenceTimer = 0;
    gameState.litPad = -1;
    gameState.playerTurn = false;
    gameState.playerStep = 0;
    startLanternRound(gameState);
  }
  if (id === "pixelchef") {
    gameState.recipe = ["🍎", "🥕", "🍄"];
    gameState.recipeStep = 0;
    gameState.dishes = 0;
  }
  if (id === "crystalbreak") {
    gameState.paddleWidth = 140;
    gameState.paddleX = 480;
    gameState.ball = { x: 480, y: 420, vx: 205, vy: -235, r: 10 };
    gameState.bricks = Array.from({ length: 20 }, (_, index) => ({
      x: 132 + (index % 5) * 142,
      y: 90 + Math.floor(index / 5) * 38,
      alive: true
    }));
  }
  if (id === "starcourier") {
    gameState.lives = 4;
    gameState.kills = 0;
    gameState.shotCooldown = 0;
    gameState.invulnerableTime = 0;
  }
  if (id === "snowslalom") {
    gameState.lives = 3;
    gameState.invulnerableTime = 0;
  }
  if (id === "runemath") {
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    createRuneQuestion(gameState);
  }
  if (id === "lighthouse") {
    gameState.playerY = 452;
    gameState.playerVY = 0;
    gameState.grounded = true;
    gameState.lives = 3;
    gameState.invulnerableTime = 0;
  }
  if (id === "bubblepop" || id === "meteorguard") gameState.lives = 4;
  if (id === "garden") gameState.missedFruit = 0;
  if (id === "skycourier" || id === "coral") gameState.lives = 4;
  document.querySelector("#game-dialog-title").textContent = game.title;
  document.querySelector("#game-dialog-description").textContent = game.description;
  document.querySelector("#game-controls").textContent = game.controls;
  document.querySelector("#game-score").textContent = id === "tacstrike" ? "Уровень: 1 / 10" : "Счёт: 0";
  document.querySelector("#tactical-support").hidden = id !== "tacstrike";
  document.querySelector("#game-view-switch").hidden = window.KaganExtraGames.isGame(id);
  document.querySelectorAll("[data-view-mode]").forEach((button) => {
    const active = button.dataset.viewMode === gameState.viewMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const dialog = document.querySelector("#game-dialog");
  document.querySelector(".game-stage").classList.toggle("tacstrike-3d", id === "tacstrike");
  if (!dialog.open) dialog.showModal();
  gameKeys.clear();
  gameLastFrame = performance.now();
  cancelAnimationFrame(gameFrameId);
  gameFrameId = requestAnimationFrame(runGameFrame);
}

function endGame(message, completed = false) {
  if (!gameState || gameState.ended) return;
  gameState.ended = true;
  gameState.endMessage = message;
  gameState.completed = completed;
  if (completed) {
    profileStats.wins += 1;
    saveProfileStats();
    renderProfile();
    if (rewardGameIds.has(currentGameId)) awardGameCompletion();
  }
}

function createTacticalTargets(state) {
  const count = 3 + state.level;
  state.mapIndex = (state.level - 1) % tacticalMaps.length;
  state.targets = Array.from({ length: count }, (_, index) => ({
    x: 100 + index * (760 / Math.max(1, count - 1)),
    y: 195 + Math.random() * 100,
    phase: Math.random() * Math.PI * 2,
    speed: 1 + state.level * 0.14,
    fireTime: 1.8 + Math.random() * 1.8,
    alive: true
  }));
  state.levelKills = 0;
  state.enemyBullets = [];
  state.attackTime = 0;
}

function requestTacticalAirSupport(state) {
  if (state.airSupport <= 0 || state.airstrikeTime > 0 || state.ended) return;
  state.airSupport -= 1;
  state.airstrikeTime = 2.4;
  state.airstrikeRuns = state.targets.filter((target) => target.alive).slice(0, 3)
    .map((target, index) => ({ target, delay: index * 0.38, flight: 0, impacted: false }));
  state.airstrikeEffects = [];
  showToast("Поддержка в пути — отойди от отмеченных зон!");
}

function startLanternRound(state) {
  state.sequence = Array.from({ length: state.round + 2 }, () => Math.floor(Math.random() * 4));
  state.sequenceStep = 0;
  state.sequenceTimer = 0.65;
  state.litPad = -1;
  state.playerTurn = false;
  state.playerStep = 0;
}

function createRuneQuestion(state) {
  const first = 3 + Math.floor(Math.random() * 9);
  const second = 2 + Math.floor(Math.random() * 8);
  const multiply = Math.random() < 0.25;
  const operator = multiply ? "×" : Math.random() < 0.5 ? "+" : "−";
  const answer = operator === "×" ? (first % 7 + 2) * (second % 7 + 2)
    : operator === "+" ? first + second : Math.abs(first - second);
  state.question = {
    text: `${operator === "×" ? first % 7 + 2 : first} ${operator} ${operator === "×" ? second % 7 + 2 : second}`,
    answer
  };
  const choices = new Set([answer]);
  while (choices.size < 4) {
    const offset = 1 + Math.floor(Math.random() * 9);
    choices.add(Math.max(0, answer + (Math.random() < 0.5 ? -offset : offset)));
  }
  state.choices = [...choices].sort(() => Math.random() - 0.5);
}

function updateGame(delta) {
  const state = gameState;
  if (!state || state.ended) return;
  if (window.KaganExtraGames.isGame(currentGameId)) {
    window.KaganExtraGames.update(currentGameId, state, delta, gameKeys, gameWidth, gameHeight, endGame);
    return;
  }
  state.elapsed += delta;
  const movingLeft = gameKeys.has("ArrowLeft") || gameKeys.has("KeyA");
  const movingRight = gameKeys.has("ArrowRight") || gameKeys.has("KeyD");
  const movingUp = gameKeys.has("ArrowUp") || gameKeys.has("KeyW");
  const movingDown = gameKeys.has("ArrowDown") || gameKeys.has("KeyS");
  state.invulnerableTime = Math.max(0, (state.invulnerableTime || 0) - delta);

  if (currentGameId === "starcatch" || bonusArcadeGames.includes(currentGameId)) {
    state.playerX = Math.max(48, Math.min(gameWidth - 48, state.playerX + (Number(movingRight) - Number(movingLeft)) * 370 * delta));
    state.spawn += delta;
    if (state.spawn > 0.76) {
      state.spawn = 0;
      state.objects.push({ x: 34 + Math.random() * (gameWidth - 68), y: -20, r: 12, speed: 125 + Math.random() * 80, bad: Math.random() < 0.23 });
    }
    state.objects = state.objects.filter((item) => {
      item.y += item.speed * delta;
      if (Math.abs(item.x - state.playerX) < 35 && Math.abs(item.y - 490) < 28) {
        if (item.bad) {
          if (state.invulnerableTime <= 0) {
            state.lives -= 1;
            state.invulnerableTime = 0.8;
          }
        } else state.collected += 10;
        if (state.lives <= 0) endGame("Метеоры сбили твой корабль.");
        return false;
      }
      return item.y < gameHeight + 20;
    });
    state.score = state.collected + Math.floor(state.elapsed * 2);
  } else if (currentGameId === "neon") {
    state.playerX = Math.max(300, Math.min(660, state.playerX + (Number(movingRight) - Number(movingLeft)) * 360 * delta));
    state.spawn += delta;
    if (state.spawn > Math.max(0.65, 1.05 - state.elapsed * 0.008)) {
      state.spawn = 0;
      state.objects.push({ lane: Math.floor(Math.random() * 3), y: -75, speed: 190 + Math.min(130, state.elapsed * 3) });
    }
    state.objects = state.objects.filter((obstacle) => {
      obstacle.y += obstacle.speed * delta;
      const obstacleX = 350 + obstacle.lane * 130;
      if (Math.abs(obstacleX - state.playerX) < 43 && obstacle.y > 430 && obstacle.y < 520) {
        if (state.invulnerableTime <= 0) {
          state.lives -= 1;
          state.invulnerableTime = 1.2;
          if (state.lives <= 0) endGame("Все жизни потрачены. Попробуй ещё раз!");
        }
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
    const movingForward = movingUp;
    const movingBackward = movingDown;
    state.cameraX += (Number(movingRight) - Number(movingLeft)) * 175 * delta;
    state.cameraX = Math.max(-115, Math.min(115, state.cameraX));
    state.cameraY += (Number(movingBackward) - Number(movingForward)) * 110 * delta;
    state.cameraY = Math.max(-70, Math.min(70, state.cameraY));
    state.playerX = Math.max(340, Math.min(620, state.playerX + (Number(movingRight) - Number(movingLeft)) * 210 * delta));
    if (gameKeys.has("Space")) fireTacticalWeapon(state);
    if (state.fireCooldown > 0) state.fireCooldown -= delta;
    if (state.airstrikeTime > 0) {
      state.airstrikeTime = Math.max(0, state.airstrikeTime - delta);
      state.airstrikeRuns.forEach((run) => {
        if (run.impacted) return;
        if (run.delay > 0) {
          run.delay = Math.max(0, run.delay - delta);
          return;
        }
        run.flight += delta;
        if (run.flight >= 0.7) {
          run.impacted = true;
          if (run.target.alive) {
            run.target.alive = false;
            state.kills += 1;
            state.levelKills += 1;
          }
          state.airstrikeEffects.push({ target: run.target, x: run.target.x - state.cameraX, y: run.target.y + state.cameraY, age: 0, seed: Math.random() * 10 });
        }
      });
    }
    state.airstrikeEffects = (state.airstrikeEffects || []).filter((effect) => {
      effect.age += delta;
      return effect.age < 1.35;
    });
    if (state.reloadTime > 0) {
      state.reloadTime -= delta;
      if (state.reloadTime <= 0) {
        const loaded = Math.min(12, state.reserveAmmo);
        state.ammo = loaded;
        state.reserveAmmo -= loaded;
      }
    }
    state.muzzleTime = Math.max(0, state.muzzleTime - delta);
    if (state.levelTransition > 0) state.levelTransition -= delta;
    state.targets.forEach((target) => {
      if (!target.alive) return;
      target.phase += delta * target.speed;
      target.x = Math.max(68, Math.min(gameWidth - 68, target.x + Math.sin(target.phase) * (24 + state.level * 2) * delta));
      target.fireTime -= delta;
      if (target.fireTime <= 0 && state.levelTransition <= 0) {
        const startX = Number.isFinite(target.screenX) ? target.screenX : target.x - state.cameraX;
        const startY = Number.isFinite(target.screenY) ? target.screenY : target.y + state.cameraY + 18;
        const playerScreenX = Number.isFinite(state.playerScreenX) ? state.playerScreenX : state.playerX;
        const playerScreenY = Number.isFinite(state.playerScreenY) ? state.playerScreenY : 505;
        const dx = playerScreenX - startX;
        const dy = playerScreenY - startY;
        const distance = Math.hypot(dx, dy) || 1;
        const speed = 150 + state.level * 6;
        state.enemyBullets.push({ x: startX, y: startY, vx: dx / distance * speed, vy: dy / distance * speed });
        target.fireTime = Math.max(1.15, 2.7 - state.level * 0.12) + Math.random() * 1.2;
      }
    });
    state.enemyBullets = state.enemyBullets.filter((bullet) => {
      bullet.x += bullet.vx * delta;
      bullet.y += bullet.vy * delta;
      const playerScreenX = Number.isFinite(state.playerScreenX) ? state.playerScreenX : state.playerX;
      const playerScreenY = Number.isFinite(state.playerScreenY) ? state.playerScreenY : 505;
      if (Math.hypot(bullet.x - playerScreenX, bullet.y - playerScreenY) < 26 && state.invulnerableTime <= 0) {
        state.health = Math.max(0, state.health - 14);
        state.invulnerableTime = 0.55;
        if (state.health <= 0) endGame(`Кампания завершена на уровне ${state.level}. Остановлено ботов: ${state.kills}.`);
        return false;
      }
      return bullet.x > -20 && bullet.x < gameWidth + 20 && bullet.y > -20 && bullet.y < gameHeight + 20;
    });
    if (state.targets.every((target) => !target.alive) && state.levelTransition <= 0) {
      if (state.level === 10) {
        endGame(`Кампания пройдена! Остановлено ботов: ${state.kills}.`, true);
      } else {
        state.level += 1;
        state.levelTransition = 1.4;
        state.health = Math.min(100, state.health + 12);
        state.ammo = 12;
        state.reserveAmmo = Math.min(72, state.reserveAmmo + 12);
        createTacticalTargets(state);
      }
    }
  }
  if (currentGameId === "bubblepop" || currentGameId === "meteorguard") {
    state.spawn += delta;
    const interval = currentGameId === "bubblepop" ? 0.86 : 0.9;
    if (state.spawn >= interval) {
      state.spawn = 0;
      state.objects.push({
        x: 35 + Math.random() * (gameWidth - 70),
        y: currentGameId === "bubblepop" ? gameHeight + 20 : -25,
        r: currentGameId === "bubblepop" ? 20 + Math.random() * 15 : 17 + Math.random() * 13,
        speed: 75 + Math.random() * 70,
        drift: (Math.random() - 0.5) * 45,
        phase: Math.random() * 6
      });
    }
    state.objects = state.objects.filter((item) => {
      item.y += (currentGameId === "bubblepop" ? -item.speed : item.speed) * delta;
      item.x += (Math.sin(state.elapsed * 2 + item.phase) * 14 + item.drift) * delta;
      const escaped = currentGameId === "bubblepop" ? item.y < -item.r : item.y > gameHeight + item.r;
      if (escaped) {
        state.lives -= 1;
        if (state.lives <= 0) endGame("Цели ускользнули. Попробуй ещё раз!");
        return false;
      }
      return true;
    });
    if (state.collected >= 12) {
      endGame(currentGameId === "bubblepop" ? "Отличная реакция! Все 12 пузырьков лопнули." : "Город спасён! Все 12 метеоров уничтожены.", true);
    }
  } else if (currentGameId === "garden" || currentGameId === "pixelchef") {
    state.playerX = Math.max(45, Math.min(gameWidth - 45, state.playerX + (Number(movingRight) - Number(movingLeft)) * 380 * delta));
    state.spawn += delta;
    if (state.spawn >= (currentGameId === "garden" ? 0.82 : 0.88)) {
      state.spawn = 0;
      const ingredients = ["🍎", "🥕", "🍄"];
      state.objects.push({
        x: 35 + Math.random() * (gameWidth - 70),
        y: -25,
        r: 17,
        speed: 125 + Math.random() * 65,
        bad: currentGameId === "garden" && Math.random() < 0.23,
        ingredient: ingredients[Math.floor(Math.random() * ingredients.length)]
      });
    }
    state.objects = state.objects.filter((item) => {
      item.y += item.speed * delta;
      if (Math.abs(item.x - state.playerX) < 38 && item.y > 455 && item.y < 525) {
        if (currentGameId === "garden") {
          if (item.bad) {
            if (state.invulnerableTime <= 0) {
              state.lives -= 1;
              state.invulnerableTime = 0.9;
            }
          } else state.collected += 1;
        } else if (item.ingredient === state.recipe[state.recipeStep]) {
          state.recipeStep += 1;
          if (state.recipeStep === state.recipe.length) {
            state.recipeStep = 0;
            state.dishes += 1;
          }
        } else {
          state.recipeStep = 0;
        }
        return false;
      }
      if (item.y > gameHeight + 20) {
        if (currentGameId === "garden" && !item.bad) {
          state.missedFruit += 1;
          if (state.missedFruit % 3 === 0) state.lives -= 1;
        }
        return false;
      }
      return true;
    });
    if (currentGameId === "garden") {
      state.score = state.collected * 10;
      if (state.lives <= 0) endGame(`Собрано яблок: ${state.collected}. Попробуй ещё раз!`);
      if (state.collected >= 10) endGame("Урожай собран! Ты настоящий мастер сада.", true);
    } else {
      state.score = state.dishes;
      if (state.dishes >= 3) endGame("Три заказа готовы! Шеф-повар доволен.", true);
    }
  } else if (currentGameId === "skycourier" || currentGameId === "coral") {
    const speed = currentGameId === "skycourier" ? 290 : 255;
    state.playerX = Math.max(35, Math.min(gameWidth - 35, state.playerX + (Number(movingRight) - Number(movingLeft)) * speed * delta));
    state.playerY = Math.max(80, Math.min(500, state.playerY + (Number(movingDown) - Number(movingUp)) * speed * delta));
    state.spawn += delta;
    if (state.spawn >= 0.95) {
      state.spawn = 0;
      state.objects.push({
        x: 35 + Math.random() * (gameWidth - 70),
        y: -25,
        r: 16,
        speed: 90 + Math.random() * 75,
        bad: Math.random() < 0.27,
        icon: currentGameId === "skycourier" ? (Math.random() < 0.32 ? "◆" : "✉") : (Math.random() < 0.32 ? "✹" : "●")
      });
    }
    state.objects = state.objects.filter((item) => {
      item.y += item.speed * delta;
      if (Math.hypot(item.x - state.playerX, item.y - state.playerY) < item.r + 22) {
        if (item.bad) {
          if (state.invulnerableTime <= 0) {
            state.lives -= 1;
            state.invulnerableTime = 0.9;
          }
        } else state.collected += 1;
        return false;
      }
      return item.y < gameHeight + 25;
    });
    state.score = state.collected * 10;
    if (state.lives <= 0) endGame("Путешествие окончено. Попробуй ещё раз!");
    if (state.collected >= (currentGameId === "skycourier" ? 8 : 7)) {
      endGame(currentGameId === "skycourier" ? "Доставка завершена! Все посылки на месте." : "Жемчужины собраны! Риф спасён.", true);
    }
  } else if (currentGameId === "pulse") {
    state.pulseX += state.pulseDirection * 340 * delta;
    if (state.pulseX >= 860 || state.pulseX <= 100) state.pulseDirection *= -1;
  } else if (currentGameId === "maze") {
    state.mazeMoveTime = Math.max(0, state.mazeMoveTime - delta);
    if (state.mazeMoveTime === 0) {
      const dx = Number(movingRight) - Number(movingLeft);
      const dy = Number(movingDown) - Number(movingUp);
      if (dx || dy) moveMazePlayer(state, dx, dy);
    }
    state.score = state.moves;
  } else if (currentGameId === "tinytower") {
    state.blockX += state.blockDirection * (190 + state.layer * 12) * delta;
    if (state.blockX <= 130 || state.blockX + state.blockWidth >= 830) state.blockDirection *= -1;
    state.blockX = Math.max(130, Math.min(830 - state.blockWidth, state.blockX));
    state.score = state.layer;
  } else if (currentGameId === "lantern") {
    if (!state.playerTurn) {
      state.sequenceTimer -= delta;
      if (state.sequenceTimer <= 0) {
        if (state.litPad >= 0) {
          state.litPad = -1;
          state.sequenceTimer = 0.24;
        } else if (state.sequenceStep < state.sequence.length) {
          state.litPad = state.sequence[state.sequenceStep];
          state.sequenceStep += 1;
          state.sequenceTimer = 0.46;
        } else {
          state.playerTurn = true;
          state.sequenceTimer = 0;
        }
      }
    }
  } else if (currentGameId === "crystalbreak") {
      const ball = state.ball;
      state.paddleX = Math.max(60, Math.min(gameWidth - 60, state.paddleX + (Number(movingRight) - Number(movingLeft)) * 430 * delta));
      if (gameKeys.has("Space") && ball.stuck) {
        ball.stuck = false;
        ball.vx = 205;
        ball.vy = -235;
      }
      if (!ball.stuck) {
        ball.x += ball.vx * delta;
        ball.y += ball.vy * delta;
        if (ball.x < ball.r || ball.x > gameWidth - ball.r) ball.vx *= -1;
        if (ball.y < ball.r) ball.vy = Math.abs(ball.vy);
        if (ball.vy > 0 && ball.y + ball.r >= 500 && ball.y < 520 &&
          Math.abs(ball.x - state.paddleX) <= state.paddleWidth / 2 + ball.r) {
          ball.vy = -Math.abs(ball.vy);
          ball.vx += (ball.x - state.paddleX) * 2.2;
          const speed = Math.hypot(ball.vx, ball.vy);
          ball.vx = ball.vx / speed * Math.min(330, speed + 7);
          ball.vy = ball.vy / speed * Math.min(330, speed + 7);
        } else if (ball.y > gameHeight + ball.r) {
          state.lives -= 1;
          if (state.lives <= 0) endGame(`Разбито кристаллов: ${state.bricks.filter((brick) => !brick.alive).length} / 20.`);
          ball.x = state.paddleX;
          ball.y = 480;
          ball.vx = 0;
          ball.vy = 0;
          ball.stuck = true;
        }
        const brick = state.bricks.find((item) => item.alive &&
          ball.x + ball.r > item.x && ball.x - ball.r < item.x + 118 &&
          ball.y + ball.r > item.y && ball.y - ball.r < item.y + 25);
        if (brick) {
          brick.alive = false;
          ball.vy *= -1;
          state.score += 1;
          if (state.bricks.every((item) => !item.alive)) endGame("Все кристаллы разбиты! Отличная игра.", true);
        }
      } else {
        ball.x = state.paddleX;
        ball.y = 480;
      }
    } else if (currentGameId === "starcourier") {
      state.playerX = Math.max(42, Math.min(gameWidth - 42, state.playerX + (Number(movingRight) - Number(movingLeft)) * 390 * delta));
      state.spawn += delta;
      state.shotCooldown = Math.max(0, state.shotCooldown - delta);
      if (gameKeys.has("Space") && state.shotCooldown <= 0) {
        state.bullets.push({ x: state.playerX, y: 465 });
        state.shotCooldown = 0.28;
      }
      if (state.spawn >= 0.85) {
        state.spawn = 0;
        state.objects.push({ x: 50 + Math.random() * (gameWidth - 100), y: -30, phase: Math.random() * 6, speed: 95 + Math.random() * 60 });
      }
      state.bullets = state.bullets.filter((bullet) => {
        bullet.y -= 470 * delta;
        const enemy = state.objects.find((drone) => Math.hypot(drone.x - bullet.x, drone.y - bullet.y) < 25);
        if (enemy) {
          enemy.hit = true;
          state.kills += 1;
          return false;
        }
        return bullet.y > -10;
      });
      state.objects = state.objects.filter((drone) => {
        if (drone.hit) return false;
        drone.y += drone.speed * delta;
        drone.x += Math.sin(state.elapsed * 1.7 + drone.phase) * 35 * delta;
        if (drone.y > 455 && Math.abs(drone.x - state.playerX) < 37 && state.invulnerableTime <= 0) {
          state.lives -= 1;
          state.invulnerableTime = 1;
          return false;
        }
        return drone.y < gameHeight + 20;
      });
      if (state.lives <= 0) endGame(`Курьер сбит. Перехватчиков остановлено: ${state.kills}.`);
      if (state.kills >= 10) endGame("Коридор свободен! Доставка продолжится.", true);
      state.score = state.kills;
    } else if (currentGameId === "snowslalom") {
      state.playerX = Math.max(90, Math.min(gameWidth - 90, state.playerX + (Number(movingRight) - Number(movingLeft)) * 360 * delta));
      state.spawn += delta;
      if (state.spawn >= 0.9) {
        state.spawn = 0;
        state.objects.push({ lane: 90 + Math.floor(Math.random() * 6) * 156, y: -40, speed: 220 + Math.min(100, state.elapsed * 3) });
      }
      state.objects = state.objects.filter((obstacle) => {
        obstacle.y += obstacle.speed * delta;
        if (!obstacle.hit && Math.abs(obstacle.lane - state.playerX) < 48 && obstacle.y > 430 && obstacle.y < 515 && state.invulnerableTime <= 0) {
          state.lives -= 1;
          state.invulnerableTime = 1.2;
          obstacle.hit = true;
        }
        return obstacle.y < gameHeight + 30;
      });
      state.score = Math.floor(state.elapsed * 10);
      if (state.lives <= 0) endGame("Заносы оказались сильнее. Попробуй ещё раз!");
      if (state.elapsed >= 32) endGame("Финиш! Ты уверенно прошёл снежную трассу.", true);
    } else if (currentGameId === "runemath") {
      state.score = state.correctAnswers;
    } else if (currentGameId === "lighthouse") {
      if (gameKeys.has("Space") && state.grounded) {
        state.playerVY = -710;
        state.grounded = false;
      }
      state.playerVY += 1350 * delta;
      state.playerY += state.playerVY * delta;
      if (state.playerY >= 452) {
        state.playerY = 452;
        state.playerVY = 0;
        state.grounded = true;
      }
      state.spawn += delta;
      if (state.spawn >= 1.45) {
        state.spawn = 0;
        state.objects.push({ x: gameWidth + 30, y: 472, w: 34, h: 38, speed: 250 + Math.min(80, state.elapsed * 2) });
      }
      state.objects = state.objects.filter((hazard) => {
        hazard.x -= hazard.speed * delta;
        if (hazard.x < 235 && hazard.x + hazard.w > 190 && state.playerY > 420 && state.invulnerableTime <= 0) {
          state.lives -= 1;
          state.invulnerableTime = 1.1;
          return false;
        }
        return hazard.x > -hazard.w;
      });
      state.score = Math.floor(state.elapsed);
      if (state.lives <= 0) endGame("Путь к маяку оказался непростым. Попробуй ещё раз!");
      if (state.elapsed >= 32) endGame("Маяк найден! Ты добрался до безопасного берега.", true);
    }
  if (currentGameId === "crystals" && state.matched.size === 16) {
    endGame(`Все пары собраны за ${state.attempts} ходов!`, true);
  }
}

function selectRuneAnswer(state, index) {
  if (!state || state.ended || index < 0 || index >= state.choices.length) return;
  if (state.choices[index] === state.question.answer) {
    state.correctAnswers += 1;
    if (state.correctAnswers >= 8) {
      endGame("Восемь рун разгаданы! Ты мастер чисел.", true);
      return;
    }
  } else {
    state.wrongAnswers += 1;
    if (state.wrongAnswers >= 3) {
      endGame(`Правильных ответов: ${state.correctAnswers}. Попробуй ещё раз!`);
      return;
    }
  }
  createRuneQuestion(state);
}

function moveMazePlayer(state, dx, dy) {
  const nextX = state.mazeX + dx;
  const nextY = state.mazeY + dy;
  if (nextY < 0 || nextY >= state.maze.length || nextX < 0 || nextX >= state.maze[0].length) return;
  if (state.maze[nextY][nextX] === "#") return;
  state.mazeX = nextX;
  state.mazeY = nextY;
  state.moves += 1;
  state.mazeMoveTime = 0.14;
  if (state.maze[nextY][nextX] === "E") endGame(`Выход найден за ${state.moves} шагов!`, true);
}

function handleGameAction() {
  if (!gameState || gameState.ended) return;
  const state = gameState;
  if (window.KaganExtraGames.isGame(currentGameId)) {
    window.KaganExtraGames.action(currentGameId, state, gameWidth / 2, gameHeight / 2, endGame);
  } else if (currentGameId === "pulse") {
    if (Math.abs(state.pulseX - state.targetX) <= 43) {
      state.hits += 1;
      state.targetX = 210 + Math.random() * 540;
      if (state.hits >= 10) endGame("Идеальный ритм! Все десять импульсов пойманы.", true);
    } else {
      state.misses += 1;
      if (state.misses >= 3) endGame(`Попаданий: ${state.hits}. Попробуй поймать ритм!`);
    }
  } else if (currentGameId === "tinytower") {
    const previous = state.blocks[state.blocks.length - 1];
    const left = Math.max(previous.x, state.blockX);
    const right = Math.min(previous.x + previous.w, state.blockX + state.blockWidth);
    const width = right - left;
    if (width < 18) {
      endGame(`Башня из ${state.layer} этажей! Попробуй ещё раз.`);
      return;
    }
    state.layer += 1;
    state.blockWidth = width;
    state.blocks.push({ x: left, y: 485 - state.layer * 35, w: width });
    state.blockX = left;
    state.blockDirection *= -1;
    if (state.layer >= 10) endGame("Десять этажей! Башня выдержала ветер.", true);
  }
}

function selectLanternPad(state, pad) {
  if (!state.playerTurn || state.ended) return;
  if (state.sequence[state.playerStep] !== pad) {
    state.lives -= 1;
    if (state.lives <= 0) endGame(`Последовательность пройдена до раунда ${state.round}.`);
    else startLanternRound(state);
    return;
  }
  state.playerStep += 1;
  if (state.playerStep === state.sequence.length) {
    if (state.round >= 5) endGame("Пять раундов пройдены! Ты помнишь каждый огонёк.", true);
    else {
      state.round += 1;
      startLanternRound(state);
    }
  }
}

function drawGame() {
  const ctx = gameContext;
  const state = gameState;
  if (!state) return;
  if (currentGameId === "tacstrike") {
    ctx.clearRect(0, 0, gameWidth, gameHeight);
  } else {
  const gradients = {
    starcatch: ["#102132", "#253358"], starlight: ["#0d1735", "#3b2e66"], honeytrail: ["#2a1b16", "#674a31"], meadowrace: ["#183b2d", "#536f44"], icebreak: ["#153b4a", "#4d6d7f"], dustrunner: ["#2a2217", "#715948"], skyforge: ["#101b2e", "#3b4d6a"], radarjump: ["#0d1b2d", "#31608f"], mosscape: ["#193423", "#425d3f"], glowdrift: ["#1a1832", "#4c2f67"], copperloop: ["#2f1d16", "#6d4b39"], neon: ["#15122e", "#32194b"],
    moonhop: ["#17223a", "#3d4167"], crystals: ["#18253a", "#34294e"],
    tacstrike: ["#263c3c", "#1b2425"], bubblepop: ["#15334d", "#39285f"],
    garden: ["#264b45", "#3e5937"], skycourier: ["#173b68", "#819fc1"],
    pulse: ["#241b3c", "#44255c"], maze: ["#162a34", "#273b41"],
    tinytower: ["#30475e", "#715a47"], coral: ["#123f54", "#174c6b"],
    meteorguard: ["#241d3b", "#552c45"], lantern: ["#26223d", "#493a58"],
    pixelchef: ["#423329", "#73513a"], crystalbreak: ["#1c3750", "#35375d"],
    starcourier: ["#10233d", "#364b75"], snowslalom: ["#38556e", "#b6c6d0"],
    runemath: ["#382b46", "#53406a"], lighthouse: ["#193750", "#825c50"]
  };
  const background = ctx.createLinearGradient(0, 0, gameWidth, gameHeight);
  const colors = gradients[currentGameId] || ["#17343c", "#283750"];
  background.addColorStop(0, colors[0]);
  background.addColorStop(1, colors[1]);
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
  const atmosphere = ctx.createRadialGradient(gameWidth * 0.52, gameHeight * 0.46, 30, gameWidth * 0.52, gameHeight * 0.46, gameWidth * 0.65);
  atmosphere.addColorStop(0, "#a66dff12");
  atmosphere.addColorStop(1, "#07101f35");
  ctx.fillStyle = atmosphere;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
  ctx.save();
  ctx.strokeStyle = "#bceaff";
  ctx.globalAlpha = 0.035;
  ctx.lineWidth = 1;
  for (let x = 32; x < gameWidth; x += 64) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, gameHeight); ctx.stroke();
  }
  for (let y = 32; y < gameHeight; y += 64) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(gameWidth, y); ctx.stroke();
  }
  ctx.restore();
  for (let i = 0; i < 65; i += 1) {
    const x = (i * 137 + 31) % gameWidth;
    const y = (i * 89 + 19 + state.elapsed * (4 + i % 9)) % gameHeight;
    ctx.globalAlpha = 0.3 + (i % 5) * 0.12;
    ctx.fillStyle = "#e7f4ff";
    ctx.beginPath(); ctx.arc(x, y, i % 9 === 0 ? 2 : 1, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
  }
  ctx.textAlign = "center";

  if (window.KaganExtraGames.isGame(currentGameId)) {
    window.KaganExtraGames.draw(currentGameId, state, ctx, gameWidth, gameHeight);
  } else if (currentGameId === "starcatch" || bonusArcadeGames.includes(currentGameId)) {
    drawPlayerShip(ctx, state.playerX, 490, "#aef27b");
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
    if (state.viewMode === "first") drawFirstPersonVehicle(ctx, "#d5f36a");
    else {
      roundedRect(ctx, state.playerX - 26, 455, 52, 76, 13, "#d5f36a");
      roundedRect(ctx, state.playerX - 17, 465, 34, 25, 8, "#a9e7e9");
    }
    state.objects.forEach((obstacle) => roundedRect(ctx, 350 + obstacle.lane * 130 - 25, obstacle.y, 50, 70, 12, "#f2759c"));
    drawHud(ctx, `Дистанция: ${state.score}`, `Жизни: ${"♥".repeat(Math.max(0, state.lives))}`);
  } else if (currentGameId === "moonhop") {
    state.platforms.forEach((platform) => roundedRect(ctx, platform.x, platform.y, platform.w, 13, 6, "#d8e89b"));
    drawPlayerShip(ctx, state.playerX, state.playerY, "#d7adff");
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
  } else if (currentGameId === "bubblepop" || currentGameId === "meteorguard") {
    state.objects.forEach((item) => {
      ctx.fillStyle = currentGameId === "bubblepop" ? "#82e8f0" : "#ff8068";
      ctx.shadowColor = ctx.fillStyle;
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffffff";
      ctx.font = "20px sans-serif";
      ctx.fillText(currentGameId === "bubblepop" ? "○" : "☄", item.x, item.y + 7);
    });
    drawHud(ctx, currentGameId === "bubblepop" ? `Пузырьки: ${state.collected} / 12` : `Метеоры: ${state.collected} / 12`, `Жизни: ${state.lives}`);
  } else if (currentGameId === "garden" || currentGameId === "pixelchef") {
    ctx.fillStyle = currentGameId === "garden" ? "#416247" : "#594638";
    ctx.fillRect(0, 440, gameWidth, 120);
    if (state.viewMode === "first") drawFirstPersonVehicle(ctx, "#a2cf70");
    else {
      ctx.fillStyle = "#a2cf70";
      ctx.fillRect(state.playerX - 38, 476, 76, 28);
      ctx.fillStyle = "#283a2f";
      ctx.fillRect(state.playerX - 31, 482, 62, 18);
    }
    state.objects.forEach((item) => {
      ctx.font = "29px sans-serif";
      ctx.fillStyle = item.bad ? "#f47b74" : "#fff4cf";
      ctx.fillText(currentGameId === "garden" && item.bad ? "✹" : item.ingredient, item.x, item.y + 10);
    });
    if (currentGameId === "garden") drawHud(ctx, `Яблоки: ${state.collected} / 10`, `Жизни: ${"♥".repeat(Math.max(0, state.lives))}`);
    else drawHud(ctx, `Заказы: ${state.dishes} / 3`, `Рецепт: ${state.recipe.slice(state.recipeStep).join(" ")}`);
  } else if (currentGameId === "skycourier" || currentGameId === "coral") {
    for (let i = 0; i < 8; i += 1) {
      ctx.globalAlpha = 0.16;
      ctx.fillStyle = currentGameId === "skycourier" ? "#d9ebff" : "#72d9df";
      ctx.beginPath();
      ctx.ellipse((i * 147 + 40) % gameWidth, (i * 91 + 75) % gameHeight, 45, 18, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    state.objects.forEach((item) => {
      ctx.fillStyle = item.bad ? "#ff786e" : "#f5e995";
      ctx.font = "25px sans-serif";
      ctx.fillText(item.icon, item.x, item.y + 8);
    });
    drawPlayerShip(ctx, state.playerX, state.playerY, currentGameId === "skycourier" ? "#f5e995" : "#8aebdd");
    drawHud(ctx, currentGameId === "skycourier" ? `Посылки: ${state.collected} / 8` : `Жемчуг: ${state.collected} / 7`, `Жизни: ${"♥".repeat(Math.max(0, state.lives))}`);
  } else if (currentGameId === "pulse") {
    ctx.strokeStyle = "#b49beb";
    ctx.lineWidth = 10;
    ctx.beginPath(); ctx.moveTo(90, 280); ctx.lineTo(870, 280); ctx.stroke();
    ctx.fillStyle = "#a7e86d66";
    ctx.fillRect(state.targetX - 43, 235, 86, 90);
    ctx.fillStyle = "#f3dc83";
    ctx.shadowColor = "#f3dc83"; ctx.shadowBlur = 18;
    ctx.beginPath(); ctx.arc(state.pulseX, 280, 18, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
    drawHud(ctx, `Попадания: ${state.hits} / 10`, `Промахи: ${state.misses} / 3`);
  } else if (currentGameId === "maze") {
    const size = 62, left = (gameWidth - size * 12) / 2, top = 62;
    state.maze.forEach((row, y) => [...row].forEach((cell, x) => {
      const px = left + x * size, py = top + y * size;
      ctx.fillStyle = cell === "#" ? "#52646a" : "#243b40";
      ctx.fillRect(px + 2, py + 2, size - 4, size - 4);
      if (cell === "E") {
        ctx.fillStyle = "#d6f583"; ctx.font = "30px sans-serif"; ctx.fillText("✦", px + size / 2, py + 43);
      }
      if (x === state.mazeX && y === state.mazeY && state.viewMode === "third") {
        ctx.fillStyle = "#ffe67b"; ctx.shadowColor = "#ffe67b"; ctx.shadowBlur = 16;
        ctx.beginPath(); ctx.arc(px + size / 2, py + size / 2, 15, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
      } else if (x === state.mazeX && y === state.mazeY) {
        ctx.strokeStyle = "#ffe67b"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(px + size / 2, py + size / 2, 23, 0, Math.PI * 2); ctx.stroke();
      }
    }));
    drawHud(ctx, "Лабиринт светлячка", `Шаги: ${state.moves}`);
  } else if (currentGameId === "tinytower") {
    ctx.fillStyle = "#d1b184";
    ctx.fillRect(130, 496, 700, 12);
    state.blocks.forEach((block, index) => roundedRect(ctx, block.x, block.y, block.w, 34, 5, index % 2 ? "#efb96f" : "#f3d281"));
    roundedRect(ctx, state.blockX, 485 - (state.layer + 1) * 35, state.blockWidth, 34, 5, "#a8e879");
    drawHud(ctx, `Этажи: ${state.layer} / 10`, "Поставь блок точно");
  } else if (currentGameId === "lantern") {
    const colors = ["#fb786d", "#f2d46e", "#72d6a0", "#7eabfa"];
    colors.forEach((color, index) => {
      const x = 330 + (index % 2) * 165, y = 145 + Math.floor(index / 2) * 165;
      roundedRect(ctx, x, y, 135, 135, 20, state.litPad === index ? "#ffffff" : color);
      ctx.globalAlpha = state.litPad === index ? 1 : 0.72;
      ctx.fillStyle = state.litPad === index ? color : "#ffffff";
      ctx.beginPath(); ctx.arc(x + 67, y + 67, 29, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
    });
    drawHud(ctx, `Раунд: ${state.round} / 5`, state.playerTurn ? "Твоя очередь" : "Запоминай последовательность");
  } else if (currentGameId === "crystalbreak") {
    state.bricks.forEach((brick, index) => {
      if (brick.alive) roundedRect(ctx, brick.x, brick.y, 118, 25, 5, ["#9bd8e0", "#b8a3ed", "#f1cc76", "#83d6ad"][Math.floor(index / 5)]);
    });
    roundedRect(ctx, state.paddleX - state.paddleWidth / 2, 510, state.paddleWidth, 14, 7, "#d5f36a");
    ctx.fillStyle = "#f3f3ef";
    ctx.shadowColor = "#f3f3ef"; ctx.shadowBlur = 12;
    ctx.beginPath(); ctx.arc(state.ball.x, state.ball.y, state.ball.r, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
    drawHud(ctx, `Кристаллы: ${state.score} / 20`, `Жизни: ${"♥".repeat(Math.max(0, state.lives))}`);
    if (state.ball.stuck) {
      ctx.fillStyle = "#f4f1e9"; ctx.font = "15px 'DM Sans', sans-serif";
      ctx.fillText("Пробел — подать шар", gameWidth / 2, 400);
    }
  } else if (currentGameId === "starcourier") {
    state.objects.forEach((drone) => {
      ctx.fillStyle = "#f1858b"; ctx.font = "25px sans-serif";
      ctx.fillText("✹", drone.x, drone.y + 8);
    });
    state.bullets.forEach((bullet) => {
      ctx.fillStyle = "#f3e583"; ctx.fillRect(bullet.x - 3, bullet.y - 10, 6, 16);
    });
    drawPlayerShip(ctx, state.playerX, 500, state.invulnerableTime > 0 ? "#ffffff" : "#8fe5ed");
    drawHud(ctx, `Перехватчики: ${state.kills} / 10`, `Жизни: ${"♥".repeat(Math.max(0, state.lives))}`);
  } else if (currentGameId === "snowslalom") {
    ctx.fillStyle = "#dce8eb"; ctx.fillRect(0, 450, gameWidth, 110);
    ctx.strokeStyle = "#ffffff88"; ctx.lineWidth = 3; ctx.setLineDash([18, 20]); ctx.lineDashOffset = -state.elapsed * 90;
    for (let lane = 1; lane < 6; lane += 1) {
      ctx.beginPath(); ctx.moveTo(lane * 156, 0); ctx.lineTo(lane * 156, gameHeight); ctx.stroke();
    }
    ctx.setLineDash([]);
    state.objects.forEach((obstacle) => {
      ctx.fillStyle = "#7c91a0"; ctx.beginPath(); ctx.moveTo(obstacle.lane, obstacle.y - 22); ctx.lineTo(obstacle.lane + 24, obstacle.y + 22); ctx.lineTo(obstacle.lane - 24, obstacle.y + 22); ctx.closePath(); ctx.fill();
    });
    if (state.viewMode === "first") drawFirstPersonVehicle(ctx, "#d5f36a");
    else roundedRect(ctx, state.playerX - 22, 460, 44, 62, 13, "#d5f36a");
    drawHud(ctx, `Финиш: ${Math.min(100, Math.floor(state.elapsed / 32 * 100))}%`, `Жизни: ${"♥".repeat(Math.max(0, state.lives))}`);
  } else if (currentGameId === "runemath") {
    ctx.fillStyle = "#fff5d7"; ctx.font = "700 60px Manrope, sans-serif";
    ctx.fillText(state.question.text, gameWidth / 2, 220);
    state.choices.forEach((choice, index) => {
      const x = 170 + (index % 2) * 330, y = 280 + Math.floor(index / 2) * 105;
      roundedRect(ctx, x, y, 270, 76, 14, "#755d91");
      ctx.fillStyle = "#ffffff"; ctx.font = "600 28px Manrope, sans-serif";
      ctx.fillText(`${index + 1}. ${choice}`, x + 135, y + 49);
    });
    drawHud(ctx, `Верно: ${state.correctAnswers} / 8`, `Ошибки: ${state.wrongAnswers} / 3`);
  } else if (currentGameId === "lighthouse") {
    ctx.fillStyle = "#c5a979"; ctx.fillRect(0, 486, gameWidth, 74);
    ctx.fillStyle = "#293a4b"; ctx.fillRect(770, 230, 90, 256);
    ctx.fillStyle = "#f5e4ae"; ctx.fillRect(797, 256, 36, 34);
    ctx.fillStyle = "#ffd877"; ctx.globalAlpha = 0.22; ctx.beginPath(); ctx.moveTo(815, 270); ctx.lineTo(960, 190); ctx.lineTo(960, 365); ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1;
    state.objects.forEach((hazard) => roundedRect(ctx, hazard.x, hazard.y, hazard.w, hazard.h, 8, "#7d6259"));
    drawPlayerShip(ctx, 210, state.playerY, state.invulnerableTime > 0 ? "#ffffff" : "#a9e6f2");
    drawHud(ctx, `До маяка: ${Math.max(0, 32 - Math.floor(state.elapsed))} сек.`, `Жизни: ${"♥".repeat(Math.max(0, state.lives))}`);
  }
  if (state.viewMode === "first") drawFirstPersonOverlay(ctx);
  if (state.ended) {
    ctx.fillStyle = "#080b16bb"; ctx.fillRect(0, 0, gameWidth, gameHeight);
    ctx.fillStyle = "#f4f1e9"; ctx.font = "700 38px Manrope, sans-serif"; ctx.fillText("Игра окончена", gameWidth / 2, 235);
    ctx.fillStyle = "#d5f36a"; ctx.font = "20px 'DM Sans', sans-serif"; ctx.fillText(state.endMessage || `Счёт: ${state.score}`, gameWidth / 2, 280);
    ctx.fillStyle = "#c4c5d1"; ctx.font = "15px 'DM Sans', sans-serif"; ctx.fillText("Нажми «Начать заново», чтобы сыграть ещё раз", gameWidth / 2, 325);
  }
  drawGameBrand(ctx);
}

function roundedRect(ctx, x, y, width, height, radius, fill) {
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
  ctx.fill();
}

function drawPlayerShip(ctx, x, y, color) {
  if (gameState.viewMode === "first") drawFirstPersonVehicle(ctx, color);
  else drawShip(ctx, x, y, color);
}

function drawFirstPersonVehicle(ctx, color) {
  ctx.save();
  ctx.fillStyle = "#111827";
  ctx.globalAlpha = 0.86;
  ctx.beginPath();
  ctx.moveTo(315, 560); ctx.lineTo(382, 492); ctx.lineTo(578, 492); ctx.lineTo(645, 560);
  ctx.closePath(); ctx.fill();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.shadowColor = color;
  ctx.shadowBlur = 13;
  ctx.beginPath();
  ctx.moveTo(380, 560); ctx.lineTo(414, 508); ctx.lineTo(546, 508); ctx.lineTo(580, 560);
  ctx.stroke();
  ctx.shadowBlur = 0;
  roundedRect(ctx, 450, 512, 60, 7, 4, color);
  ctx.restore();
}

function drawFirstPersonOverlay(ctx) {
  ctx.save();
  const vignette = ctx.createRadialGradient(gameWidth / 2, gameHeight / 2, 150, gameWidth / 2, gameHeight / 2, 570);
  vignette.addColorStop(0, "#05091500");
  vignette.addColorStop(1, "#050915b8");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
  ctx.strokeStyle = "#a9e6f248";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(18, 76); ctx.lineTo(18, 56); ctx.lineTo(38, 56);
  ctx.moveTo(gameWidth - 18, 76); ctx.lineTo(gameWidth - 18, 56); ctx.lineTo(gameWidth - 38, 56);
  ctx.moveTo(18, gameHeight - 76); ctx.lineTo(18, gameHeight - 56); ctx.lineTo(38, gameHeight - 56);
  ctx.moveTo(gameWidth - 18, gameHeight - 76); ctx.lineTo(gameWidth - 18, gameHeight - 56); ctx.lineTo(gameWidth - 38, gameHeight - 56);
  ctx.stroke();
  if (!["runemath", "crystals", "lantern"].includes(currentGameId)) {
    ctx.strokeStyle = "#e5fbf5b0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(gameWidth / 2, gameHeight / 2, 12, 0, Math.PI * 2);
    ctx.moveTo(gameWidth / 2 - 20, gameHeight / 2); ctx.lineTo(gameWidth / 2 - 7, gameHeight / 2);
    ctx.moveTo(gameWidth / 2 + 7, gameHeight / 2); ctx.lineTo(gameWidth / 2 + 20, gameHeight / 2);
    ctx.moveTo(gameWidth / 2, gameHeight / 2 - 20); ctx.lineTo(gameWidth / 2, gameHeight / 2 - 7);
    ctx.moveTo(gameWidth / 2, gameHeight / 2 + 7); ctx.lineTo(gameWidth / 2, gameHeight / 2 + 20);
    ctx.stroke();
  }
  ctx.restore();
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
    if (Number.isFinite(enemy.screenX) && Number.isFinite(enemy.screenY)) {
      return Math.hypot(state.crosshairX - enemy.screenX, state.crosshairY - enemy.screenY) < (enemy.hitRadius || 30);
    }
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
    state.levelKills += 1;
  }
}

function startTacticalReload(state) {
  if (state.reloadTime > 0 || state.ammo === 12 || state.reserveAmmo === 0) return;
  state.reloadTime = 1.1;
}

function drawTacticalScene(ctx, state) {
  try {
    window.KaganTacstrike3D.render(document.querySelector("#tacstrike-3d-canvas"), state);
  } catch (error) {
    if (!state.webglFailed) {
      console.error("Не удалось отрисовать 3D-сцену тактической игры:", error.message);
      showToast("3D-графика недоступна в этом браузере. Перезапусти игру или попробуй другой браузер.");
      state.webglFailed = true;
    }
    drawTacticalScene2D(ctx, state);
    return;
  }
  ctx.save();
  ctx.strokeStyle = "#e9f4e5";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(state.crosshairX - 13, state.crosshairY); ctx.lineTo(state.crosshairX - 4, state.crosshairY);
  ctx.moveTo(state.crosshairX + 4, state.crosshairY); ctx.lineTo(state.crosshairX + 13, state.crosshairY);
  ctx.moveTo(state.crosshairX, state.crosshairY - 13); ctx.lineTo(state.crosshairX, state.crosshairY - 4);
  ctx.moveTo(state.crosshairX, state.crosshairY + 4); ctx.lineTo(state.crosshairX, state.crosshairY + 13);
  ctx.stroke();
  ctx.fillStyle = "#e9f4e5";
  ctx.beginPath(); ctx.arc(state.crosshairX, state.crosshairY, 1.5, 0, Math.PI * 2); ctx.fill();
  const map = tacticalMaps[state.mapIndex];
  roundedRect(ctx, 22, 48, 210, 47, 7, "#101716bb");
  ctx.fillStyle = "#f1f0e6"; ctx.textAlign = "left"; ctx.font = "600 15px 'DM Sans', sans-serif";
  ctx.fillText(`КАРТА: ${map.name.toLocaleUpperCase("ru")}`, 34, 68);
  ctx.fillStyle = "#c7d0c0"; ctx.font = "12px 'DM Sans', sans-serif";
  ctx.fillText(`Уровень ${state.level}/10 · ${state.health}% · ${state.levelKills}/${state.targets.length}`, 34, 86);
  ctx.textAlign = "right"; ctx.fillStyle = "#f1f0e6"; ctx.font = "600 15px 'DM Sans', sans-serif";
  ctx.fillText(state.reloadTime > 0 ? "ПЕРЕЗАРЯДКА…" : `${state.ammo} / ${state.reserveAmmo}`, gameWidth - 25, 67);
  ctx.textAlign = "center"; ctx.fillStyle = "#f2e0a8"; ctx.font = "600 13px 'DM Sans', sans-serif";
  ctx.fillText(`АВИАУДАР  E × ${state.airSupport}`, gameWidth / 2, 66);
  if (state.levelTransition > 0) {
    ctx.font = "700 22px 'DM Sans', sans-serif";
    ctx.fillText(`УРОВЕНЬ ${state.level} / 10`, gameWidth / 2, 120);
  }
  ctx.restore();
}

function drawTacticalScene2D(ctx, state) {
  const map = tacticalMaps[state.mapIndex];
  const sky = ctx.createLinearGradient(0, 0, 0, 365);
  sky.addColorStop(0, map.sky[0]);
  sky.addColorStop(1, map.sky[1]);
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, gameWidth, 365);

  if (map.id === "canyon") {
    for (let index = 0; index < 5; index += 1) {
      const x = index * 245 - state.cameraX * 0.14;
      ctx.fillStyle = index % 2 ? "#986548" : "#b17a55";
      ctx.beginPath();
      ctx.moveTo(x - 100, 270); ctx.lineTo(x + 55, 90 + (index % 3) * 25); ctx.lineTo(x + 205, 270);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#d4a275";
      ctx.beginPath(); ctx.moveTo(x + 30, 174); ctx.lineTo(x + 55, 90 + (index % 3) * 25); ctx.lineTo(x + 83, 178); ctx.closePath(); ctx.fill();
    }
  } else if (map.id === "snowbase") {
    for (let index = 0; index < 5; index += 1) {
      const x = index * 245 - state.cameraX * 0.14;
      ctx.fillStyle = index % 2 ? "#9eb7c0" : "#c5d8dc";
      ctx.beginPath(); ctx.moveTo(x - 110, 265); ctx.lineTo(x + 45, 105 + (index % 3) * 25); ctx.lineTo(x + 210, 265); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#eff6f3";
      ctx.beginPath(); ctx.moveTo(x + 18, 160); ctx.lineTo(x + 45, 105 + (index % 3) * 25); ctx.lineTo(x + 78, 162); ctx.closePath(); ctx.fill();
      roundedRect(ctx, x + 75, 204, 94, 58, 6, "#647d88");
      ctx.fillStyle = "#bde1e7"; ctx.fillRect(x + 88, 216, 18, 14); ctx.fillRect(x + 138, 216, 18, 14);
    }
  } else {
    for (let index = 0; index < 4; index += 1) {
      const x = index * 280 - state.cameraX * 0.18;
      ctx.fillStyle = "#657278";
      ctx.fillRect(x + 45, 152, 12, 112);
      ctx.fillRect(x + 185, 152, 12, 112);
      ctx.strokeStyle = "#68736e"; ctx.lineWidth = 8;
      ctx.beginPath(); ctx.moveTo(x + 50, 155); ctx.lineTo(x + 193, 155); ctx.lineTo(x + 162, 194); ctx.stroke();
      roundedRect(ctx, x + 82, 204, 98, 58, 4, index % 2 ? "#a35d43" : "#647a78");
      ctx.fillStyle = "#d6a16e"; ctx.fillRect(x + 92, 215, 78, 4); ctx.fillRect(x + 92, 232, 78, 4);
    }
  }

  ctx.fillStyle = map.ground[0];
  ctx.fillRect(0, 244, gameWidth, 110);
  const ground = ctx.createLinearGradient(0, 275, 0, gameHeight);
  ground.addColorStop(0, map.ground[0]);
  ground.addColorStop(1, map.ground[1]);
  ctx.fillStyle = ground;
  ctx.beginPath();
  ctx.moveTo(0, 287);
  ctx.lineTo(gameWidth, 287);
  ctx.lineTo(gameWidth, gameHeight);
  ctx.lineTo(0, gameHeight);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = map.accent;
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
  state.enemyBullets.forEach((bullet) => {
    ctx.fillStyle = "#ff9b62";
    ctx.shadowColor = "#ff7048"; ctx.shadowBlur = 14;
    ctx.beginPath(); ctx.arc(bullet.x, bullet.y, 6, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0;
  });

  (state.airstrikeRuns || []).forEach((run) => {
    const targetX = run.target.x - state.cameraX;
    const targetY = run.target.y + state.cameraY;
    if (!run.impacted) {
      const flightProgress = Math.min(1, run.flight / 0.7);
      ctx.save();
      ctx.setLineDash([7, 6]);
      ctx.strokeStyle = "#ffd36dcc";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(targetX, targetY + 12, 33 + Math.sin(state.elapsed * 9) * 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "#ffe8a8";
      ctx.font = "700 11px 'DM Sans', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("!", targetX, targetY - 32);

      if (run.delay <= 0) {
        const planeX = targetX + 150 - flightProgress * 150;
        const bombY = 118 + flightProgress * Math.max(0, targetY - 118);
        ctx.strokeStyle = "#ffe29b88";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(planeX, 121);
        ctx.lineTo(targetX, bombY - 7);
        ctx.stroke();
        ctx.fillStyle = "#f4f1e9";
        ctx.beginPath();
        ctx.moveTo(planeX - 20, 112);
        ctx.lineTo(planeX + 20, 119);
        ctx.lineTo(planeX - 16, 126);
        ctx.lineTo(planeX - 9, 119);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "#ffd36d";
        ctx.beginPath();
        ctx.ellipse(targetX, bombY, 4, 8, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  });
  (state.airstrikeEffects || []).forEach((effect) => {
    const progress = Math.min(1, effect.age / 1.35);
    const radius = 18 + progress * 66;
    ctx.save();
    ctx.globalAlpha = 1 - progress;
    ctx.strokeStyle = "#ffd36d";
    ctx.lineWidth = Math.max(1, 5 - progress * 4);
    ctx.beginPath();
    ctx.arc(effect.x, effect.y + 12, radius, 0, Math.PI * 2);
    ctx.stroke();
    for (let puff = 0; puff < 7; puff += 1) {
      const angle = puff * Math.PI * 2 / 7 + effect.seed;
      const distance = 10 + progress * 28;
      const puffRadius = 11 + progress * 15;
      ctx.fillStyle = puff % 2 ? "#a4aaa0" : "#d4b782";
      ctx.beginPath();
      ctx.arc(effect.x + Math.cos(angle) * distance, effect.y - 4 + Math.sin(angle) * distance * 0.6, puffRadius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = (1 - progress) * 0.9;
    ctx.fillStyle = "#fff0b1";
    for (let spark = 0; spark < 5; spark += 1) {
      const angle = spark * Math.PI * 2 / 5 + effect.seed;
      const distance = 24 + progress * 36;
      ctx.beginPath();
      ctx.arc(effect.x + Math.cos(angle) * distance, effect.y + Math.sin(angle) * distance, 3 * (1 - progress) + 1, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  });

  if (state.viewMode === "first") {
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
  } else {
    ctx.fillStyle = "#182020";
    ctx.beginPath();
    ctx.ellipse(state.playerX, 523, 46, 25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#62756d";
    ctx.fillRect(state.playerX - 15, 487, 30, 38);
    ctx.fillStyle = "#d1b89a";
    ctx.beginPath(); ctx.arc(state.playerX, 478, 13, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#a9e6f2";
    ctx.shadowColor = "#a9e6f2"; ctx.shadowBlur = 12;
    ctx.fillRect(state.playerX - 8, 476, 6, 3); ctx.fillRect(state.playerX + 2, 476, 6, 3);
    ctx.shadowBlur = 0;
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
  ctx.fillText(`КАРТА: ${map.name.toLocaleUpperCase("ru")}`, 34, 68);
  ctx.fillStyle = "#c7d0c0";
  ctx.font = "12px 'DM Sans', sans-serif";
  ctx.fillText(`Уровень ${state.level}/10 · ${state.health}% · ${state.levelKills}/${state.targets.length}`, 34, 86);
  ctx.textAlign = "right";
  ctx.fillStyle = "#f1f0e6";
  ctx.font = "600 15px 'DM Sans', sans-serif";
  ctx.fillText(state.reloadTime > 0 ? "ПЕРЕЗАРЯДКА…" : `${state.ammo} / ${state.reserveAmmo}`, gameWidth - 25, 67);
  ctx.textAlign = "center";
  ctx.fillStyle = "#f2e0a8";
  ctx.font = "600 13px 'DM Sans', sans-serif";
  ctx.fillText(`АВИАУДАР  E × ${state.airSupport}`, gameWidth / 2, 66);
  if (state.reloadTime > 0) {
    ctx.fillStyle = "#f2e0a8";
    ctx.font = "600 13px 'DM Sans', sans-serif";
    ctx.fillText("Перезарядка", gameWidth / 2, 38);
  }
  if (state.levelTransition > 0) {
    ctx.fillStyle = "#f2e0a8";
    ctx.font = "700 22px 'DM Sans', sans-serif";
    ctx.fillText(`УРОВЕНЬ ${state.level} / 10`, gameWidth / 2, 120);
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
  ctx.save();
  ctx.font = "600 17px 'DM Sans', sans-serif";
  const leftWidth = Math.min(gameWidth * 0.42, ctx.measureText(left).width + 25);
  const rightWidth = Math.min(gameWidth * 0.42, ctx.measureText(right).width + 25);
  roundedRect(ctx, 14, 10, leftWidth, 34, 9, "#090d18cc");
  roundedRect(ctx, gameWidth - rightWidth - 14, 10, rightWidth, 34, 9, "#090d18cc");
  ctx.strokeStyle = "#a9e6f233";
  ctx.lineWidth = 1;
  ctx.strokeRect(14.5, 10.5, leftWidth - 1, 33);
  ctx.strokeRect(gameWidth - rightWidth - 13.5, 10.5, rightWidth - 1, 33);
  ctx.textAlign = "left";
  ctx.fillStyle = "#f4f1e9";
  ctx.fillText(left, 26, 33);
  ctx.textAlign = "right";
  ctx.fillStyle = "#c7d3db";
  ctx.fillText(right, gameWidth - 26, 33);
  ctx.restore();
}

function drawGameBrand(ctx) {
  ctx.save();
  roundedRect(ctx, gameWidth / 2 - 56, 10, 112, 34, 9, "#090d18d9");
  ctx.strokeStyle = "#a9e6f24d";
  ctx.lineWidth = 1;
  ctx.strokeRect(gameWidth / 2 - 55.5, 10.5, 111, 33);
  roundedRect(ctx, gameWidth / 2 - 48, 16, 22, 22, 6, "#d5f36a");
  ctx.fillStyle = "#172016";
  ctx.font = "800 10px Manrope, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("KG", gameWidth / 2 - 37, 31);
  ctx.fillStyle = "#e9f4f4";
  ctx.textAlign = "left";
  ctx.font = "700 8px Manrope, sans-serif";
  ctx.fillText("KAGAN", gameWidth / 2 - 20, 25);
  ctx.fillStyle = "#a9e6f2";
  ctx.font = "600 7px Manrope, sans-serif";
  ctx.fillText("GAMES", gameWidth / 2 - 20, 34);
  ctx.restore();
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
  document.querySelector("#game-score").textContent = currentGameId === "pongduel"
    ? `Счёт: ${gameState.score} — ${gameState.opponent} / 5`
    : currentGameId === "snakegarden"
      ? `Яблоки: ${gameState.score} / 12`
    : currentGameId === "flapcloud"
      ? `Ворота: ${gameState.passed} / 10`
    : currentGameId === "mineralmines"
      ? `Клетки: ${gameState.score} / 53`
    : currentGameId === "numberforge"
      ? `Лучшая руна: ${Math.max(...gameState.board)} / 128`
    : currentGameId === "boxvoyage"
      ? `Ходы: ${gameState.moves}`
    : currentGameId === "lightmatrix"
      ? `Ходы: ${gameState.moves}`
    : currentGameId === "bullseye"
      ? `Попадания: ${gameState.hits} / 10 · Стрелы: ${gameState.arrows}`
    : currentGameId === "skylinehop"
      ? `Препятствия: ${gameState.passed} / 12`
    : currentGameId === "starinvaders"
      ? `Дроны: ${gameState.score} / 18`
    : currentGameId === "towercraft"
      ? `Этажи: ${gameState.layer} / 12`
    : currentGameId === "deepmaze"
      ? `Шаги: ${gameState.moves} · Ключ: ${gameState.key ? "да" : "нет"}`
    : currentGameId === "beatlanes"
      ? `Ноты: ${gameState.hits} / 12 · Промахи: ${gameState.misses} / 5`
    : currentGameId === "pipeworks"
      ? `Повороты: ${gameState.turns}`
    : currentGameId === "minigolf"
      ? `Удары: ${gameState.strokes}`
    : currentGameId === "colorshift"
      ? `Совпадения: ${gameState.passed} / 10 · Ошибки: ${-Math.min(0, gameState.score)}`
    : currentGameId === "quickdraw"
      ? `Раунд: ${gameState.rounds} / 5`
    : currentGameId === "blockdrop"
      ? `Линии: ${gameState.lines} / 4`
    : currentGameId === "harborcatch"
      ? `Рыбы: ${gameState.catches} / 10 · Медузы: ${gameState.misses} / 4`
    : currentGameId === "pairgarden"
      ? `Пары: ${gameState.found.size / 2} / 6 · Время: ${Math.ceil(gameState.time)}`
    : currentGameId === "crystals"
    ? `Ходы: ${gameState.attempts} · Пары: ${gameState.matched.size / 2} / 8`
    : currentGameId === "tacstrike"
      ? `Уровень ${gameState.level} / 10 · Всего ботов: ${gameState.kills} · ${gameState.ammo} / ${gameState.reserveAmmo}`
      : currentGameId === "lantern"
        ? `Раунд ${gameState.round} / 5 · Ошибки: ${3 - gameState.lives}`
      : currentGameId === "maze"
        ? `Шаги: ${gameState.moves}`
    : `Счёт: ${gameState.score}`;
  gameFrameId = requestAnimationFrame(runGameFrame);
}

function canvasPoint(event) {
  const bounds = gameCanvas.getBoundingClientRect();
  return { x: (event.clientX - bounds.left) * gameWidth / bounds.width, y: (event.clientY - bounds.top) * gameHeight / bounds.height };
}

document.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite-game]");
  if (favoriteButton) {
    event.stopPropagation();
    toggleFavoriteGame(favoriteButton.dataset.favoriteGame);
    return;
  }
  const avatarButton = event.target.closest("[data-avatar]");
  if (avatarButton && avatarOptions.includes(avatarButton.dataset.avatar)) {
    const previousAvatar = gamePreferences.avatar;
    gamePreferences.avatar = avatarButton.dataset.avatar;
    if (!saveGamePreferences()) gamePreferences.avatar = previousAvatar;
    renderProfile();
    return;
  }
  const button = event.target.closest("[data-play-game]");
  if (button) startGame(button.dataset.playGame);
});

document.querySelector("#close-game").addEventListener("click", () => document.querySelector("#game-dialog").close());
document.querySelector("#restart-game").addEventListener("click", () => startGame(currentGameId));
document.querySelector("#tactical-support").addEventListener("click", () => {
  if (currentGameId === "tacstrike" && gameState) requestTacticalAirSupport(gameState);
});
document.querySelectorAll("[data-view-mode]").forEach((button) => button.addEventListener("click", () => {
  if (!gameState) return;
  const previousMode = gamePreferences.viewMode;
  gamePreferences.viewMode = button.dataset.viewMode;
  gameState.viewMode = gamePreferences.viewMode;
  if (!saveGamePreferences()) {
    gamePreferences.viewMode = previousMode;
    gameState.viewMode = previousMode;
  }
  document.querySelectorAll("[data-view-mode]").forEach((option) => {
    const active = option.dataset.viewMode === gameState.viewMode;
    option.classList.toggle("active", active);
    option.setAttribute("aria-pressed", String(active));
  });
  drawGame();
}));
document.querySelector("#cosmetic-shop").addEventListener("click", (event) => {
  const button = event.target.closest("[data-cosmetic]");
  if (button) purchaseOrEquipCosmetic(button.dataset.cosmetic);
});
document.querySelector("#game-dialog").addEventListener("close", () => {
  cancelAnimationFrame(gameFrameId);
  gameKeys.clear();
  document.querySelector("#game-view-switch").hidden = false;
});
document.addEventListener("keydown", (event) => {
  if (!document.querySelector("#game-dialog").open) return;
  if (currentGameId === "tacstrike" && event.code === "KeyR" && gameState) {
    event.preventDefault();
    startTacticalReload(gameState);
  }
  if (currentGameId === "tacstrike" && event.code === "KeyE" && !event.repeat && gameState) {
    event.preventDefault();
    requestTacticalAirSupport(gameState);
  }
  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(event.key)) event.preventDefault();
  if (event.key === "Escape") document.querySelector("#game-dialog").close();
  if (window.KaganExtraGames.isGame(currentGameId) && gameState) {
    window.KaganExtraGames.key(currentGameId, gameState, event.code, endGame);
  }
  if (event.code === "Space" && !event.repeat && ["pulse", "tinytower"].includes(currentGameId)) handleGameAction();
  if (currentGameId === "runemath" && /^Digit[1-4]$/.test(event.code)) selectRuneAnswer(gameState, Number(event.code.slice(-1)) - 1);
  gameKeys.add(event.code);
});
document.addEventListener("keyup", (event) => gameKeys.delete(event.code));
gameCanvas.addEventListener("pointerdown", (event) => {
  const point = canvasPoint(event);
  if (event.button === 2 && currentGameId === "mineralmines") event.preventDefault();
  if (gameState && !gameState.ended && window.KaganExtraGames.action(currentGameId, gameState, point.x, point.y, endGame, event)) return;
  if (currentGameId === "tacstrike" && gameState && !gameState.ended) {
    gameState.crosshairX = point.x;
    gameState.crosshairY = point.y;
    fireTacticalWeapon(gameState);
    return;
  }
  if (!gameState || gameState.ended) return;
  if (currentGameId === "bubblepop" || currentGameId === "meteorguard") {
    const index = gameState.objects.findIndex((item) => Math.hypot(item.x - point.x, item.y - point.y) <= item.r + 12);
    if (index >= 0) {
      gameState.objects.splice(index, 1);
      gameState.collected += 1;
      gameState.score = gameState.collected * 10;
    }
    return;
  }
  if (currentGameId === "pulse" || currentGameId === "tinytower") {
    handleGameAction();
    return;
  }
  if (currentGameId === "lantern") {
    const column = Math.floor((point.x - 330) / 165);
    const row = Math.floor((point.y - 145) / 165);
    if (column >= 0 && column < 2 && row >= 0 && row < 2) selectLanternPad(gameState, row * 2 + column);
    return;
  }
  if (currentGameId === "maze") {
    const size = 62, left = (gameWidth - size * 12) / 2, top = 62;
    const targetX = Math.floor((point.x - left) / size), targetY = Math.floor((point.y - top) / size);
    const dx = targetX - gameState.mazeX, dy = targetY - gameState.mazeY;
    if (Math.abs(dx) + Math.abs(dy) === 1) moveMazePlayer(gameState, dx, dy);
    return;
  }
  if (currentGameId === "runemath") {
    const column = Math.floor((point.x - 170) / 330);
    const row = Math.floor((point.y - 280) / 105);
    if (column >= 0 && column < 2 && row >= 0 && row < 2) selectRuneAnswer(gameState, row * 2 + column);
    return;
  }
  if (currentGameId === "crystalbreak") {
    gameState.paddleX = Math.max(70, Math.min(gameWidth - 70, point.x));
    return;
  }
  if (currentGameId === "lighthouse") {
    if (gameState.grounded) {
      gameState.playerVY = -710;
      gameState.grounded = false;
    }
    return;
  }
  if (currentGameId === "starcourier") {
    gameState.playerX = Math.max(42, Math.min(gameWidth - 42, point.x));
    gameState.bullets.push({ x: gameState.playerX, y: 465 });
    return;
  }
  if (currentGameId === "crystals") {
    if (gameState.lockTime > 0 || gameState.opened.length >= 2) return;
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
    return;
  }
  if (["starcatch", "neon", "moonhop", "garden", "pixelchef", "skycourier", "coral", "snowslalom", "starcourier"].includes(currentGameId)) {
    gameState.playerX = Math.max(35, Math.min(gameWidth - 35, point.x));
    if (["skycourier", "coral"].includes(currentGameId)) gameState.playerY = Math.max(80, Math.min(500, point.y));
    if (currentGameId === "moonhop" && gameState.grounded) {
      gameState.playerVY = -610;
      gameState.grounded = false;
    }
  }
});
gameCanvas.addEventListener("pointermove", (event) => {
  if (!gameState || gameState.ended) return;
  if (window.KaganExtraGames.pointerMove(currentGameId, gameState, canvasPoint(event).x, canvasPoint(event).y)) return;
  if (currentGameId === "tacstrike") {
    const point = canvasPoint(event);
    gameState.crosshairX = point.x;
    gameState.crosshairY = point.y;
    return;
  }
  if (["crystals", "maze", "bubblepop", "meteorguard", "pulse", "tinytower", "lantern", "runemath", "lighthouse"].includes(currentGameId)) return;
  if (event.pointerType === "touch" || event.buttons === 1) {
    const point = canvasPoint(event);
    if (currentGameId === "crystalbreak") {
      gameState.paddleX = Math.max(70, Math.min(gameWidth - 70, point.x));
      return;
    }
    gameState.playerX = Math.max(35, Math.min(gameWidth - 35, point.x));
    if (["skycourier", "coral"].includes(currentGameId)) gameState.playerY = Math.max(80, Math.min(500, point.y));
  }
});

document.querySelectorAll("[data-page]").forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  navigate(link.dataset.page);
  history.replaceState(null, "", `#${link.dataset.page}`);
}));

document.querySelectorAll('a[href="#home"], a[href="#catalog"], a[href="#rankings"], a[href="#developers"], a[href="#profile"]').forEach((link) => {
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

document.querySelector("#profile-shop-link").addEventListener("click", () => {
  navigate("rankings");
  history.replaceState(null, "", "#rankings");
  document.querySelector("#cosmetic-shop").scrollIntoView({ behavior: "smooth", block: "center" });
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
    : authSetupMessage();
  document.querySelector("#auth-dialog").showModal();
}));

document.querySelectorAll("[data-auth-mode]").forEach((button) => button.addEventListener("click", () => updateAuthMode(button.dataset.authMode)));

document.querySelector("#auth-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!supabaseClient) {
    document.querySelector("#auth-error").textContent = authSetupMessage();
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
          emailRedirectTo: "https://barsbekkubanychbekov1-collab.github.io/kagangames/",
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
renderWallet();
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
  document.querySelector(".sidebar-note").textContent = "Профиль и игры доступны. Для регистрации владелец сайта должен подключить Supabase.";
}
navigate(location.hash.slice(1) || "home");
