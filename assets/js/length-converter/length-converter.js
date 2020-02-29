/**
 * 公制基本单位 米
 * 市制基本单位
 * 英制基本单位
 */
let meterBaseTable = {
  m: 1,
  dm: 1e-1,
  cm: 1e-2,
  mm: 1e-3,
  um: 1e-6,
  nm: 1e-9,
  pm: 1e-12,
  fm: 1e-15,
  am: 1e-18,
  zm: 1e-21,
  ym: 1e-24,
  dam: 1e1,
  hm: 1e2,
  km: 1e3,
  Mm: 1e6,
  Gm: 1e9,
  Tm: 1e12,
  Pm: 1e15,
  Em: 1e18,
  Zm: 1e21,
  Ym: 1e24
};
let meter2inch = 39.37007874015748;
let inchBaseTable = {
  inch: 1,
  foot: 12,
  yard: 36,
  fathom: 72,
  chain: 792,
  furlong: 7920,
  mile: 63360
}
let meter2chi = 3;
let chiBaseTable = {
  '尺': 1,
  '丈': 10,
  '引': 100,
  '里': 1500,
  '寸': 0.1,
  '厘': 0.01,
  '豪': 0.001,
}
// TODO: 天文单位
let meterBaseInchTable = Object.assign({}, inchBaseTable);
let keys = Object.keys(meterBaseInchTable);
for(let key of keys) {
  meterBaseInchTable[key] = meterBaseInchTable[key] /meter2inch;
}
let meterBaseChiTable = Object.assign({}, chiBaseTable);
keys = Object.keys(meterBaseChiTable);
for(let key of keys) {
  meterBaseChiTable[key] = meterBaseChiTable[key] /meter2chi;
}
let table = Object.assign({}, meterBaseTable, meterBaseInchTable, meterBaseChiTable);

// if table correct, everthing is corret
// we don't need to mess with different standard
// various convert operations
// we only focus on one to one relation
console.log(table);
