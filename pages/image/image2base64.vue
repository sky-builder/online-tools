<template>
  <div>
    <h1>📸在线图片转base64</h1>
    <drag-and-drop-uploader class="mt-4" @files="handleInput" :loading="loading" />
    <img :style="imgStyle" class="w-full mt-4 img-border hidden sm:w-auto sm:h-64" alt="user upload image" ref="img" />
    <label class="mt-4 inline-block" for="js-output">输出</label>
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
  methods: {
    handleInput(files) {
      if (!files || !files[0]) return;
      let file = files[0];
      let fileReader = new FileReader();
      this.loading = true;
      fileReader.onload = () => {
        let result = fileReader.result;
        this.$refs["img"].src = result;
        this.$refs["img"].classList.remove('hidden');
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