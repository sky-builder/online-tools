const wBaseTable = require('./w-base-table');

let unitList = [];
let keyValueMap = {};

let keys = Object.keys(wBaseTable);
keys.forEach(key => {
  keyValueMap[key] = '';
  let item = wBaseTable[key];
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
      wBaseTable,
    }
  },
  methods: {
    doConvert(value, unit) {
      if (!Object.prototype.hasOwnProperty.call(this.wBaseTable, unit)) {
        throw new Error(`unit *${unit}* not found.`);
      }
      let scale = this.wBaseTable[unit].scale;
      let x = scale * value;
      let keys = Object.keys(this.wBaseTable);
      let result = {};
      for (let key of keys) {
        let nScale = this.wBaseTable[key].scale;
        let y = x / nScale;
        result[key] = y;
      }
      return result;
    }
  }
}