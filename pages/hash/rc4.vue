<template>
  <div>
    <h1 class="text-6xl">在线RC4加密/解密</h1>
    <label for="js-key">密匙</label>
    <br />
    <input type="text" name="key" id="js-key" v-model="key" class="border-gray" />
    <br />
    <label for="js-input">输入</label>
    <br />
    <textarea
      name="input"
      id="js-input"
      cols="30"
      rows="10"
      v-model="input"
      class="border-gray w-full"
    ></textarea>
    <div>
      <button class="btn-blue" @click="doEncrypt">加密</button>
      <button class="btn-blue" @click="doDecrypt">解密</button>
    </div>
    <label for="js-output">输出</label>
    <br />
    <textarea
      name="output"
      id="js-output"
      cols="30"
      rows="10"
      v-model="output"
      class="border-gray w-full"
    ></textarea>
    <h2 class="text-4xl my-4">FAQ</h2>
    <h3 class="text-2xl my-2">什么是RC4加密？</h3>
    <p>
      在密码学中，RC4（来自Rivest Cipher 4的缩写）是一种流加密算法，密钥长度可变。它加解密使用相同的密钥，因此也属于对称加密算法。RC4是有线等效加密（WEP）中采用的加密算法，也曾经是TLS可采用的算法之一。
      <br />由美国密码学家罗纳德·李维斯特（Ronald Rivest）在1987年设计的。由于RC4算法存在弱点，2015年2月所发布的 RFC 7465 规定禁止在TLS中使用RC4加密算法。
      <br />RC4由伪随机数生成器和异或运算组成。RC4的密钥长度可变，范围是[1,255]。RC4一个字节一个字节地加解密。给定一个密钥，伪随机数生成器接受密钥并产生一个S盒。S盒用来加密数据，而且在加密过程中S盒会变化。
      <br />由于异或运算的对合性，RC4加密解密使用同一套算法。
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
      let output = cryptoJs.RC4.encrypt(input, key).toString();
      this.output = output;
    },
    doDecrypt() {
      let input = this.input;
      let key = this.key;
      let output = cryptoJs.RC4.decrypt(input, key);
      output = cryptoJs.enc.Utf8.stringify(output);
      this.output = output;
    }
  }
};
</script>

<style>
</style>