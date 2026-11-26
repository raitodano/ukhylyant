// The 12 skins of the 2D game (same ids, unlock achievements and colours), for the 3D runner.
// head / prop / body are interpreted by people.js (hats, hair, props in hand, dress).
export const SKINS = [
  { id: 'ukh', n: 'Ухилянт', ach: null, say: 'БІЖИ! ТЦК НА ХВОСТІ!', s: { suit: '#23262f', pants: '#23262f', stripe: '#f1f1f1', shoe: '#f4f4f4', hair: '#3a2a1e', head: 'cap', hat: '#c0392b', body: 'track' } },
  { id: 'valya', n: 'Тьотя Валя', ach: 'konami', say: 'Я Ж ЖІНКА, МЕНІ МОЖНА!', s: { suit: '#c0392b', dots: '#ffffff', pants: '#e8b894', arm: '#e8b894', shoe: '#5a3b22', hair: '#3a2a1e', head: 'scarf', hat: '#2e86de', body: 'dress', prop: 'bag' } },
  { id: 'kotleta', n: 'Коля «Котлета» Тищенко', ach: 'cutlet5', say: 'КОТЛЕТИ СТИГНУТЬ, А Я БІЖУ!', s: { suit: '#f6f6f2', pants: '#2b2b30', shoe: '#151515', hair: '#2a1d14', head: 'toque', hat: '#ffffff', body: 'chef', prop: 'cutlet' } },
  { id: 'yulia', n: 'Юля Тимошенко', ach: 'd2500', say: 'КОСА НЕ ПІДВЕДЕ!', s: { suit: '#f4efe6', pants: '#e9c3a3', arm: '#f4efe6', shoe: '#d8c7b0', hair: '#e6c35c', head: 'braid', body: 'dress' } },
  { id: 'poroshenko', n: 'Петро Порошенко', ach: 'bank2000', say: 'ШОКОЛАДКА Є, МОЖНА БІГТИ!', s: { suit: '#1f2a44', pants: '#1f2a44', shoe: '#111111', hair: '#9a9a9a', head: 'short', body: 'suit', tie: '#7a1f2b', prop: 'choco' } },
  { id: 'lyashko', n: 'Олег Ляшко', ach: 'nopower', say: 'ВИЛА В РУКИ — І РАДИКАЛЬНО ВПЕРЕД!', s: { suit: '#fafafa', emb: '#c0392b', pants: '#2b2b30', shoe: '#1a1a1a', hair: '#1d1712', head: 'curly', body: 'vysh', prop: 'fork' } },
  { id: 'yatsenyuk', n: 'Арсеній Яценюк', ach: 'jumps40', say: 'КРОЛИК ВИСТРИБУЄ!', s: { suit: '#555b66', pants: '#4a4f58', shoe: '#111111', hair: '#efc3a2', head: 'bald', body: 'suit', tie: '#2b4f8a', prop: 'carrot' } },
  { id: 'fedorov', n: 'Михайло Федоров', ach: 'd5000', say: 'ОНОВЛЮЮ ДАНІ НА БІГУ!', s: { suit: '#1b1b1f', pants: '#2f3a55', shoe: '#f4f4f4', hair: '#2a1d14', head: 'short', body: 'hoodie', prop: 'phone' } },
  { id: 'skovoroda', n: 'Григорій Сковорода', ach: 'border', say: 'СВІТ ЛОВИВ МЕНЕ, ТА НЕ СПІЙМАВ!', s: { suit: '#5b4632', pants: '#3a2c20', arm: '#5b4632', shoe: '#2a2018', hair: '#b9b4aa', head: 'long', body: 'dress', prop: 'staff' } },
  { id: 'mazepa', n: 'Іван Мазепа', ach: 'poltava', say: 'ПОЛТАВА → БЕНДЕРИ. МАРШРУТ ПЕРЕВІРЕНИЙ!', s: { suit: '#9e1b1b', pants: '#2a2018', arm: '#9e1b1b', shoe: '#c8902a', hair: '#4a3626', head: 'hetman', hat: '#7a1414', body: 'dress', prop: 'mace' } },
  { id: 'mamai', n: 'Козак Мамай', ach: 'khortytsia', say: 'ХОРТИЦЯ ПОЗАДУ, ВОЛЯ ПОПЕРЕДУ!', s: { suit: '#f4f1ea', pants: '#b8282a', shoe: '#8a1f1f', hair: '#1d1712', head: 'oseledets', body: 'cossack', sash: '#2e6fbf', back: 'bandura' } },
  { id: 'eney', n: 'Еней (з «Енеїди»)', ach: 'borderFar', say: 'ЕНЕЙ БУВ ПАРУБОК МОТОРНИЙ!', s: { suit: '#2e5a8a', pants: '#8a2b2b', arm: '#2e5a8a', shoe: '#c8902a', hair: '#2a1d14', head: 'kozakhat', hat: '#1d1d1f', body: 'cossack', sash: '#c8902a', prop: 'sabre' } }
];
export const SKINM = Object.fromEntries(SKINS.map((k) => [k.id, k]));
