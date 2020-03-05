<template>
  <div>
    <h1>在线字数统计</h1>
    <label for="js-input">输入</label>
    <textarea
      name="input"
      id="js-inut"
      cols="30"
      rows="10"
      class="border w-full"
      @input="handleInput"
      v-model="input"
    ></textarea>
    <div>
      <span>字数：</span>
      <span>{{ wordCount }}</span>
    </div>
    <div>
      <span>字符数：</span>
      <span>{{ charCount }}</span>
    </div>
    <h2 class="my-4">在线字数统计工具介绍</h2>
    <h3 class="my-2">字数和字符数有什么区别？</h3>
    <p>
      字数包含标点符号、不包含空白字符。
      <br />字符数包含标点符号、包含空白字符，如空格、换行符、tab等等。
    </p>
  </div>
</template>

<script>
import cryptojs from "crypto-js";

export default {
  data() {
    return {
      wordCount: 0,
      charCount: 0,
      input: ""
    };
  },
  methods: {
    handleInput(e) {
      this.wordCount = this.input.replace(/\s/g, "").length;
      this.charCount = this.input.length;
    }
  }
};
</script>

<style>
</style>