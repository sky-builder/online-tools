<template>
  <div>
    <h1>在线DES加密/解密</h1>
    <label for="js-key">密匙</label>
    <br />
    <input type="text" name="key" id="js-key" v-model="key" />
    <br />
    <label for="js-input">输入</label>
    <br />
    <textarea name="input" id="js-input" cols="30" rows="10" v-model="input" class="w-full"></textarea>
    <div>
      <button @click="doEncrypt">加密</button>
      <button @click="doDecrypt">解密</button>
    </div>
    <label for="js-output">输出</label>
    <br />
    <textarea name="output" id="js-output" cols="30" rows="10" v-model="output" class="w-full"></textarea>
    <h2 class="my-4">FAQ</h2>
    <h3 class="my-2">什么是DES加密？</h3>
    <p>
      数据加密标准（英语：Data Encryption Standard，缩写为 DES）是一种对称密钥加密块密码演算法，1976年被美国联邦政府的国家标准局确定为联邦资料处理标准（FIPS），随后在国际上广泛流传开来。它基于使用56位密钥的对称算法。这个算法因为包含一些机密设计元素，相对短的密钥长度以及怀疑内含美国国家安全局（NSA）的后门而在开始时有争议，DES因此受到了强烈的学院派式的审查，并以此推动了现代的块密码及其密码分析的发展。
      <br />
      <br />DES现在已经不是一种安全的加密方法，主要因为它使用的56位密钥过短。1999年1月，distributed.net与电子前哨基金会合作，在22小时15分钟内即公开破解了一个DES密钥。也有一些分析报告提出了该算法的理论上的弱点，虽然在实际中难以应用。为了提供实用所需的安全性，可以使用DES的衍生算法3DES来进行加密，虽然3DES也存在理论上的攻击方法。在2001年，DES标准已经被高级加密标准（AES）所取代。另外，DES已经不再作为国家标准科技协会（前国家标准局）的一个标准。
      <br />
      <br />在某些文献中，作为算法的DES被称为DEA（Data Encryption Algorithm，数据加密算法），以与作为标准的DES区分开来。在发音时，DES可以作为缩写按字母拼出来(/ˌdiːˌiːˈɛs/)，或作为一个词念成/ˈdɛz/。
    </p>
  </div>
</template>

<script>
import cryptoJs from "crypto-js";
export default {
  data() {
    return {
      input: "",
      output: "",
      key: ""
    };
  },
  methods: {
    doEncrypt() {
      let input = this.input;
      let key = this.key;
      let output = cryptoJs.DES.encrypt(input, key).toString();
      this.output = output;
    },
    doDecrypt() {
      let input = this.input;
      let key = this.key;
      let output = cryptoJs.DES.decrypt(input, key);
      output = cryptoJs.enc.Utf8.stringify(output);
      this.output = output;
    }
  }
};
</script>

<style>
</style>