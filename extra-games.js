(() => {
  const gameWidth = 960;
  const gameHeight = 560;
  const games = [
    { id: "snakegarden", title: "Змеиный сад", genre: "Аркада", art: "garden", tag: "СОБЕРИ 12 ЯБЛОК", description: "Расти, собирая яблоки, и не врежься в собственный хвост.", controls: "WASD / стрелки — поворот" },
    { id: "flapcloud", title: "Крылья облаков", genre: "Аркада", art: "sky", tag: "ПРОЛЕТИ 10 ВОРОТ", description: "Держи высоту и проскальзывай между парящими арками.", controls: "Пробел / касание — взмах" },
    { id: "pongduel", title: "Неоновая дуэль", genre: "Спорт", art: "neon", tag: "ЗАБЕЙ 5 ОЧКОВ", description: "Переиграй соперника в быстрой дуэли с отскоками мяча.", controls: "W/S или ↑/↓ — ракетка; мышь/палец — двигать" },
    { id: "mineralmines", title: "Шахта минералов", genre: "Головоломка", art: "crystals", tag: "НАЙДИ 12 САМЫХ ЦЕННЫХ", description: "Открывай безопасные клетки по подсказкам и избегай скрытых зарядов.", controls: "Нажимай на клетки; правый клик — флажок" },
    { id: "numberforge", title: "Числовая кузня", genre: "Головоломка", art: "runes", tag: "СОЗДАЙ 128", description: "Сдвигай руны, объединяй одинаковые числа и достигни 128.", controls: "WASD / стрелки — сдвиг плиток" },
    { id: "boxvoyage", title: "Коробочный рейс", genre: "Головоломка", art: "tower", tag: "ДОСТАВЬ ЯЩИК", description: "Толкай ящик по складу и поставь его на отмеченную платформу.", controls: "WASD / стрелки — ходить" },
    { id: "lightmatrix", title: "Матрица света", genre: "Головоломка", art: "lantern", tag: "ПОГАСИ ВСЕ ОГНИ", description: "Каждое касание меняет соседние лампы. Погаси всю панель.", controls: "Нажимай на лампы мышью или пальцем" },
    { id: "bullseye", title: "Золотое яблочко", genre: "Аркада", art: "meteor", tag: "10 ПОПАДАНИЙ", description: "Попадай по движущимся мишеням и береги ограниченный запас стрел.", controls: "Нажимай на мишени" },
    { id: "skylinehop", title: "Крыши города", genre: "Платформер", art: "lighthouse", tag: "ПЕРЕПРЫГНИ 12 ПРЕПЯТСТВИЙ", description: "Прыгай через разрывы и вентиляционные шахты на крышах.", controls: "Пробел / ↑ / касание — прыгать" },
    { id: "starinvaders", title: "Защитники галактики", genre: "Экшен", art: "courier", tag: "СБЕЙ 18 ДРОНОВ", description: "Управляй кораблём и отбивай волны дронов точными выстрелами.", controls: "← → / A-D — движение · пробел / касание — огонь" },
    { id: "towercraft", title: "Башня мастера", genre: "Аркада", art: "tower", tag: "ПОСТРОЙ 12 ЭТАЖЕЙ", description: "Укладывай качающиеся платформы точно друг на друга.", controls: "Пробел / касание — установить этаж" },
    { id: "deepmaze", title: "Подземный ход", genre: "Головоломка", art: "maze", tag: "НАЙДИ ВЫХОД", description: "Пройди извилистый лабиринт, собери ключ и открой ворота.", controls: "WASD / стрелки или касайся соседних клеток" },
    { id: "beatlanes", title: "Бит-бульвар", genre: "Ритм", art: "pulse", tag: "ПОПАДИ В 12 НОТ", description: "Лови ритм и нажимай нужную клавишу, когда нота входит в зону.", controls: "A / S / D / F или касание дорожки" },
    { id: "pipeworks", title: "Мастер труб", genre: "Головоломка", art: "coral", tag: "ДОСТАВЬ ВОДУ", description: "Поворачивай сегменты и собери непрерывный путь от источника до сада.", controls: "Нажимай на сегмент, чтобы повернуть" },
    { id: "minigolf", title: "Лунный мини-гольф", genre: "Спорт", art: "moonhop", tag: "ЗАГОНИ ШАР В ЛУНКУ", description: "Выбери направление удара, обойди стены и попади в лунку.", controls: "Коснись поля, чтобы прицелиться, затем нажми ещё раз для удара" },
    { id: "colorshift", title: "Цветовой поток", genre: "Головоломка", art: "lantern", tag: "СОБЕРИ ЦВЕТА", description: "Переключай полосы, чтобы провести падающие фигуры через верные ворота.", controls: "← → / A-D — менять цвет" },
    { id: "quickdraw", title: "Молниеносная реакция", genre: "Аркада", art: "pulse", tag: "ПОБЕДИ 5 РАУНДОВ", description: "Дождись зелёного сигнала и нажми как можно быстрее — не торопись.", controls: "Нажми на поле только после зелёного сигнала" },
    { id: "blockdrop", title: "Пиксельная мастерская", genre: "Головоломка", art: "break", tag: "ЗАПОЛНИ 4 ЛИНИИ", description: "Укладывай падающие фигуры и очищай полные ряды.", controls: "← → — сдвиг · ↑ — поворот · ↓ — ускорить" },
    { id: "harborcatch", title: "Рыбацкая бухта", genre: "Аркада", art: "coral", tag: "ПОЙМАЙ 10 РЫБ", description: "Лови рыбу в сетку и не собирай старые сапоги и медузы.", controls: "← → / A-D или веди пальцем по полю" },
    { id: "pairgarden", title: "Сад парных листьев", genre: "Головоломка", art: "garden", tag: "НАЙДИ 6 ПАР", description: "Открывай листья, запоминай узоры и найди все пары за ограниченное время.", controls: "Нажимай на карточки мышью или пальцем" }
  ];

  const rand = (max) => Math.floor(Math.random() * max);
  const makeState = (id, width, height) => {
    if (!games.some((game) => game.id === id)) return null;
    const state = { score: 0, elapsed: 0, ended: false, mode: id };
    if (id === "snakegarden") Object.assign(state, { snake: [{ x: 9, y: 6 }, { x: 8, y: 6 }, { x: 7, y: 6 }], dir: { x: 1, y: 0 }, next: { x: 1, y: 0 }, tick: 0, food: { x: rand(20), y: rand(12) } });
    if (id === "flapcloud") Object.assign(state, { y: height / 2, vy: 0, gates: [], spawn: 0, passed: 0 });
    if (id === "pongduel") Object.assign(state, { y: height / 2, ball: { x: width / 2, y: height / 2, vx: 260, vy: 150 }, player: 0, opponent: 0 });
    if (id === "mineralmines") {
      state.cells = Array.from({ length: 63 }, () => ({ mine: false, open: false, flag: false, near: 0 }));
      state.firstClick = true;
      let count = 0;
      while (count < 10) { const i = rand(63); if (!state.cells[i].mine) { state.cells[i].mine = true; count += 1; } }
      state.cells.forEach((cell, i) => {
        const x = i % 9, y = Math.floor(i / 9);
        cell.near = state.cells.reduce((sum, other, j) => sum + (other.mine && Math.abs(j % 9 - x) <= 1 && Math.abs(Math.floor(j / 9) - y) <= 1 ? 1 : 0), 0);
      });
    }
    if (id === "numberforge") Object.assign(state, { board: Array(16).fill(0), moves: 0 }), addTile(state.board);
    if (id === "boxvoyage") Object.assign(state, { map: ["##########", "#........#", "#..#.....#", "#........#", "#....#...#", "#........#", "##########"], player: { x: 1, y: 1 }, box: { x: 3, y: 3 }, goal: { x: 8, y: 5 }, moves: 0 });
    if (id === "lightmatrix") {
      state.lights = Array(25).fill(false);
      const scramble = Array.from({ length: 25 }, (_, i) => i).sort(() => Math.random() - 0.5).slice(0, 10);
      scramble.forEach((i) => flipLight(state, i % 5, Math.floor(i / 5)));
      if (state.lights.every((on) => !on)) flipLight(state, 2, 2);
      state.moves = 0;
    }
    if (id === "bullseye") Object.assign(state, { targets: [], spawn: 0, arrows: 14, hits: 0 });
    if (id === "skylinehop") Object.assign(state, { y: 452, vy: 0, grounded: true, obstacles: [], spawn: 1, passed: 0 });
    if (id === "starinvaders") Object.assign(state, { player: width / 2, enemies: Array.from({ length: 18 }, (_, i) => ({ x: 180 + (i % 6) * 120, y: 110 + Math.floor(i / 6) * 55, alive: true })), bullets: [], move: 1, fire: 0 });
    if (id === "towercraft") Object.assign(state, { blocks: [{ x: 330, y: 480, w: 300 }], x: 0, w: 300, dir: 1, layer: 0 });
    if (id === "deepmaze") Object.assign(state, { map: ["##########", "#S.K.#...#", "###..#.#.#", "#....#.#.#", "#.####.#.#", "#.......E#", "##########"], x: 1, y: 1, key: false, moves: 0 });
    if (id === "beatlanes") Object.assign(state, { notes: [], spawn: 0, hits: 0, misses: 0 });
    if (id === "pipeworks") Object.assign(state, { pipes: [1, 1, 0, 2, 0, 2, 1, 3, 0, 2, 1, 0, 3, 1, 1, 3], solution: [1, 2, 0, 2, 1, 2, 1, 3, 0, 2, 1, 1, 3, 1, 1, 3], turns: 0 });
    if (id === "minigolf") Object.assign(state, { ball: { x: 100, y: 440, vx: 0, vy: 0 }, cup: { x: 830, y: 100 }, walls: [{ x: 280, y: 280, w: 340, h: 22 }, { x: 490, y: 100, w: 22, h: 210 }], strokes: 0, aiming: null });
    if (id === "colorshift") Object.assign(state, { lane: 1, color: 0, drops: [], spawn: 0, passed: 0 });
    if (id === "quickdraw") Object.assign(state, { phase: "wait", delay: 1.5 + Math.random() * 2, rounds: 0, best: 0, roundStart: 0 });
    if (id === "blockdrop") Object.assign(state, { grid: Array.from({ length: 20 }, () => Array(10).fill(0)), piece: null, drop: 0, lines: 0 }), newPiece(state);
    if (id === "harborcatch") Object.assign(state, { x: width / 2, items: [], spawn: 0, catches: 0, misses: 0 });
    if (id === "pairgarden") Object.assign(state, { cards: [..."🍃🌼🍄🪻🌿🌺", ..."🍃🌼🍄🪻🌿🌺"].sort(() => Math.random() - 0.5), open: [], found: new Set(), lock: 0, turns: 0, time: 75 });
    return state;
  };
  function addTile(board) {
    const empty = board.map((v, i) => v === 0 ? i : -1).filter((i) => i >= 0);
    if (empty.length) board[empty[rand(empty.length)]] = Math.random() < 0.12 ? 4 : 2;
  }
  function newPiece(s) {
    const shapes = [[[1, 1, 1, 1]], [[1, 1], [1, 1]], [[0, 1, 0], [1, 1, 1]], [[1, 0, 0], [1, 1, 1]], [[0, 0, 1], [1, 1, 1]]];
    s.piece = { shape: shapes[rand(shapes.length)].map((r) => [...r]), x: 3, y: 0 };
  }
  function end(s, message, win, finish) { if (!s.ended) finish(message, win); }
  function flipLight(s, x, y) {
    [[x, y], [x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]].forEach(([cx, cy]) => {
      if (cx >= 0 && cx < 5 && cy >= 0 && cy < 5) s.lights[cy * 5 + cx] = !s.lights[cy * 5 + cx];
    });
  }
  function update(id, s, dt, keys, width, height, finish) {
    s.elapsed += dt;
    const left = keys.has("ArrowLeft") || keys.has("KeyA"), right = keys.has("ArrowRight") || keys.has("KeyD");
    if (id === "snakegarden") {
      s.tick += dt;
      if (s.tick > 0.13) {
        s.tick = 0; s.dir = s.next;
        const head = { x: (s.snake[0].x + s.dir.x + 20) % 20, y: (s.snake[0].y + s.dir.y + 12) % 12 };
        if (s.snake.some((p) => p.x === head.x && p.y === head.y)) return end(s, "Змейка догнала себя. Попробуй ещё раз!", false, finish);
        s.snake.unshift(head);
        if (head.x === s.food.x && head.y === s.food.y) {
          s.score += 1;
          if (s.score >= 12) return end(s, "Сад собран! Змейка выросла до 12 яблок.", true, finish);
          do {
            s.food = { x: rand(20), y: rand(12) };
          } while (s.snake.some((segment) => segment.x === s.food.x && segment.y === s.food.y));
        } else s.snake.pop();
      }
    } else if (id === "flapcloud") {
      s.vy += 620 * dt; s.y += s.vy * dt; s.spawn += dt;
      if (s.spawn > 2.1) { s.spawn = 0; const gap = 185 + rand(35); const top = 75 + rand(180); s.gates.push({ x: width + 50, top, gap, passed: false }); }
      s.gates = s.gates.filter((g) => { g.x -= 220 * dt; if (!g.passed && g.x < 185) { g.passed = true; s.passed += 1; } if (g.x < 212 && g.x > 145 && (s.y < g.top || s.y > g.top + g.gap)) end(s, `Пройдено ворот: ${s.passed}.`, false, finish); return g.x > -60; });
      s.score = s.passed;
      if (s.y < 35 || s.y > height - 25) end(s, `Пройдено ворот: ${s.passed}.`, false, finish);
      if (s.passed >= 10) end(s, "Десять облачных ворот пройдены!", true, finish);
      if (s.passed >= 10) end(s, "Десять облачных ворот пройдены!", true, finish);
    } else if (id === "pongduel") {
      const b = s.ball; s.y = Math.max(55, Math.min(height - 55, s.y + (Number(keys.has("ArrowDown") || keys.has("KeyS")) - Number(keys.has("ArrowUp") || keys.has("KeyW"))) * 380 * dt));
      s.opponent += Math.sign(b.y - s.opponent) * Math.min(Math.abs(b.y - s.opponent), 255 * dt);
      b.x += b.vx * dt; b.y += b.vy * dt;
      if (b.y < 24 || b.y > height - 24) b.vy *= -1;
      if (b.x < 65 && Math.abs(b.y - s.y) < 66) { b.vx = Math.abs(b.vx) * 1.04; b.vy += (b.y - s.y) * 1.6; }
      if (b.x > width - 65 && Math.abs(b.y - s.opponent) < 66) b.vx = -Math.abs(b.vx);
      if (b.x < 0 || b.x > width) { if (b.x < 0) s.opponent += 1; else s.score += 1; Object.assign(b, { x: width / 2, y: height / 2, vx: b.x < 0 ? 270 : -270, vy: 130 }); }
      if (s.score >= 5) end(s, "Победа в неоновой дуэли!", true, finish);
      if (s.opponent >= 5) end(s, "Соперник набрал пять очков. Попробуй ещё раз.", false, finish);
    } else if (id === "mineralmines") {
      s.score = s.cells.filter((c) => c.open && !c.mine).length;
      if (s.score >= 53) end(s, "Шахта исследована без единого взрыва!", true, finish);
    } else if (id === "numberforge") {
      s.score = Math.max(...s.board);
      if (s.score >= 128) end(s, "Руна 128 создана! Отличная работа.", true, finish);
    } else if (id === "boxvoyage") {
      if (s.box.x === s.goal.x && s.box.y === s.goal.y) end(s, `Ящик доставлен за ${s.moves} ходов!`, true, finish);
    } else if (id === "lightmatrix") {
      if (s.lights.every((on) => !on)) end(s, `Все огни погашены за ${s.moves} ходов!`, true, finish);
    } else if (id === "bullseye") {
      s.spawn += dt;
      if (s.spawn > 0.8) { s.spawn = 0; s.targets.push({ x: width + 20, y: 80 + rand(360), r: 24 + rand(15), speed: 130 + rand(100), phase: Math.random() * 8 }); }
      s.targets.forEach((t) => { t.x -= t.speed * dt; t.y += Math.sin(s.elapsed * 3 + t.phase) * 30 * dt; });
      s.targets = s.targets.filter((t) => t.x > -50);
      if (s.hits >= 10) end(s, "Десять точных попаданий!", true, finish);
      if (!s.arrows) end(s, `Попаданий: ${s.hits} из 10.`, false, finish);
    } else if (id === "skylinehop") {
      if (s.grounded && keys.has("Space")) { s.vy = -690; s.grounded = false; }
      s.vy += 1500 * dt; s.y += s.vy * dt; if (s.y >= 452) { s.y = 452; s.vy = 0; s.grounded = true; }
      s.spawn += dt;
      if (s.spawn > 1.35) { s.spawn = 0; s.obstacles.push({ x: width + 20, y: 438, w: 32, h: 45, hit: false }); }
      s.obstacles.forEach((o) => { o.x -= 260 * dt; if (o.x < 212 && o.x + o.w > 177 && s.y > 416 && !o.hit) { o.hit = true; end(s, `Преодолено крыш: ${s.passed}.`, false, finish); } if (!o.hit && o.x < 170) { o.hit = true; s.passed += 1; } });
      s.obstacles = s.obstacles.filter((o) => o.x > -40);
      if (s.passed >= 12) end(s, "Ты пересёк все крыши!", true, finish);
    } else if (id === "starinvaders") {
      s.player = Math.max(35, Math.min(width - 35, s.player + (Number(right) - Number(left)) * 350 * dt));
      s.fire += dt;
      if (keys.has("Space") && s.fire > 0.24) { s.bullets.push({ x: s.player, y: height - 70 }); s.fire = 0; }
      s.bullets.forEach((b) => { b.y -= 470 * dt; const e = s.enemies.find((item) => item.alive && Math.hypot(item.x - b.x, item.y - b.y) < 24); if (e) { e.alive = false; b.hit = true; s.score += 1; } });
      s.bullets = s.bullets.filter((b) => !b.hit && b.y > 0);
      const aliveEnemies = s.enemies.filter((e) => e.alive);
      const leftEdge = Math.min(...aliveEnemies.map((e) => e.x));
      const rightEdge = Math.max(...aliveEnemies.map((e) => e.x));
      if ((s.move > 0 && rightEdge + 70 * dt > width - 40) || (s.move < 0 && leftEdge - 70 * dt < 40)) {
        s.move *= -1;
        aliveEnemies.forEach((enemy) => { enemy.y += 18; });
      }
      aliveEnemies.forEach((enemy) => { enemy.x += s.move * 70 * dt; });
      if (aliveEnemies.some((enemy) => enemy.y >= height - 95)) end(s, "Дроны добрались до базы. Попробуй ещё раз.", false, finish);
      if (s.score >= 18) end(s, "Галактика защищена! Все дроны сбиты.", true, finish);
    } else if (id === "towercraft") {
      s.x = (s.x || 330) + s.dir * 240 * dt;
      if (s.x < 120 || s.x + s.w > 840) s.dir *= -1;
      s.score = s.layer;
    } else if (id === "deepmaze") {
      s.score = s.moves;
    } else if (id === "beatlanes") {
      s.spawn += dt;
      if (s.spawn > 0.72) { s.spawn = 0; s.notes.push({ lane: rand(4), y: 70, hit: false }); }
      s.notes.forEach((n) => { n.y += 260 * dt; if (n.y > 500 && !n.hit) { n.hit = true; s.misses += 1; } });
      s.notes = s.notes.filter((n) => n.y < 530);
      if (s.hits >= 12) end(s, "Бит пойман! Все 12 нот сыграны.", true, finish);
      if (s.misses >= 5) end(s, `Попаданий: ${s.hits}. Попробуй снова.`, false, finish);
    } else if (id === "pipeworks") {
    } else if (id === "minigolf") {
      const b = s.ball; b.x += b.vx * dt; b.y += b.vy * dt; b.vx *= Math.pow(0.985, dt * 60); b.vy *= Math.pow(0.985, dt * 60);
      if (b.x < 20 || b.x > width - 20) b.vx *= -0.8;
      if (b.y < 50 || b.y > height - 25) b.vy *= -0.8;
      s.walls.forEach((w) => { if (b.x > w.x - 12 && b.x < w.x + w.w + 12 && b.y > w.y - 12 && b.y < w.y + w.h + 12) { b.vx *= -0.75; b.vy *= -0.75; } });
      if (Math.hypot(b.x - s.cup.x, b.y - s.cup.y) < 24 && Math.hypot(b.vx, b.vy) < 180) end(s, `Лунка пройдена за ${s.strokes} ударов!`, true, finish);
    } else if (id === "colorshift") {
      s.spawn += dt; if (s.spawn > 1.15) { s.spawn = 0; s.drops.push({ lane: rand(3), color: rand(3), y: -20 }); }
      s.drops.forEach((d) => { d.y += 210 * dt; if (d.y > 420 && !d.checked) { d.checked = true; if (d.lane === s.lane && d.color === s.color) s.passed += 1; else s.score -= 1; } });
      s.drops = s.drops.filter((d) => d.y < height);
      if (s.passed >= 10) end(s, "Цветовой поток пройден!", true, finish);
      if (s.score <= -4) end(s, "Цвета перепутались. Попробуй ещё раз.", false, finish);
    } else if (id === "quickdraw") {
      s.delay -= dt;
      if (s.phase === "wait" && s.delay <= 0) { s.phase = "ready"; s.roundStart = s.elapsed; }
    } else if (id === "blockdrop") {
      s.drop += dt;
      if (s.drop > (keys.has("ArrowDown") ? 0.08 : 0.55)) { s.drop = 0; if (!collides(s, s.piece.x, s.piece.y + 1, s.piece.shape)) s.piece.y += 1; else { lockPiece(s, finish); } }
      if (s.lines >= 4) end(s, "Четыре линии очищены! Мастерская сияет.", true, finish);
    } else if (id === "harborcatch") {
      s.x = Math.max(35, Math.min(width - 35, s.x + (Number(right) - Number(left)) * 360 * dt));
      s.spawn += dt; if (s.spawn > 0.65) { s.spawn = 0; const bad = Math.random() < 0.3; s.items.push({ x: 30 + rand(width - 60), y: -20, bad, icon: bad ? "🪼" : "🐟" }); }
      s.items.forEach((i) => { i.y += 200 * dt; if (Math.abs(i.x - s.x) < 36 && i.y > 455 && !i.done) { i.done = true; if (i.bad) s.misses += 1; else s.catches += 1; } });
      s.items = s.items.filter((i) => i.y < height);
      if (s.catches >= 10) end(s, "Улов готов! Десять рыб пойманы.", true, finish);
      if (s.misses >= 4) end(s, "Слишком много медуз попало в сеть.", false, finish);
    } else if (id === "pairgarden") {
      s.time -= dt; if (s.time <= 0) end(s, `Найдено пар: ${s.found.size / 2} из 6.`, false, finish);
      if (s.found.size === 12) end(s, `Все пары найдены за ${s.turns} ходов!`, true, finish);
      if (s.lock > 0) { s.lock -= dt; if (s.lock <= 0) s.open = []; }
    }
  }
  function collides(s, x, y, shape) { return shape.some((row, dy) => row.some((v, dx) => v && (x + dx < 0 || x + dx >= 10 || y + dy >= 20 || (y + dy >= 0 && s.grid[y + dy][x + dx])))); }
  function lockPiece(s,finish) {
    s.piece.shape.forEach((row, y) => row.forEach((v, x) => { if (v && s.piece.y + y >= 0) s.grid[s.piece.y + y][s.piece.x + x] = 1; }));
    const remaining = s.grid.filter((row) => row.some((v) => !v)); s.lines += 20 - remaining.length;
    s.grid = [...Array.from({ length: 20 - remaining.length }, () => Array(10).fill(0)), ...remaining]; newPiece(s);
    if (collides(s, s.piece.x, s.piece.y, s.piece.shape)) end(s, `Очищено линий: ${s.lines}. Попробуй снова.`, false, finish);
  }
  function key(id, s, code, finish) {
    const move = ({ ArrowLeft: [-1, 0], KeyA: [-1, 0], ArrowRight: [1, 0], KeyD: [1, 0], ArrowUp: [0, -1], KeyW: [0, -1], ArrowDown: [0, 1], KeyS: [0, 1] })[code];
    if (id === "snakegarden" && move && !(move[0] === -s.dir.x && move[1] === -s.dir.y)) s.next = { x: move[0], y: move[1] };
    if (id === "boxvoyage" && move) moveBox(s, ...move, finish);
    if (id === "deepmaze" && move) moveMaze(s, ...move, finish);
    if (id === "numberforge" && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(code)) slide(s, code, finish);
    if (id === "pongduel" && code.startsWith("Arrow")) return;
    if (id === "skylinehop" && ["Space", "ArrowUp", "KeyW"].includes(code) && s.grounded) { s.vy = -690; s.grounded = false; }
    if (id === "flapcloud" && code === "Space") s.vy = -270;
    if (id === "starinvaders" && code === "Space") s.fire = 1;
    if (id === "towercraft" && code === "Space") placeBlock(s, finish);
    if (id === "beatlanes" && ["KeyA", "KeyS", "KeyD", "KeyF"].includes(code)) hitNote(s, ["KeyA", "KeyS", "KeyD", "KeyF"].indexOf(code), finish);
    if (id === "colorshift" && move) s.lane = Math.max(0, Math.min(2, s.lane + move[0]));
    if (id === "blockdrop" && s.piece) {
      if (move && move[0] && !collides(s, s.piece.x + move[0], s.piece.y, s.piece.shape)) s.piece.x += move[0];
      if (code === "ArrowUp") { const rotated = s.piece.shape[0].map((_, i) => s.piece.shape.map((r) => r[i]).reverse()); if (!collides(s, s.piece.x, s.piece.y, rotated)) s.piece.shape = rotated; }
    }
  }
  function moveBox(s, dx, dy, finish) {
    const x = s.player.x + dx, y = s.player.y + dy;
    if (dx === 0 && dy === 0) return;
    if (s.map[y]?.[x] === "#") return;
    if (s.box.x === x && s.box.y === y) { if (s.map[y + dy]?.[x + dx] === "#") return; s.box = { x: x + dx, y: y + dy }; }
    s.player = { x, y }; s.moves += 1;
    if (s.box.x === s.goal.x && s.box.y === s.goal.y) end(s, `Ящик доставлен за ${s.moves} ходов!`, true, finish);
  }
  function moveMaze(s, dx, dy, finish) {
    const x = s.x + dx, y = s.y + dy, tile = s.map[y]?.[x];
    if (!tile || tile === "#") return;
    s.x = x; s.y = y; s.moves += 1; if (tile === "K") s.key = true;
    if (tile === "E" && s.key) end(s, "Ключ найден, ворота открыты!", true, finish);
  }
  function placeBlock(s, finish) {
    const prev = s.blocks[s.blocks.length - 1], left = Math.max(prev.x, s.x), right = Math.min(prev.x + prev.w, s.x + s.w), w = right - left;
    if (w < 18) return end(s, `Башня из ${s.layer} этажей. Попробуй снова.`, false, finish);
    s.layer += 1; s.w = w; s.blocks.push({ x: left, y: 480 - s.layer * 32, w }); s.x = left; s.dir *= -1;
    if (s.layer >= 12) end(s, "Двенадцать этажей построены!", true, finish);
  }
  function hitNote(s, lane, finish) {
    const note = s.notes.find((n) => !n.hit && n.lane === lane && Math.abs(n.y - 460) < 55);
    if (note) { note.hit = true; s.hits += 1; } else { s.misses += 1; }
    if (s.hits >= 12) end(s, "Бит пойман! Все ноты сыграны.", true, finish);
    if (s.misses >= 5) end(s, `Попаданий: ${s.hits}. Попробуй снова.`, false, finish);
  }
  function action(id, s, x, y, finish, event) {
    if (id === "mineralmines") {
      const col = Math.floor((x - 183) / 66), row = Math.floor((y - 80) / 55), i = row * 9 + col;
      if (col < 0 || col >= 9 || row < 0 || row >= 7 || s.cells[i].open) return true;
      if (event?.button === 2) { s.cells[i].flag = !s.cells[i].flag; return true; }
      if (s.firstClick) {
        if (s.cells[i].mine) {
          s.cells[i].mine = false;
          const replacement = s.cells.findIndex((cell, index) => !cell.mine && index !== i);
          s.cells[replacement].mine = true;
        }
        s.cells.forEach((cell, index) => {
          const cx = index % 9, cy = Math.floor(index / 9);
          cell.near = s.cells.reduce((sum, other, j) => sum + (other.mine && Math.abs(j % 9 - cx) <= 1 && Math.abs(Math.floor(j / 9) - cy) <= 1 ? 1 : 0), 0);
        });
        s.firstClick = false;
      }
      if (s.cells[i].mine) { end(s, "В шахте сработал заряд. Попробуй ещё раз.", false, finish); return true; }
      s.cells[i].open = true;
      if (s.cells[i].near === 0) flood(s, i);
      s.score = s.cells.filter((c) => c.open).length;
      if (s.score >= 53) end(s, "Шахта исследована без единого взрыва!", true, finish);
      return true;
    }
    if (id === "lightmatrix") {
      const c = Math.floor((x - 280) / 80), r = Math.floor((y - 80) / 80);
      if (c >= 0 && c < 5 && r >= 0 && r < 5) { flipLight(s, c, r); s.moves += 1; }
      if (s.lights.every((v)=>!v)) end(s, `Все огни погашены за ${s.moves} ходов!`, true, finish);
      return true;
    }
    if (id === "bullseye") {
      s.arrows -= 1; const t = s.targets.find((item) => Math.hypot(item.x-x,item.y-y) < item.r);
      if (t) { t.hit = true; s.hits += 1; s.targets = s.targets.filter((item)=>item!==t); }
      if (s.hits >= 10) end(s, "Десять точных попаданий!", true, finish);
      if (!s.arrows) end(s, `Попаданий: ${s.hits} из 10.`, false, finish);
      return true;
    }
    if (id === "pongduel") { s.y = y; return true; }
    if (id === "towercraft") { placeBlock(s, finish); return true; }
    if (id === "deepmaze") {
      const c=Math.floor((x-260)/55), r=Math.floor((y-125)/55), dx=c-s.x, dy=r-s.y;
      if (Math.abs(dx)+Math.abs(dy)===1) moveMaze(s,dx,dy,finish);
      return true;
    }
    if (id === "pipeworks") {
      const c=Math.floor((x-300)/90),r=Math.floor((y-100)/90),i=r*4+c;
      if(c>=0&&c<4&&r>=0&&r<4){s.pipes[i]=(s.pipes[i]+1)%4;s.turns+=1;if(s.pipes.every((pipe,index)=>pipe===s.solution[index]))end(s,"Вода дошла по трубам до сада!",true,finish);if(s.turns>=40)end(s,"Вода не дошла до сада. Попробуй снова.",false,finish);}
      return true;
    }
    if (id === "minigolf") {
      const b=s.ball;
      if (s.aiming) { const dx=s.aiming.x-b.x,dy=s.aiming.y-b.y,len=Math.hypot(dx,dy)||1,power=Math.min(620,len*3);b.vx=dx/len*power;b.vy=dy/len*power;s.aiming=null;s.strokes+=1; }
      else if (Math.hypot(b.vx,b.vy)<35) s.aiming={x,y};
      return true;
    }
    if (id === "quickdraw") {
      if(s.phase==="ready"){s.best+=s.elapsed-s.roundStart;s.rounds+=1;s.phase="wait";s.delay=1.2+Math.random()*2.2;if(s.rounds>=5)end(s,`Пять сигналов! Средняя реакция ${Math.round(s.best/5*1000)} мс.`,true,finish);}
      else if(s.phase==="wait"){end(s,"Слишком рано! Дождись зелёного сигнала.",false,finish);}
      return true;
    }
    if (id === "harborcatch") { s.x=x; return true; }
    if (id === "pairgarden") {
      const c=Math.floor((x-276)/105),r=Math.floor((y-125)/112),i=r*6+c;
      if(c<0||c>=6||r<0||r>=2||s.lock>0||s.open.includes(i)||s.found.has(i))return true;
      s.open.push(i);if(s.open.length===2){s.turns+=1;if(s.cards[s.open[0]]===s.cards[s.open[1]]){s.open.forEach((v)=>s.found.add(v));s.open=[];}else s.lock=0.75;}
      return true;
    }
    if (id === "starinvaders") { s.bullets.push({x,y:height-65});return true; }
    if (id === "flapcloud") { s.vy=-270;return true; }
    if (id === "skylinehop" && s.grounded) {s.vy=-690;s.grounded=false;return true;}
    if (id === "numberforge") {
      if (["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(event?.code)) slide(s,event.code,finish);
      else if (!event?.code) slide(s,Math.abs(x-gameWidth/2)>Math.abs(y-gameHeight/2)?(x<gameWidth/2?"ArrowLeft":"ArrowRight"):(y<gameHeight/2?"ArrowUp":"ArrowDown"),finish);
      return true;
    }
    if (id === "colorshift") { s.color=Math.floor(y/180)%3; return true; }
    if (id === "beatlanes") { hitNote(s,Math.max(0,Math.min(3,Math.floor((x-150)/165))),finish);return true; }
    if (id === "snakegarden") {
      const dx=x-gameWidth/2,dy=y-gameHeight/2;
      const direction=Math.abs(dx)>Math.abs(dy)?{x:Math.sign(dx),y:0}:{x:0,y:Math.sign(dy)};
      if(direction.x!==-s.dir.x||direction.y!==-s.dir.y)s.next=direction;
      return true;
    }
    if (id === "boxvoyage" || id === "deepmaze") {
      const step=id==="boxvoyage"?55:55,origin=id==="boxvoyage"?[235,120]:[260,125];
      const px=origin[0]+(id==="boxvoyage"?s.player.x:s.x)*step+step/2,py=origin[1]+(id==="boxvoyage"?s.player.y:s.y)*step+step/2;
      const dx=x-px,dy=y-py;
      if(Math.abs(dx)>Math.abs(dy)) id==="boxvoyage"?moveBox(s,Math.sign(dx),0,finish):moveMaze(s,Math.sign(dx),0,finish);
      else id==="boxvoyage"?moveBox(s,0,Math.sign(dy),finish):moveMaze(s,0,Math.sign(dy),finish);
      return true;
    }
    if (id === "blockdrop") { if(s.piece&&!collides(s,s.piece.x,s.piece.y+1,s.piece.shape))s.piece.y+=1;else lockPiece(s,finish);return true; }
    if (id === "pongduel" || id === "towercraft") return true;
    return false;
  }
  function flood(s,start) {
    const stack=[start];
    while(stack.length){const i=stack.pop(),x=i%9,y=Math.floor(i/9);for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=x+dx,ny=y+dy,ni=ny*9+nx;if(nx>=0&&nx<9&&ny>=0&&ny<7&&!s.cells[ni].mine&&!s.cells[ni].open){s.cells[ni].open=true;if(!s.cells[ni].near)stack.push(ni);}}}
  }
  function slide(s,code,finish) {
    const b=s.board, previous=b.slice();
    for(let r=0;r<4;r++){let line=code==="ArrowLeft"||code==="ArrowRight"?b.slice(r*4,r*4+4):b.filter((_,i)=>i%4===r);if(code==="ArrowRight"||code==="ArrowDown")line.reverse();line=line.filter(Boolean);for(let i=0;i<line.length-1;i++)if(line[i]===line[i+1]){line[i]*=2;s.score+=line[i];line.splice(i+1,1);}while(line.length<4)line.push(0);if(code==="ArrowRight"||code==="ArrowDown")line.reverse();if(code==="ArrowLeft"||code==="ArrowRight")b.splice(r*4,4,...line);else line.forEach((v,i)=>b[i*4+r]=v);}
    if (b.some((value, index) => value !== previous[index])) addTile(b);
    if(Math.max(...b)>=128)end(s,"Руна 128 создана! Отличная работа.",true,finish);
  }
  function pointerMove(id, s, x, y) {
    if (id === "pongduel") { s.y = Math.max(58, Math.min(gameHeight - 58, y)); return true; }
    if (id === "harborcatch") { s.x = Math.max(35, Math.min(gameWidth - 35, x)); return true; }
    return false;
  }
  function draw(id, s, ctx, w, h) {
    ctx.save();ctx.textAlign="center";ctx.textBaseline="middle";ctx.font="600 20px 'DM Sans',sans-serif";
    const text=(value,x,y,size=24,color="#f4f1e9")=>{ctx.fillStyle=color;ctx.font=`600 ${size}px 'DM Sans',sans-serif`;ctx.fillText(value,x,y);};
    const box=(x,y,bw,bh,color,r=8)=>{ctx.fillStyle=color;ctx.beginPath();ctx.roundRect(x,y,bw,bh,r);ctx.fill();};
    if(id==="snakegarden"){const cw=42,ch=42; s.snake.forEach((p,i)=>box(60+p.x*cw,42+p.y*ch,cw-3,ch-3,i?"#78b977":"#dbf28b",9));text("🍎",60+s.food.x*cw+20,42+s.food.y*ch+20,24);}
    else if(id==="flapcloud"){text("☁️",185,s.y,38);s.gates.forEach(g=>{box(g.x,0,38,g.top,"#87d8c0",8);box(g.x,g.top+g.gap,38,h-g.top-g.gap,"#87d8c0",8);});}
    else if(id==="pongduel"){box(42,s.y-58,16,116,"#9de5d8",9);box(w-58,s.opponent-58,16,116,"#e8a3cf",9);ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(s.ball.x,s.ball.y,12,0,7);ctx.fill();}
    else if(id==="mineralmines"){s.cells.forEach((c,i)=>{const x=183+(i%9)*66,y=80+Math.floor(i/9)*55;box(x,y,60,49,c.open?"#243e48":c.flag?"#ba704f":"#547a81",7);if(c.open&&c.near)text(String(c.near),x+30,y+25,18,"#d6f583");if(c.open&&c.mine)text("✹",x+30,y+25,18,"#ff8068");if(c.flag)text("⚑",x+30,y+25,18);});}
    else if(id==="numberforge"){s.board.forEach((v,i)=>{const x=280+(i%4)*101,y=92+Math.floor(i/4)*92;box(x,y,90,82,v?"#8e9f72":"#253044",12);if(v)text(String(v),x+45,y+42,25,"#17202a");});}
    else if(id==="boxvoyage"){s.map.forEach((row,y)=>[...row].forEach((v,x)=>{const px=235+x*55,py=120+y*55;box(px,py,52,52,v==="#"?"#4d5e59":"#273b40",8);if(x===s.goal.x&&y===s.goal.y)text("◎",px+26,py+26,30,"#d5f36a");}));text("📦",235+s.box.x*55+26,120+s.box.y*55+26,30);text("🧑",235+s.player.x*55+26,120+s.player.y*55+26,28);}
    else if(id==="lightmatrix"){s.lights.forEach((v,i)=>{const x=280+(i%5)*80,y=80+Math.floor(i/5)*80;box(x,y,68,68,v?"#efda80":"#263244",14);if(v)text("✦",x+34,y+34,26,"#554625");});}
    else if(id==="bullseye"){s.targets.forEach(t=>{ctx.fillStyle="#e8d08e";ctx.beginPath();ctx.arc(t.x,t.y,t.r,0,7);ctx.fill();ctx.fillStyle="#d16f67";ctx.beginPath();ctx.arc(t.x,t.y,t.r*.65,0,7);ctx.fill();ctx.fillStyle="#f3e8c0";ctx.beginPath();ctx.arc(t.x,t.y,t.r*.3,0,7);ctx.fill();});}
    else if(id==="skylinehop"){box(0,486,w,74,"#35444e",0);text("🏃",190,s.y+18,35);s.obstacles.forEach(o=>box(o.x,o.y,o.w,o.h,"#e7ad6b",5));}
    else if(id==="starinvaders"){s.enemies.forEach(e=>{if(e.alive)text("✦",e.x,e.y,27,"#f6a37d");});s.bullets.forEach(b=>box(b.x-3,b.y-12,6,18,"#ecf28a",3));text("▲",s.player,h-45,33,"#9de5d8");}
    else if(id==="towercraft"){s.blocks.forEach((b,i)=>box(b.x,b.y,b.w,28,i%2?"#efa975":"#cce477",4));box(s.x,480-(s.layer+1)*32,s.w,28,"#faf0ad",4);}
    else if(id==="deepmaze"){s.map.forEach((row,y)=>[...row].forEach((c,x)=>{const px=260+x*55,py=125+y*55;box(px,py,51,51,c==="#"?"#455c62":"#23363e",5);if(c==="E")text(s.key?"🚪":"🔒",px+25,py+25,20);if(c==="K")text("🗝",px+25,py+25,19);if(x===s.x&&y===s.y)text("✦",px+25,py+25,24,"#d5f36a");}));}
    else if(id==="beatlanes"){for(let i=0;i<4;i++){box(155+i*165,80,130,420,"#1e2638",10);ctx.strokeStyle="#d5f36a";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(155+i*165,460);ctx.lineTo(285+i*165,460);ctx.stroke();}s.notes.forEach(n=>text("●",220+n.lane*165,n.y,27,"#e7b7f5"));}
    else if(id==="pipeworks"){s.pipes.forEach((p,i)=>{const x=300+(i%4)*90,y=100+Math.floor(i/4)*90;box(x,y,78,78,"#304c54",10);ctx.save();ctx.translate(x+39,y+39);ctx.rotate(p*Math.PI/2);ctx.strokeStyle="#89d8d0";ctx.lineWidth=13;ctx.beginPath();ctx.moveTo(-24,0);ctx.lineTo(24,0);ctx.moveTo(0,0);ctx.lineTo(0,24);ctx.stroke();ctx.restore();});text("◉",339,235,26,"#f3d880");text("✿",609,325,28,"#a6e879");}
    else if(id==="minigolf"){s.walls.forEach(v=>box(v.x,v.y,v.w,v.h,"#b4b496",8));ctx.fillStyle="#171f29";ctx.beginPath();ctx.arc(s.cup.x,s.cup.y,22,0,7);ctx.fill();ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(s.ball.x,s.ball.y,12,0,7);ctx.fill();if(s.aiming){ctx.strokeStyle="#d5f36a";ctx.setLineDash([7,6]);ctx.beginPath();ctx.moveTo(s.ball.x,s.ball.y);ctx.lineTo(s.aiming.x,s.aiming.y);ctx.stroke();ctx.setLineDash([]);}}
    else if(id==="colorshift"){for(let i=0;i<3;i++)box(180+i*200,490,160,32,["#eb8e80","#8ad7bd","#97a6ed"][i],8);text(["●","◆","✦"][s.color],260+s.lane*200,445,32);s.drops.forEach(d=>text(["●","◆","✦"][d.color],260+d.lane*200,d.y,30,["#eb8e80","#8ad7bd","#97a6ed"][d.color]));}
    else if(id==="quickdraw"){box(280,170,400,210,s.phase==="ready"?"#55bf79":"#9a5151",25);text(s.phase==="ready"?"ЖМИ!":"ЖДИ СИГНАЛА",480,275,29);text(`Раунд ${s.rounds+1} / 5`,480,420,20);}
    else if(id==="blockdrop"){s.grid.forEach((row,y)=>row.forEach((v,x)=>{if(v)box(282+x*40,75+y*22,37,20,"#85d5ca",3);}));if(s.piece)s.piece.shape.forEach((r,y)=>r.forEach((v,x)=>{if(v)box(282+(s.piece.x+x)*40,75+(s.piece.y+y)*22,37,20,"#e8d47e",3);}));}
    else if(id==="harborcatch"){box(0,440,w,120,"#246477",0);s.items.forEach(i=>text(i.bad?"🪼":"🐟",i.x,i.y,26));text("🧺",s.x,485,42);}
    else if(id==="pairgarden"){s.cards.forEach((c,i)=>{const x=276+(i%6)*105,y=125+Math.floor(i/6)*112;box(x,y,95,100,s.found.has(i)||s.open.includes(i)?"#9cc778":"#40525c",12);if(s.found.has(i)||s.open.includes(i))text(c,x+47,y+50,29);else text("✧",x+47,y+50,28,"#d5f36a");});}
    ctx.restore();
  }
  window.KaganExtraGames = {
    games,
    start: makeState,
    update,
    draw,
    key,
    action,
    pointerMove,
    isGame: (id) => games.some((game) => game.id === id)
  };
})();
