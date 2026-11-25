// Characters: a jointed rig (pelvis, hips, knees, shoulders, elbows) of smooth capsule limbs with PBR cloth/skin,
// and the procedural animation (run, jump with tuck, front flip, forward roll, idle, hands up).
import { Group, Mesh, MeshStandardMaterial, MeshBasicMaterial, CapsuleGeometry, SphereGeometry, BoxGeometry, CircleGeometry, PlaneGeometry, CylinderGeometry, TorusGeometry } from 'three';
import { labelTexture } from './textures.js';

const clamp = (v, a, b) => v < a ? a : v > b ? b : v, smooth = (t) => t * t * (3 - 2 * t);
const GEO = {
  chest: new CapsuleGeometry(0.2, 0.32, 6, 14), belly: new CapsuleGeometry(0.17, 0.12, 6, 14), head: new SphereGeometry(0.15, 20, 14), neck: new CylinderGeometry(0.06, 0.07, 0.12, 10),
  hair: new SphereGeometry(0.158, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), nose: new SphereGeometry(0.025, 8, 6), ear: new SphereGeometry(0.035, 8, 6),
  upper: new CapsuleGeometry(0.068, 0.24, 4, 10), fore: new CapsuleGeometry(0.058, 0.22, 4, 10), hand: new SphereGeometry(0.06, 10, 8),
  thigh: new CapsuleGeometry(0.095, 0.3, 4, 12), shin: new CapsuleGeometry(0.075, 0.32, 4, 12), shoe: new CapsuleGeometry(0.07, 0.17, 4, 10),
  cap: new SphereGeometry(0.162, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), brim: new CylinderGeometry(0.15, 0.16, 0.025, 16, 1, false, -Math.PI / 2, Math.PI),
  hood: new TorusGeometry(0.13, 0.045, 8, 16, Math.PI), stripe: new BoxGeometry(0.012, 0.42, 0.03), blob: new CircleGeometry(0.55, 24), zip: new BoxGeometry(0.012, 0.42, 0.01)
};
const mats = new Map();
const mat = (c, rough = 0.85, metal = 0) => { const k = c + rough + metal; if (!mats.has(k)) mats.set(k, new MeshStandardMaterial({ color: c, roughness: rough, metalness: metal })); return mats.get(k); };
export const RUNNER = { suit: '#22252d', pants: '#22252d', skin: '#e3b08c', hair: '#3a2a1e', shoe: '#f2f2f0', cap: '#b8312a', trim: '#f2f2f0', hood: true };
export const TCK = { suit: '#5c6a3a', pants: '#4b5530', skin: '#dba582', hair: '#2e2418', shoe: '#1b1b1b', cap: '#48522f', boots: true };

export function figure(scene, colors, label, shadowMat) {
  const suit = mat(colors.suit, 0.9), pants = mat(colors.pants, 0.92), skin = mat(colors.skin, 0.6), hair = mat(colors.hair, 0.8), shoe = mat(colors.shoe, 0.55), cap = mat(colors.cap, 0.85), trim = mat(colors.trim || '#ffffff', 0.7);
  const g = new Group(), pivot = new Group(), body = new Group();
  pivot.position.y = 0.95; body.position.y = -0.95; g.add(pivot); pivot.add(body);
  const add = (parent, geo, m, x, y, z, rx = 0, sx = 1, sy = 1, sz = 1) => { const o = new Mesh(geo, m); o.position.set(x, y, z); o.rotation.x = rx; o.scale.set(sx, sy, sz); o.castShadow = true; parent.add(o); return o; };
  add(body, GEO.chest, suit, 0, 1.36, 0, 0, 1.25, 1, 0.78); add(body, GEO.belly, suit, 0, 1.04, 0, 0, 1.2, 1, 0.82);
  add(body, GEO.neck, skin, 0, 1.66, 0);
  const head = new Group(); head.position.set(0, 1.8, 0.01); body.add(head);
  add(head, GEO.head, colors.face ? skin : hair, 0, 0, 0, 0, 1, 1.1, 1); add(head, GEO.nose, skin, 0, -0.01, 0.15); for (const s of [-1, 1]) add(head, GEO.ear, skin, s * 0.15, 0, 0);
  if (colors.face) add(head, GEO.hair, hair, 0, 0.01, -0.01);
  add(head, GEO.cap, cap, 0, 0.03, 0); add(head, GEO.brim, cap, 0, 0.04, 0.06, 0, 1, 1, 1.35);
  if (colors.hood) add(body, GEO.hood, suit, 0, 1.62, -0.1, -0.5, 1, 1, 1.3);
  if (colors.trim) add(body, GEO.zip, trim, 0, 1.3, 0.2);
  const limbs = [];
  for (const s of [-1, 1]) {
    const hip = new Group(); hip.position.set(s * 0.11, 0.95, 0); body.add(hip);
    add(hip, GEO.thigh, pants, 0, -0.22, 0); if (colors.trim) add(hip, GEO.stripe, trim, s * 0.095, -0.22, 0);
    const knee = new Group(); knee.position.y = -0.45; hip.add(knee);
    add(knee, GEO.shin, pants, 0, -0.2, 0); if (colors.trim) add(knee, GEO.stripe, trim, s * 0.075, -0.2, 0, 0, 1, 0.9, 1);
    add(knee, GEO.shoe, colors.boots ? mat('#1b1b1b', 0.5) : shoe, 0, -0.44, 0.06, Math.PI / 2, 1.05, 1, colors.boots ? 1.3 : 1);
    const sho = new Group(); sho.position.set(s * 0.29, 1.56, 0); body.add(sho);
    add(sho, GEO.upper, suit, 0, -0.15, 0);
    const elb = new Group(); elb.position.y = -0.32; sho.add(elb);
    add(elb, GEO.fore, suit, 0, -0.14, 0); add(elb, GEO.hand, skin, 0, -0.31, 0);
    limbs.push({ hip, knee, sho, elb, s });
  }
  if (label) { const p = new Mesh(new PlaneGeometry(0.42, 0.17), new MeshStandardMaterial({ map: labelTexture(label, '#5c6a3a', '#ffd21f', 192, 72), roughness: 0.9 })); p.position.set(0, 1.36, -0.165); p.rotation.y = Math.PI; body.add(p); }
  const blob = new Mesh(GEO.blob, shadowMat); blob.rotation.x = -Math.PI / 2; blob.position.y = 0.03; g.add(blob);
  g.userData = { pivot, limbs, blob, head };
  scene.add(g);
  return g;
}
// mode: run | idle | hands | air | flip | roll; t = 0..1 progress of a jump or roll; lean = sideways bank
export function animate(g, ph, mode, t = 0, lean = 0, squash = 0) {
  const { pivot, limbs, head } = g.userData;
  let rx = 0.16, py = 0.95, sc = 1, bob = 0, hr = -0.1;
  for (const l of limbs) {
    const a = ph + (l.s > 0 ? 0 : Math.PI), sn = Math.sin(a);
    let hip, knee, sho, elb, spread = 0;
    if (mode === 'run') { hip = -0.85 * sn; knee = 0.25 + 1.3 * Math.max(0, Math.cos(a)); sho = 0.85 * sn; elb = -1.4; bob = Math.abs(Math.cos(ph)) * 0.07; }
    else if (mode === 'air' || mode === 'flip') {
      const k = Math.sin(Math.PI * clamp(t, 0, 1));
      hip = -0.3 - (mode === 'flip' ? 1.6 : 1.0) * k + (l.s > 0 ? -0.25 : 0.2) * (1 - k);
      knee = 0.5 + (mode === 'flip' ? 1.7 : 1.1) * k;
      sho = mode === 'flip' ? -1.0 - 0.6 * k : -2.5 + 0.4 * k; elb = mode === 'flip' ? -1.4 : -0.35; spread = mode === 'flip' ? 0 : 0.35;
      rx = 0.1 + (mode === 'flip' ? Math.PI * 2 * smooth(clamp(t, 0, 1)) : 0.12 * k); hr = 0.2;
    } else if (mode === 'roll') {
      const k = Math.sin(Math.PI * clamp(t, 0, 1)), e = clamp(t * 6, 0, 1) * clamp((1 - t) * 6, 0, 1);
      hip = -0.4 - 1.5 * e; knee = 0.4 + 1.9 * e; sho = -0.6 - 0.8 * e; elb = -1.7 * e - 0.4; hr = 0.5 * e;
      rx = 0.16 + Math.PI * 2 * smooth(clamp(t, 0, 1)); py = 0.95 - 0.42 * k; sc = 1 - 0.27 * e;
    } else if (mode === 'hands') { hip = 0; knee = 0.05; sho = -2.9 + Math.sin(ph * 3 + l.s) * 0.1; elb = -0.2; rx = 0; spread = 0.25; hr = -0.25; }
    else { hip = 0; knee = 0.05; sho = 0.05 * Math.sin(ph * 0.5); elb = -0.25; rx = 0; hr = 0.05 * Math.sin(ph * 0.3); }
    l.hip.rotation.set(hip, 0, 0); l.knee.rotation.x = knee; l.sho.rotation.set(sho, 0, l.s * (0.06 + spread)); l.elb.rotation.x = elb;
  }
  head.rotation.x = hr;
  pivot.rotation.set(rx, 0, -lean);
  pivot.position.y = py + bob;
  pivot.scale.set(sc * (1 + squash * 0.12), sc * (1 - squash * 0.2), sc * (1 + squash * 0.12));
}
export function disposeFigure(g) { g.traverse((m) => { if (m.isMesh && m.material.map) { m.material.map.dispose(); m.material.dispose(); } }); }
