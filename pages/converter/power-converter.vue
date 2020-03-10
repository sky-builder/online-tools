<template>
  <div>
    <h1>功率单位转换</h1>
    <table>
      <tbody>
        <tr v-for="(item) in unitList" :key="item.key">
          <td>
            <label :for="'js-' + item.key">{{ item.name }}({{item.unit}})</label>
          </td>
          <td>
            <input
              class="w-64"
              type="text"
              name
              :id="'js-' + item.key"
              v-model="keyValueMap[item.key]"
            />
          </td>
          <td>
            <button @click="handleInput(item)">转换</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="my-4">单位说明</h2>
    <h3 class="my-2">瓦特</h3>
    <p>瓦特（符号：W）是国际单位制的功率单位。瓦特的定义是1焦耳/秒（1 J/s），即每秒钟转换，使用或耗散的（以安培为量度的）能量的速率。日常生活中更常用千瓦作为单位，1千瓦=1000瓦特。</p>
    <h3 class="my-2">焦耳</h3>
    <p>焦耳（简称焦）是国际单位制中能量、功或热量的导出单位，符号为J。在经典力学里，1焦耳等于施加1牛顿作用力经过1米距离所需的能量（或做的机械功）。在电磁学里，1焦耳等于将1安培电流通过1欧姆电阻1秒时间所需的能量。焦耳是因纪念物理学家詹姆斯·焦耳而命名。</p>

    <h3 class="my-2">马力</h3>
    <p>
      马力（英语：horsepower，hp），俗称匹，是一个古老的功率单位。今日除了航空、造船与汽车工业提及内燃机的功率、空调的制冷性能以外，在其他领域较为少用马力这个单位，而会使用标准的国际功率单位瓦特。 马力的定义有很多种，现今常用的两种马力为英制马力和公制马力，英制马力约为745.7W，公制马力约为735.5W。
      <br />这个单位概念是由蒸汽机改良者詹姆斯·瓦特命名，用以表示他的蒸汽机相对于马匹拉力的功率，定义为：一匹马在1分钟的时间，拖动半径为12英尺水车2.4圈，亦即(2.4*2π*12英尺)的距离 瓦特假设每匹马能拉动180磅，马力即可透过下式计算：功/时间=力*距离/时间=(180磅力)*(2.4*2π*12英尺)/1分钟=32572英尺·磅力/分钟。约等于33,000英尺‧磅力/分钟
    </p>
    <h3 class="my-2">卡路里</h3>
    <p>卡路里（Calorie，缩写为cal），简称卡，是一物理学能量单位，其定义为将1克水在1大气压（101.325kPa）下提升1摄氏度所需要的热量。</p>
    <h3 class="my-2">英热单位</h3>
    <p>英热单位(British thermal unit，简称BTU，有时也被写成 Btu) 是一个传统英制的能量或热量单位，约等于 1,055 焦耳，是将一磅的水由华氏39度加热至华氏40度所需的热能。 此一单位通常用在蒸汽机、暖气、冷气、电热等产业。科学界通常使用 SI 制标准单位：焦耳。</p>
    <h3 class="my-2">尔格</h3>
    <p>尔格（英文：Erg）是热量和做功的单位。定义为1达因的力使一克物体在力的方向上移动一厘米所作的功。</p>
    <h3 class="my-2">电子伏特</h3>
    <p>
      电子伏特（英语：electron volt），简称电子伏，符号为eV，为能量单位。代表一带电量为1.602 176 634 x 10−19库仑的电子 在真空中通过 1 伏特电位差所产生的动能。电子伏与SI制的能量单位焦耳（J）的换算关系是：
      1 eV = 1.602176634×10−19 J
    </p>
  </div>
</template>

<script>
import powerConverterMixin from "@/assets/js/power-converter/index";
export default {
  head() {
    return {
      title: '功率单位转换',
    }
  },
  mixins: [powerConverterMixin],
  data() {
    return {};
  },
  methods: {
    handleInput(item) {
      let { key } = item;
      let value = this.keyValueMap[key];
      let result = this.doConvert(value, key);
      this.keyValueMap = Object.assign({}, result);
    }
  }
};
</script>

<style>
</style>