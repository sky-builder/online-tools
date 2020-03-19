<template>
  <div>
    <h1>📝在线lorem ipsum（英文随机文本）生成</h1>
    <input class="mt-4" type="radio" name="type" id="js-radio-para" value="paragraphs" v-model="type" />
    <label for="js-radio-para">生成段落</label>
    <br />
    <input type="radio" name="type" id="js-radio-words" value="words" v-model="type" />
    <label for="js-radio-words">生成单词</label>
    <br />
    <label for="js-output-size">数量</label>
    <input type="number" class="" v-model="outputSize" min="1" step="1" />
    <br />
    <button class="mt-2 w-full sm:w-auto" @click="doGeneration">生成</button>
    <textarea class="w-full mt-2" name id rows="20" v-model="output"></textarea>
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