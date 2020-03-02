<template>
  <div>
    <input type="file" multiple class="border-gray" @input="handleUpload" />
    <div ref="img-container"></div>
    <button @click="doConvert">make gif</button>
    <img ref="gif" class="hidden" />
    <button @click="doDownload">download gif</button>
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
      imgList: []
    };
  },
  methods: {
    doDownload() {
      let a = document.createElement('a');
      a.setAttribute('download', new Date().toLocaleString() + ".gif");
      a.href = this.$refs['gif'].src;
      a.click();
    },
    doConvert(e) {
      gifshot.createGIF(
        {
          images: this.imgList,
        },
        (obj) => {
          if (!obj.error) {
            let src = obj.image;
            let gif = this.$refs['gif'];
            gif.src = src;
            gif.classList.remove('hidden');
          }
        }
      );
    },
    handleUpload(e) {
      if (!e.target.files) return;
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
        resp.forEach(img => {
          c.appendChild(img);
          this.imgList.push(img);
        });
      });
    }
  }
};
</script>

<style>
</style>