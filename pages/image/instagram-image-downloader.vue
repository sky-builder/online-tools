<template>
  <div>
    <input class="border-gray w-full" type="text" v-model="link" />
    <button @click="doDownload">download</button>
  </div>
</template>

<script>
import axios from 'axios';
import imageType from 'image-type';
export default {
  data() {
    return {
      link: '',
    }
  },
  methods: {
    doDownload() {
      axios
        .get("http://api.magisk.tech/download-ig-image?url=" + this.link, {
          responseType: "arraybuffer"
        })
        .then(res => {
          let type = imageType(new Uint8Array(res.data));
          console.log(res);
          let blob = new Blob([res.data], {
            type: "image/jpeg"
          });
          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function() {
            var base64data = reader.result;
            console.log(base64data);
            let a = document.createElement("a");
            a.href = base64data;
            a.download = new Date().getTime() + "." + type.ext;
            a.click();
          };
        });
    }
  }
};
</script>

<style>
</style>