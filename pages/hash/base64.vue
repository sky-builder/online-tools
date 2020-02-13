<template>
  <div>
    <h1 class="text-6xl">在线 Base64 编码/解码</h1>
    <div class="flex flex-row">
      <div class="flex-1">
        <label for="js-decoded">编码前</label>
        <textarea
          id="js-decoded"
          v-model="decoded"
          class="border border-gray-300 w-full"
          name
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="flex-none flex flex-col mx-2 self-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 w-32 text-white font-bold py-2 px-4 rounded self-center flex flex-row"
          @click="handleEncode"
        >
          <span class="flex-1">编码</span>
          <img class="w-4 self-center" src="~/assets/icons/arrow-right.svg" />
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 w-32 text-white font-bold py-2 px-4 rounded self-center flex-none mt-2 flex flex-row"
          @click="handleDecode"
        >
          <img class="w-4 self-center" src="~/assets/icons/arrow-left.svg" />
          <span class="flex-1">解码</span>
        </button>
      </div>
      <div class="flex-1">
        <label for="js-encoded">编码后</label>
        <textarea
          id="js-encoded"
          v-model="encoded"
          class="border border-gray-300 w-full"
          name
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
    <h2 class="text-4xl my-4">Base64 解释</h2>
    <p>
      Base64是一种基于64个可打印字符来表示二进制数据的表示方法。
      <br />Base64常用于在通常处理文本数据的场合，表示、传输、存储一些二进制数据，包括MIME的电子邮件及XML的一些复杂数据。
    </p>
  </div>
</template>

<script>
import cryptojs from "crypto-js";

export default {
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