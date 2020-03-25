<template>
  <div>
    <h1>在线进制转换</h1>
    <div class="flex flex-col">
      <div>
        <label for="js-input-base">选择进制</label>
        <br />
        <select name="input-base" id="js-input-baes" class="w-16" v-model="inputBase">
          <option v-for="item in 35" :key="item" :value="item + 1">{{item + 1}}</option>
        </select>
      </div>
      <div>
        <label for="js-input">输入</label>
        <br />
        <textarea id="js-input" class="border w-full" v-model="input" @input="handleInputChange"></textarea>
      </div>
      <div class="mt-2">
        <label for="js-output-base">选择进制</label>
        <br />
        <select name="output-base" id="js-output-baes" class="border w-16" v-model="outputBase">
          <option v-for="item in 35" :key="item" :value="item + 1">{{item + 1}}</option>
        </select>
      </div>
      <div>
        <label for="js-output">输出</label>
        <br />
        <textarea id="js-output" v-model="output" class="border w-full"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import cryptojs from "crypto-js";

export default {
  head() {
    return {
      title: '在线进制转换',
    }
  },
  data() {
    return {
      inputBase: 10,
      outputBase: 2,
      input: "",
      output: ""
    };
  },
  methods: {
    handleInputChange(e) {
      let input = parseInt(e.target.value, this.inputBase);
      if (isNaN(input)) {
        this.output = "";
        return;
      }
      let output = Number(input).toString(this.outputBase);
      this.output = output;
    }
  }
};
</script>

<style>
</style>