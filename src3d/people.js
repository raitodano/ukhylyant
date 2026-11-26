// Skinned characters: the CC0 Quaternius "Universal Base Characters" body with clothes painted for this game
// (tools/build_people.py) and clips from the CC0 "Universal Animation Library". Falls back to the primitive rig
// (characters.js) when the pack is missing.
import { Group, Mesh, MeshStandardMaterial, MeshBasicMaterial, AnimationMixer, LoopOnce, LoopRepeat, Texture, SRGBColorSpace, NoColorSpace,
  SphereGeometry, CylinderGeometry, PlaneGeometry, CircleGeometry, Vector3, Quaternion, Box3, DoubleSide } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { labelTexture } from './textures.js';

const P = { ready: false };
let DT = 0, FLIP = false;
export function setFlip(f) { FLIP = f; }
export function peopleTick(dt) { DT = dt; }
export const peopleReady = () => P.ready;
const b64 = (u) => { const s = atob(u.slice(u.indexOf(',') + 1)), a = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a.buffer; };
const img = (u) => new Promise((res) => { const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = u; });
const texOf = (im, srgb) => { const t = new Texture(im); t.colorSpace = srgb ? SRGBColorSpace : NoColorSpace; t.flipY = FLIP; t.anisotropy = 4; t.needsUpdate = true; return t; };
const parse = (buf) => new Promise((res, rej) => new GLTFLoader().parse(buf, '', res, rej));

export async function loadPeople() {
  const A = window.UKH_ASSETS && window.UKH_ASSETS.people;
  if (!A) return false;
  try {
    FLIP = !!window.__peopleFlip;
    const [rc, rr, tc, tr, nn, ch, an] = await Promise.all([img(A.runner.c), img(A.runner.r), img(A.tck.c), img(A.tck.r), img(A.normal), parse(b64(A.character)), parse(b64(A.anims))]);
    const normal = texOf(nn, false);
    P.mat = {
      runner: new MeshStandardMaterial({ map: texOf(rc, true), roughnessMap: texOf(rr, false), normalMap: normal, roughness: 1 }),
      tck: new MeshStandardMaterial({ map: texOf(tc, true), roughnessMap: texOf(tr, false), normalMap: normal, roughness: 1 })
    };
    P.dark = new MeshStandardMaterial({ color: '#2a1d16', roughness: 0.6 });
    P.scene = ch.scene; P.clips = {}; for (const c of an.animations) P.clips[c.name] = c;
    // measure once: height for scaling, head top for the cap
    P.scene.updateMatrixWorld(true);
    const box = new Box3().setFromObject(P.scene); P.h = box.max.y - box.min.y; P.minY = box.min.y;
    delete window.UKH_ASSETS.people;
    P.ready = true;
  } catch (e) { console.warn('people pack failed', e); return false; }
  return true;
}
const capGeo = { dome: new SphereGeometry(0.118, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), brim: new CylinderGeometry(0.1, 0.11, 0.012, 16, 1, false, -Math.PI / 2, Math.PI), blob: new CircleGeometry(0.55, 24) };
const capMats = new Map(); const capMat = (c) => { if (!capMats.has(c)) capMats.set(c, new MeshStandardMaterial({ color: c, roughness: 0.85 })); return capMats.get(c); };
let tckLabel = null;
// attach `obj` to `bone` keeping a world-space placement measured in the bind pose
function attach(bone, obj, worldPos, worldQuat) {
  bone.updateWorldMatrix(true, false);
  const inv = bone.matrixWorld.clone().invert(); obj.position.copy(worldPos.clone().applyMatrix4(inv));
  const bq = new Quaternion(); bone.getWorldQuaternion(bq); obj.quaternion.copy(bq.invert().multiply(worldQuat));
  const bs = new Vector3(); bone.getWorldScale(bs); obj.scale.set(1 / bs.x, 1 / bs.y, 1 / bs.z);
  bone.add(obj);
}
// kind: 'runner' | 'tck' | 'patrol'
export function makePerson(scene, kind, shadowMat) {
  const g = new Group(), body = new Group(), model = skClone(P.scene), s = 1.8 / P.h;
  model.scale.setScalar(s); model.position.y = -P.minY * s - 0.95; body.position.y = 0.95;   // body pivots at the hips (flips, banks)
  body.add(model); g.add(body);
  const mat = kind === 'runner' ? P.mat.runner : P.mat.tck;
  let head = null, chest = null;
  model.traverse((o) => {
    if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; o.material = o.geometry.attributes.position.count > 3000 ? mat : P.dark; }   // the big mesh is the body; eyes/brows are small
    if (o.isBone && o.name === 'Head') head = o; if (o.isBone && o.name === 'spine_03') chest = o;
  });
  model.updateMatrixWorld(true);
  // cap on the head (bind pose: the model faces +z)
  if (head) {
    const hp = new Vector3(); head.getWorldPosition(hp);
    const cap = new Group(), cc = capMat(kind === 'runner' ? '#b8312a' : '#4c5532');
    const d = new Mesh(capGeo.dome, cc), br = new Mesh(capGeo.brim, cc); d.castShadow = true;
    br.position.set(0, 0.005, 0.07); br.scale.set(1, 1, 1.5); cap.add(d, br);
    attach(head, cap, new Vector3(hp.x, hp.y + 0.1, hp.z - 0.005), new Quaternion());
  }
  if (kind === 'tck' && chest) {
    if (!tckLabel) tckLabel = new MeshStandardMaterial({ map: labelTexture('ТЦК', '#4a5530', '#ffd21f', 192, 72), roughness: 0.9 });
    const cp = new Vector3(); chest.getWorldPosition(cp);
    const lab = new Mesh(new PlaneGeometry(0.3, 0.12), tckLabel), q = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), Math.PI);
    attach(chest, lab, new Vector3(cp.x, cp.y + 0.02, cp.z - 0.2), q);
  }
  const blob = new Mesh(capGeo.blob, shadowMat); blob.rotation.x = -Math.PI / 2; blob.position.y = 0.03; g.add(blob);
  const mixer = new AnimationMixer(model), actions = {};
  for (const [n, c] of Object.entries(P.clips)) actions[n] = mixer.clipAction(c);
  for (const n of ['Jump_Start', 'Jump_Land', 'Roll', 'Hit_Chest', 'Death01', 'Interact']) if (actions[n]) { actions[n].setLoop(LoopOnce, 1); actions[n].clampWhenFinished = true; }
  g.userData = { person: true, kind, body, mixer, actions, cur: null, blob, pivot: body, t0: Math.random() * 3 };
  scene.add(g);
  play(g, kind === 'patrol' ? 'Idle_Talking_Loop' : 'Idle_Loop', 0);
  return g;
}
function play(g, name, fade = 0.15, speed = 1) {
  const u = g.userData, a = u.actions[name]; if (!a) return;
  a.timeScale = speed;
  if (u.cur === name) return;
  const prev = u.cur && u.actions[u.cur];
  a.reset(); a.enabled = true; a.setEffectiveWeight(1); a.play();
  if (prev) { if (fade > 0) a.crossFadeFrom(prev, fade, false); else prev.stop(); }
  u.cur = name;
}
// mode: run | idle | hands | air | flip | roll | patrol; t = 0..1 progress of a jump or roll; lean = sideways bank
export function personAnimate(g, mode, t = 0, lean = 0, speed = 15, squash = 0, airT = 0.72, rollT = 0.62) {
  const u = g.userData, A = u.actions;
  if (mode === 'run') play(g, 'Sprint_Loop', 0.12, 0.75 + speed / 40);
  else if (mode === 'chase') play(g, 'Sprint_Loop', 0.2, 0.75 + speed / 40);
  else if (mode === 'idle') play(g, 'Idle_Loop', 0.3);
  else if (mode === 'patrol') play(g, 'Idle_Talking_Loop', 0.3);
  else if (mode === 'hands') play(g, 'Hit_Chest', 0.15, 0.8);
  else if (mode === 'roll') play(g, 'Roll', 0.08, A.Roll ? A.Roll.getClip().duration / rollT * 0.9 : 1);
  else if (mode === 'air' || mode === 'flip') {
    if (t < 0.2) play(g, 'Jump_Start', 0.06, A.Jump_Start ? A.Jump_Start.getClip().duration / (airT * 0.2) * 0.5 : 1);
    else if (t < 0.85) play(g, 'Jump_Loop', 0.12);
    else play(g, 'Jump_Land', 0.08, 1.6);
  }
  // a front flip on top of the jump clip, a bank into lane changes, a squash on landing
  const fl = mode === 'flip' ? Math.PI * 2 * (t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t)) : 0;
  u.body.position.y = 0.95 + (fl ? 0.25 * Math.sin(fl / 2) : 0);
  u.body.rotation.set(fl, 0, -lean);
  u.body.scale.set(1 + squash * 0.06, 1 - squash * 0.1, 1 + squash * 0.06);
  u.mixer.update(DT);
}
