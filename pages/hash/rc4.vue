<template>
  <div>
    <h1>在线RC4加密/解密</h1>
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
    
  </div>
</template>

<script>
import cryptoJs from "crypto-js";
export default {
  head() {
    return {
      title: '在线RC4加密解密',
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