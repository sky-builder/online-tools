<template>
  <div>
    <h1>🔒在线MD5加密</h1>
    <label for="js-input">请输入需要加密的字符串：</label>
    <textarea id="js-input" v-model="input" class="w-full block" name cols="30" rows="10"></textarea>
    <button @click="handleClick" class="mt-2 w-full md:w-auto">加密</button>
    <div v-if="isResultVisible" class="mt-2">
      <span>加密结果：</span>
      <span class="break-words">{{ output }}</span>
      <button @click="handleCopy">复制</button>
      <span
        id="js-copy-msg"
        class="transition hidden bg-green-300 text-gray-700 text-sm py-1 px-2 rounded self-center flex-none ml-2"
      >复制成功!</span>
    </div>
    <div v-if="isResultVisible">
      <span>加密文本：</span>
      <span class="break-words">{{ input2 }}</span>
    </div>
  </div>
</template>

<script>
import copyToClipboard from "@/assets/js/copy-to-clipboard";

export default {
  head() {
    return {
      title: "在线MD5加密"
    };
  },
  head() {
    return {
      script: [{ src: "/md5.min.js" }]
    };
  },
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
      this.output = md5(this.input2);
      this.isResultVisible = true;
    }
  }
};
</script>

<style>
</style>