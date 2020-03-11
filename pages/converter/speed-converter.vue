<template>
  <div>
    <h1>速度单位转换</h1>
    <table class="w-1/2">
      <tbody>
        <tr v-for="(item) in unitList" :key="item.key">
          <td class="py-2 px-4 border border-gray-300">
            <label :for="'js-' + item.key">{{ item.name }}({{item.unit}})</label>
          </td>
          <td class="py-2 px-4 border border-gray-300">
            <input
              class="w-full"
              type="text"
              name
              :id="'js-' + item.key"
              v-model="keyValueMap[item.key]"
            />
          </td>
          <td class="py-2 px-4 border border-gray-300 text-center">
            <button @click="handleInput(item)">转换</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import speedConverterMixin from "@/assets/js/speed-converter/index";
export default {
  head() {
    return {
      title: '速度单位转换',
    }
  },
  mixins: [speedConverterMixin],
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