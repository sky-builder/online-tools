<template>
  <div>
    <h1>🔁在线 Base64 编码/解码</h1>
    <div class="flex flex-col">
      <div class="flex-1">
        <label for="js-decoded">编码前</label>
        <textarea id="js-decoded" v-model="decoded" class="border w-full" name cols="30" rows="10"></textarea>
      </div>
      <div class="flex-none flex flex-row self-start">
        <button @click="handleEncode">
          <span class="flex-1">编码</span>
        </button>
        <button @click="handleDecode" class="ml-2">
          <span class="flex-1">解码</span>
        </button>
      </div>
      <div class="flex-1">
        <label for="js-encoded">编码后</label>
        <textarea id="js-encoded" v-model="encoded" class="border w-full" name cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import cryptojs from "crypto-js";

export default {
  head() {
    return {
      title: '在线base64编码',
    }
  },
  data() {
    return {
      encoded: "",
      decoded: ""
    };
  },
  methods: {
    handleEncode() {
      let wordArray = cryptojs.enc.Utf8.parse(this.decoded);
      this.encoded = cryptojs.enc.Base64.stringify(wordArray);
    },
    handleDecode() {
      let wordArray = cryptojs.enc.Base64.parse(this.encoded);
      this.decoded = cryptojs.enc.Utf8.stringify(wordArray);
    }
  }
};
</script>

<style>
</style>