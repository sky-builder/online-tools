<template>
  <div class="my-2 mx-2">
    <h1>Bing每日图片</h1>
    <p>{{ copyright }}</p>
    <img
      ref="img"
      src
      class="mx-auto img-border cursor-pointer hidden"
      alt="bing daily photo"
      @click="toggleFullScreen"
    />
    <div v-show="isFullScreen" @click="toggleFullScreen" :style="imgContainerStyle" class="fixed bg-cover left-0 top-0 bg-no-repeat w-full h-full">
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  head() {
    return {
      title: 'Bing每日图片',
    }
  },
  data() {
    return {
      isFullScreen: false,
      copyright: '加载中，请稍等',
      imgLink: '',
    };
  },
  computed: {
    imgContainerStyle() {
      return {
        backgroundImage: `url(${this.imgLink})`,
      }
    },
  },
  mounted() {
    let that = this;
    async function fetchPhoto() {
      // For local dev
      // const imageUrl = 'http://www.bing.com/th?id=OHR.NewYearFuji_ROW7249160512_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp';
      const baseUrl = "http://www.bing.com";
      const result = await axios.get("http://api.magisk.tech/bing-daily-photo");
      const data = result.data;
      const imageUrl = baseUrl + data.images[0].url;
      let img = new Image();
      img.onload = () => {
        that.copyright = data.images[0].copyright;
        that.$refs["img"].src = imageUrl;
        that.imgLink = imageUrl;
        that.$refs["img"].style.display = "block";
      }
      img.src = imageUrl;
    }
    fetchPhoto();
  },
  methods: {
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    }
  }
};
</script>

<style>
</style>