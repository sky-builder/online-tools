<template>
  <div>
    <h1>在线传图识色</h1>
    <label for="js-input" class="button" v-loading="loading" :disabled="loading">
      点击上传图片
      <input type="file" id="js-input" class="hidden" @input="handleInput" />
    </label>
    <div class="text-center">
      <img src alt ref="img" class="hidden mx-auto my-2" style="height: 500px" />
      <div class="inline-block mr-2 flex-col " v-for="c in colorList" :key="c">
        <div :style="{'background-color': c}" class="w-full h-12 rounded"></div>
        <div class="font-mono">{{ c }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "传图识色"
    };
  },
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