<template>
  <div>
    <h1 class="text-6xl">在线进制转换</h1>
    <div class="flex flex-col">
      <div>
        <label for="js-input-base">选择进制</label>
        <br />
        <select
          name="input-base"
          id="js-input-baes"
          class="border border-gray-300 w-16"
          v-model="inputBase"
        >
          <option v-for="item in 35" :key="item" :value="item + 1">{{item + 1}}</option>
        </select>
      </div>
      <div>
        <label for="js-input">输入</label>
        <br />
        <textarea
          id="js-input"
          class="border border-gray-300 w-full"
          v-model="input"
          @input="handleInputChange"
        ></textarea>
      </div>
      <div class="mt-2">
        <label for="js-output-base">选择进制</label>
        <br />
        <select
          name="output-base"
          id="js-output-baes"
          class="border border-gray-300 w-16"
          v-model="outputBase"
        >
          <option v-for="item in 35" :key="item" :value="item + 1">{{item + 1}}</option>
        </select>
      </div>
      <div>
        <label for="js-output">输出</label>
        <br />
        <textarea id="js-output" v-model="output" class="border border-gray-300 w-full"></textarea>
      </div>
    </div>
    <h2 class="text-4xl my-4">进制转换解释</h2>
    <p>
      进位制是一种记数方式，亦称进位计数法或位值计数法。利用这种记数法，可以使用有限种数字符号来表示所有的数值。一种进位制中可以使用的数字符号的数目称为这种进位制的基数或底数。若一个进位制的基数为n，即可称之为n进位制，简称n进制。现在最常用的进位制是十进制，这种进位制通常使用10个阿拉伯数字（即0-9）进行记数。
      我们可以用不同的进位制来表示同一个数。比如：十进数57(10)，可以用二进制表示为111001(2)，也可以用五进制表示为212(5)，同时也可以用八进制表示为71(8)，可用十二进制表示为49(12)，亦可用十六进制表示为39(16)，它们所代表的数值都是一样的。
    </p>
  </div>
</template>

<script>
import cryptojs from "crypto-js";

export default {
  data() {
    return {
      inputBase: 10,
      outputBase: 2,
      input: "",
      output: ""
    };
  },
  methods: {
    handleInputChange(e) {
      let input = parseInt(e.target.value, this.inputBase);
      if (isNaN(input)) {
        this.output = "";
        return;
      }
      let output = Number(input).toString(this.outputBase);
      this.output = output;
    }
  }
};
</script>

<style>
</style>