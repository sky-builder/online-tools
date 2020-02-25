<template>
  <div class="my-2 mx-2">
    <img ref='img' src="" style="hidden" class="mx-auto" alt />
  </div>
</template>

<script>
import axios from 'axios';
export default {
  created() {
    let that = this;
    async function fetchPhoto() {
      // For local dev
      // const imageUrl = 'http://www.bing.com/th?id=OHR.NewYearFuji_ROW7249160512_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp';

      const baseUrl = "http://www.bing.com";
      const result = await axios.get("http://api.magisk.tech/bing-daily-photo");
      const data = result.data;
      const imageUrl = baseUrl + data.images[0].url;
      that.$refs['img'].src = imageUrl;
      that.$refs['img'].style.display = 'block';
    }
    fetchPhoto();
  }
};
</script>

<style>
</style>