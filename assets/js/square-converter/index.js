const baseTable = require('./m2-base-table');

let unitList = [];
let keyValueMap = {};

let keys = Object.keys(baseTable);
keys.forEach(key => {
  keyValueMap[key] = '';
  let item = baseTable[key];
  unitList.push({
    name: item.name,
    unit: item.unit,
    key: key,
  })
})

export default {
  data() {
    return {
      keyValueMap,
      unitList,
      baseTable,
    }
  },
  methods: {
    doConvert(value, unit) {
      if (!Object.prototype.hasOwnProperty.call(this.baseTable, unit)) {
        throw new Error(`unit *${unit}* not found.`);
      }
      let scale = this.baseTable[unit].scale;
      let x = scale * value;
      let keys = Object.keys(this.baseTable);
      let result = {};
      for (let key of keys) {
        let nScale = this.baseTable[key].scale;
        let y = x / nScale;
        result[key] = y;
      }
      return result;
    }
  }
}