<template>
  <div class="png2jpg relative">
    <h1>在线png转jpg</h1>
    <label for="js-input" class="button" :disabled="loading" v-loading="loading">
      <span>点击上传png图片</span>
      <input type="file" id="js-input" class="hidden" @input="handleInput" />
    </label>
    <div class="flex flex-row mt-2">
      <div class="flex-1 flex flex-col invisible" ref="png">
        <img src class=" block img-border png w-full" />
        <p class="text-center italic">{{ pngFilename }}</p>
      </div>
      <div v-if="isPngLoaded" class="flex flex-col p-2 w-48">
        <div>
          <label for="js-input">jpg质量(quality)</label>
          <br />
          <input id="js-input" type="number" class="w-full" min="0" max="100" step="1" v-model="q" />
        </div>
        <button @click="doConvert" class="mt-2">转换</button>
      </div>
      <div class="flex-1 invisible" ref="jpg">
        <p>{{ jpgFilename }}</p>
        <img src alt class="img-border jpg w-full" />
      </div>
    </div>
    <div class="flex flex-row mt-2 ">
      <button class="ml-auto" v-if="isJpgLoaded" @click="doDownload">下载</button>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '在线png转jpg',
    }
  },
  data() {
    return {
      isPngLoaded: false,
      isJpgLoaded: false,
      q: 100,
      loading: false,
      jpgFilename: '',
      pngFilename: '',
    };
  },
  methods: {
    handleInput(e) {
      if (!e.target.files) return;
      this.loading = true;
      let file = e.target.files[0];
      let fr = new FileReader();
      fr.onload = () => {
        let div = this.$refs["png"];
        let img = div.querySelector('img')
        img.onload = () => {
          div.classList.remove("invisible");
          this.pngFilename = file.name;
          this.isPngLoaded = true;
          this.loading = false;
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    },
    doConvert() {
      let cv = document.createElement("canvas");
      let ct = cv.getContext("2d");
      let png = this.$refs["png"].querySelector('img')
      cv.width = png.naturalWidth;
      cv.height = png.naturalHeight;
      ct.drawImage(png, 0, 0);
      let src = cv.toDataURL("image/jpeg", this.q / 100);
      let jpg = this.$refs["jpg"];
      let img = jpg.querySelector('img')
      img.onload = () => {
        jpg.classList.remove("invisible");
        this.isJpgLoaded = true;
      };
      img.src = src;
    },
    doDownload() {
      let a = document.createElement("a");
      let name = new Date().toLocaleString() + ".jpg";
      let jpg = this.$refs["jpg"].querySelector('img');
      a.setAttribute("download", name);
      a.href = jpg.src;
      a.click();
    }
  }
};
</script>

<style>
</style>