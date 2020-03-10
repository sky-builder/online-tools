<template>
  <div>
    <h1>unsplash 每日图片</h1>
    <img
      class="img-border"
      :style="imgStyle"
      @click="toggleFullScreen"
      src="https://source.unsplash.com/daily"
      alt
      ref="img"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Unsplash每日图片',
    }
  },
  computed: {
    imgStyle() {
      if (!this.isFullScreen) return;
      return {
        position: "fixed",
        left: "50%",
        top: 0,
        border: "none",
        padding: "none",
        height: "100%",
        transform: "translateX(-50%)"
      };
    }
  },
  data() {
    return {
      isFullScreen: false
    };
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