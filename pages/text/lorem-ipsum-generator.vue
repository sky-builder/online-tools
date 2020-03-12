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