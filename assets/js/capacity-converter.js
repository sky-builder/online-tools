function capacityConverter(value, unit, system) {
  let haosheng;
  switch (system) {
    case "gongzhi": {
      haosheng = gongzhi2haosheng(value, unit);
      break;
    }
    case "shizhi": {
      haosheng = shizhi2haosheng(value, unit);
      break;
    }
    case "yingzhi": {
      haosheng = yingzhi2haosheng(value, unit);
      break;
    }
    case "yaojiyingzhi": {
      haosheng = yingzhiyaoji2haosheng(value, unit);
      break;
    }
    case 'meizhi': {
      haosheng = meizhi2haosheng(value, unit);
      break;
    }
  }
  let gongzhi = haosheng2gongzhi(haosheng);
  let shizhi = haosheng2shizhi(haosheng);
  let yingzhi = haosheng2yingzhi(haosheng);
  let meizhi = haosheng2meizhi(haosheng);
  // let yaojiyingzhi = haosheng2yingzhiyaoji(haosheng);
  return {
    gongzhi,
    shizhi,
    yingzhi,
    meizhi,
    // yaojiyingzhi
  };
}
function haosheng2yingzhiyaoji(value) {
  let diliang = value / 0.0592;
  let yeliangfen = diliang / 20;
  let yeliangdalan = yeliangfen / 3;
  let yeliangangsi = yeliangdalan / 8;
  let pintuo = yeliangangsi / 20;
  return {
    diliang,
    yeliangfen,
    yeliangdalan,
    yeliangangsi,
    pintuo
  };
}
function yingzhiyaoji2haosheng(value, unit) {
  let liangdi;
  switch (unit) {
    case "liangdi": {
      liangdi = value;
      break;
    }
    case "yeliangfen": {
      liangdi = value * 20;
      break;
    }
    case "yeliangdalan": {
      liangdi = value * 60;
      break;
    }
    case "yelingangsi": {
      liangdi = value * 480;
      break;
    }
    case "pintuo": {
      liangdi = value * 480 * 20;
      break;
    }
    case "jialun": {
      liangdi = value * 480 * 20 * 8;
      break;
    }
    case "meishiyeliangangsi": {
      liangdi = value * 480 * 1.041;
      break;
    }
    case "meishijialun": {
      laingdi = value * 480 * 20 * 0.833;
      break;
    }
  }
  return liangdi * 0.0592;
}
function haosheng2yingzhi(value) {
  let angsi = value / 28.413;
  let jier = angsi / 5;
  let pintuo = jier / 4;
  let kuatuo = pintuo / 2;
  let jialun = kuatuo / 4;
  let peike = jialun / 2;
  let kanning = peike / 2;
  let pushier = kanning / 2;
  let kuate = pushier / 8;
  let tangshao = value / 17.758;
  let chashao = value / 5.919
  let lifangyingchi = value / 28317;
  let lifangyingcun = value / 16.387;
  return {
    angsi,
    jier,
    pintuo,
    kuatuo,
    jialun,
    kanning,
    pushier,
    kuate,
    tangshao,
    chashao,
    lifangyingchi,
    lifangyingcun,
  };
}
function yingzhi2haosheng(value, unit) {
  let yingzhiyeangsi;
  switch (unit) {
    case "yeliangangsi": {
      yingzhiyeangsi = value;
      break;
    }
    case "jier": {
      yingzhiyeangsi = value * 5;
      break;
    }
    case "pintuo": {
      yingzhiyeangsi = value * 20;
      break;
    }
    case "kuatuo": {
      yingzhiyeangsi = value * 40;
      break;
    }
    case "jialun": {
      yingzhiyeangsi = value * 160;
      break;
    }
    case "peike": {
      yingzhiyeangsi = value * 320;
      break;
    }
    case "kanning": {
      yingzhiyeangsi = value * 640;
      break;
    }
    case "pushier": {
      yingzhiyeangsi = value * 1280;
      break;
    }
    case "kuate": {
      yingzhiyeangsi = value * 10240;
      break;
    }
    default: {
      throw new Error('unit not found.')
    }
  }
  return yingzhiyeangsi * 28.413;
}
function haosheng2shizhi(value) {
  return {
    撮: value,
    勺: value / 10,
    市合: value / 100,
    市升: value / 1000,
    市斗: value / 1e4,
    市石: value / 1e5
  };
}
function shizhi2haosheng(value, unit) {
  let r;
  switch (unit) {
    case "撮": {
      r = value;
      break;
    }
    case "勺": {
      r = value * 10;
      break;
    }
    case "市合": {
      r = value * 100;
      break;
    }
    case "市升": {
      r = value * 1000;
      break;
    }
    case "市斗": {
      r = value * 10000;
      break;
    }
    case "市石": {
      r = value * 1e5;
      break;
    }
  }
  return r;
}
function gongzhi2haosheng(value, unit) {
  let r;
  switch (unit) {
    case "lifanghaomi":
    case "weisheng": {
      r = value * 1e3;
      break;
    }
    case "lifanglimi":
    case "haosheng": {
      r = value;
      break;
    }
    case "lifangfenmi":
    case "sheng": {
      r = value / 1e3;
      break;
    }
    case "lifangmi":
    case "qiansheng": {
      r = value / 1e6;
      break;
    }
  }
  return r;
}
function haosheng2gongzhi(value) {
  let haosheng = value;
  let sheng = haosheng * 0.001;
  let qiansheng = sheng * 0.001;
  let weisheng = haosheng * 1000;
  return {
    weisheng,
    haosheng,
    sheng,
    qiansheng,
  }
}
function meizhi2haosheng(value, unit) {
  let haosheng;
  switch(unit) {
    case 'chashao': {
      haosheng = value * 4.929;
      break;
    }
    case 'tangshao': {
      haosheng = value * 14.787;
      break;
    }
    case 'yeliangangsi': {
      haosheng = value * 29.574;
      break;
    }
    case 'bei': {
      haosheng = value * 240;
      break;
    }
    case 'pintuo': {
      haosheng = value * 473;
      break;
    }
    case 'shiliangkuatuo': {
      haosheng = value * 946;
      break;
    }
    case 'jialun': {
      haosheng = value * 3785;
      break;
    }
  }
  return haosheng;
}
function haosheng2meizhi(value) {
  return {
    jialun: value / 3785,
    shiliangkuatuo: value / 946,
    pintuo: value / 473,
    bei: value / 240,
    yeliangangsi: value / 29.574,
    tangshao: value / 14.787,
    chashao: value / 4.929
  }
}

let result = capacityConverter(1, 'haosheng', 'gongzhi');
// console.log(result); // pass
result = capacityConverter(1, 'yeliangangsi', 'yingzhi');
console.log(result);
