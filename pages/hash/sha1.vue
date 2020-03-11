<template>
  <div>
    <h1>🔒在线 SHA-1 加密</h1>
    <label for="js-input">输入字符串：</label>
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
    </div>
    <div class="w-3/4 mt-12 pl-8 border-l-8">
      <h2 class="">📝工具说明</h2>
      <h3 class="mt-4 opacity-75">什么是 SHA-1 加密？</h3>
      <p>
        SHA-1 （英语：Secure Hash Algorithm 1，中文名：安全散列算法1）是一种密码散列函数，美国国家安全局设计，并由美国国家标准技术研究所（NIST）发布为联邦数据处理标准（FIPS）。 SHA-1 可以生成一个被称为消息摘要的160位（20字节）散列值，散列值通常的呈现形式为40个十六进制数。
        <br />
      </p>
      <h3 class="mt-4 opacity-75">SHA-1 加密安全吗？</h3>
      <p>
        SHA-1 已经不再视为可抵御有充足资金、充足计算资源的攻击者。2005年，密码分析人员发现了对 SHA-1 的有效攻击方法，这表明该算法可能不够安全，不能继续使用，自2010年以来，许多组织建议用SHA-2或SHA-3来替换 SHA-1 。Microsoft、Google以及Mozilla都宣布，它们旗下的浏览器将在2017年前停止接受使用 SHA-1 算法签名的SSL证书。
        2017年2月23日，CWI Amsterdam与Google宣布了一个成功的 SHA-1 碰撞攻击，发布了两份内容不同但 SHA-1 散列值相同的PDF文件作为概念证明。
      </p>
    </div>
  </div>
</template>

<script>
import copyToClipboard from "@/assets/js/copy-to-clipboard";
import cryptojs from "crypto-js";

export default {
  head() {
    return {
      title: '在线SHA-1加密',
    }
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
      this.output = cryptojs.SHA1(this.input2).toString();
      this.isResultVisible = true;
    }
  }
};
</script>

<style>
</style>