<template>
  <div>
    <h1>在线Rabbit加密/解密</h1>
    <label for="js-key">密匙</label>
    <br />
    <input type="text" name="key" id="js-key" v-model="key" class />
    <br />
    <label for="js-input">输入</label>
    <br />
    <textarea name="input" id="js-input" cols="30" rows="10" v-model="input" class="w-full"></textarea>
    <div>
      <button class @click="doEncrypt">加密</button>
      <button class @click="doDecrypt">解密</button>
    </div>
    <label for="js-output">输出</label>
    <br />
    <textarea name="output" id="js-output" cols="30" rows="10" v-model="output" class="w-full"></textarea>
    <h2 class="my-4">FAQ</h2>
    <h3 class="my-2">什么是Rabbit加密？</h3>
    <p>
      Rabbit是高性能流密码。
      <br />在密码学中，流密码（英语：Stream cipher），又译为流加密、数据流加密，是一种对称加密算法，加密和解密双方使用相同伪随机加密数据流（pseudo-random stream）作为密钥，明文数据每次与密钥数据流顺次对应加密，得到密文数据流。实践中数据通常是一个位（bit）并用异或（xor）操作加密。
      <br />该算法解决了对称加密完善保密性（perfect secrecy）的实际操作困难。“完善保密性”由克劳德·香农于1949年提出。由于完善保密性要求密钥长度不短于明文长度，故而实际操作存在困难，改由较短数据流通过特定算法得到密钥流。
      <br />
    </p>
  </div>
</template>

<script>
import cryptoJs from "crypto-js";
export default {
  head() {
    return {
      title: '在线Rabbit加密解密',
    }
  },
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
      let output = cryptoJs.Rabbit.encrypt(input, key).toString();
      this.output = output;
    },
    doDecrypt() {
      let input = this.input;
      let key = this.key;
      let output = cryptoJs.Rabbit.decrypt(input, key);
      console.log(output);
      output = cryptoJs.enc.Utf8.stringify(output);
      this.output = output;
    }
  }
};
</script>

<style>
</style>