// Ухилянт 3D — experimental Three.js mode. Same 3-lane gameplay as the 2D game, in real 3D: all 14 cities with their
// own architecture and landmarks, PBR materials lit by a physical sky, shadows, weather and time of day.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, InstancedMesh, Object3D, Vector3, Color,
  MeshStandardMaterial, MeshBasicMaterial, BoxGeometry, CylinderGeometry, PlaneGeometry, DoubleSide
} from 'three';
import { buildRoute, place, SEGS } from './world.js';
import { GB } from './geo.js';
import { CITIES, CITYM, hashStr } from './cities.js';
import { cityMaterials, disposeMaterials, applyMatEnv, makeWorld, CH } from './buildings.js';
import { skyline } from './landmarks.js';
import { createEnv, TOD_NAMES, WX_NAMES, TIERS, TIER_NAMES } from './env.js';
import { figure, animate, RUNNER, TCK, disposeFigure } from './characters.js';
import { stripeTexture, labelTexture, busTexture, setTexQuality } from './textures.js';
import { loadAssets } from './assets.js';
import { vehicleMesh, setVehicleEnv } from './vehicles.js';
import { loadPeople, makePerson, personAnimate, peopleTick, peopleReady } from './people.js';

const $ = (id) => document.getElementById(id);
const LANE = 2.2, BASE = 15, MAXS = 36, G = 32, JV = 11.5, SLIDE_T = 0.62, VIEW = 190, AIR_T = 2 * JV / G;
const clamp = (v, a, b) => v < a ? a : v > b ? b : v, rnd = Math.random, pick = (a) => a[(rnd() * a.length) | 0];
const store = { get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };

// ---------------------------------------------------------------- renderer (with a graceful fallback)
const cv = $('c');
let renderer, state = 'start';
function fail() { $('fail').classList.remove('hidden'); ['start', 'hud', 'over', 'pause'].forEach((i) => $(i).classList.add('hidden')); state = 'dead'; }
try { renderer = new WebGLRenderer({ canvas: cv, antialias: true, powerPreference: 'high-performance' }); } catch (e) { renderer = null; }
if (!renderer) { fail(); throw new Error('no WebGL'); }
cv.addEventListener('webglcontextlost', (e) => { e.preventDefault(); fail(); });
const scene = new Scene();
const camera = new PerspectiveCamera(65, 1, 0.3, 560);
const env = createEnv(renderer, scene, camera);
env.onEnv = (t) => setVehicleEnv(t);

// ---------------------------------------------------------------- shared (city-independent) materials
const std = (o) => new MeshStandardMaterial({ roughness: 0.8, metalness: 0, ...o });
const SM = {
  stripe: std({ map: stripeTexture(), roughness: 0.6 }),
  gatePole: std({ color: '#b5bac2', metalness: 0.6, roughness: 0.35 }),
  stij: std({ map: labelTexture('СТІЙ!', '#d63028', '#ffffff'), side: DoubleSide, roughness: 0.6 }),
  busBody: std({ map: busTexture(), roughness: 0.45 }), white: std({ color: '#eef0f2', roughness: 0.45 }),
  busPlate: std({ map: labelTexture('ТЦК', '#ffd21f', '#1b1b1b', 192, 56) }),
  glass: std({ color: '#1e2a38', metalness: 0.5, roughness: 0.06 }), tyre: std({ color: '#1a1a1c', roughness: 0.9 }),
  headl: std({ color: '#fff7d0', emissive: '#fff0b0', emissiveIntensity: 0.6 }),
  shadow: new MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.22, depthWrite: false }),
  coin: std({ color: '#ffcc33', metalness: 1, roughness: 0.25, emissive: '#7a5200', emissiveIntensity: 0.25 }),
  sky: new MeshBasicMaterial({ color: '#8090a0', fog: false })
};

// ---------------------------------------------------------------- city
let city = null, M = null, world = null, skyMesh = null;
const chunks = new Map();
const skyGroup = new Group(); scene.add(skyGroup);
function savedCity() {
  const own = store.get('ukh3d_city'); if (own && CITYM[own]) return own;
  try { const s = JSON.parse(store.get('ukh_save_v2') || '{}'); if (s.city && CITYM[s.city]) return s.city; } catch (e) {}
  return 'lviv';
}
function loadCity(id) {
  if (world) for (const [, g] of chunks) world.disposeChunk(g);
  chunks.clear();
  if (M) disposeMaterials(M);
  if (skyMesh) { skyGroup.remove(skyMesh); skyMesh.geometry.dispose(); skyMesh = null; }
  city = CITYM[id]; store.set('ukh3d_city', id);
  const seed = hashStr(id + ':3d');
  buildRoute(seed, city.pool);
  M = cityMaterials(city, texQ === 1);
  world = makeWorld(scene, city, M, seed);
  const gb = new GB(); skyline(city.sky, gb); const geo = gb.build(); if (geo) { skyMesh = new Mesh(geo, SM.sky); skyMesh.frustumCulled = false; skyMesh.renderOrder = -1; skyGroup.add(skyMesh); }
  applyEnv();
  renderCities();
}
function updateChunks(all = false) {
  const a = Math.max(0, Math.floor((dist - 30) / CH)), b = Math.floor((dist + VIEW) / CH);
  for (const [c, g] of chunks) if (c < a || c > b) { world.disposeChunk(g); chunks.delete(c); }
  for (let c = a; c <= b; c++) if (!chunks.has(c)) { chunks.set(c, world.buildChunk(c)); if (!all) break; }   // one chunk per frame while running: no hitches
}

// ---------------------------------------------------------------- environment
function applyEnv(tod, wx) {
  const st = env.apply(tod, wx);
  applyMatEnv(M, st);
  SM.headl.emissiveIntensity = st.tod === 'day' && !st.gloom ? 0.6 : 2.2;
  SM.coin.emissiveIntensity = st.night ? 0.8 : 0.25;
  SM.sky.color.copy(scene.fog.color).lerp(new Color(st.night ? '#05070d' : '#46566b'), st.night ? 0.45 : env.photo ? 0.62 : 0.42);
  $('btnNight').textContent = TOD_NAMES[env.tod][1]; $('btnWx').textContent = WX_NAMES[env.wx][1];
  rainSound(st.wet ? (env.wx === 'storm' ? 0.07 : 0.045) : 0);
}
function cycleTod() { applyEnv({ day: 'sunset', sunset: 'night', night: 'day' }[env.tod]); toast(TOD_NAMES[env.tod][0]); }
function cycleWx() { const k = Object.keys(WX_NAMES); applyEnv(null, k[(k.indexOf(env.wx) + 1) % k.length]); toast(WX_NAMES[env.wx][0]); }
env.onThunder = (d) => thunder(d);

// ---------------------------------------------------------------- characters
let runner = null, tck = [];
function makeChars() {
  if (peopleReady()) { runner = makePerson(scene, 'runner', SM.shadow); tck = [makePerson(scene, 'tck', SM.shadow), makePerson(scene, 'tck', SM.shadow)]; }
  else { runner = figure(scene, RUNNER, null, SM.shadow); tck = [figure(scene, TCK, 'ТЦК', SM.shadow), figure(scene, TCK, 'ТЦК', SM.shadow)]; }
}
// one entry point for both rigs: skinned people (clips) or the primitive fallback (procedural)
function anim(g, ph, mode, t = 0, lean = 0, squash = 0) {
  if (g.userData.person) return personAnimate(g, mode, t, lean, speed, squash, AIR_T, SLIDE_T);
  return animate(g, ph, mode === 'chase' ? 'run' : mode === 'patrol' ? 'hands' : mode, t, lean, squash);
}

// ---------------------------------------------------------------- obstacles, coins
const OG = { bar: new BoxGeometry(2.0, 1.0, 0.5), pole: new CylinderGeometry(0.08, 0.08, 2.75, 10), banner: new PlaneGeometry(2.0, 1.2), bus: new BoxGeometry(5.2, 2.35, 2.0), wheel: new CylinderGeometry(0.42, 0.42, 0.3, 18), coin: new CylinderGeometry(0.36, 0.36, 0.08, 24), wind: new PlaneGeometry(1.8, 1.05), plate: new PlaneGeometry(1.5, 0.42), head: new BoxGeometry(0.06, 0.22, 0.32), roofBox: new BoxGeometry(4.6, 0.12, 1.9), mirror: new BoxGeometry(0.1, 0.25, 0.12) };
let obs = [], coinsList = [];
const coinMesh = new InstancedMesh(OG.coin, SM.coin, 260); coinMesh.count = 0; coinMesh.frustumCulled = false; coinMesh.castShadow = true; scene.add(coinMesh);
const dummy = new Object3D(), V = {};
function placeObj(o3, d, x, y, yaw = 0) { const P = place(d, x, y, V); o3.position.set(P.wx, P.wy, P.wz); o3.rotation.set(0, Math.PI / 2 - V.th + yaw, 0); }
function makeObstacle(o) {
  const g = new Group(), add = (geo, m, x, y, z) => { const k = new Mesh(geo, m); k.position.set(x, y, z); k.castShadow = true; k.receiveShadow = true; g.add(k); return k; };
  if (o.t === 'bar') { add(OG.bar, SM.stripe, 0, 0.5, 0).rotation.y = Math.PI / 2; }
  else if (o.t === 'gate') { for (const s of [-1.05, 1.05]) add(OG.pole, SM.gatePole, 0, 1.37, s); add(OG.banner, SM.stij, 0, 1.9, 0).rotation.y = -Math.PI / 2; }
  else if (o.t === 'bus') {   // the TCK van ("бус"): a white Sprinter-like van with ТЦК markings
    const v = vehicleMesh('van', '#f1f1ee', texQ === 1); v.rotation.y = Math.PI; g.add(v);
    for (const s of [-1, 1]) { const l = add(OG.plate, SM.busPlate, 0.2, 1.55, s * 1.0); l.rotation.y = s > 0 ? 0 : Math.PI; l.scale.set(1.6, 1.6, 1); }
  }
  else if (o.t === 'patrol') { o.fig = peopleReady() ? makePerson(scene, 'patrol', SM.shadow) : figure(scene, { ...TCK, face: true }, null, SM.shadow); return; }
  scene.add(g); o.mesh = g;
}
function placeObstacles() {
  for (const o of obs) {
    const dc = o.d + o.len / 2;
    if (o.mesh) { placeObj(o.mesh, dc, o.lane * LANE, 0); o.mesh.visible = o.d < dist + VIEW; }
    if (o.fig) { placeObj(o.fig, dc, o.lane * LANE, 0); o.fig.rotation.y = -V.th; anim(o.fig, time * 2 + o.d, 'patrol'); if (o.fig.userData.limbs) o.fig.userData.limbs[0].sho.rotation.x = -2.4 + Math.sin(time * 8 + o.d) * 0.5; }
  }
}
function removeObstacle(o) { if (o.mesh) scene.remove(o.mesh); if (o.fig) { if (o.fig.userData.person) o.fig.userData.mixer.stopAllAction(); else disposeFigure(o.fig); scene.remove(o.fig); } }

// ---------------------------------------------------------------- generator (same passable-lane rule as the 2D game)
let nextRow = 0, lastRowEnd = 0;
const isBlock = (k) => k === 'bus' || k === 'patrol';
function inCornerZone(d) { return SEGS.some((q) => q.type === 'corner' && d > q.s - 16 && d < q.e + 12); }
function genRow() {
  const d = nextRow;
  const cz = SEGS.find((q) => q.type === 'corner' && d > q.s - 16 && d < q.e + 12);
  if (cz) { nextRow = cz.e + 12; lastRowEnd = Math.max(lastRowEnd, cz.e + 4); return; }   // corners stay clear
  const diff = Math.min(1, d / 3000), early = d < 180, r = rnd();
  const n = early ? 1 : (r < 0.42 - 0.22 * diff ? 1 : (r < 0.88 - 0.08 * diff ? 2 : 3));
  const lanes = [-1, 0, 1].sort(() => rnd() - 0.5).slice(0, n), kinds = {};
  for (const l of lanes) { const q = rnd(); kinds[l] = early ? (q < 0.4 ? 'bar' : q < 0.7 ? 'gate' : 'bus') : (q < 0.3 ? 'bar' : q < 0.55 ? 'gate' : q < 0.83 ? 'bus' : 'patrol'); }
  if (n === 3) { const bl = lanes.filter((l) => isBlock(kinds[l])); if (bl.length === 3) kinds[pick(bl)] = rnd() < 0.5 ? 'bar' : 'gate'; }
  const pass = [-1, 0, 1].filter((l) => !kinds[l] || !isBlock(kinds[l]));
  const s = lastRowEnd + 3, e = d - 3, pl = pick(pass);
  if (e - s > 4 && rnd() < 0.85) for (let c = Math.max(s, e - 30); c <= e; c += 2.2) if (!inCornerZone(c)) coinsList.push({ d: c, x: pl * LANE, y: 0.9, got: false });
  let len = 0.6;
  for (const l of lanes) {
    const k = kinds[l], o = { t: k, lane: l, d, len: 0.5, y0: 0, y1: 1, hx: 1 };
    if (k === 'gate') Object.assign(o, { len: 0.35, y0: 1.25, y1: 2.6 });
    if (k === 'bus') Object.assign(o, { len: 5.2, y1: 2.7 });
    if (k === 'patrol') Object.assign(o, { len: 0.6, y1: 2.3, hx: 0.55 });
    if (k === 'bar' && rnd() < 0.45) for (let i = -3; i <= 3; i++) coinsList.push({ d: d + 0.25 + i * 1.5, x: l * LANE, y: 0.9 + 1.4 * (1 - (i / 3.5) ** 2), got: false });
    makeObstacle(o); obs.push(o); len = Math.max(len, o.len);
  }
  lastRowEnd = d + len;
  const sp = Math.max(speed, BASE) + 1;
  nextRow = lastRowEnd + sp * (1.3 - 0.45 * diff) + rnd() * sp * 0.45;
}

// ---------------------------------------------------------------- game state
let dist = 0, prevDist = 0, speed = 0, runTime = 0, score = 0, coins = 0, time = 0, chaseT = 0, caughtT = 0;
const p = { lane: 0, prevLane: 0, x: 0, prevX: 0, y: 0, vy: 0, onGround: true, slide: 0, run: 0, inv: 0, stumble: 0, jt: 0, flip: false, jumps: 0, land: 0 };
function reset() {
  for (const o of obs) removeObstacle(o); obs = []; coinsList = [];
  dist = prevDist = 0; speed = 0; runTime = 0; score = 0; coins = 0; chaseT = 3; caughtT = 0;
  Object.assign(p, { lane: 0, prevLane: 0, x: 0, prevX: 0, y: 0, vy: 0, onGround: true, slide: 0, run: 0, inv: 0, stumble: 0, jt: 0, flip: false, jumps: 0, land: 0 });
  nextRow = 60; lastRowEnd = 6;
  for (const [, g] of chunks) world.disposeChunk(g); chunks.clear();
  camPos = null; camSnap = true;
}
function act(a) {
  if (state !== 'play') return;
  if (a === 'left' || a === 'right') { const nl = clamp(p.lane + (a === 'left' ? -1 : 1), -1, 1); if (nl !== p.lane) { p.prevLane = p.lane; p.lane = nl; beep(500, 0.05, 0.03); } }
  else if (a === 'up' && p.onGround) { p.vy = JV; p.onGround = false; p.slide = 0; p.jt = 0; p.jumps++; p.flip = p.jumps % 3 === 0; beep(320, 0.18, 0.06, 760); }   // every third jump is a front flip
  else if (a === 'down') { if (p.onGround) { if (p.slide <= 0) beep(180, 0.15, 0.04, 90); p.slide = SLIDE_T; } else p.vy = Math.min(p.vy, -24); }
}
function stumble() {
  beep(140, 0.3, 0.15, 45); vib(80);
  if (chaseT > 0) return caught();
  chaseT = 5; p.stumble = 0.5; p.inv = 0.5; toast('ТЦК НА ХВОСТІ!');
}
function caught() { state = 'caught'; caughtT = 0; speed = 0; beep(392, 0.6, 0.1, 196); vib(200); }
function collide() {
  if (p.inv > 0) return;
  const h = p.slide > 0 ? 0.8 : 1.75;
  for (const o of obs) {
    const a = o.d, b = o.d + o.len;
    if (dist + 0.35 < a || prevDist - 0.35 > b) continue;
    const ox = o.lane * LANE, reach = o.hx + 0.38;
    if (Math.abs(p.x - ox) >= reach) continue;
    if (p.y + h <= o.y0 || p.y >= o.y1) continue;
    const wasInD = prevDist + 0.35 >= a && prevDist - 0.35 <= b, wasInX = Math.abs(p.prevX - ox) < reach;
    if (wasInD && !wasInX) { p.lane = p.prevLane; stumble(); } else { dist = Math.max(prevDist, o.d - 0.45); caught(); }
    return;
  }
}
let camPos = null, camSnap = true, shake = 0, tckGap = 2.6;
const camTarget = { x: 0, y: 0, z: 0 }, focus = new Vector3();
function update(dt) {
  time += dt; peopleTick(dt);
  if (state === 'play') {
    runTime += dt; speed = BASE + (MAXS - BASE) * (1 - Math.exp(-runTime / 110));
    prevDist = dist; dist += speed * dt; score = Math.floor(dist);
    if (chaseT > 0) chaseT -= dt; if (p.inv > 0) p.inv -= dt; if (p.stumble > 0) p.stumble -= dt; if (p.land > 0) p.land -= dt;
    p.prevX = p.x; const tx = p.lane * LANE; p.x += (tx - p.x) * (1 - Math.exp(-dt * 16));
    if (!p.onGround || p.vy > 0) { p.jt += dt; p.vy -= G * dt; p.y += p.vy * dt; if (p.y <= 0) { p.y = 0; p.vy = 0; p.onGround = true; p.land = 0.16; shake = 0.12; } }
    if (p.slide > 0) p.slide -= dt;
    p.run += dt * (6 + speed * 0.35);
    collide();
    for (const c of coinsList) if (!c.got && c.d > prevDist - 0.9 && c.d < dist + 0.9 && Math.abs(c.x - p.x) < 1 && c.y > p.y - 0.4 && c.y < p.y + 2.5) { c.got = true; coins++; beep(1046, 0.07, 0.05); beep(1568, 0.1, 0.05, 0, 0.05); }
    while (nextRow < dist + VIEW) genRow();
    obs = obs.filter((o) => { if (o.d + o.len < dist - 8) { removeObstacle(o); return false; } return true; });
    coinsList = coinsList.filter((c) => !c.got && c.d > dist - 8);
  } else if (state === 'caught') { caughtT += dt; if (caughtT > 1.5) gameOver(); }
  updateChunks();
  // characters
  const P = place(dist, p.x, p.y, V);
  runner.position.set(P.wx, P.wy, P.wz); runner.rotation.y = Math.PI - V.th;
  const lean = clamp((p.lane * LANE - p.x) * 0.22, -0.35, 0.35) + (p.stumble > 0 ? Math.sin(p.stumble * 20) * 0.25 : 0);
  if (state === 'start') anim(runner, time * 2, 'idle');
  else if (state !== 'play') anim(runner, time * 3, 'hands');
  else if (p.slide > 0) anim(runner, p.run, 'roll', 1 - p.slide / SLIDE_T, lean);
  else if (!p.onGround) anim(runner, p.run, p.flip ? 'flip' : 'air', p.jt / AIR_T, lean);
  else anim(runner, p.run, 'run', 0, lean, p.land > 0 ? Math.sin((p.land / 0.16) * Math.PI) : 0);
  runner.userData.blob.position.y = 0.03 - p.y; runner.userData.blob.scale.setScalar(1 / (1 + p.y * 0.3));
  const near = state !== 'play' || chaseT > 0;
  tckGap += ((near ? (state === 'caught' || state === 'over' ? 0.9 : 2.6) : 9) - tckGap) * (1 - Math.exp(-dt * 2.5));
  tck.forEach((t, i) => { const Q = place(dist - tckGap - i * 0.4, p.x + (i ? 1.15 : -1.15) * (state === 'caught' || state === 'over' ? 0.55 : 1), 0, V); t.position.set(Q.wx, Q.wy, Q.wz); t.rotation.y = Math.PI - V.th; anim(t, p.run + i * 1.7, state === 'play' ? 'chase' : 'patrol'); t.visible = tckGap < 8; });
  placeObstacles();
  let n = 0;
  for (const c of coinsList) { if (c.d > dist + 150 || n >= 260) continue; const Q = place(c.d, c.x, c.y, V); dummy.position.set(Q.wx, Q.wy, Q.wz); dummy.rotation.set(Math.PI / 2, 0, time * 4 + c.d); dummy.updateMatrix(); coinMesh.setMatrixAt(n++, dummy.matrix); }
  coinMesh.count = n; coinMesh.instanceMatrix.needsUpdate = true;
  // camera rides the route: it swings round real corners and follows the slopes; a small kick on landing
  const C = place(Math.max(0, dist - 6.5), p.x * 0.5, 4.6 + p.y * 0.3, {}), Tg = place(dist + 9, p.x * 0.6, 1.1 + p.y * 0.5, {});
  if (!camPos) camPos = { x: C.wx, y: C.wy, z: C.wz };
  if (camSnap) { camTarget.x = Tg.wx; camTarget.y = Tg.wy; camTarget.z = Tg.wz; camSnap = false; }
  const k = 1 - Math.exp(-dt * 7), ox = camPos.x, oy = camPos.y, oz = camPos.z;
  camPos.x += (C.wx - camPos.x) * k; camPos.y += (C.wy - camPos.y) * k; camPos.z += (C.wz - camPos.z) * k;
  if (dt > 0) env.camVel = { x: (camPos.x - ox) / dt, y: (camPos.y - oy) / dt, z: (camPos.z - oz) / dt };
  camTarget.x += (Tg.wx - camTarget.x) * Math.min(1, k * 1.4); camTarget.y += (Tg.wy - camTarget.y) * Math.min(1, k * 1.4); camTarget.z += (Tg.wz - camTarget.z) * Math.min(1, k * 1.4);
  if (shake > 0) shake = Math.max(0, shake - dt);
  camera.position.set(camPos.x, camPos.y - Math.sin(shake * 40) * shake * 0.6, camPos.z); camera.lookAt(camTarget.x, camTarget.y, camTarget.z);
  const fov = baseFov + (speed - BASE) * 0.22; if (Math.abs(camera.fov - fov) > 0.05) { camera.fov += (fov - camera.fov) * Math.min(1, dt * 3); camera.updateProjectionMatrix(); }
  const S = place(dist + 14, 0, 0, V); focus.set(S.wx, S.wy, S.wz);
  const NL = place(dist - 0.8, p.x * 0.5, 4.0, V); env.near.position.set(NL.wx, NL.wy, NL.wz);
  skyGroup.position.set(camera.position.x, P.wy - 3, camera.position.z);
  env.update(dt, time, focus);
}

// ---------------------------------------------------------------- UI, input, audio, Android hooks
let AC = null, rainGain = null, noiseBuf = null;
function initAudio() { try { if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === 'suspended') AC.resume(); } catch (e) { AC = null; } }
function beep(f, dur, vol, f2, delay = 0) {
  if (!AC) return; try { const t = AC.currentTime + delay, o = AC.createOscillator(), g = AC.createGain(); o.type = 'square'; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + dur + 0.05); } catch (e) {}
}
function noise() { if (!noiseBuf) { noiseBuf = AC.createBuffer(1, AC.sampleRate * 2, AC.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; } return noiseBuf; }
function rainSound(v) {
  if (!AC) return; try {
    if (!rainGain) { const s = AC.createBufferSource(); s.buffer = noise(); s.loop = true; const f = AC.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1400; f.Q.value = 0.6; rainGain = AC.createGain(); rainGain.gain.value = 0; s.connect(f); f.connect(rainGain); rainGain.connect(AC.destination); s.start(); }
    rainGain.gain.setTargetAtTime(state === 'play' ? v : 0, AC.currentTime, 0.4);
  } catch (e) {}
}
function thunder(delay) {
  if (!AC) return; try { const t = AC.currentTime + delay, s = AC.createBufferSource(), f = AC.createBiquadFilter(), g = AC.createGain(); s.buffer = noise(); f.type = 'lowpass'; f.frequency.value = 160; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.35, t + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.9); s.connect(f); f.connect(g); g.connect(AC.destination); s.start(t); s.stop(t + 2); } catch (e) {}
  vib(40);
}
function vib(ms) { try { if (window.AndroidBridge && window.AndroidBridge.vibrate) window.AndroidBridge.vibrate(ms); else if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }
function toast(t) { const e = $('toast'); e.textContent = t; e.classList.remove('show'); void e.offsetWidth; e.classList.add('show'); }
function show(id) { for (const s of ['start', 'pause', 'over']) $(s).classList.toggle('hidden', s !== id); $('hud').classList.toggle('hidden', id !== null && id !== 'pause'); }
function start() { initAudio(); reset(); updateChunks(true); state = 'play'; show(null); applyEnv(); toast(city.n + ': БІЖИ!'); perf.reset(); }
function pauseGame() { if (state === 'play') { state = 'pause'; show('pause'); rainSound(0); } }
function resume() { if (state === 'pause') { initAudio(); state = 'play'; show(null); applyEnv(); perf.reset(); } }
function gameOver() {
  state = 'over'; $('oScore').textContent = score; $('oCoins').textContent = coins; $('oCity').textContent = city.n;
  $('oPerf').textContent = `Графіка: ${TIER_NAMES[env.tier]} · ${perf.avg ? Math.round(perf.avg) : '—'} кадр/с`;
  show('over'); rainSound(0);
}
function to2D() { location.href = 'index.html'; }
function renderCities() {
  const box = $('cities'); if (!box) return;
  box.innerHTML = '';
  for (const c of CITIES) { const b = document.createElement('button'); b.className = 'chip' + (c.id === city.id ? ' on' : ''); b.textContent = c.n; b.addEventListener('click', (e) => { e.stopPropagation(); if (c.id !== city.id) { loadCity(c.id); reset(); updateChunks(true); } }); box.appendChild(b); }
  $('cityName').textContent = city.n;
}
$('btnGo').addEventListener('click', (e) => { e.stopPropagation(); start(); });
$('btnBack1').addEventListener('click', (e) => { e.stopPropagation(); to2D(); });
$('btnAgain').addEventListener('click', start); $('btnBack2').addEventListener('click', to2D);
$('btnMenu').addEventListener('click', () => { reset(); updateChunks(true); state = 'start'; show('start'); });
$('btnResume').addEventListener('click', resume); $('btnBack3').addEventListener('click', to2D);
$('btnPause').addEventListener('click', (e) => { e.stopPropagation(); pauseGame(); });
$('btnNight').addEventListener('click', (e) => { e.stopPropagation(); cycleTod(); });
$('btnWx').addEventListener('click', (e) => { e.stopPropagation(); cycleWx(); });
$('btnQ').addEventListener('click', (e) => { e.stopPropagation(); setTier(TIERS[(TIERS.indexOf(env.tier) + 1) % TIERS.length], true); toast('Графіка: ' + TIER_NAMES[env.tier]); });
let tch = null;
const swipe = (dx, dy) => Math.abs(dx) > Math.abs(dy) ? act(dx > 0 ? 'right' : 'left') : act(dy > 0 ? 'down' : 'up');
cv.addEventListener('touchstart', (e) => { e.preventDefault(); initAudio(); const t = e.changedTouches[0]; tch = { id: t.identifier, x: t.clientX, y: t.clientY, done: false }; }, { passive: false });
cv.addEventListener('touchmove', (e) => { e.preventDefault(); if (!tch || tch.done) return; for (const t of e.changedTouches) { if (t.identifier !== tch.id) continue; const dx = t.clientX - tch.x, dy = t.clientY - tch.y; if (Math.abs(dx) > 22 || Math.abs(dy) > 22) { swipe(dx, dy); tch.done = true; } } }, { passive: false });
cv.addEventListener('touchend', (e) => { e.preventDefault(); if (!tch) return; for (const t of e.changedTouches) { if (t.identifier !== tch.id) continue; if (!tch.done) { const dx = t.clientX - tch.x, dy = t.clientY - tch.y; if (Math.abs(dx) > 10 || Math.abs(dy) > 10) swipe(dx, dy); } tch = null; } }, { passive: false });
document.addEventListener('touchmove', (e) => { if (e.cancelable && !e.target.closest('#cities')) e.preventDefault(); }, { passive: false });
let ms = null;
cv.addEventListener('mousedown', (e) => { ms = { x: e.clientX, y: e.clientY, done: false }; });
window.addEventListener('mousemove', (e) => { if (!ms || ms.done) return; const dx = e.clientX - ms.x, dy = e.clientY - ms.y; if (Math.abs(dx) > 24 || Math.abs(dy) > 24) { swipe(dx, dy); ms.done = true; } });
window.addEventListener('mouseup', () => { ms = null; });
window.addEventListener('keydown', (e) => {
  const c = e.code; if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(c)) e.preventDefault();
  if (c === 'KeyN') return cycleTod(); if (c === 'KeyM') return cycleWx();
  if (state === 'play') { if (c === 'ArrowLeft' || c === 'KeyA') act('left'); else if (c === 'ArrowRight' || c === 'KeyD') act('right'); else if (c === 'ArrowUp' || c === 'KeyW' || c === 'Space') act('up'); else if (c === 'ArrowDown' || c === 'KeyS') act('down'); else if (c === 'KeyP' || c === 'Escape') pauseGame(); }
  else if ((state === 'start' || state === 'over') && (c === 'Enter' || c === 'Space')) start();
  else if (state === 'pause' && (c === 'Enter' || c === 'KeyP' || c === 'Escape')) resume();
});
function appPause() { pauseGame(); try { if (AC && AC.state === 'running') AC.suspend(); } catch (e) {} }
document.addEventListener('visibilitychange', () => { if (document.hidden) appPause(); });
window.addEventListener('blur', pauseGame);
window.__appPause = appPause;   // called by the Android shell (MainActivity)
window.__appBack = () => { if (state === 'play') { pauseGame(); return 'ok'; } if (state === 'caught') return 'ok'; to2D(); return 'ok'; };

// ---------------------------------------------------------------- quality: step down a tier whenever a 4 s window averages < 45 fps
const perf = { t: 0, n: 0, sum: 0, cnt: 0, avg: 0, locked: false, reset() { this.t = 0; this.n = 0; } };
function setTier(t, manual = false) {
  const q = t === 'low' || t === 'medium' ? 0.5 : 1, reload = city && q !== texQ; texQ = q; setTexQuality(q);
  env.setTier(t); if (reload) { loadCity(city.id); updateChunks(true); } store.set('ukh3d_q', t); if (manual) perf.locked = true; $('btnQ').textContent = { ultra: '✨', high: '⚙️', medium: '🔅', low: '🔋' }[t]; resize(); }
function watchQuality(dt) {
  if (state !== 'play' || dt <= 0 || dt > 0.5) return;
  perf.t += dt; perf.n++;
  if (perf.t < 4) return;
  const fps = perf.n / perf.t; perf.sum += fps; perf.cnt++; perf.avg = perf.sum / perf.cnt; perf.t = 0; perf.n = 0;
  if (!perf.locked && fps < 45 && env.tier !== 'low') { setTier(TIERS[TIERS.indexOf(env.tier) + 1]); toast('Графіка: ' + TIER_NAMES[env.tier] + ' — для плавності'); perf.sum = 0; perf.cnt = 0; }
}

// ---------------------------------------------------------------- loop
let baseFov = 70;
function resize() {
  const w = window.innerWidth, h = window.innerHeight; renderer.setSize(w, h, false);
  camera.aspect = w / h; baseFov = clamp(2 * Math.atan(Math.tan((74 * Math.PI / 180) / 2) / camera.aspect) * 180 / Math.PI, 55, 92); camera.fov = baseFov; camera.updateProjectionMatrix();
  env.resize();
}
window.addEventListener('resize', resize);
let last = performance.now(), lastHud = -1;
function loop(now) {
  const rawDt = (now - last) / 1000; last = now; const dt = clamp(rawDt, 0, 0.05);
  if (state !== 'pause' && state !== 'dead') update(dt);
  if (state !== 'dead') env.render();
  watchQuality(rawDt);
  if (score !== lastHud) { $('score').textContent = score; lastHud = score; }
  $('coinN').textContent = coins;
  requestAnimationFrame(loop);
}
let texQ = 1;
const savedTier = store.get('ukh3d_q');
setTier(TIERS.includes(savedTier) ? savedTier : 'high');
env.tod = rnd() < 0.6 ? 'day' : rnd() < 0.6 ? 'sunset' : 'night';
env.wx = pick(['clear', 'clear', 'clear', 'rain', 'storm', 'snow', 'fog']);
// photo assets first (decoded from the bundled packs), then the city
$('btnGo').disabled = true; $('btnGo').textContent = 'ЗАВАНТАЖЕННЯ…';
const t0 = performance.now();
loadAssets((f) => { $('btnGo').textContent = 'ЗАВАНТАЖЕННЯ ' + Math.round(f * 100) + '%'; }).then(async (ok) => {
  photos = ok; people = await loadPeople(); makeChars();
  loadCity(savedCity()); reset(); show('start');
  updateChunks(true);
  $('btnGo').disabled = false; $('btnGo').textContent = 'БІГТИ ▶';
  bootMs = Math.round(performance.now() - t0);
  requestAnimationFrame(loop);
});
let photos = false, people = false, bootMs = 0;
// debug / test hook
window.__g3 = {
  get state() { return state; }, get dist() { return dist; }, get lane() { return p.lane; }, get score() { return score; }, get p() { return p; }, act, start, renderer, camera, scene, env, vehicleMesh,
  frame: (d) => place(d, 0, 0, {}), get chunks() { return chunks.size; }, get obs() { return obs.length; }, get obsList() { return obs.map((o) => ({ t: o.t, lane: o.lane, d: o.d })); }, pause: pauseGame,
  setEnv(t, w) { applyEnv(t, w); }, setNight(on) { applyEnv(on ? 'night' : 'day'); }, setTier, get tier() { return env.tier; }, lockTier() { perf.locked = true; }, get perf() { return perf; },
  city: (id) => { loadCity(id); reset(); updateChunks(true); }, get M() { return M; }, get photos() { return photos; }, get people() { return people; }, get runner() { return runner; }, get bootMs() { return bootMs; }, get cityId() { return city.id; }, cities: CITIES.map((c) => c.id),
  warp(d) { dist = prevDist = d; nextRow = d + 40; lastRowEnd = d + 6; for (const o of obs) removeObstacle(o); obs = []; coinsList = []; camPos = null; camSnap = true; updateChunks(true); }, segs: SEGS, setSpeedTime(t) { runTime = t; }
};
