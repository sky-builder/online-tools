function doConvert(value, unit) {
  if (isNaN(Number(value))) {
    window.alert('请输入数字');
    return;
  }
  // 华氏
  let f;
  // 开式
  let k;
  // 摄氏
  let c;
  // 列式
  let re;
  // 兰式
  let ra;

  // 先将温度转换为摄氏温度，
  // 然后以摄氏温度为基础，
  // 转换为其他单位的温度
  unit = unit.toLowerCase();
  switch (unit) {
    case "c": {
      c = value;
      break;
    }
    case "f": {
      c = ((value - 32) * 5) / 9;
      break;
    }
    case "k": {
      c = value - 273.15;
      break;
    }
    case "re": {
      c = value * 1.25;
      break;
    }
    case "ra": {
      c = ((value - 491.67) * 5) / 9;
    }
  }
  f = (c * 9) / 5 + 32;
  k = c + 273.15;
  ra = (c * 9) / 5 + 491.67;
  re = c * 0.8;
  console.log(c, k);
  return {
    c,
    f,
    k,
    ra,
    re
  };
}
let unitList = [
  {
    key: "c",
    name: "摄氏度",
    unit: "C"
  },
  {
    key: "f",
    name: "华氏度",
    unit: "F"
  },
  {
    key: "k",
    name: "开式度",
    unit: "K"
  },
  {
    key: "re",
    name: "列式度",
    unit: "Re"
  },
  {
    key: "ra",
    name: "兰式度",
    unit: "Ra"
  }
];
let keyValueMap = {
  c: "",
  f: "",
  k: "",
  re: "",
  ra: ""
};

doConvert(123, "f");
export default {
  data() {
    return {
      unitList,
      keyValueMap
    };
  },
  methods: {
    doConvert
  }
};
