<template>
  <div>
    <h1 class="text-6xl">在线 URI 编码/解码</h1>
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
    <h2 class="text-4xl my-4">URI 解释</h2>
    <p>
      统一资源标识符（英语：Uniform Resource Identifier，缩写：URI）在电脑术语中是一个用于标识某一互联网资源名称的字符串。
      该种标识允许用户对网络中（一般指万维网）的资源通过特定的协议进行交互操作。URI的最常见的形式是统一资源定位符（URL），经常指定为非正式的网址。更罕见的用法是统一资源名称（URN），其目的是通过提供一种途径。用于在特定的名字空间资源的标识，以补充网址。
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
      this.encoded = encodeURI(this.decoded);
    },
    handleDecode() {
      this.decoded = decodeURI(this.encoded);
    }
  }
};
</script>

<style>
</style>