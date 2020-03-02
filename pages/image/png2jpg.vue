<template>
  <div>
    <input type="file" @input="handleInput" />
    <img ref="png" src class="hidden" />
    <button @click="doConvert">convert</button>
    <div v-if="isPngLoaded">
      <label for="js-input"></label>
      <input id="js-input" type="number" min="0" max="100" step="1" v-model="q" />
    </div>
    <img ref="jpg" src alt class="hidden" />
    <button v-if="isJpgLoaded" @click="doDownload">download</button>
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
</style>