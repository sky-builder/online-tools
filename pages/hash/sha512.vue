<template>
  <div>
    <h1 class="text-6xl">在线 SHA-512 加密</h1>
    <label for="js-input">输入字符串：</label>
    <textarea
      id="js-input"
      v-model="input"
      class="border border-gray-300 w-full"
      name
      cols="30"
      rows="10"
    ></textarea>
    <button
      class="bg-blue-500 hover:bg-blue-700 w-32 text-white font-bold py-2 px-4 rounded self-center flex-none"
      @click="handleClick"
    >加密</button>
    <div v-if="isResultVisible">
      <span>加密结果：</span>
      <span>{{ output }}</span>
      <button
        class="bg-gray-300 hover:bg-gray-500 text-sm text-gray-700 py-1 px-2 rounded self-center flex-none ml-2"
        @click="handleCopy"
      >复制</button>
      <span
        id="js-copy-msg"
        class="transition hidden bg-green-300 text-gray-700 text-sm py-1 px-2 rounded self-center flex-none ml-2"
      >复制成功!</span>
    </div>
    <div v-if="isResultVisible">
      <span>加密文本：</span>
      <span>{{ input2 }}</span>
    </div>
    <h2 class="text-4xl my-4">FAQ</h2>
    <h3 class="text-2xl my-2">什么是 SHA-512 加密？</h3>
    <p>
      SHA-512是SHA-2加密哈希函数的成员。
      <br />SHA-2，名称来自于安全散列算法2（英语：Secure Hash Algorithm 2）的缩写，一种密码散列函数算法标准，由美国国家安全局研发，由美国国家标准与技术研究院（NIST）在2001年发布。属于SHA算法之一，是SHA-1的后继者。其下又可再分为六个不同的算法标准，包括了：SHA-224、SHA-256、SHA-384、SHA-512、SHA-512/224、SHA-512/256。
    </p>
    <h3 class="text-2xl my-2">SHA-512 加密安全吗？</h3>
    <p>这些新的散列函数并没有接受像SHA-1一样的公众密码社群做详细的检验，所以它们的密码安全性还不被大家广泛的信任。Gilbert和Handschuh在2003年曾对这些新变种作过一些研究，声称他们没有找到弱点。</p>
    <h3 class="text-2xl my-2">SHA-256 和 SHA-512 有什么区别？</h3>
    <p>
      SHA-256和SHA-512是很新的散列函数，前者以定义一个word为32位，后者则定义一个word为64位。它们分别使用了不同的偏移量，或用不同的常量，然而，实际上二者结构是相同的，只在循环运行的次数上有所差异。
      <br />SHA-512所有的数字都是64位，
      <br />SHA-512运行80次加密循环而非64次，
      <br />SHA-512初始值和常量拉长成64位，以及
      <br />二者比特的偏移量和循环位移量不同。
    </p>
    <a
      class="text-blue-500 mt-2 inline-block hover:text-blue-700"
      href="https://zh.wikipedia.org/wiki/SHA-2"
      target="_blank"
    >SHA-2 中文维基百科</a>
  </div>
</template>

<script>
import copyToClipboard from "@/assets/js/copy-to-clipboard";
import cryptojs from "crypto-js";

export default {
  data() {
    return {
      isResultVisible: false,
      input: "",
      input2: "",
      output: "",
      timer: null
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
      let output = cryptojs.SHA512(this.input2).toString();
      this.output = output;
      this.isResultVisible = true;
    }
  }
};
</script>

<style>
</style>