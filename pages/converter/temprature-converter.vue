<template>
  <div>
    <h1>🔁在线温度单位转换</h1>
    <table class="mt-4 w-full table-auto sm:w-1/2">
      <tbody>
        <tr v-for="(item) in unitList" :key="item.key">
          <td>
            <label :for="'js-' + item.key">{{ item.name }}({{item.unit}})</label>
          </td>
          <td>
            <input
              type="text"
              class="w-full"
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
  </div>
</template>

<script>
import tempratureConverterMixin from "@/assets/js/temprature-converter/index";

export default {
  head() {
    return {
      title: '温度单位转换',
    }
  },
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