const baseTable = require('./pa-base-table');
import convert from '../convert'

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
    doConvert: convert,
  }
}