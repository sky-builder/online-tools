<template>
  <div class="lazy-img" :class="{'is-full': isFullScreen}">
    <img ref="img" class="img-border h-full mx-auto" :src="placeholderSrc(width, height)" @click="toggleFullScreen">
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
}
.lazy-img.is-full {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  animation: fade 0.25s;
  width: 100%;
  height: 100% !important;
  cursor: zoom-out;
}
.lazy-img.is-full img {
  height: 100%;
  border: none;
  padding: 0;
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