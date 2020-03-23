<template>
  <div class="gif-maker">
    <h1>在线gif制作</h1>
    <drag-and-drop-list />
    <drag-and-drop-uploader @files="handleUpload" :multiple="true" />
    <div ref="img-container" class="img-container flex flex-row flex-wrap"></div>
    <div v-if="hasImg">
      <label for="js-height">高度</label>
      <input id="js-height" type="number" step="1" min="25" max="1000" v-model="height">
      <label for="js-width">宽度</label>
      <input id="js-width" type="number" step="1" min="25" max="1000" v-model="width">
      <label for="js-frame-duration">时间间隔(秒)</label>
      <input id="js-frame-duration" type="number" step="0.1" min="0.1" max="50" v-model="frameDuration">
    </div>
    <button v-if="hasImg" class="mt-2 relative" @click="doConvert" v-loading="isConverting" :disabled="isConverting">制作gif</button>
    <img ref="gif" class="hidden mt-2" />
    <button v-if="hasResult" class="mt-2" @click="doDownload">下载gif</button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '在线gif制作',
    }
  },
  head() {
    return {
      // https://github.com/yahoo/gifshot#quick-start
      script: [{ src: "/gifshot.min.js" }]
    };
  },
  data() {
    return {
      imgList: [],
      hasResult: false,
      hasImg: false,
      loading: false,
      isConverting: false,
      width: 200,
      height: 200,
      frameDuration: 0.1
    };
  },
  methods: {
    doDownload() {
      let a = document.createElement("a");
      a.setAttribute("download", new Date().toLocaleString() + ".gif");
      a.href = this.$refs["gif"].src;
      a.click();
    },
    doConvert(e) {
      this.isConverting = true;
      gifshot.createGIF(
        {
          images: this.imgList,
          gifWidth: this.width,
          gifHeight: this.height,
          frameDuration: this.frameDuration * 10
        },
        obj => {
          if (!obj.error) {
            let src = obj.image;
            let gif = this.$refs["gif"];
            gif.src = src;
            gif.classList.remove("hidden");
            this.hasResult = true;
          }
          this.isConverting = false;
        }
      );
    },
    handleUpload(_files) {
      if (!_files || !_files[0]) return;
      this.loading = true;
      this.imgList = [];
      let files = _files;
      files = Array.from(files);
      let pList = [];
      files.forEach(file => {
        let p = new Promise((resolve, reject) => {
          let fr = new FileReader();
          fr.onload = () => {
            let img = new Image();
            img.onload = () => {
              resolve(img);
            };
            img.src = fr.result;
          };
          fr.readAsDataURL(file);
        });
        pList.push(p);
      });
      Promise.all(pList).then(resp => {
        let c = this.$refs["img-container"];
        c.innerHTML = "";
        resp.forEach(img => {
          c.appendChild(img);
          this.imgList.push(img);
        });
        this.hasImg = true;
        this.loading = false;
      })
      .catch(() => {
        this.hasImg = false;
        this.loading = false;
      })
    }
  }
};
</script>

<style>
.gif-maker .img-container img {
  width: 150px;
  height: auto;
  display: flex;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>