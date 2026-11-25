// The 14 cities of the 2D game, described for the 3D world. Same ids as the 2D game (save key ukh_save_v2 → city).
// fac: facade families (weighted by repetition), pal: wall colours, pool: street kinds between the squares,
// land: landmarks on the city squares, sky: silhouettes on the horizon.
const hex = (a) => '#' + a.map((v) => v.toString(16).padStart(2, '0')).join('');
const P = (...a) => a.map(hex);
export const CITIES = [
  { id: 'kyiv', n: 'Київ', fac: ['stalinka', 'stalinka', 'panel', 'modern'], pal: P([232, 212, 176], [216, 186, 152], [240, 228, 204], [206, 178, 144], [226, 202, 172]), tree: 'chestnut', lamp: 'city', tram: 0, trolley: 1, cobble: 0, cafe: 0, land: ['domes', 'column'], sky: ['motherland', 'belltower', 'tv'], ads: ['ВАРЕНИКИ', 'КИЇВ', 'КАШТАН', 'МЕТРО →', 'КАВА', 'АПТЕКА'], pool: ['avenue', 'avenue', 'boulevard', 'street', 'park', 'construction'] },
  { id: 'lviv', n: 'Львів', fac: ['austro'], pal: P([238, 208, 162], [200, 222, 212], [242, 192, 172], [222, 204, 232], [250, 232, 174], [192, 212, 232], [236, 186, 150]), tree: 'linden', lamp: 'lantern', tram: 1, trolley: 0, cobble: 1, cafe: 1, land: ['opera', 'gothic', 'ratusha'], sky: ['spires', 'ratusha', 'domes'], ads: ['КАВА', 'ПЛЯЦКИ', 'ШОКОЛАД', 'ЛЕВ', 'КРЕМ-БРЮЛЕ', 'ПИВО'], pool: ['street', 'street', 'boulevard', 'park'] },
  { id: 'odesa', n: 'Одеса', fac: ['classic', 'classic', 'panel'], pal: P([242, 216, 160], [248, 232, 194], [230, 200, 152], [240, 224, 202], [234, 208, 178]), tree: 'plane', lamp: 'lantern', tram: 1, trolley: 1, cobble: 1, cafe: 1, land: ['opera', 'statue'], sky: ['cranes', 'lighthouse'], ads: ['ПРИВОЗ', 'БИЧКИ', 'ШАЛАНДИ', 'МОРЕ ТАМ →', 'ВАМ КУДИ?', 'КАВА'], pool: ['boulevard', 'street', 'street', 'park'] },
  { id: 'kharkiv', n: 'Харків', fac: ['constructivist', 'stalinka', 'panel'], pal: P([206, 204, 196], [218, 210, 194], [188, 188, 184], [230, 218, 194]), tree: 'linden', lamp: 'city', tram: 1, trolley: 1, cobble: 0, cafe: 0, land: ['gosprom', 'domes'], sky: ['gosprom', 'belltower', 'wheel'], ads: ['ГОСПРОМ', 'МЕТРО →', 'СТУДЕНТ', 'ШАУРМА', 'КНИГИ'], pool: ['avenue', 'avenue', 'street', 'park', 'construction'] },
  { id: 'dnipro', n: 'Дніпро', fac: ['modern', 'panel', 'stalinka'], pal: P([150, 192, 222], [202, 204, 210], [228, 216, 192], [132, 172, 212]), tree: 'poplar', lamp: 'city', tram: 1, trolley: 1, cobble: 0, cafe: 0, land: ['highrise', 'statue'], sky: ['highrises', 'chimneys'], ads: ['НАБЕРЕЖНА', 'МЕТРО →', 'ДНІПРО', 'СУШІ'], pool: ['avenue', 'avenue', 'street', 'construction', 'park'] },
  { id: 'zaporizhzhia', n: 'Запоріжжя', fac: ['panel', 'stalinka'], pal: P([216, 208, 192], [202, 192, 172], [228, 216, 198]), tree: 'poplar', lamp: 'city', tram: 1, trolley: 1, cobble: 0, cafe: 0, land: ['statue'], sky: ['chimneys', 'dam'], ads: ['ХОРТИЦЯ', 'ДНІПРОГЕС', 'МОТОР', 'ПРОДУКТИ'], pool: ['avenue', 'street', 'construction', 'park'] },
  { id: 'vinnytsia', n: 'Вінниця', fac: ['brick', 'classic', 'panel'], pal: P([192, 96, 72], [238, 216, 172], [216, 192, 162]), tree: 'chestnut', lamp: 'lantern', tram: 1, trolley: 1, cobble: 0, cafe: 1, land: ['watertower', 'domes'], sky: ['watertower', 'domes'], ads: ['ВІННИЦЯ', 'ФОНТАН', 'ПОДІЛЛЯ', 'КАВА'], pool: ['street', 'boulevard', 'park', 'avenue'] },
  { id: 'mykolaiv', n: 'Миколаїв', fac: ['classic', 'panel'], pal: P([238, 218, 178], [228, 206, 172], [216, 202, 182]), tree: 'plane', lamp: 'city', tram: 1, trolley: 1, cobble: 0, cafe: 0, land: ['statue'], sky: ['cranes'], ads: ['ВЕРФ', 'МИКОЛАЇВ', 'РИБА', 'АПТЕКА'], pool: ['avenue', 'street', 'boulevard', 'park'] },
  { id: 'zhytomyr', n: 'Житомир', fac: ['brick', 'classic', 'panel'], pal: P([188, 98, 74], [234, 216, 182], [212, 198, 178]), tree: 'linden', lamp: 'city', tram: 1, trolley: 1, cobble: 0, cafe: 0, land: ['rocket', 'domes'], sky: ['rocket', 'domes'], ads: ['КОСМОС', 'ЖИТОМИР', 'КОРОЛЬОВ'], pool: ['street', 'avenue', 'park'] },
  { id: 'chernihiv', n: 'Чернігів', fac: ['brick', 'panel', 'classic'], pal: P([186, 94, 72], [234, 222, 198], [212, 202, 188]), tree: 'linden', lamp: 'lantern', tram: 0, trolley: 1, cobble: 0, cafe: 0, land: ['domes', 'domes'], sky: ['domes', 'domes'], ads: ['ЧЕРНІГІВ', 'ВАЛ', 'ХЛІБ'], pool: ['street', 'boulevard', 'park'] },
  { id: 'poltava', n: 'Полтава', fac: ['classic', 'classic', 'panel'], pal: P([246, 222, 152], [248, 238, 208], [238, 208, 152]), tree: 'linden', lamp: 'lantern', tram: 0, trolley: 1, cobble: 0, cafe: 0, land: ['column', 'domes'], sky: ['column', 'domes'], ads: ['ГАЛУШКИ', 'ПОЛТАВА', 'КАВА'], pool: ['boulevard', 'street', 'park'] },
  { id: 'sumy', n: 'Суми', fac: ['classic', 'brick', 'panel'], pal: P([238, 222, 192], [192, 102, 82], [216, 206, 192]), tree: 'linden', lamp: 'city', tram: 0, trolley: 1, cobble: 0, cafe: 0, land: ['domes', 'statue'], sky: ['domes'], ads: ['СУМИ', 'ПРОДУКТИ'], pool: ['street', 'avenue', 'park'] },
  { id: 'lutsk', n: 'Луцьк', fac: ['brick', 'austro', 'panel'], pal: P([182, 98, 74], [232, 212, 182], [212, 202, 192]), tree: 'linden', lamp: 'lantern', tram: 0, trolley: 1, cobble: 1, cafe: 1, land: ['castle', 'domes'], sky: ['castle', 'domes'], ads: ['ЛУЦЬК', 'ЗАМОК →', 'КАВА'], pool: ['street', 'street', 'park', 'boulevard'] },
  { id: 'frankivsk', n: 'Івано-Франківськ', fac: ['austro', 'classic'], pal: P([238, 210, 166], [208, 224, 214], [238, 198, 178], [224, 208, 234]), tree: 'linden', lamp: 'lantern', tram: 0, trolley: 1, cobble: 1, cafe: 1, land: ['ratusha', 'domes'], sky: ['ratusha', 'mountains'], ads: ['ФРАНИК', 'КАВА', 'КАРПАТИ →', 'БАНОШ'], pool: ['street', 'street', 'boulevard', 'park'] }
];
export const CITYM = Object.fromEntries(CITIES.map((c) => [c.id, c]));
// street kinds: sidewalk outer edge (walk), building line (bx; 0 = no houses), extra floors, parking lane, alley of trees
export const STT = {
  street: { walk: 5.8, bx: 5.8, flo: 0 },
  avenue: { walk: 8.6, bx: 9.0, flo: 2, park: true },
  boulevard: { walk: 5.8, bx: 12.5, flo: 0, alley: true },
  park: { walk: 5.8, bx: 0 },
  construction: { walk: 5.8, bx: 0 }
};
export function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) % 1000003 + 1; }
