function squareConverter(value, unit) {
  let r;
  switch(unit) {
    case 'pingfangmi': {
      r = value;
      break;
    }
    case 'pingfanglimi': {
      r = value * 10000;
      break;
    }
    case 'pingfangqianmi': {
      r = value / 1000000;
      break;
    }
    case 'gongqing': {
      r = value * 10000;
      break;
    }
    case 'gongmu': {
      r = value * 100;
      break;
    }
    case 'yingmu': {
      r = value * 4046.86;
      break;
    }
    case 'ping': {
      r = value * 3.3058;
      break;
    }
    case 'pingfangma': {
      r = value * 0.83612;
      break;
    }
    case 'pingfangyingchi': {
      r = value * 0.092951;
      break;
    }
    case 'pingfangyingcun': {
      r = value * 0.000645;
      break;
    }
    case 'jia': {
      r = value * 9969.17;
      break;
    }
  }
  return {
    pingfanmi: r,
    pingfalimi: r / 0.0001,
    pingfaqiangmi: r / 1e6,
    gongqing: r / 1e4,
    gongmu: r / 100,
    yingmu: r / 4046.86,
    ping: r / 3.3058,
    pingfangma: r * 1.196,
    pingfangyingchi: r * 10.764,
    pingfangyingcun: r * 1550,
    jia: r / 9969.17
  }
}
let result = squareConverter(10, 'pingfangmi')
console.log(result);