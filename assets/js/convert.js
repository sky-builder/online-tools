function doConvert(value, unit, baseTable) {
  if (isNaN(Number(value))) {
    window.alert('请输入数字');
    return;
  }
  if (!Object.prototype.hasOwnProperty.call(baseTable, unit)) {
    throw new Error(`unit *${unit}* not found.`);
  }
  let scale = baseTable[unit].scale;
  let x = scale * value;
  let keys = Object.keys(baseTable);
  let result = {};
  for (let key of keys) {
    let nScale = baseTable[key].scale;
    let y = x / nScale;
    result[key] = y;
  }
  return result;
}

export default doConvert;