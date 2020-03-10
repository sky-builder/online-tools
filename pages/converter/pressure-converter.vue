<template>
  <div>
    <h1>压力单位转换</h1>
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
            <button class @click="handleInput(item)">转换</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="my-4">单位说明</h2>
    <h3 class="my-2">帕斯卡</h3>
    <p>
      帕斯卡（符号Pa或Pascal）是国际单位制（SI）的压强单位。在不致混淆的情况下也可简称为“帕”。它等于每平方米一牛顿。以法国学者（数学家、物理学家、化学家、音乐家、宗教家、教育家、气象学家、哲学家）布莱兹·帕斯卡之名而命名。
      <br />气象上常用的“百帕”（hPa）、“千帕”（kPa）和工程上常用的“兆帕”（MPa），均是自Pa衍生出来的单位。
    </p>
  </div>
</template>

<script>
import pressureConverterMixin from "@/assets/js/pressure-converter/index";
export default {
  head() {
    return {
      title: '压力单位转换',
    }
  },
  mixins: [pressureConverterMixin],
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