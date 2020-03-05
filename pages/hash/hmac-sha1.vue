<template>
  <div>
    <h1>在线 HMAC-SHA1 加密</h1>
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
    <h2 class="my-4">FAQ</h2>
    <h3 class="my-2">什么是HMAC？</h3>
    <p>HMAC是密钥相关的哈希运算消息认证码（Hash-based Message Authentication Code）的缩写，由H.Krawezyk，M.Bellare，R.Canetti于1996年提出的一种基于Hash函数和密钥进行消息认证的方法，并于1997年作为RFC2104被公布，并在IPSec和其他网络协议（如SSL）中得以广泛应用，现在已经成为事实上的Internet安全标准。它可以与任何迭代散列函数捆绑使用。</p>
    <h3 class="my-2">什么是 SHA-1 加密？</h3>
    <p>
      SHA-1 （英语：Secure Hash Algorithm 1，中文名：安全散列算法1）是一种密码散列函数，美国国家安全局设计，并由美国国家标准技术研究所（NIST）发布为联邦数据处理标准（FIPS）。 SHA-1 可以生成一个被称为消息摘要的160位（20字节）散列值，散列值通常的呈现形式为40个十六进制数。
      <br />
    </p>
    <h3 class="my-2">SHA-1 加密安全吗？</h3>
    <p>
      SHA-1 已经不再视为可抵御有充足资金、充足计算资源的攻击者。2005年，密码分析人员发现了对 SHA-1 的有效攻击方法，这表明该算法可能不够安全，不能继续使用，自2010年以来，许多组织建议用SHA-2或SHA-3来替换 SHA-1 。Microsoft、Google以及Mozilla都宣布，它们旗下的浏览器将在2017年前停止接受使用 SHA-1 算法签名的SSL证书。
      2017年2月23日，CWI Amsterdam与Google宣布了一个成功的 SHA-1 碰撞攻击，发布了两份内容不同但 SHA-1 散列值相同的PDF文件作为概念证明。
    </p>
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
      this.output = cryptojs.HmacSHA1(this.input2, this.key2).toString();
      this.isResultVisible = true;
    }
  }
};
</script>

<style>
</style>