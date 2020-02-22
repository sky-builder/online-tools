<template>
  <div>
    <h1 class="text-6xl">在线3DES(Triple DES)加密/解密</h1>
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
    <h3 class="text-2xl my-2">什么是3DES加密？</h3>
    <p>密码学中，三重数据加密算法（英语：Triple Data Encryption Algorithm，缩写为TDEA，Triple DEA），或称3DES（Triple DES），是一种对称密钥加密块密码，相当于是对每个数据块应用三次数据加密标准（DES）算法。由于计算机运算能力的增强，原版DES密码的密钥长度变得容易被暴力破解；3DES即是设计用来提供一种相对简单的方法，即通过增加DES的密钥长度来避免类似的攻击，而不是设计一种全新的块密码算法。</p>
    <h3 class="text-2xl my-2">安全性</h3>
    <p>
      普遍而言，有3个独立密钥的3DES（密钥选项1）的密钥长度为168位（三个56位的DES密钥），但由于中途相遇攻击，它的有效安全性仅为112位。密钥选项2将密钥长度缩短到了112位，但该选项对特定的选择明文攻击和已知明文攻击的强度较弱，因此NIST认定它只有80位的安全性。
      <br />对密钥选项1的已知最佳攻击需要约232组已知明文，2113部，290次DES加密以及288位内存（该论文提到了时间和内存的其它分配方案）。这在现在是不现实的，因此NIST认为密钥选项1可以使用到2030年。若攻击者试图在一些可能的（而不是全部的）密钥中找到正确的，有一种在内存效率上较高的攻击方法可以用每个密钥对应的少数选择明文和约284次加密操作找到228个目标密钥中的一个。
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
      let output = cryptoJs.TripleDES.encrypt(input, key).toString();
      this.output = output;
    },
    doDecrypt() {
      let input = this.input;
      let key = this.key;
      let output = cryptoJs.TripleDES.decrypt(input, key);
      output = cryptoJs.enc.Utf8.stringify(output);
      this.output = output;
    }
  }
};
</script>

<style>
</style>