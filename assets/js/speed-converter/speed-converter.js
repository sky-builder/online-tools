let msBaseTable = {
  ms: 1,                     // 米/秒
  kms: 1000,                 // 千米/秒
  kmh: 0.27777777777778,     // 千米/小时
  mms: 1e-3,                // 毫米/秒
  ums: 1e-6,                 // 微米/秒
  mips: 1609.344,            // 英里/秒
  miph: 0.44704,             // 英里/小时
  fts: 0.3048,               // 英尺/秒
  knot: 0.51444444444444,    // 节
  c: 299792460,              // 光速
  mach: 340.3,               // 音速
}

function speedConverter(value, unit) {
  if (!Object.prototype.hasOwnProperty.call(msBaseTable, unit)) {
    throw new Error('unit not found.');
  }
  let scale = msBaseTable[unit];
  let ms = value * scale;
  let keys = Object.keys(msBaseTable);
  let result = {};
  keys.forEach(key => {
    let x = msBaseTable[key];
    let y = ms / x;
    result[key] = y;
  })
  return result;
}

let result = speedConverter(1, 'fts');
console.log(result);