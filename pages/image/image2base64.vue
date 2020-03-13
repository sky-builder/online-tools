<template>
  <div>
    <h1>在线图片转base64</h1>
    <drag-and-drop-uploader @files="handleInput" :loading="loading" />
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
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '在线图片转base64',
    }
  },
  data() {
    return {
      output: "",
      loading: false
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
    handleInput(files) {
      if (!files || !files[0]) return;
      let file = files[0];
      let fileReader = new FileReader();
      this.loading = true;
      fileReader.onload = () => {
        let result = fileReader.result;
        this.$refs["img"].src = result;
        this.output = result;
        this.loading = false;
      };
      fileReader.readAsDataURL(file);
    }
  }
};
</script>

<style>

</style>