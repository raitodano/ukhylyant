// Photo assets (CC0, see tools/assets.json) arrive as data-URL strings in web/assets/*.js, loaded by <script> tags:
// that works from file:///android_asset where fetch() does not. Here they are decoded into images once.
const decode = (url) => new Promise((res) => { const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = url; });
export const PH = { mat: null, sky: null };
export async function loadAssets(onProgress) {
  const A = window.UKH_ASSETS;
  if (!A || !A.materials) return false;
  const jobs = [], mat = {}, sky = {};
  for (const [k, m] of Object.entries(A.materials)) { mat[k] = { tile: m.tile_m }; for (const ch of ['c', 'n', 'r']) if (m[ch]) jobs.push(decode(m[ch]).then((im) => { mat[k][ch] = im; })); }
  for (const [k, s] of Object.entries(A.skies || {})) { sky[k] = { sun: s.sun, sunCol: s.sunCol, hor: s.hor, elev: s.elev }; jobs.push(decode(s.img).then((im) => { sky[k].img = im; })); }
  let done = 0; jobs.forEach((j) => j.then(() => { done++; if (onProgress) onProgress(done / jobs.length); }));
  await Promise.all(jobs);
  delete window.UKH_ASSETS;   // drop the base64 strings
  PH.mat = mat; PH.sky = sky;
  return true;
}
