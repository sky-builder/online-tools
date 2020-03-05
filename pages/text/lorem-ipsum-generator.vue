<template>
  <div>
    <h1>在线lorem ipsum生成</h1>
    <input type="radio" name="type" id="js-radio-para" value="paragraphs" v-model="type" />
    <label for="js-radio-para">paragraphs</label>
    <br />
    <input type="radio" name="type" id="js-radio-words" value="words" v-model="type" />
    <label for="js-radio-words">words</label>
    <br />
    <label for="js-output-size">size</label>
    <input class type="number" v-model="outputSize" min="1" step="1" />
    <br />
    <button class="mt-4" @click="doGeneration">Generate Lorem Ipsum</button>
    <textarea class="w-full mt-2" name id rows="20" v-model="output"></textarea>
    <h2 class="my-4">FAQ</h2>
    <h3 class="my-2">lorem ipsum 是什么？</h3>
    <p>Lorem ipsum是指一篇常用于排版设计领域的拉丁文文章，主要的目的为测试文章或文字在不同字型、版型下看起来的效果。中文的类似用法则称为乱数假文、随机假文。</p>
    <h3 class="my-2">lorem ipsum 的应用</h3>
    <p>
      Lorem ipsum从15世纪开始就被广泛地使用在西方的印刷、设计领域中，在电脑排版盛行之后，这段被传统印刷产业使用几百年的无意义文字又再度流行。由于这段文字以“Lorem ipsum”起头，并且常被用于标题的测试中，所以一般称为Lorem ipsum，简称为Lipsum。
      常见的Lorem ipsum起头如下：
    </p>
    <p
      class="pl-6 text-sm"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<script>
import { loremIpsum } from "lorem-ipsum";
export default {
  data() {
    return {
      outputSize: 5,
      type: "paragraphs",
      output: ""
    };
  },
  methods: {
    doGeneration() {
      let type = this.type;
      let outputSize = +this.outputSize;
      let output = loremIpsum({
        count: outputSize,
        units: type
      });
      this.output = output;
    }
  }
};
</script>

<style>
</style>