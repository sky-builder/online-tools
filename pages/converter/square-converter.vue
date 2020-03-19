<template>
  <div>
    <h1>🔁面积单位转换</h1>
    <table class="w-full mt-4 sm:w-1/2">
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
  </div>
</template>

<script>
import squareConverterMixin from "@/assets/js/square-converter/index";
export default {
  head() {
    return {
      title: '面积单位转换',
    }
  },
  mixins: [squareConverterMixin],
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