<template>
  <div class="my-2 mx-2">
    <h1>Bing每日图片</h1>
    <full-screen-image :src="imgLink" />
    <!-- <img
      ref="img"
      :src="placeholderSrc(1920, 1080)"
      class="mx-auto img-border cursor-pointer shadow-lg bing-daily-photo"
      alt="bing daily photo"
      @click="toggleFullScreen"
    />
    <p class="text-center">{{ copyright }}</p>
    <div v-show="isFullScreen" @click="toggleFullScreen" :style="imgContainerStyle" class="fixed bg-cover left-0 top-0 bg-no-repeat w-full h-full">
    </div> -->
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
      copyright: '',
      imgLink: '',
    };
  },
  computed: {
    imgContainerStyle() {
      return {
        backgroundImage: `url(${this.imgLink})`,
        cursor: 'zoom-out'
      }
    },
  },
  mounted() {
    let that = this;
    async function fetchPhoto() {
      // For local dev
      // const imageUrl = 'http://www.bing.com/th?id=OHR.NewYearFuji_ROW7249160512_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp';
      const baseUrl = "http://www.bing.com";
      const result = await axios.get("https://api.magisk.tech/bing-daily-photo", {
        withCredentials: true
      });
      const data = result.data;
      const imageUrl = baseUrl + data.images[0].url;
      let img = new Image();
      img.onload = () => {
        that.copyright = data.images[0].copyright;
        that.imgLink = imageUrl;
      }
      img.src = imageUrl;
    }
    fetchPhoto();
  },
  methods: {
    placeholderSrc(width, height) {
      return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`
    },
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    }
  }
};
</script>

<style>
.bing-daily-photo {
  cursor: zoom-in;
}
</style>