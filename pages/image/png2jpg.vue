<template>
  <div class="png2jpg">
    <h1>在线png转jpg</h1>
    <label for="js-input">点击上传png图片</label>
    <br />
    <input type="file" id="js-input" @input="handleInput" />
    <img ref="png" src class="hidden block png" />
    <button class="mt-2" v-if="isPngLoaded" @click="doConvert">转换</button>
    <div v-if="isPngLoaded" class="mt-2">
      <label for="js-input">jpg质量(quality)</label>
      <br />
      <input id="js-input" type="number" min="0" max="100" step="1" v-model="q" />
    </div>
    <img ref="jpg" src alt class="hidden jpg mt-2" />
    <button class="mt-2" v-if="isJpgLoaded" @click="doDownload">下载</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPngLoaded: false,
      isJpgLoaded: false,
      q: 100
    };
  },
  methods: {
    handleInput(e) {
      if (!e.target.files) return;
      let file = e.target.files[0];
      let fr = new FileReader();
      fr.onload = () => {
        let img = this.$refs["png"];
        img.onload = () => {
          img.classList.remove("hidden");
          this.isPngLoaded = true;
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    },
    doConvert() {
      let cv = document.createElement("canvas");
      let ct = cv.getContext("2d");
      let png = this.$refs["png"];
      cv.width = png.naturalWidth;
      cv.height = png.naturalHeight;
      ct.drawImage(png, 0, 0);
      let src = cv.toDataURL("image/jpeg", this.q / 100);
      let jpg = this.$refs["jpg"];
      jpg.onload = () => {
        jpg.classList.remove("hidden");
        this.isJpgLoaded = true;
      };
      jpg.src = src;
    },
    doDownload() {
      let a = document.createElement("a");
      let name = new Date().toLocaleString() + ".jpg";
      let jpg = this.$refs["jpg"];
      a.setAttribute("download", name);
      a.href = jpg.src;
      a.click();
    }
  }
};
</script>

<style>
.png2jpg .png,
.png2jpg .jpg {
  height: 500px;
  width: auto;
  display: block;
}
</style>