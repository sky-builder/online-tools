<template>
  <div>
    <h1>在线传图识色</h1>
    <label for="js-input" class="button" v-loading="loading" :disabled="loading">
      点击上传图片
      <input type="file" id="js-input" class="hidden" @input="handleInput" />
    </label>
    <img src alt ref="img" class="hidden h-64" />
    <div
      class="inline-block px-2 py-2"
      v-for="c in colorList"
      :key="c"
      :style="{'background-color': c}"
    >{{ c }}</div>
  </div>
</template>

<script>
export default {
  name: "getImagePalette",
  head() {
    return {
      script: [{ src: "/vibrant.min.js" }]
    };
  },
  data() {
    return {
      colorList: [],
      loading: false
    };
  },
  mounted() {},
  methods: {
    handleInput(e) {
      if (!e.target.files[0]) return;
      this.loading = true;
      let file = e.target.files[0];
      let fr = new FileReader();
      fr.onload = () => {
        let src = fr.result;
        let img = this.$refs["img"];
        img.onload = () => {
          Vibrant.from(img)
            .getPalette()
            .then(result => {
              if (!result) return;
              this.colorList = [];
              let keys = Object.keys(result);
              for (let key of keys) {
                let obj = result[key];
                this.colorList.push(obj.hex);
              }
              this.loading = false;
            });
        };
        img.src = src;
        img.classList.remove("hidden");
      };
      fr.readAsDataURL(file);
    }
  }
};
</script>

<style>
</style>