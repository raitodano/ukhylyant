// Ухилянт — experimental Three.js prototype (Lviv). Gameplay is the same 3-lane logic as the 2D game,
// but the world is real 3D: 90° street corners, slopes, light and shade.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, InstancedMesh, Object3D, Color, Fog,
  HemisphereLight, DirectionalLight, MeshLambertMaterial, MeshBasicMaterial, BoxGeometry, CylinderGeometry,
  ConeGeometry, SphereGeometry, CircleGeometry, PlaneGeometry, BackSide, DoubleSide, SRGBColorSpace
} from 'three';
import { buildRoute, segAt, frame, place, SEGS, CORNER_R } from './world.js';
import { GB, col, makeFrame, L, LN, box } from './geo.js';
import { cobbleTexture, sidewalkTexture, facadeTextures, roofTexture, stripeTexture, labelTexture, busTexture } from './textures.js';

const $ = (id) => document.getElementById(id);
const LANE = 2.2, BASE = 15, MAXS = 36, G = 32, JV = 11.5, SLIDE_T = 0.62, CH = 50, VIEW = 190;
const clamp = (v, a, b) => v < a ? a : v > b ? b : v, rnd = Math.random, pick = (a) => a[(rnd() * a.length) | 0];

// ---------------------------------------------------------------- renderer (with a graceful fallback)
const cv = $('c');
let renderer;
function fail() { $('fail').classList.remove('hidden'); ['start', 'hud', 'over', 'pause'].forEach((i) => $(i).classList.add('hidden')); state = 'dead'; }
let state = 'start';
try {
  renderer = new WebGLRenderer({ canvas: cv, antialias: true, powerPreference: 'high-performance' });
} catch (e) { renderer = null; }
if (!renderer) { fail(); throw new Error('no WebGL'); }
cv.addEventListener('webglcontextlost', (e) => { e.preventDefault(); fail(); });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
renderer.outputColorSpace = SRGBColorSpace;

const scene = new Scene();
const camera = new PerspectiveCamera(65, 1, 0.3, 240);
const DAY = { sky: '#9fd0f2', fog: '#cfe3ef', hemi: 1.7, sun: 2.4, ground: '#6c5a49', win: 0, lamp: 0.5 };
const NIGHT = { sky: '#0e1630', fog: '#1c2747', hemi: 0.42, sun: 0.18, ground: '#20202a', win: 1.25, lamp: 2.6 };
let night = false;
scene.fog = new Fog(DAY.fog, 45, 200);
const hemi = new HemisphereLight('#d8ecff', DAY.ground, DAY.hemi); scene.add(hemi);
const sun = new DirectionalLight('#fff0d8', DAY.sun); sun.position.set(-40, 60, 20); scene.add(sun); scene.add(sun.target);
// sky dome with a vertical gradient (one draw call)
const skyGeo = new SphereGeometry(220, 24, 12);
const skyMat = new MeshBasicMaterial({ vertexColors: true, side: BackSide, fog: false, depthWrite: false });
const sky = new Mesh(skyGeo, skyMat); scene.add(sky);
function paintSky(top, bottom) {
  const a = new Color(top), b = new Color(bottom), pos = skyGeo.attributes.position, arr = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) { const t = clamp(pos.getY(i) / 140, 0, 1); const c = b.clone().lerp(a, Math.pow(t, 0.6)); arr.set([c.r, c.g, c.b], i * 3); }
  skyGeo.setAttribute('color', new (skyGeo.attributes.position.constructor)(arr, 3));
}

// ---------------------------------------------------------------- shared materials (created once)
const T = { cob: cobbleTexture(), walk: sidewalkTexture(), fac: facadeTextures(), roof: roofTexture(), stripe: stripeTexture(), bus: busTexture() };
const M = {
  road: new MeshLambertMaterial({ map: T.cob }),
  walk: new MeshLambertMaterial({ map: T.walk, vertexColors: true }),
  wall: new MeshLambertMaterial({ map: T.fac.map, vertexColors: true, emissiveMap: T.fac.emissive, emissive: '#ffffff', emissiveIntensity: 0 }),
  roof: new MeshLambertMaterial({ map: T.roof, vertexColors: true }),
  iron: new MeshLambertMaterial({ color: '#2a2c31' }),
  lamp: new MeshLambertMaterial({ color: '#fff2c8', emissive: '#ffcf7a', emissiveIntensity: 0.5 }),
  stone: new MeshLambertMaterial({ color: '#a39a8c' }),
  cream: new MeshLambertMaterial({ color: '#efe4c8' }),
  green: new MeshLambertMaterial({ color: '#5f9d8c' }),
  gold: new MeshLambertMaterial({ color: '#e7b84a', emissive: '#6a4a00', emissiveIntensity: 0.4 }),
  dark: new MeshLambertMaterial({ color: '#4f4a46' }),
  stripe: new MeshLambertMaterial({ map: T.stripe }),
  gatePole: new MeshLambertMaterial({ color: '#9aa0a8' }),
  stij: new MeshLambertMaterial({ map: labelTexture('СТІЙ!', '#d63028', '#ffffff'), side: DoubleSide }),
  busBody: new MeshLambertMaterial({ map: T.bus }),
  white: new MeshLambertMaterial({ color: '#eef0f2' }),
  glass: new MeshLambertMaterial({ color: '#2b3a4e' }),
  tyre: new MeshLambertMaterial({ color: '#1d1d20' }),
  shadow: new MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.28, depthWrite: false }),
  coin: new MeshLambertMaterial({ color: '#ffcc33', emissive: '#7a5200', emissiveIntensity: 0.6 }),
  clock: new MeshLambertMaterial({ map: labelTexture('XII', '#f7f3ea', '#222', 128, 128), side: DoubleSide }),
  flagB: new MeshLambertMaterial({ color: '#2f6fd6', side: DoubleSide }), flagY: new MeshLambertMaterial({ color: '#ffd21f', side: DoubleSide }),
  rose: new MeshLambertMaterial({ color: '#3d5a8a' })
};
const PASTEL = ['#f0d2a2', '#c8e0d4', '#f2c0ac', '#ddd0ea', '#fae8ae', '#c2d6ea', '#eebc98', '#e8e0cc'];

// ---------------------------------------------------------------- world chunks (built ahead, disposed behind)
const chunks = new Map();
const F0 = {};
function ribbon(gb, d0, d1, xa, xb, y, cl, uScale, vScale, uFix) {
  for (let d = d0; d < d1; d += 1) {
    const e = Math.min(d + 1, d1);
    const a = place(d, xa, y, {}), b = place(d, xb, y, {}), c = place(e, xb, y, {}), q = place(e, xa, y, {});
    const ua = uFix ? 0 : xa / uScale, ub = uFix ? 1 : xb / uScale;
    gb.quad([a.wx, a.wy, a.wz], [b.wx, b.wy, b.wz], [c.wx, c.wy, c.wz], [q.wx, q.wy, q.wz], [0, 1, 0], [ua, d / vScale], [ub, d / vScale], [ub, e / vScale], [ua, e / vScale], cl);
  }
}
function curb(gb, d0, d1, x, h, cl) {
  for (let d = d0; d < d1; d += 1) {
    const e = Math.min(d + 1, d1), a = place(d, x, 0, {}), b = place(e, x, 0, {});
    const nrm = LN(makeFrame(0, 0, 0, frame(d, F0).th), 0, 0, x > 0 ? -1 : 1);
    gb.quad([a.wx, a.wy, a.wz], [b.wx, b.wy, b.wz], [b.wx, b.wy + h, b.wz], [a.wx, a.wy + h, a.wz], nrm, [0, 0], [1, 0], [1, 0.1], [0, 0.1], cl);
  }
}
function house(gw, gr, d, side, W, rng) {
  const F = frame(d, {}), D = 9, floors = 3 + (rng() < 0.45 ? 1 : 0), H = floors * 3.3 + 0.6;
  const zc = side * (5.8 + D / 2), P = place(d, zc, 0, {});
  const Fr = makeFrame(P.wx, P.wy, P.wz, F.th), cl = col(PASTEL[(rng() * PASTEL.length) | 0]);
  box(gw, Fr, -W / 2, W / 2, -2, H, -D / 2, D / 2, cl, 1.9, 3.3, false);
  // tiled pitched roof (ridge along the street) + gables + a dormer on the street side
  const o = 0.3, rh = 3.2, x0 = -W / 2 - 0.15, x1 = W / 2 + 0.15, za = -D / 2 - o, zb = D / 2 + o;
  const R = (x, y, z) => L(Fr, x, y, z), rc = col(rng() < 0.5 ? '#ffffff' : '#e8d8d0');
  gr.quad(R(x0, H, za), R(x1, H, za), R(x1, H + rh, 0), R(x0, H + rh, 0), LN(Fr, 0, 0.8, -0.6), [x0 / 2, 0], [x1 / 2, 0], [x1 / 2, 2.6], [x0 / 2, 2.6], rc);
  gr.quad(R(x0, H, zb), R(x1, H, zb), R(x1, H + rh, 0), R(x0, H + rh, 0), LN(Fr, 0, 0.8, 0.6), [x0 / 2, 0], [x1 / 2, 0], [x1 / 2, 2.6], [x0 / 2, 2.6], rc);
  for (const x of [-W / 2, W / 2]) gw.tri(R(x, H, -D / 2), R(x, H, D / 2), R(x, H + rh * 0.93, 0), LN(Fr, Math.sign(x), 0, 0), [0.02, 0.02], [0.03, 0.02], [0.025, 0.03], cl);
  if (W > 6.5) { const zs = -side * 2.4; box(gw, Fr, -0.7, 0.7, H + 0.4, H + 1.9, zs - 0.7, zs + 0.7, cl, 1.4, 1.9); }
}
function lantern(gp, gl, d, x) {
  const P = place(d, x, 0, {}), Fr = makeFrame(P.wx, P.wy, P.wz, frame(d, F0).th);
  box(gp, Fr, -0.07, 0.07, 0, 3.9, -0.07, 0.07, [1, 1, 1], 1, 1);
  box(gp, Fr, -0.24, 0.24, 4.55, 4.68, -0.24, 0.24, [1, 1, 1], 1, 1);
  box(gl, Fr, -0.17, 0.17, 3.95, 4.55, -0.17, 0.17, [1, 1, 1], 1, 1);
}
function landmark(group, kind, d, x) {
  const F = frame(d, {}), P = place(d, x, 0, {}), g = new Group();
  g.position.set(P.wx, P.wy, P.wz); g.rotation.y = Math.PI / 2 - F.th; group.add(g);
  const add = (geo, mat, px, py, pz) => { const m = new Mesh(geo, mat); m.position.set(px, py, pz); g.add(m); return m; };
  const side = Math.sign(x);
  if (kind === 'opera') {   // neo-Renaissance opera house with a green dome and a figure on top
    add(new BoxGeometry(30, 15, 20), M.cream, 0, 6.5, 0);
    add(new BoxGeometry(18, 3, 3), M.cream, 0, 15.5, -side * 8.5);
    for (let i = 0; i < 8; i++) add(new CylinderGeometry(0.45, 0.5, 11, 10), M.white, -10.5 + i * 3, 5.5, -side * 10.6);
    const dome = add(new SphereGeometry(6, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.green, 0, 14, 0);
    add(new CylinderGeometry(0.25, 0.4, 3, 8), M.gold, 0, 21.5, 0); add(new SphereGeometry(0.7, 10, 8), M.gold, 0, 23.4, 0);
    return dome;
  }
  if (kind === 'spires') {  // neo-gothic church with twin spires
    add(new BoxGeometry(14, 14, 24), M.stone, 0, 5, side * 4);
    for (const tx of [-5, 5]) { add(new BoxGeometry(4, 28, 4), M.stone, tx, 12, -side * 8); add(new ConeGeometry(2.6, 18, 4), M.dark, tx, 35, -side * 8).rotation.y = Math.PI / 4; }
    add(new CircleGeometry(2.1, 20), M.rose, 0, 12, -side * 10.05).rotation.y = side > 0 ? Math.PI : 0;
    return;
  }
  if (kind === 'ratusha') { // town hall with the tower, clock and the flag
    add(new BoxGeometry(24, 13, 22), M.cream, 0, 4.5, 0);
    add(new BoxGeometry(5.5, 24, 5.5), M.cream, 0, 23, 0);
    add(new ConeGeometry(3.6, 6, 4), M.green, 0, 38, 0).rotation.y = Math.PI / 4;
    for (const r of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) { const c = add(new PlaneGeometry(3, 3), M.clock, Math.sin(r) * 2.8, 31, Math.cos(r) * 2.8); c.rotation.y = r; }
    add(new CylinderGeometry(0.08, 0.08, 5, 6), M.iron, 0, 43.5, 0);
    add(new PlaneGeometry(2.6, 0.8), M.flagB, 1.3, 45.4, 0); add(new PlaneGeometry(2.6, 0.8), M.flagY, 1.3, 44.6, 0);
  }
}
function buildChunk(c) {
  const d0 = c * CH, d1 = d0 + CH, group = new Group(), rng = mulberry(c * 7919 + 13);
  const gRoad = new GB(), gWalk = new GB(), gWall = new GB(), gRoof = new GB(), gPole = new GB(), gLamp = new GB();
  const white = [1, 1, 1], yard = col('#8f8579');
  ribbon(gRoad, d0, d1, -3.4, 3.4, 0, white, 6.8, 5, true);
  for (let d = d0; d < d1;) {
    const sg = segAt(d) || { e: d1, type: 'street' }, e = Math.min(sg.e, d1);
    const wide = sg.type === 'square' ? 34 : sg.type === 'corner' ? 9 : 5.8;
    for (const s of [-1, 1]) {
      ribbon(gWalk, d, e, s > 0 ? 3.4 : -wide, s > 0 ? wide : -3.4, 0.14, white, 2, 2, false);
      curb(gWalk, d, e, s * 3.4, 0.14, col('#d8d2c6'));
      if (sg.type !== 'square') ribbon(gWalk, d, e, s > 0 ? wide : -18, s > 0 ? 18 : -wide, 0.13, yard, 2, 2, false);
    }
    d = e;
  }
  // houses on both sides, never inside a corner or on a square
  for (const s of [-1, 1]) {
    let d = d0 + rng() * 2;
    while (d < d1) {
      const W = 6.5 + rng() * 3.5, sg = segAt(d + W / 2), sgE = segAt(d + W);
      const blocked = (q) => !q || q.type === 'corner' || q.type === 'square';
      const nearCorner = SEGS.some((q) => q.type === 'corner' && d + W > q.s - 6 && d < q.e + 6);
      if (!blocked(sg) && !blocked(sgE) && !nearCorner) house(gWall, gRoof, d + W / 2, s, W, rng);
      d += W + 0.25 + rng() * 0.4;
    }
  }
  for (let d = Math.ceil(d0 / 14) * 14; d < d1; d += 14) { const sg = segAt(d); if (sg && sg.type !== 'corner') { lantern(gPole, gLamp, d, -3.9); lantern(gPole, gLamp, d + 7, 3.9); } }
  // a real junction: at each corner the old street carries straight on (stub with houses)
  for (const q of SEGS) {
    if (q.type !== 'corner' || q.s < d0 || q.s >= d1) continue;
    const F = frame(q.s, {}), P = place(q.s, 0, 0, {}), Fr = makeFrame(P.wx, P.wy, P.wz, F.th);
    const R = (x, y, z) => L(Fr, x, y, z);
    gRoad.quad(R(0, 0.002, -3.4), R(48, 0.002, -3.4), R(48, 0.002, 3.4), R(0, 0.002, 3.4), [0, 1, 0], [0, 0], [0, 9.6], [1, 9.6], [1, 0], white);
    gWalk.quad(R(0, 0.13, -q.dir * 5.8), R(48, 0.13, -q.dir * 5.8), R(48, 0.13, -q.dir * 3.4), R(0, 0.13, -q.dir * 3.4), [0, 1, 0], [0, 0], [24, 0], [24, 1], [0, 1], white);
    for (let x = 4; x < 46; x += 8) box(gWall, Fr, x, x + 7.6, -2, 10.5 + (x % 3), -q.dir * 15, -q.dir * 6, col(pick(PASTEL)), 1.9, 3.3, true);
    for (let x = 2 * CORNER_R + 4; x < 46; x += 8) box(gWall, Fr, x, x + 7.6, -2, 10.5, q.dir * 6, q.dir * 15, col(pick(PASTEL)), 1.9, 3.3, true);
  }
  for (const [g, m] of [[gRoad, M.road], [gWalk, M.walk], [gWall, M.wall], [gRoof, M.roof], [gPole, M.iron], [gLamp, M.lamp]]) { const geo = g.build(); if (geo) group.add(new Mesh(geo, m)); }
  // the square: opera, twin spires, town hall
  for (const q of SEGS) {
    if (q.type !== 'square' || q.s < d0 || q.s >= d1) continue;
    landmark(group, 'opera', q.s + 40, -22); landmark(group, 'spires', q.s + 45, 21); landmark(group, 'ratusha', q.s + 98, -21);
  }
  scene.add(group);
  return group;
}
function disposeChunk(g) {
  g.traverse((o) => { if (o.isMesh) o.geometry.dispose(); });
  scene.remove(g);
}
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function updateChunks() {
  const a = Math.max(0, Math.floor((dist - 30) / CH)), b = Math.floor((dist + VIEW) / CH);
  for (const [c, g] of chunks) if (c < a || c > b) { disposeChunk(g); chunks.delete(c); }
  for (let c = a; c <= b; c++) if (!chunks.has(c)) chunks.set(c, buildChunk(c));
}

// ---------------------------------------------------------------- characters (primitives + procedural run cycle)
const geoCache = { torso: new BoxGeometry(0.62, 0.72, 0.36), head: new SphereGeometry(0.19, 14, 10), limb: new BoxGeometry(0.17, 0.62, 0.17), leg: new BoxGeometry(0.21, 0.86, 0.22), cap: new SphereGeometry(0.2, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), shoe: new BoxGeometry(0.24, 0.13, 0.36), blob: new CircleGeometry(0.55, 20) };
function figure(colors, label) {
  const mat = (c) => new MeshLambertMaterial({ color: c });
  const suit = mat(colors.suit), pants = mat(colors.pants), skin = mat(colors.skin), hair = mat(colors.hair), shoe = mat(colors.shoe), cap = mat(colors.cap);
  const g = new Group(), body = new Group(); g.add(body);
  const torso = new Mesh(geoCache.torso, suit); torso.position.y = 1.22; body.add(torso);
  const head = new Mesh(geoCache.head, colors.face ? skin : hair); head.position.y = 1.78; body.add(head);
  const c = new Mesh(geoCache.cap, cap); c.position.y = 1.83; body.add(c);
  const limbs = [];
  for (const s of [-1, 1]) {
    const hip = new Group(); hip.position.set(s * 0.15, 0.88, 0); body.add(hip);
    const leg = new Mesh(geoCache.leg, pants); leg.position.y = -0.43; hip.add(leg);
    const sh = new Mesh(geoCache.shoe, shoe); sh.position.set(0, -0.84, 0.06); hip.add(sh);
    const sho = new Group(); sho.position.set(s * 0.38, 1.5, 0); body.add(sho);
    const arm = new Mesh(geoCache.limb, suit); arm.position.y = -0.3; sho.add(arm);
    limbs.push({ hip, sho, s });
  }
  if (label) { const p = new Mesh(new PlaneGeometry(0.55, 0.22), new MeshLambertMaterial({ map: labelTexture(label, '#5f6b3a', '#ffd21f', 192, 72) })); p.position.set(0, 1.3, -0.19); p.rotation.y = Math.PI; body.add(p); }
  const blob = new Mesh(geoCache.blob, M.shadow); blob.rotation.x = -Math.PI / 2; blob.position.y = 0.03; g.add(blob);
  g.userData = { body, limbs, blob };
  scene.add(g);
  return g;
}
function animate(g, ph, pose) {
  const { body, limbs, blob } = g.userData;
  for (const l of limbs) {
    const w = Math.sin(ph) * l.s;
    if (pose === 'air') { l.hip.rotation.x = -0.9; l.sho.rotation.x = -2.6; }
    else if (pose === 'idle') { l.hip.rotation.x = 0; l.sho.rotation.x = 0; }
    else if (pose === 'hands') { l.hip.rotation.x = 0; l.sho.rotation.x = -2.9; }
    else { l.hip.rotation.x = w * 0.85; l.sho.rotation.x = -w * 0.8; }
  }
  body.scale.y = pose === 'slide' ? 0.55 : 1;
  body.position.y = pose === 'run' ? Math.abs(Math.cos(ph)) * 0.07 : 0;
  blob.scale.setScalar(1);
}
const runner = figure({ suit: '#23262f', pants: '#23262f', skin: '#e8b894', hair: '#3a2a1e', shoe: '#f4f4f4', cap: '#c0392b' });
const tck = [figure({ suit: '#5f6b3a', pants: '#4e5830', skin: '#e0a983', hair: '#2e2418', shoe: '#1b1b1b', cap: '#4b5530' }, 'ТЦК'),
  figure({ suit: '#5f6b3a', pants: '#4e5830', skin: '#e0a983', hair: '#2e2418', shoe: '#1b1b1b', cap: '#4b5530' }, 'ТЦК')];

// ---------------------------------------------------------------- obstacles, coins
const OG = { bar: new BoxGeometry(2.0, 1.0, 0.5), pole: new BoxGeometry(0.16, 2.75, 0.16), banner: new PlaneGeometry(2.0, 1.2), bus: new BoxGeometry(5.2, 2.35, 2.0), wheel: new CylinderGeometry(0.42, 0.42, 0.3, 14), coin: new CylinderGeometry(0.36, 0.36, 0.08, 18) };
let obs = [], coinsList = [];
const coinMesh = new InstancedMesh(OG.coin, M.coin, 260); coinMesh.count = 0; coinMesh.frustumCulled = false; scene.add(coinMesh);
const dummy = new Object3D(), V = {};
function placeObj(o3, d, x, y, yaw = 0) { const P = place(d, x, y, V); o3.position.set(P.wx, P.wy, P.wz); o3.rotation.set(0, Math.PI / 2 - V.th + yaw, 0); }
function makeObstacle(o) {
  const g = new Group();
  if (o.t === 'bar') { const m = new Mesh(OG.bar, M.stripe); m.position.y = 0.5; m.rotation.y = Math.PI / 2; g.add(m); }
  else if (o.t === 'gate') { for (const s of [-1.05, 1.05]) { const p = new Mesh(OG.pole, M.gatePole); p.position.set(0, 1.37, s); g.add(p); } const b = new Mesh(OG.banner, M.stij); b.position.y = 1.9; b.rotation.y = Math.PI / 2; g.add(b); }
  else if (o.t === 'bus') { const b = new Mesh(OG.bus, [M.white, M.white, M.white, M.white, M.busBody, M.busBody]); b.position.y = 1.53; g.add(b); for (const ax of [-1.7, 1.7]) for (const s of [-0.9, 0.9]) { const w = new Mesh(OG.wheel, M.tyre); w.rotation.x = Math.PI / 2; w.position.set(ax, 0.42, s); g.add(w); } }
  else if (o.t === 'patrol') { o.fig = figure({ suit: '#5f6b3a', pants: '#4e5830', skin: '#e0a983', hair: '#2e2418', shoe: '#1b1b1b', cap: '#4b5530', face: true }); return; }
  scene.add(g); o.mesh = g;
}
function placeObstacles() {
  for (const o of obs) {
    const dc = o.d + o.len / 2;
    if (o.mesh) { placeObj(o.mesh, dc, o.lane * LANE, 0); o.mesh.visible = o.d < dist + VIEW; }
    if (o.fig) { placeObj(o.fig, dc, o.lane * LANE, 0); o.fig.rotation.y = -V.th; animate(o.fig, time * 6 + o.d, 'hands'); o.fig.userData.limbs[0].sho.rotation.x = -2.4 + Math.sin(time * 8 + o.d) * 0.5; }
  }
}
function removeObstacle(o) { if (o.mesh) scene.remove(o.mesh); if (o.fig) { o.fig.traverse((m) => { if (m.isMesh && m.material !== M.shadow) m.material.dispose(); }); scene.remove(o.fig); } }

// ---------------------------------------------------------------- generator (same passable-lane rule as the 2D game)
let nextRow = 0, lastRowEnd = 0;
const isBlock = (k) => k === 'bus' || k === 'patrol';
function inCornerZone(d) { return SEGS.some((q) => q.type === 'corner' && d > q.s - 16 && d < q.e + 12); }
function genRow() {
  let d = nextRow;
  const cz = SEGS.find((q) => q.type === 'corner' && d > q.s - 16 && d < q.e + 12);
  if (cz) { nextRow = cz.e + 12; lastRowEnd = Math.max(lastRowEnd, cz.e + 4); return; }   // corners stay clear
  const diff = Math.min(1, d / 3000), early = d < 180, r = rnd();
  const n = early ? 1 : (r < 0.42 - 0.22 * diff ? 1 : (r < 0.88 - 0.08 * diff ? 2 : 3));
  const lanes = [-1, 0, 1].sort(() => rnd() - 0.5).slice(0, n), kinds = {};
  for (const l of lanes) { const q = rnd(); kinds[l] = early ? (q < 0.4 ? 'bar' : q < 0.7 ? 'gate' : 'bus') : (q < 0.3 ? 'bar' : q < 0.55 ? 'gate' : q < 0.83 ? 'bus' : 'patrol'); }
  if (n === 3) { const bl = lanes.filter((l) => isBlock(kinds[l])); if (bl.length === 3) kinds[pick(bl)] = rnd() < 0.5 ? 'bar' : 'gate'; }
  const pass = [-1, 0, 1].filter((l) => !kinds[l] || !isBlock(kinds[l]));
  // coins leading into a passable lane
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
const p = { lane: 0, prevLane: 0, x: 0, prevX: 0, y: 0, vy: 0, onGround: true, slide: 0, run: 0, inv: 0, stumble: 0 };
function reset() {
  for (const o of obs) removeObstacle(o); obs = []; coinsList = [];
  dist = prevDist = 0; speed = 0; runTime = 0; score = 0; coins = 0; chaseT = 3; caughtT = 0;
  Object.assign(p, { lane: 0, prevLane: 0, x: 0, prevX: 0, y: 0, vy: 0, onGround: true, slide: 0, run: 0, inv: 0, stumble: 0 });
  nextRow = 60; lastRowEnd = 6;
  for (const [, g] of chunks) disposeChunk(g); chunks.clear();
  camPos = null;
}
function act(a) {
  if (state !== 'play') return;
  if (a === 'left' || a === 'right') { const nl = clamp(p.lane + (a === 'left' ? -1 : 1), -1, 1); if (nl !== p.lane) { p.prevLane = p.lane; p.lane = nl; beep(500, 0.05, 0.03); } }
  else if (a === 'up' && p.onGround) { p.vy = JV; p.onGround = false; p.slide = 0; beep(320, 0.18, 0.06, 760); }
  else if (a === 'down') { if (p.onGround) p.slide = SLIDE_T; else p.vy = Math.min(p.vy, -24); }
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
let camPos = null;
const camTarget = { x: 0, y: 0, z: 0 };
function update(dt) {
  time += dt;
  if (state === 'play') {
    runTime += dt; speed = BASE + (MAXS - BASE) * (1 - Math.exp(-runTime / 110));
    prevDist = dist; dist += speed * dt; score = Math.floor(dist);
    if (chaseT > 0) chaseT -= dt; if (p.inv > 0) p.inv -= dt; if (p.stumble > 0) p.stumble -= dt;
    p.prevX = p.x; const tx = p.lane * LANE; p.x += (tx - p.x) * (1 - Math.exp(-dt * 16));
    if (!p.onGround || p.vy > 0) { p.vy -= G * dt; p.y += p.vy * dt; if (p.y <= 0) { p.y = 0; p.vy = 0; p.onGround = true; } }
    if (p.slide > 0) p.slide -= dt;
    p.run += dt * (6 + speed * 0.35);
    collide();
    for (const c of coinsList) if (!c.got && c.d > prevDist - 0.9 && c.d < dist + 0.9 && Math.abs(c.x - p.x) < 1 && c.y > p.y - 0.4 && c.y < p.y + 2.5) { c.got = true; coins++; beep(1046, 0.07, 0.05); beep(1568, 0.1, 0.05, 0, 0.05); }
    while (nextRow < dist + VIEW) genRow();
    obs = obs.filter((o) => { if (o.d + o.len < dist - 8) { removeObstacle(o); return false; } return true; });
    coinsList = coinsList.filter((c) => !c.got && c.d > dist - 8);
  } else if (state === 'caught') {
    caughtT += dt; if (caughtT > 1.5) gameOver();
  }
  updateChunks();
  // characters
  const P = place(dist, p.x, p.y, V);
  runner.position.set(P.wx, P.wy, P.wz); runner.rotation.y = Math.PI - V.th;
  animate(runner, p.run, state === 'start' ? 'idle' : state !== 'play' ? 'hands' : p.slide > 0 ? 'slide' : !p.onGround ? 'air' : 'run');
  runner.userData.blob.position.y = 0.03 - p.y;
  const near = state !== 'play' || chaseT > 0;
  tckGap += ((near ? (state === 'caught' || state === 'over' ? 0.9 : 2.6) : 9) - tckGap) * (1 - Math.exp(-dt * 2.5));
  tck.forEach((t, i) => { const Q = place(dist - tckGap - i * 0.4, p.x + (i ? 1.15 : -1.15) * (state === 'caught' || state === 'over' ? 0.55 : 1), 0, V); t.position.set(Q.wx, Q.wy, Q.wz); t.rotation.y = Math.PI - V.th; animate(t, p.run + i * 1.7, state === 'play' ? 'run' : 'idle'); t.visible = tckGap < 8; });
  placeObstacles();
  // coins (one instanced draw call)
  let n = 0;
  for (const c of coinsList) { if (c.d > dist + 150 || n >= 260) continue; const Q = place(c.d, c.x, c.y, V); dummy.position.set(Q.wx, Q.wy, Q.wz); dummy.rotation.set(Math.PI / 2, 0, time * 4 + c.d); dummy.updateMatrix(); coinMesh.setMatrixAt(n++, dummy.matrix); }
  coinMesh.count = n; coinMesh.instanceMatrix.needsUpdate = true;
  // camera rides the route: it swings round real corners and follows the slopes
  const C = place(Math.max(0, dist - 6.5), p.x * 0.5, 4.6 + p.y * 0.3, {}), Tg = place(dist + 9, p.x * 0.6, 1.1 + p.y * 0.5, {});
  if (!camPos) camPos = { x: C.wx, y: C.wy, z: C.wz };
  const k = 1 - Math.exp(-dt * 7);
  camPos.x += (C.wx - camPos.x) * k; camPos.y += (C.wy - camPos.y) * k; camPos.z += (C.wz - camPos.z) * k;
  camTarget.x += (Tg.wx - camTarget.x) * Math.min(1, k * 1.4); camTarget.y += (Tg.wy - camTarget.y) * Math.min(1, k * 1.4); camTarget.z += (Tg.wz - camTarget.z) * Math.min(1, k * 1.4);
  camera.position.set(camPos.x, camPos.y, camPos.z); camera.lookAt(camTarget.x, camTarget.y, camTarget.z);
  sky.position.copy(camera.position);
  sun.position.set(camPos.x - 40, camPos.y + 60, camPos.z + 20); sun.target.position.set(camPos.x, camPos.y, camPos.z);
}
let tckGap = 2.6;

// ---------------------------------------------------------------- day / night
function setNight(on) {
  night = on; const S = on ? NIGHT : DAY;
  scene.fog.color.set(S.fog); paintSky(S.sky, S.fog); hemi.intensity = S.hemi; hemi.groundColor.set(S.ground); sun.intensity = S.sun;
  M.wall.emissiveIntensity = S.win; M.lamp.emissiveIntensity = S.lamp; M.coin.emissiveIntensity = on ? 1.1 : 0.6;
  $('btnNight').textContent = on ? '☀️' : '🌙';
}

// ---------------------------------------------------------------- UI, input, audio, Android hooks
let AC = null;
function initAudio() { try { if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === 'suspended') AC.resume(); } catch (e) { AC = null; } }
function beep(f, dur, vol, f2, delay = 0) {
  if (!AC) return; try { const t = AC.currentTime + delay, o = AC.createOscillator(), g = AC.createGain(); o.type = 'square'; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + dur + 0.05); } catch (e) {}
}
function vib(ms) { try { if (window.AndroidBridge && window.AndroidBridge.vibrate) window.AndroidBridge.vibrate(ms); else if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }
function toast(t) { const e = $('toast'); e.textContent = t; e.classList.remove('show'); void e.offsetWidth; e.classList.add('show'); }
function show(id) { for (const s of ['start', 'pause', 'over']) $(s).classList.toggle('hidden', s !== id); $('hud').classList.toggle('hidden', id !== null && id !== 'pause'); }
function start() { initAudio(); reset(); state = 'play'; show(null); toast('БІЖИ! ТЦК НА ХВОСТІ!'); }
function pauseGame() { if (state === 'play') { state = 'pause'; show('pause'); } }
function resume() { if (state === 'pause') { initAudio(); state = 'play'; show(null); } }
function gameOver() { state = 'over'; $('oScore').textContent = score; $('oCoins').textContent = coins; show('over'); }
function to2D() { location.href = 'index.html'; }
$('start').addEventListener('click', (e) => { if (e.target.closest('button') && e.target.id !== 'btnGo') return; start(); });
$('btnGo').addEventListener('click', (e) => { e.stopPropagation(); start(); });
$('btnBack1').addEventListener('click', (e) => { e.stopPropagation(); to2D(); });
$('btnAgain').addEventListener('click', start); $('btnBack2').addEventListener('click', to2D);
$('btnResume').addEventListener('click', resume); $('btnBack3').addEventListener('click', to2D);
$('btnPause').addEventListener('click', (e) => { e.stopPropagation(); pauseGame(); });
$('btnNight').addEventListener('click', (e) => { e.stopPropagation(); setNight(!night); });
let tch = null;
const swipe = (dx, dy) => Math.abs(dx) > Math.abs(dy) ? act(dx > 0 ? 'right' : 'left') : act(dy > 0 ? 'down' : 'up');
cv.addEventListener('touchstart', (e) => { e.preventDefault(); initAudio(); const t = e.changedTouches[0]; tch = { id: t.identifier, x: t.clientX, y: t.clientY, done: false }; }, { passive: false });
cv.addEventListener('touchmove', (e) => { e.preventDefault(); if (!tch || tch.done) return; for (const t of e.changedTouches) { if (t.identifier !== tch.id) continue; const dx = t.clientX - tch.x, dy = t.clientY - tch.y; if (Math.abs(dx) > 22 || Math.abs(dy) > 22) { swipe(dx, dy); tch.done = true; } } }, { passive: false });
cv.addEventListener('touchend', (e) => { e.preventDefault(); if (!tch) return; for (const t of e.changedTouches) { if (t.identifier !== tch.id) continue; if (!tch.done) { const dx = t.clientX - tch.x, dy = t.clientY - tch.y; if (Math.abs(dx) > 10 || Math.abs(dy) > 10) swipe(dx, dy); } tch = null; } }, { passive: false });
document.addEventListener('touchmove', (e) => { if (e.cancelable) e.preventDefault(); }, { passive: false });
let ms = null;
cv.addEventListener('mousedown', (e) => { ms = { x: e.clientX, y: e.clientY, done: false }; });
window.addEventListener('mousemove', (e) => { if (!ms || ms.done) return; const dx = e.clientX - ms.x, dy = e.clientY - ms.y; if (Math.abs(dx) > 24 || Math.abs(dy) > 24) { swipe(dx, dy); ms.done = true; } });
window.addEventListener('mouseup', () => { ms = null; });
window.addEventListener('keydown', (e) => {
  const c = e.code; if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(c)) e.preventDefault();
  if (state === 'play') { if (c === 'ArrowLeft' || c === 'KeyA') act('left'); else if (c === 'ArrowRight' || c === 'KeyD') act('right'); else if (c === 'ArrowUp' || c === 'KeyW' || c === 'Space') act('up'); else if (c === 'ArrowDown' || c === 'KeyS') act('down'); else if (c === 'KeyP' || c === 'Escape') pauseGame(); }
  else if ((state === 'start' || state === 'over') && (c === 'Enter' || c === 'Space')) start();
  else if (state === 'pause' && (c === 'Enter' || c === 'KeyP' || c === 'Escape')) resume();
});
function appPause() { pauseGame(); try { if (AC && AC.state === 'running') AC.suspend(); } catch (e) {} }
document.addEventListener('visibilitychange', () => { if (document.hidden) appPause(); });
window.addEventListener('blur', pauseGame);
window.__appPause = appPause;   // called by the Android shell (MainActivity)
window.__appBack = () => { if (state === 'play') { pauseGame(); return 'ok'; } if (state === 'caught') return 'ok'; to2D(); return 'ok'; };

// ---------------------------------------------------------------- loop
function resize() {
  const w = window.innerWidth, h = window.innerHeight; renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.fov = clamp(2 * Math.atan(Math.tan((74 * Math.PI / 180) / 2) / camera.aspect) * 180 / Math.PI, 55, 92); camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
let last = performance.now(), lastHud = -1;
function loop(now) {
  let dt = (now - last) / 1000; last = now; dt = clamp(dt, 0, 0.05);
  if (state !== 'pause' && state !== 'dead') update(dt);
  if (state !== 'dead') renderer.render(scene, camera);
  if (score !== lastHud) { $('score').textContent = score; lastHud = score; }
  $('coinN').textContent = coins;
  requestAnimationFrame(loop);
}
buildRoute(); resize(); setNight(false); reset(); show('start');
requestAnimationFrame(loop);
// debug / test hook
window.__g3 = { get state() { return state; }, get dist() { return dist; }, get lane() { return p.lane; }, get score() { return score; }, act, start, setNight, renderer, get chunks() { return chunks.size; }, get obs() { return obs.length; },
  warp(d) { dist = prevDist = d; nextRow = d + 40; lastRowEnd = d + 6; for (const o of obs) removeObstacle(o); obs = []; coinsList = []; camPos = null; }, segs: SEGS, setSpeedTime(t) { runTime = t; } };
