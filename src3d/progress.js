// Shared progress with the 2D game: the same save (localStorage 'ukh_save_v2'). The 3D mode adds its runs, coins and
// record and unlocks the achievements it can measure; everything else in the save is kept untouched.
const KEY = 'ukh_save_v2';
const ST0 = { runs: 0, caught: 0, coins: 0, jumps: 0, slides: 0, bestDist: 0, maxJumps: 0, maxSlides: 0, maxCoins: 0, nights: 0 };
export function readSave() {
  let d = null; try { d = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  const s = Object.assign({ v: 2, best: 0, bank: 0, muted: false, skin: 'ukh', city: 'kyiv', ach: {} }, d || {});
  s.st = Object.assign({}, ST0, (d && d.st) || {}); s.ach = s.ach || {};
  return s;
}
function writeSave(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
// achievements the 3D mode can earn (ids, names and goals as in the 2D game)
const ACH3 = [
  ['first', '🏃', 'Перший забіг', 1, (s) => s.runs], ['caught1', '🚐', 'Бусифікація', 1, (s) => s.caught], ['caught25', '🎟️', 'Постійний клієнт', 25, (s) => s.caught],
  ['d1000', '🏅', 'Марафонець', 1000, (s) => s.bestDist], ['d2500', '💪', 'Невловимий', 2500, (s) => s.bestDist], ['d5000', '📱', 'Цифровий привид', 5000, (s) => s.bestDist],
  ['coins100', '💰', 'Заначка', 100, (s) => s.maxCoins], ['slides30', '⛸️', 'Підкатник', 30, (s) => s.maxSlides], ['jumps40', '🐰', 'Кролик', 40, (s) => s.maxJumps],
  ['bank2000', '🍫', 'Шоколадний мільйонер', 2000, (s) => s.coins], ['night', '🌙', 'Нічний патруль', 1, (s) => s.nights]
];
// run: { dist, coins, jumps, slides, caught, night } → { best, bank, newRecord, unlocked: [[emoji, name]…] }
export function recordRun(run) {
  const s = readSave(), st = s.st;
  st.runs++; if (run.caught) st.caught++;
  st.coins += run.coins; s.bank += run.coins; st.jumps += run.jumps; st.slides += run.slides;
  st.maxCoins = Math.max(st.maxCoins, run.coins); st.maxJumps = Math.max(st.maxJumps, run.jumps); st.maxSlides = Math.max(st.maxSlides, run.slides);
  const rec = run.dist > s.best; s.best = Math.max(s.best, run.dist); st.bestDist = Math.max(st.bestDist, run.dist);
  if (run.night && run.dist >= 300) st.nights++;
  const unlocked = [];
  for (const [id, e, n, g, v] of ACH3) if (!s.ach[id] && v(st) >= g) { s.ach[id] = Date.now(); unlocked.push([e, n, id]); }
  writeSave(s);
  return { best: s.best, bank: s.bank, newRecord: rec, unlocked };
}
export function setSkin(id) { const s = readSave(); s.skin = id; writeSave(s); }
