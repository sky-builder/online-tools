<template>
  <div>
    <h1>🌈在线传图识色</h1>
    <drag-and-drop-uploader class="mt-4" @files="handleInput" />
    <div class="text-center">
      <img src alt ref="img" class="hidden mx-auto my-2 img-border sm:h-64" />
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
    handleInput(files) {
      if (!files || !files[0]) return;
      this.loading = true;
      let file = files[0];
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