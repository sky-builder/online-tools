<template>
  <div>
    <h1>在线温度单位转换</h1>
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
    <h2 class="my-4">工具说明</h2>
  </div>
</template>

<script>
import tempratureConverterMixin from "@/assets/js/temprature-converter/index";

export default {
  mixins: [tempratureConverterMixin],
  data() {
    return {};
  },
  methods: {
    handleInput(item) {
      let { key } = item;
      let value = this.keyValueMap[key];
      let result = this.doConvert(+value, key);
      this.keyValueMap = Object.assign({}, result);
    }
  }
};
</script>

<style>
</style>