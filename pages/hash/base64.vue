<template>
  <div>
    <h1>在线 Base64 编码/解码</h1>
    <div class="flex flex-row">
      <div class="flex-1">
        <label for="js-decoded">编码前</label>
        <textarea id="js-decoded" v-model="decoded" class="border w-full" name cols="30" rows="10"></textarea>
      </div>
      <div class="flex-none flex flex-col mx-2 self-center">
        <button class="flex flex-row" @click="handleEncode">
          <img class="w-4 self-center" src="~/assets/icons/arrow-right.svg" />
          <span class="flex-1">编码</span>
        </button>
        <button class="flex flex-row mt-2" @click="handleDecode">
          <img class="w-4 self-center" src="~/assets/icons/arrow-left.svg" />
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