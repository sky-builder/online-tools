<template>
  <div class="app__body flex flex-col">
    <h1 class="text-5xl">JavaScript压缩工具</h1>
    <label for="js-input">输入</label>
    <div class="w-full relative editor-wrapper">
      <div id="js-input"></div>
    </div>
    <button class="self-start my-2" @click="format">格式化</button>
    <label for="js-indent">缩进</label>
    <select class="w-32" name="indent" id="js-indent" v-model="indent">
      <option value="tab">tab</option>
      <option value="1">1spaces</option>
      <option value="2">2spaces</option>
      <option value="3">3spaces</option>
      <option value="4">4spaces</option>
      <option value="8">8spaces</option>
    </select>
    <label for="js-output">输出</label>
    <div class="w-full relative editor-wrapper">
      <div id="js-output"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'JavaScript丑化',
    }
  },
  head() {
    return {
      script: [{ src: "/uglifyjs.js" }]
    };
  },
  data() {
    return {
      editor1: null,
      editor2: null,
      indent: "tab"
    };
  },
  mounted() {
    let editor = ace.edit("js-input");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    this.editor1 = editor;
    let editor2 = ace.edit("js-output");
    editor2.setTheme("ace/theme/monokai");
    editor2.session.setMode("ace/mode/javascript");
    this.editor2 = editor2;
  },
  methods: {
    format() {
      let value = this.editor1.getValue();
      let output = UglifyJS.minify(value).code;
      this.editor2.setValue(output);
    }
  }
};
</script>

<style scoped>
.editor-wrapper {
  height: 50vh;
}
#js-input,
#js-output {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
