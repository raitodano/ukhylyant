// Landmarks on the city squares and silhouettes on the horizon, built from primitives and merged into the chunk's
// geometry buffers (det = coloured stone/plaster, gold = shiny metal, glass, metal), so each costs no extra draw calls.
import { BoxGeometry, CylinderGeometry, ConeGeometry, SphereGeometry, CapsuleGeometry, TorusGeometry, LatheGeometry, Vector2 } from 'three';
import { col, frameMatrix, makeFrame } from './geo.js';

const C = {
  cream: col('#efe4c8'), white: col('#f4f1ea'), stone: col('#a39a8c'), grey: col('#8a8a88'), dark: col('#4b4744'), green: col('#5f9d8c'),
  brick: col('#9a4b36'), red: col('#b8322a'), granite: col('#6e625a'), bronze: col('#4f5a3c'), blue: col('#3d5a8a'), concrete: col('#b9b6ae'), yellow: col('#e3b23c'), steel: col('#c9ccd1')
};
const geoCache = {};
const G = (k, f) => geoCache[k] || (geoCache[k] = f());
const BOX = () => G('box', () => new BoxGeometry(1, 1, 1));
const CYL = (n = 16) => G('cyl' + n, () => new CylinderGeometry(0.5, 0.5, 1, n));
const CONE = (n = 16) => G('cone' + n, () => new ConeGeometry(0.5, 1, n));
const SPH = () => G('sph', () => new SphereGeometry(0.5, 18, 12));
const HEMI = () => G('hemi', () => new SphereGeometry(0.5, 18, 8, 0, Math.PI * 2, 0, Math.PI / 2));
const ONION = () => G('onion', () => { const p = []; for (let i = 0; i <= 16; i++) { const t = i / 16; p.push(new Vector2(Math.max(0.001, 0.5 * Math.sin(Math.PI * Math.pow(t, 0.7)) * (1 - 0.3 * t)), t * 1.4)); } return new LatheGeometry(p, 18); });
const CAPS = () => G('caps', () => new CapsuleGeometry(0.5, 1, 4, 10));

// a placer bound to a local frame F (x along route, z to the right, y up)
function placer(F, B) {
  const put = (gb, geo, x, y, z, sx, sy, sz, cl, rot = 0) => gb.geo(geo, frameMatrix(F, x, y, z, rot, sx, sy, sz), cl);
  return {
    box: (x, y, z, sx, sy, sz, cl, gb = B.det, rot = 0) => put(gb, BOX(), x, y + sy / 2, z, sx, sy, sz, cl, rot),
    cyl: (x, y, z, r, h, cl, gb = B.det, n = 16) => put(gb, CYL(n), x, y + h / 2, z, r * 2, h, r * 2, cl),
    cone: (x, y, z, r, h, cl, gb = B.det, n = 16, rot = 0) => put(gb, CONE(n), x, y + h / 2, z, r * 2, h, r * 2, cl, rot),
    sph: (x, y, z, r, cl, gb = B.det, sy = 1) => put(gb, SPH(), x, y, z, r * 2, r * 2 * sy, r * 2, cl),
    dome: (x, y, z, r, cl, gb = B.det, sy = 1) => put(gb, HEMI(), x, y, z, r * 2, r * 2 * sy, r * 2, cl),
    onion: (x, y, z, r, cl, gb = B.gold) => put(gb, ONION(), x, y, z, r * 2, r * 2, r * 2, cl),
    caps: (x, y, z, r, h, cl, gb = B.det, rot = 0) => put(gb, CAPS(), x, y, z, r * 2, h, r * 2, cl, rot)
  };
}
function church(P, x, z, s, white) {   // orthodox church: cross plan, drums and golden onion domes with crosses
  const w = white || C.white;
  P.box(x, 0, z, 16 * s, 12 * s, 10 * s, w); P.box(x, 0, z, 10 * s, 12 * s, 16 * s, w);
  P.box(x, 12 * s, z, 16.4 * s, 0.6 * s, 10.4 * s, C.cream); P.box(x, 12 * s, z, 10.4 * s, 0.6 * s, 16.4 * s, C.cream);
  P.cyl(x, 12 * s, z, 3 * s, 6 * s, w); P.onion(x, 18 * s, z, 3.4 * s, C.yellow); P.box(x, 22.3 * s, z, 0.2 * s, 2.4 * s, 0.2 * s, C.yellow, undefined); P.box(x, 23.3 * s, z, 0.2 * s, 0.2 * s, 1.2 * s, C.yellow);
  for (const [dx, dz] of [[-5, -5], [5, -5], [-5, 5], [5, 5]]) { P.cyl(x + dx * s, 12 * s, z + dz * s, 1.4 * s, 3 * s, w); P.onion(x + dx * s, 15 * s, z + dz * s, 1.7 * s, C.yellow); }
  // bell tower in front
  P.box(x - 12 * s, 0, z, 5 * s, 18 * s, 5 * s, w); P.box(x - 12 * s, 18 * s, z, 4 * s, 4 * s, 4 * s, w); P.onion(x - 12 * s, 22 * s, z, 2 * s, C.yellow);
}
function figure(P, x, y, z, s, cl, gb) {   // a standing statue
  P.caps(x, y + 1.5 * s, z, 0.45 * s, 1.6 * s, cl, gb); P.sph(x, y + 2.75 * s, z, 0.32 * s, cl, gb);
  P.caps(x + 0.1 * s, y + 2.3 * s, z + 0.55 * s, 0.13 * s, 1.1 * s, cl, gb); P.caps(x, y + 1.8 * s, z - 0.55 * s, 0.13 * s, 0.9 * s, cl, gb);
}
// side: -1 = left of the road, +1 = right; the facade looks at the road (towards -side in z)
export function landmark(kind, F, side, B) {
  const P = placer(F, B), fz = -side;   // fz: direction from the building towards the road
  switch (kind) {
    case 'opera':
      P.box(0, 0, 0, 30, 15, 20, C.cream); P.box(0, 14.6, 0, 31, 0.8, 21, C.white); P.box(0, 0, fz * 10.5, 20, 1.2, 3, C.stone);
      P.box(0, 15, fz * 8.5, 18, 3, 3, C.cream);
      for (let i = 0; i < 8; i++) P.cyl(-10.5 + i * 3, 1.2, fz * 10.6, 0.48, 10, C.white);
      P.box(0, 11.2, fz * 10.6, 24, 1.2, 1.4, C.white);
      for (const sx of [-13, 13]) figure(P, sx, 15.4, fz * 8.5, 1.4, C.yellow, B.gold);
      P.cyl(0, 15, 0, 6.3, 1.2, C.white); P.dome(0, 16.2, 0, 6, C.green); P.cyl(0, 22, 0, 0.35, 2.6, C.yellow, B.gold); figure(P, 0, 24.2, 0, 1.2, C.yellow, B.gold);
      break;
    case 'gothic':
      P.box(0, 0, -fz * 4, 14, 14, 24, C.stone); P.box(0, 14, -fz * 4, 0.1, 0.1, 0.1, C.dark);
      P.cone(0, 14, -fz * 4, 9.8, 6, C.dark, B.det, 4, Math.PI / 4);
      for (const tx of [-5, 5]) { P.box(tx, 0, fz * 8, 4.4, 28, 4.4, C.stone); P.cone(tx, 28, fz * 8, 3, 18, C.dark, B.det, 4, Math.PI / 4); P.sph(tx, 46.3, fz * 8, 0.35, C.yellow, B.gold); }
      P.cyl(0, 10, fz * 10.1, 2.1, 0.2, C.blue); P.box(0, 0, fz * 10.1, 2.6, 4.5, 0.4, C.dark);
      break;
    case 'ratusha':
      P.box(0, 0, 0, 24, 13, 22, C.cream); P.box(0, 12.8, 0, 25, 0.7, 23, C.white);
      P.box(0, 13, 0, 5.5, 20, 5.5, C.cream); P.box(0, 33, 0, 6.4, 0.6, 6.4, C.white); P.cyl(0, 33.6, 0, 2.6, 2.5, C.cream);
      P.cone(0, 36, 0, 3.6, 5.4, C.green, B.det, 8);
      for (const [dx, dz] of [[0, 2.8], [0, -2.8], [2.8, 0], [-2.8, 0]]) P.cyl(dx, 29.5, dz, 1.25, 0.1, C.white);
      P.cyl(0, 41.4, 0, 0.08, 5, C.dark, B.metal, 6); P.box(1.3, 44.6, 0, 2.6, 0.8, 0.05, C.yellow); P.box(1.3, 45.4, 0, 2.6, 0.8, 0.05, C.blue);
      break;
    case 'domes': church(P, 0, 0, 1.1); break;
    case 'column':
      P.box(0, 0, 0, 9, 1, 9, C.granite); P.box(0, 1, 0, 5, 5, 5, C.white); P.cyl(0, 6, 0, 1.3, 34, C.white, B.det, 20); P.cyl(0, 40, 0, 2, 1.5, C.white);
      figure(P, 0, 41.5, 0, 2.2, C.yellow, B.gold);
      for (let a = 0; a < 4; a++) P.cyl(Math.cos(a * 1.57) * 7, 0, Math.sin(a * 1.57) * 7, 0.4, 3.5, C.dark, B.metal, 8);
      break;
    case 'statue':
      P.box(0, 0, 0, 7, 0.8, 7, C.granite); P.box(0, 0.8, 0, 3.4, 4.5, 3.4, C.granite); P.box(0, 5.3, 0, 3.8, 0.5, 3.8, C.granite);
      figure(P, 0, 5.8, 0, 2.3, C.bronze, B.metal);
      break;
    case 'gosprom':
      for (const [x, w, h] of [[-26, 18, 26], [-8, 16, 44], [8, 16, 50], [26, 18, 30]]) {
        P.box(x, 0, 0, w, h, 18, C.concrete);
        for (let y = 3; y < h - 2; y += 3.4) P.box(x, y, fz * 9.05, w - 1, 1.6, 0.2, C.blue, B.glass);
      }
      P.box(0, 20, fz * 2, 52, 3, 4, C.concrete); P.box(-17, 14, fz * 2, 4, 3, 4, C.concrete);
      P.cyl(8, 50, 0, 0.25, 12, C.dark, B.metal, 6);
      break;
    case 'highrise':
      P.box(0, 0, 0, 22, 6, 22, C.grey); P.box(0, 6, 0, 18, 74, 18, C.blue, B.glass); P.box(0, 80, 0, 19, 1, 19, C.steel, B.metal);
      for (let y = 9; y < 80; y += 3) P.box(0, y, fz * 9.02, 18.2, 0.25, 0.1, C.steel, B.metal);
      P.cyl(0, 81, 0, 0.3, 14, C.steel, B.metal, 6);
      break;
    case 'watertower':
      P.box(0, 0, 0, 7, 24, 7, C.brick); P.box(0, 24, 0, 8.5, 6, 8.5, C.brick); P.box(0, 30, 0, 9, 0.6, 9, C.white);
      for (const [dx, dz] of [[0, 4.3], [0, -4.3], [4.3, 0], [-4.3, 0]]) P.cyl(dx, 26.4, dz, 1.4, 0.1, C.white);
      P.cone(0, 30.6, 0, 5.8, 6, C.dark, B.det, 4, Math.PI / 4); P.cyl(0, 36.6, 0, 0.15, 3, C.yellow, B.gold, 6);
      break;
    case 'rocket':
      P.box(0, 0, 0, 8, 1.2, 8, C.granite);
      for (const a of [0, 2.09, 4.19]) P.box(Math.cos(a) * 2, 1.2, Math.sin(a) * 2, 0.5, 9, 0.5, C.steel, B.metal, a);
      P.cyl(0, 6, 0, 1.4, 16, C.white); P.cone(0, 22, 0, 1.4, 5, C.white); P.cyl(0, 6, 0, 1.45, 1.2, C.red);
      for (const a of [0, 1.57, 3.14, 4.71]) P.box(Math.cos(a) * 1.8, 6, Math.sin(a) * 1.8, 0.2, 4, 1.8, C.white, B.det, a);
      break;
    case 'castle':
      P.box(0, 0, 0, 36, 9, 2, C.brick); P.box(0, 0, fz * 14, 36, 9, 2, C.brick); P.box(-18, 0, fz * 7, 2, 9, 14, C.brick); P.box(18, 0, fz * 7, 2, 9, 14, C.brick);
      for (let x = -17; x <= 17; x += 2.4) P.box(x, 9, 0, 1.2, 1, 2.2, C.brick);
      for (const [x, h] of [[-18, 22], [0, 28], [18, 18]]) { P.box(x, 0, 0, 8, h, 8, C.brick); P.cone(x, h, 0, 6.2, 6, C.red, B.det, 4, Math.PI / 4); }
      break;
  }
}

// ---------------------------------------------------------------- horizon silhouettes (one merged mesh, unlit, tinted by the fog)
export function skyline(kinds, gb) {
  const n = kinds.length;
  kinds.forEach((k, i) => {
    const a = -0.6 + (i - (n - 1) / 2) * 0.95 + (i % 2) * 0.2, R = 330, F = makeFrame(Math.sin(a) * R, 0, -Math.cos(a) * R, a + Math.PI / 2);
    const B = { det: gb, gold: gb, glass: gb, metal: gb }, P = placer(F, B), c = [1, 1, 1];
    switch (k) {
      case 'motherland': P.box(0, 0, 0, 20, 30, 20, c); P.caps(0, 62, 0, 5, 50, c); P.sph(0, 92, 0, 3, c); P.box(4, 78, 6, 1.2, 38, 1.2, c, gb, 0.2); P.cyl(-6, 74, 0, 6, 1.2, c); break;
      case 'belltower': P.box(0, 0, 0, 22, 30, 22, c); P.box(0, 30, 0, 16, 24, 16, c); P.cyl(0, 54, 0, 6, 18, c); P.onion(0, 72, 0, 7, c, gb); P.cone(0, 81, 0, 1, 12, c); break;
      case 'tv': P.cone(0, 0, 0, 14, 160, c, gb, 6); P.cyl(0, 160, 0, 1, 40, c); P.box(0, 100, 0, 12, 4, 12, c); break;
      case 'spires': for (const x of [-8, 8]) { P.box(x, 0, 0, 7, 50, 7, c); P.cone(x, 50, 0, 5, 32, c, gb, 4); } P.box(0, 0, 18, 18, 28, 30, c); break;
      case 'ratusha': P.box(0, 0, 0, 40, 22, 30, c); P.box(0, 22, 0, 10, 40, 10, c); P.cone(0, 62, 0, 7, 12, c, gb, 8); break;
      case 'domes': church(P, 0, 0, 2.2, c); break;
      case 'cranes': for (const x of [-30, 0, 30]) { P.box(x, 0, 0, 3, 50, 3, c); P.box(x + 14, 48, 0, 46, 3, 2, c, gb, 0.15); } break;
      case 'lighthouse': P.cone(0, 0, 0, 8, 50, c, gb, 12); P.cyl(0, 50, 0, 4, 8, c); P.cone(0, 58, 0, 4.5, 4, c); break;
      case 'gosprom': for (const [x, h] of [[-40, 50], [-14, 80], [14, 90], [40, 56]]) P.box(x, 0, 0, 24, h, 24, c); break;
      case 'wheel': { const t = G('torus', () => new TorusGeometry(30, 1.2, 6, 40)); gb.geo(t, frameMatrix(F, 0, 36, 0, Math.PI / 2), c); P.box(0, 0, 0, 2, 36, 6, c); for (let s = 0; s < 6; s++) P.box(0, 36, 0, 0.8, 60, 0.8, c, gb); break; }
      case 'highrises': for (const [x, h, w] of [[-50, 110, 22], [-20, 150, 26], [14, 130, 22], [46, 90, 30]]) P.box(x, 0, 0, w, h, w, c); break;
      case 'chimneys': for (const [x, h] of [[-30, 110], [0, 130], [28, 100]]) { P.cone(x, 0, 0, 6, h, c, gb, 12); } P.box(0, 0, 20, 90, 30, 30, c); break;
      case 'dam': P.box(0, 0, 0, 320, 40, 12, c); for (let x = -150; x <= 150; x += 20) P.box(x, 40, 0, 6, 14, 10, c); break;
      case 'watertower': P.box(0, 0, 0, 12, 60, 12, c); P.box(0, 60, 0, 16, 14, 16, c); P.cone(0, 74, 0, 11, 14, c, gb, 4); break;
      case 'rocket': P.cyl(0, 0, 0, 5, 60, c); P.cone(0, 60, 0, 5, 20, c); break;
      case 'castle': for (const [x, h] of [[-40, 40], [0, 56], [40, 34]]) { P.box(x, 0, 0, 18, h, 18, c); P.cone(x, h, 0, 13, 14, c, gb, 4); } P.box(0, 0, 0, 90, 22, 8, c); break;
      case 'column': P.cyl(0, 0, 0, 3, 90, c); P.caps(0, 98, 0, 3, 8, c); break;
      case 'mountains': for (const [x, h, w] of [[-120, 120, 180], [0, 160, 220], [130, 110, 200]]) P.cone(x, 0, 60, w / 2, h, c, gb, 7); break;
    }
  });
}
