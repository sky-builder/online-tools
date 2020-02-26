/**
 *
 * @param {float} value
 * @param {string} unit g, kg, t
 * @param {string} system 公制gongzhi, 市制shizhi, 英制yingzhi, 金衡制jinhengzhi
 */
function qualityConverter(value, unit, system) {
  // 1. 先转为克
  // 2. 克再转为其他单位
  let g;
  switch (system) {
    case "gongzhi": {
      g = gongzhi2g(value, unit);
      break;
    }
    case "shizhi": {
      g = shizhi2g(value, unit);
      break;
    }
    case "yingzhi": {
      g = yingzhi2g(value, unit);
      break;
    }
    case "jinhengzhi": {
      g = jinhengzhi2g(value, unit);
      break;
    }
  }
  let gongzhi = g2gongzhi(g);
  let shizhi = g2shizhi(g);
  let yingzhi = g2yingzhi(g);
  let jinhengzhi = g2jinhengzhi(g);
  return {
    gongzhi,
    shizhi,
    yingzhi,
    jinhengzhi
  };
}
function g2gongzhi(value) {
  return {
    g: value,
    mg: value * 1000,
    kg: value / 1000,
    t: value / 1000 / 1000
  };
}
function g2shizhi(value) {
  let jin = value * 0.002;
  return {
    dan: jin / 100,
    jin: jin,
    liang: jin * 10,
    qian: jin * 100,
    fen: jin * 1000,
    li: jin * 10000
  };
}
function g2yingzhi(value) {
  let bang = value / 453.59237;
  return {
    yingdun: bang / 2240,
    meidun: bang / 2000,
    yingdan: bang / 112,
    kuate: bang / 28,
    yingshi: bang / 14,
    bang: bang,
    angsi: bang * 16,
    dalan: bang * 256,
    geling: bang * 7000
  };
}
function g2jinhengzhi(value) {
  let geling = value / 0.06479891;
  return {
    geling: geling,
    beniweite: geling / 24,
    angsi: geling / 480,
    bang: geling / 5760
  };
}

function gongzhi2g(value, unit) {
  let g;
  switch (unit) {
    case "kg": {
      g = value * 0.001;
      break;
    }
    case "t": {
      g = value * 0.001 * 0.001;
      break;
    }
    case "g": {
      g = value;
      break;
    }
    case "mg": {
      g = value * 1000;
    }
  }
  return g;
}
function shizhi2g(value, unit) {
  let jin;
  switch (unit) {
    case "dan": {
      jin = value * 0.01;
      break;
    }
    case "jin": {
      jin = value;
      break;
    }
    case "liang": {
      jin = value * 10;
      break;
    }
    case "qian": {
      jin = value * 100;
      break;
    }
    case "fen": {
      jin = value * 1000;
      break;
    }
    case "li": {
      jin = value * 10000;
      break;
    }
  }
  return jin * 500;
}
function yingzhi2g(value, unit) {
  let b;
  switch (unit) {
    case "yingdun": {
      b = value * 2240;
      break;
    }
    case "meidun": {
      b = value * 2000;
      break;
    }
    case "yingdan": {
      b = value * 112;
      break;
    }
    case "kuate": {
      b = value * 28;
      break;
    }
    case "yingshi": {
      b = value * 14;
      break;
    }
    case "bang": {
      b = value;
      break;
    }
    case "angsi": {
      b = value / 16;
      break;
    }
    case "dalan": {
      b = value / 256;
      break;
    }
    case "geling": {
      b = value / 7000;
      break;
    }
  }
  return b * 453.59237;
}
function jinhengzhi2g(value, unit) {
  let geling;
  switch (unit) {
    case "bang": {
      geling = value / 5760;
      break;
    }
    case "angsi": {
      geling = value / 480;
      break;
    }
    case "benniweite": {
      geling = value / 24;
      break;
    }
    case "geling": {
      geling = value;
      break;
    }
  }
  return geling * 0.06479891;
}

let result = qualityConverter(1, 'g', 'gongzhi');