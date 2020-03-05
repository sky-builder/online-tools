<template>
  <div>
    <h1>在线图片转base64</h1>
    <input type="file" name="image" id="js-input" @input="handleInput" class />
    <br />
    <img :style="imgStyle" alt="user upload image" ref="img" />
    <br />
    <label for="js-output">输出</label>
    <textarea
      name="base64output"
      id="js-output"
      cols="30"
      rows="10"
      class="w-full"
      v-model="output"
    ></textarea>
    <h2 class="my-4">Base64 解释</h2>
    <p>
      Base64是一种基于64个可打印字符来表示二进制数据的表示方法。
      <br />Base64常用于在通常处理文本数据的场合，表示、传输、存储一些二进制数据，包括MIME的电子邮件及XML的一些复杂数据。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      output: ""
    };
  },
  computed: {
    imgStyle() {
      return {
        height: "300px",
        width: "auto",
        display: this.output ? "block" : "none"
      };
    }
  },
  methods: {
    handleInput(e) {
      let files = e.target.files;
      if (!files || !files[0]) return;
      let file = files[0];
      let fileReader = new FileReader();
      fileReader.onload = () => {
        let result = fileReader.result;
        this.$refs["img"].src = result;
        this.output = result;
      };
      fileReader.readAsDataURL(file);
    }
  }
};
</script>

<style>
</style>