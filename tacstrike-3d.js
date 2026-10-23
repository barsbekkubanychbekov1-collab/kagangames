(() => {
  const vertexSource = `
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    uniform mat4 uMvp;
    uniform mat4 uModel;
    varying vec3 vNormal;
    void main() {
      gl_Position = uMvp * vec4(aPosition, 1.0);
      vNormal = normalize(aNormal / vec3(length(uModel[0].xyz), length(uModel[1].xyz), length(uModel[2].xyz)));
    }
  `;
  const fragmentSource = `
    precision mediump float;
    uniform vec3 uColor;
    varying vec3 vNormal;
    void main() {
      vec3 normal = normalize(vNormal);
      float light = 0.38 + max(dot(normal, normalize(vec3(-0.4, 0.8, 0.55))), 0.0) * 0.62;
      gl_FragColor = vec4(uColor * light, 1.0);
    }
  `;
  const identity = () => new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  const multiply = (a, b) => {
    const out = new Float32Array(16);
    for (let column = 0; column < 4; column += 1) {
      for (let row = 0; row < 4; row += 1) {
        out[column * 4 + row] =
          a[row] * b[column * 4] + a[4 + row] * b[column * 4 + 1] +
          a[8 + row] * b[column * 4 + 2] + a[12 + row] * b[column * 4 + 3];
      }
    }
    return out;
  };
  const normalize = (v) => {
    const length = Math.hypot(v[0], v[1], v[2]) || 1;
    return [v[0] / length, v[1] / length, v[2] / length];
  };
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const subtract = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  function perspective(fov, aspect, near, far) {
    const f = 1 / Math.tan(fov / 2);
    const out = new Float32Array(16);
    out[0] = f / aspect;
    out[5] = f;
    out[10] = (far + near) / (near - far);
    out[11] = -1;
    out[14] = 2 * far * near / (near - far);
    return out;
  }
  function lookAt(eye, center, up) {
    const z = normalize(subtract(eye, center));
    const x = normalize(cross(up, z));
    const y = cross(z, x);
    const out = identity();
    out[0] = x[0]; out[1] = y[0]; out[2] = z[0];
    out[4] = x[1]; out[5] = y[1]; out[6] = z[1];
    out[8] = x[2]; out[9] = y[2]; out[10] = z[2];
    out[12] = -x[0] * eye[0] - x[1] * eye[1] - x[2] * eye[2];
    out[13] = -y[0] * eye[0] - y[1] * eye[1] - y[2] * eye[2];
    out[14] = -z[0] * eye[0] - z[1] * eye[1] - z[2] * eye[2];
    return out;
  }
  function modelMatrix(position, scale) {
    const out = identity();
    out[0] = scale[0]; out[5] = scale[1]; out[10] = scale[2];
    out[12] = position[0]; out[13] = position[1]; out[14] = position[2];
    return out;
  }
  function createCube(gl) {
    const faces = [
      [[0, 0, 1], [[-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]]],
      [[0, 0, -1], [[1, -1, -1], [-1, -1, -1], [-1, 1, -1], [1, 1, -1]]],
      [[1, 0, 0], [[1, -1, 1], [1, -1, -1], [1, 1, -1], [1, 1, 1]]],
      [[-1, 0, 0], [[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]]],
      [[0, 1, 0], [[-1, 1, 1], [1, 1, 1], [1, 1, -1], [-1, 1, -1]]],
      [[0, -1, 0], [[-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1]]]
    ];
    const positions = [], normals = [], indices = [];
    faces.forEach(([normal, vertices]) => {
      const start = positions.length / 3;
      vertices.forEach((vertex) => { positions.push(...vertex); normals.push(...normal); });
      indices.push(start, start + 1, start + 2, start, start + 2, start + 3);
    });
    return uploadMesh(gl, positions, normals, indices);
  }
  function createSphere(gl, rows = 9, columns = 12) {
    const positions = [], normals = [], indices = [];
    for (let row = 0; row <= rows; row += 1) {
      const v = row / rows, phi = v * Math.PI;
      for (let column = 0; column <= columns; column += 1) {
        const u = column / columns, theta = u * Math.PI * 2;
        const point = [Math.sin(phi) * Math.cos(theta), Math.cos(phi), Math.sin(phi) * Math.sin(theta)];
        positions.push(...point); normals.push(...point);
      }
    }
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const first = row * (columns + 1) + column, second = first + columns + 1;
        indices.push(first, first + 1, second, second, first + 1, second + 1);
      }
    }
    return uploadMesh(gl, positions, normals, indices);
  }
  function uploadMesh(gl, positions, normals, indices) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    const normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    return { positionBuffer, normalBuffer, indexBuffer, count: indices.length };
  }
  function compileShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const message = gl.getShaderInfoLog(shader) || "Неизвестная ошибка шейдера";
      gl.deleteShader(shader);
      throw new Error(message);
    }
    return shader;
  }
  function createRenderer(canvas) {
    const gl = canvas.getContext("webgl", { alpha: false, antialias: true });
    if (!gl) throw new Error("Этот браузер не поддерживает WebGL.");
    const program = gl.createProgram();
    gl.attachShader(program, compileShader(gl, gl.VERTEX_SHADER, vertexSource));
    gl.attachShader(program, compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) || "Не удалось запустить 3D-шейдер.");
    gl.useProgram(program);
    const attributes = {
      position: gl.getAttribLocation(program, "aPosition"),
      normal: gl.getAttribLocation(program, "aNormal")
    };
    const uniforms = {
      mvp: gl.getUniformLocation(program, "uMvp"),
      model: gl.getUniformLocation(program, "uModel"),
      color: gl.getUniformLocation(program, "uColor")
    };
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    return { gl, program, attributes, uniforms, cube: createCube(gl), sphere: createSphere(gl) };
  }
  function project(matrix, point, width, height) {
    const [x, y, z] = point;
    const clipX = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12];
    const clipY = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13];
    const clipW = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15];
    if (clipW <= 0) return null;
    return { x: (clipX / clipW + 1) * width / 2, y: (1 - clipY / clipW) * height / 2, scale: height / clipW };
  }
  function drawMesh(renderer, viewProjection, mesh, position, scale, color) {
    const { gl, attributes, uniforms } = renderer;
    const model = modelMatrix(position, scale);
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.positionBuffer);
    gl.enableVertexAttribArray(attributes.position);
    gl.vertexAttribPointer(attributes.position, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normalBuffer);
    gl.enableVertexAttribArray(attributes.normal);
    gl.vertexAttribPointer(attributes.normal, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.indexBuffer);
    gl.uniformMatrix4fv(uniforms.model, false, model);
    gl.uniformMatrix4fv(uniforms.mvp, false, multiply(viewProjection, model));
    gl.uniform3fv(uniforms.color, color);
    gl.drawElements(gl.TRIANGLES, mesh.count, gl.UNSIGNED_SHORT, 0);
  }
  function drawSoldier(renderer, vp, position, palette) {
    const { cube, sphere } = renderer;
    const [x, z] = position;
    drawMesh(renderer, vp, cube, [x, 0.82, z], [0.32, 0.62, 0.2], palette.uniform);
    drawMesh(renderer, vp, cube, [x, 1.08, z - 0.03], [0.47, 0.15, 0.23], palette.shoulders);
    drawMesh(renderer, vp, sphere, [x, 1.62, z], [0.23, 0.27, 0.22], [0.73, 0.63, 0.49]);
    drawMesh(renderer, vp, sphere, [x, 1.82, z], [0.25, 0.13, 0.24], palette.helmet);
    drawMesh(renderer, vp, cube, [x, 0.27, z - 0.03], [0.13, 0.38, 0.15], palette.trousers);
    drawMesh(renderer, vp, cube, [x, 0.27, z + 0.22], [0.13, 0.38, 0.15], palette.trousers);
    drawMesh(renderer, vp, cube, [x + 0.34, 0.91, z - 0.16], [0.36, 0.08, 0.08], [0.19, 0.22, 0.19]);
  }
  const mapPalettes = [
    { ground: [0.39, 0.3, 0.22], lane: [0.63, 0.47, 0.31], prop: [0.56, 0.37, 0.24], uniform: [0.22, 0.31, 0.26] },
    { ground: [0.48, 0.59, 0.61], lane: [0.76, 0.85, 0.84], prop: [0.43, 0.54, 0.58], uniform: [0.25, 0.35, 0.38] },
    { ground: [0.33, 0.38, 0.35], lane: [0.67, 0.47, 0.29], prop: [0.36, 0.42, 0.39], uniform: [0.25, 0.32, 0.29] }
  ];
  const instanceByCanvas = new WeakMap();
  function render(canvas, state) {
    let renderer = instanceByCanvas.get(canvas);
    if (!renderer) {
      renderer = createRenderer(canvas);
      instanceByCanvas.set(canvas, renderer);
    }
    const { gl } = renderer;
    const width = canvas.width, height = canvas.height;
    gl.viewport(0, 0, width, height);
    gl.clearColor(0.16, 0.24, 0.27, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    const playerWorldX = (state.playerX - 480) / 105;
    const firstPerson = state.viewMode === "first";
    const eye = firstPerson ? [playerWorldX, 1.65, 0.35] : [0, 3.0, 7.5];
    const focus = firstPerson ? [playerWorldX, 1.45, -8] : [0, 1.15, -5];
    const projection = perspective(Math.PI / 3.2, width / height, 0.1, 100);
    const viewProjection = multiply(projection, lookAt(eye, focus, [0, 1, 0]));
    const map = mapPalettes[state.mapIndex] || mapPalettes[0];
    drawMesh(renderer, viewProjection, renderer.cube, [0, -0.18, -18], [18, 0.18, 32], map.ground);
    for (let lane = -3; lane <= 3; lane += 1) {
      drawMesh(renderer, viewProjection, renderer.cube, [lane * 2.8, 0.01, -18], [0.035, 0.012, 30], lane === 0 ? map.lane : map.prop);
    }
    for (let index = 0; index < 10; index += 1) {
      const side = index % 2 ? 1 : -1;
      const z = -3 - Math.floor(index / 2) * 4.7;
      const x = side * (5.2 + (index % 3) * 1.2);
      drawMesh(renderer, viewProjection, renderer.cube, [x, 0.55, z], [0.75, 0.55 + index % 2 * 0.45, 0.65], map.prop);
      if (state.mapIndex === 1) {
        drawMesh(renderer, viewProjection, renderer.cube, [x, 1.45, z], [0.77, 0.05, 0.67], [0.78, 0.87, 0.85]);
      }
    }
    if (!firstPerson) {
      drawSoldier(renderer, viewProjection, [playerWorldX, 0], {
        uniform: [0.27, 0.38, 0.31], shoulders: [0.39, 0.49, 0.39],
        helmet: [0.56, 0.66, 0.51], trousers: [0.21, 0.27, 0.23]
      });
    } else {
      drawMesh(renderer, viewProjection, renderer.cube, [playerWorldX + 0.58, 0.93, -1.25], [0.1, 0.08, 0.46], [0.22, 0.27, 0.24]);
      drawMesh(renderer, viewProjection, renderer.cube, [playerWorldX + 0.58, 0.99, -1.7], [0.045, 0.045, 0.38], [0.36, 0.4, 0.34]);
      drawMesh(renderer, viewProjection, renderer.cube, [playerWorldX + 0.42, 0.82, -1.05], [0.12, 0.1, 0.14], [0.71, 0.65, 0.48]);
    }
    const playerAimPoint = firstPerson
      ? project(viewProjection, focus, width, height)
      : project(viewProjection, [playerWorldX, 1.08, 0], width, height);
    if (playerAimPoint) {
      state.playerScreenX = playerAimPoint.x;
      state.playerScreenY = playerAimPoint.y;
    }
    state.targets.forEach((target, index) => {
      if (!target.alive) return;
      const x = (target.x - state.playerX - state.cameraX) / 95;
      const z = -5.5 - index % 4 * 1.65 + state.cameraY * 0.018 - (target.y - 245) * 0.012;
      drawSoldier(renderer, viewProjection, [x, z], {
        uniform: map.uniform, shoulders: map.prop, helmet: map.lane, trousers: [0.18, 0.22, 0.2]
      });
      const aimPoint = project(viewProjection, [x, 1.05, z - 0.22], width, height);
      const headPoint = project(viewProjection, [x, 1.68, z], width, height);
      if (aimPoint && headPoint) {
        target.screenX = aimPoint.x;
        target.screenY = (aimPoint.y + headPoint.y) / 2;
        target.hitRadius = Math.max(20, Math.min(52, (headPoint.y - project(viewProjection, [x, 0, z], width, height).y) * 0.58));
      }
    });
    (state.enemyBullets || []).forEach((bullet) => {
      const x = (bullet.x - state.playerX - state.cameraX) / 105;
      const z = -7 - Math.max(-8, Math.min(8, (bullet.y - 250) / 35));
      drawMesh(renderer, viewProjection, renderer.sphere, [x, 0.9, z], [0.12, 0.12, 0.12], [1, 0.43, 0.23]);
    });
    (state.airstrikeRuns || []).forEach((run) => {
      if (run.impacted) return;
      const target = run.target;
      const x = (target.x - state.playerX - state.cameraX) / 95;
      const z = -5.5 - state.targets.indexOf(target) % 4 * 1.65 + state.cameraY * 0.018 - (target.y - 245) * 0.012;
      drawMesh(renderer, viewProjection, renderer.cube, [x, 0.025, z], [0.72, 0.025, 0.72], [0.95, 0.68, 0.25]);
      if (run.delay <= 0) {
        const progress = Math.min(1, run.flight / 0.7);
        drawMesh(renderer, viewProjection, renderer.cube, [x + 1.7 - progress * 1.7, 6.5 - progress * 5.4, z], [0.42, 0.08, 0.18], [0.9, 0.92, 0.86]);
      }
    });
    (state.airstrikeEffects || []).forEach((effect) => {
      const progress = Math.min(1, effect.age / 1.35);
      const target = effect.target;
      const x = target ? (target.x - state.playerX - state.cameraX) / 95 : (effect.x - state.playerX) / 95;
      const z = -7 + progress * 0.4;
      drawMesh(renderer, viewProjection, renderer.sphere, [x, 0.3 + progress * 0.18, z], [0.45 + progress * 1.1, 0.08, 0.45 + progress * 1.1], [0.89, 0.67 - progress * 0.18, 0.37]);
      for (let puff = 0; puff < 5; puff += 1) {
        const angle = puff * Math.PI * 2 / 5 + effect.seed;
        drawMesh(renderer, viewProjection, renderer.sphere, [x + Math.cos(angle) * progress * 0.75, 0.7 + progress * 0.8, z + Math.sin(angle) * progress * 0.75], [0.23 + progress * 0.18, 0.2 + progress * 0.18, 0.23 + progress * 0.18], [0.48, 0.5, 0.46]);
      }
    });
  }
  window.KaganTacstrike3D = { render };
})();
