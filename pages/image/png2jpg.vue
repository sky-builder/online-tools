<template>
  <div class="png2jpg">
    <h1>🎭在线png转jpg</h1>
    <drag-and-drop-uploader class="mt-2" @files="handleInput" />
    <div class="flex flex-col mt-2">
      <div class="flex-1 flex flex-col invisible" ref="png">
        <full-screen-image :src="pngSrc" />
        <p class="text-center italic">{{ pngFilename }}</p>
      </div>
      <div v-if="isPngLoaded" class="flex flex-col p-2">
        <div>
          <label for="js-input">jpg质量(quality)</label>
          <br />
          <input id="js-input" type="number" class="w-full" min="0" max="100" step="1" v-model="q" />
        </div>
        <button @click="doConvert" class="mt-2">转换</button>
      </div>
      <div class="flex-1 invisible" ref="jpg">
        <full-screen-image :src="jpgSrc" />
      </div>
    </div>
    <div class="flex flex-row mt-2 ">
      <button class="w-full" v-if="isJpgLoaded" @click="doDownload">下载</button>
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
      pngSrc: '',
      jprSrc: ''
    };
  },
  methods: {
    handleInput(files) {
      if (!files || !files[0]) return;
      this.loading = true;
      let file = files[0];
      let fr = new FileReader();
      fr.onload = () => {
        let div = this.$refs["png"];
        this.pngSrc = fr.result;
        div.classList.remove("invisible");
        this.pngFilename = file.name;
        this.isPngLoaded = true;
        this.loading = false;
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
      this.jpgSrc = src;
      jpg.classList.remove("invisible");
      this.isJpgLoaded = true;
    },
    doDownload() {
      let a = document.createElement("a");
      let name = new Date().toLocaleString() + ".jpg";
      let jpg = this.$refs["jpg"].querySelector('img');
      if (this.pngFilename && this.pngFilename.indexOf('.') !== -1) {
        let nameWithoutSuffix = this.pngFilename.split('.').shift();
        name = nameWithoutSuffix + '.jpg';
      }
      a.setAttribute("download", name);
      a.href = jpg.src;
      a.click();
    }
  }
};
</script>

<style>
</style>