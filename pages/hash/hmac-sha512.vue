<template>
  <div>
    <h1>在线 HMAC-SHA512 加密</h1>
    <label for="js-key">密匙</label>
    <br />
    <input type="text" v-model="key" />
    <br />
    <label for="js-input">字符串：</label>
    <textarea id="js-input" v-model="input" class="w-full" name cols="30" rows="10"></textarea>
    <button @click="handleClick">加密</button>
    <div v-if="isResultVisible">
      <span>加密结果：</span>
      <span>{{ output }}</span>
      <button @click="handleCopy">复制</button>
      <span
        id="js-copy-msg"
        class="transition hidden bg-green-300 text-gray-700 text-sm py-1 px-2 rounded self-center flex-none ml-2"
      >复制成功!</span>
    </div>
    <div v-if="isResultVisible">
      <span>加密文本：</span>
      <span>{{ input2 }}</span>
      <br />
      <span>密匙：</span>
      <span>{{ key2 }}</span>
    </div>
  </div>
</template>

<script>
import copyToClipboard from "@/assets/js/copy-to-clipboard";
import cryptojs from "crypto-js";

export default {
  head() {
    return {
      title: '在线HMAC-SHA512加密',
    }
  },
  data() {
    return {
      isResultVisible: false,
      input: "",
      input2: "",
      output: "",
      timer: null,
      key: "",
      key2: ""
    };
  },
  methods: {
    handleCopy() {
      copyToClipboard(this.output);
      let copyMsgEl = document.getElementById("js-copy-msg");
      copyMsgEl.classList.remove("hidden");
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        copyMsgEl.classList.add("hidden");
        clearTimeout(this.timer);
      }, 1500);
    },
    handleClick() {
      this.input2 = this.input;
      this.key2 = this.key;
      let output = cryptojs.HmacSHA512(this.input2, this.key2).toString();
      this.output = output;
      this.isResultVisible = true;
    }
  }
};
</script>

<style>
</style>