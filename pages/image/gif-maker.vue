<template>
  <div class="gif-maker">
    <h1>在线gif制作</h1>
    <label for="js-input" class="button" :disabled="loading" v-loading="loading">
      <span>点击上传多张用于制作gif的图片</span>
      <input type="file" id="js-input" class="hidden" multiple @input="handleUpload" />
    </label>
    <br />
    <div ref="img-container" class="img-container flex flex-row flex-wrap"></div>
    <button v-if="hasImg" class="mt-2 relative" @click="doConvert">制作gif</button>
    <img ref="gif" class="hidden mt-2" />
    <button v-if="hasResult" class="mt-2" @click="doDownload">下载gif</button>
  </div>
</template>

<script>
export default {
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
      gifshot.createGIF(
        {
          images: this.imgList
        },
        obj => {
          if (!obj.error) {
            let src = obj.image;
            let gif = this.$refs["gif"];
            gif.src = src;
            gif.classList.remove("hidden");
            this.hasResult = true;
          }
        }
      );
    },
    handleUpload(e) {
      if (!e.target.files) return;
      this.loading = true;
      this.imgList = [];
      let files = e.target.files;
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