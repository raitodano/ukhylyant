// Prune the CC0 Quaternius character and animation library to what the game uses, as .glb files in .asset-cache/people.
// Then run tools/build_people.py to paint the clothes and pack everything into web/assets/people.js.
import { NodeIO } from '@gltf-transform/core';
import { prune, dedup, resample } from '@gltf-transform/functions';
import fs from 'fs';
const C = '.asset-cache/itch', OUT = '.asset-cache/people';
fs.mkdirSync(OUT, { recursive: true });
const io = new NodeIO();
const KEEP = ['Sprint_Loop', 'Jog_Fwd_Loop', 'Jump_Start', 'Jump_Loop', 'Jump_Land', 'Roll', 'Idle_Loop', 'Idle_Talking_Loop', 'Hit_Chest', 'Death01', 'Interact'];
async function stripTextures(doc) { for (const t of doc.getRoot().listTextures()) t.dispose(); }
// read a .gltf without its images (some referenced files are missing from the pack; the game paints its own)
async function readNoImages(path) {
  const json = JSON.parse(fs.readFileSync(path, 'utf8')), dir = path.slice(0, path.lastIndexOf('/') + 1);
  delete json.images; delete json.textures; delete json.samplers;
  for (const m of json.materials || []) { if (m.pbrMetallicRoughness) { delete m.pbrMetallicRoughness.baseColorTexture; delete m.pbrMetallicRoughness.metallicRoughnessTexture; } delete m.normalTexture; delete m.occlusionTexture; delete m.emissiveTexture; delete m.extensions; }
  const resources = {}; for (const b of json.buffers) resources[b.uri] = new Uint8Array(fs.readFileSync(dir + decodeURIComponent(b.uri)));
  return io.readJSON({ json, resources });
}
// character: body (+eyes, brows), no textures (the game supplies its own painted ones)
{
  const doc = await readNoImages(`${C}/ubc/Universal Base Characters[Standard]/Base Characters/Godot - UE/Superhero_Male_FullBody.gltf`);
  await stripTextures(doc); await doc.transform(prune({ keepAttributes: true }), dedup());   // keep UVs: the game supplies the textures
  for (const m of doc.getRoot().listMeshes()) for (const pr of m.listPrimitives()) for (const a of ['TEXCOORD_1', 'COLOR_0', 'COLOR_1']) { const x = pr.getAttribute(a); if (x) { pr.setAttribute(a, null); } }
  await doc.transform(prune({ keepAttributes: true }));
  await io.write(`${OUT}/character.glb`, doc);
}
{
  const doc = await readNoImages(`${C}/ubc/Universal Base Characters[Standard]/Hairstyles/Rigged to Head Bone/glTF (Godot -Unreal)/Hair_Buzzed.gltf`);
  await stripTextures(doc); await doc.transform(prune(), dedup());
  await io.write(`${OUT}/hair.glb`, doc);
}
// animations: only the clips we use, no mesh
{
  const doc = await io.read(fs.readdirSync(`${C}/ual`, { recursive: true }).map((f) => `${C}/ual/${f}`).find((f) => f.endsWith('UAL1_Standard.glb')));
  const root = doc.getRoot();
  for (const a of root.listAnimations()) if (!KEEP.includes(a.getName())) { for (const c of a.listChannels()) c.dispose(); for (const sm of a.listSamplers()) sm.dispose(); a.dispose(); }
  // drop finger tracks, scale tracks and translations below the pelvis: invisible at game distance, most of the size
  for (const a of root.listAnimations()) for (const ch of a.listChannels()) {
    const n = ch.getTargetNode() ? ch.getTargetNode().getName() : '', p = ch.getTargetPath();
    if (/^(index|middle|pinky|ring|thumb)_|_leaf_/.test(n) || p === 'scale' || (p === 'translation' && !/^(root|pelvis)$/.test(n))) { const sm = ch.getSampler(); ch.dispose(); if (sm) sm.dispose(); }
  }
  for (const n of root.listNodes()) if (n.getMesh()) { n.getMesh().dispose(); n.setMesh(null); n.setSkin(null); }
  for (const m of root.listMeshes()) m.dispose();
  for (const t of root.listTextures()) t.dispose();
  // ~24 keyframes/s, rotations as normalized int16 (valid glTF 2.0; three.js reads them)
  for (const a of root.listAnimations()) for (const sm of a.listSamplers()) {
    const inp = sm.getInput(), out = sm.getOutput(), t = inp.getArray(), v = out.getArray(), k = out.getElementSize(), keep = [];
    let last = -1; for (let i = 0; i < t.length; i++) if (i === 0 || i === t.length - 1 || t[i] - last >= 1 / 24 - 1e-4) { keep.push(i); last = t[i]; }
    const nt = new Float32Array(keep.length), nv = new Float32Array(keep.length * k);
    keep.forEach((i, j) => { nt[j] = t[i]; for (let c = 0; c < k; c++) nv[j * k + c] = v[i * k + c]; });
    const ni = doc.createAccessor().setType('SCALAR').setArray(nt).setBuffer(inp.getBuffer());
    let no;
    if (k === 4) { const q = new Int16Array(nv.length); for (let i = 0; i < nv.length; i++) q[i] = Math.round(Math.max(-1, Math.min(1, nv[i])) * 32767); no = doc.createAccessor().setType('VEC4').setArray(q).setNormalized(true).setBuffer(out.getBuffer()); }
    else no = doc.createAccessor().setType(out.getType()).setArray(nv).setBuffer(out.getBuffer());
    sm.setInput(ni).setOutput(no);
  }
  for (const acc of root.listAccessors()) if (acc.listParents().every((q) => q.propertyType === 'Root' || q.isDisposed())) acc.dispose();
  await doc.transform(prune({ keepLeaves: true }), dedup());
  console.log('accessors', root.listAccessors().length);
  console.log('clips', root.listAnimations().map((a) => a.getName()).join(', '));
  await io.write(`${OUT}/anims.glb`, doc);
}
for (const f of fs.readdirSync(OUT)) console.log(f, Math.round(fs.statSync(`${OUT}/${f}`).size / 1024), 'KB');
