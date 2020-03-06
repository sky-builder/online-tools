<template>
  <div>
    <h1>在线下载instagram图片</h1>
    <input
      class="w-full"
      type="text"
      v-model="link"
      placeholder="请输入instagram的图片地址，例子：https://www.instagram.com/p/B6LSmz7p1fP/"
    />
    <button class="mt-2 relative" @click="doDownload" :disabled="loading" v-spin="loading">下载</button>
  </div>
</template>

<script>
import axios from "axios";
import imageType from "image-type";
export default {
  data() {
    return {
      link: "",
      loading: false
    };
  },
  methods: {
    doDownload() {
      this.loading = true;
      axios
        .get("http://api.magisk.tech/download-ig-image?url=" + this.link, {
          responseType: "arraybuffer"
        })
        .then(res => {
          let type = imageType(new Uint8Array(res.data));
          let blob = new Blob([res.data], {
            type: "image/jpeg"
          });
          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function() {
            var base64data = reader.result;
            let a = document.createElement("a");
            a.href = base64data;
            a.download = new Date().getTime() + "." + type.ext;
            a.click();
          };
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style>
</style>