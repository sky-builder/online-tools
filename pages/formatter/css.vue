<template>
  <div class="flex flex-col">
    <h1 class="text-5xl">CSS格式化工具</h1>
    <div class="flex flex-row flex-1">
      <div class="flex flex-col flex-1 overflow-x-auto">
        <label for="js-css-input">输入</label>
        <textarea name="css-input" id="js-css-input"></textarea>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center mx-2 flex-none"
        @click="format"
      >执行</button>
      <div class="flex flex-col flex-1 overflow-x-auto">
        <label for="js-css-output">输出</label>
        <textarea name="css-output" id="js-css-output"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import prettier from "prettier/standalone";
import parserPostcss from "prettier/parser-postcss";

export default {
  data() {
    return {
      inputEditor: null,
      outputEditor: null
    };
  },
  mounted() {
    let input = document.getElementById("js-css-input");
    this.inputEditor = CodeMirror.fromTextArea(input, {
      lineNumbers: true,
      viewportMargin: Infinity
    });
    let output = document.getElementById("js-css-output");
    this.outputEditor = CodeMirror.fromTextArea(output, {
      lineNumbers: true,
      viewportMargin: Infinity
    });
  },
  methods: {
    format() {
      let input = this.inputEditor.getValue();
      let output = prettier.format(input, {
        parser: "css",
        plugins: [parserPostcss]
      });
      this.outputEditor.setValue(output);
    }
  }
};
</script>

<style>
.CodeMirror {
  height: 100%;
  max-height: 600px;
  border: 1px solid #eee;
}
</style>
