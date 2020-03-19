<template>
  <div class="lazy-img" :class="{'is-full': isFullScreen}">
    <img ref="img" class="img-border w-full h-auto sm:w-auto" :src="placeholderSrc(width, height)" @click="toggleFullScreen">
  </div>
</template>

<script>
export default {
  props: {
    boxHeight: Number,
    width: Number,
    height: Number,
    src: String
  },
  data() {
    return {
      isFullScreen: false,
    }
  },
  mounted() {
    let img = new Image();
    img.onload = () => {
      this.$refs['img'].src = this.src;
    }
    img.src = this.src;
  },
  methods: {
    placeholderSrc(width, height) {
      return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`
    },
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    }
  }
}
</script>

<style>
.lazy-img img {
  cursor: zoom-in;
  margin: 0 auto;
  height: 600px;
}
.lazy-img.is-full {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  animation: fade 0.25s;
  margin: 0;
  padding: 0;
  /* in case parent elemnet override the height */
  height: auto !important;
}
.lazy-img.is-full img {
  height: 100%;
  padding: 0;
  margin: 0 auto;
  border: none;
  cursor: zoom-out;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>