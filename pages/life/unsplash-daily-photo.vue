<template>
  <div>
    <h1>unsplash每日图片</h1>
    <div ref="img-container" class="unsplash-img">
      <img
        class="mx-auto h-full"
        :class="{'img-border': !isFullScreen}"
        :src="placeholderSrc(400, 600)"
        alt="unsplash daily photo"
        ref="img"
        @click="toggleFullScreen"
      />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'unsplash每日图片',
    }
  },
  data() {
    return {
      isFullScreen: false,
    }
  },
  mounted() {
    let img = new Image();
    img.onload = () => {
      this.$refs['img'].src = 'https://source.unsplash.com/daily'
    }
    img.src = 'https://source.unsplash.com/daily'
  },
  methods: {
    placeholderSrc(width, height) {
      return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`
    },
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
      let img = this.$refs['img-container']
      if (this.isFullScreen) {
        img.classList.add('is-full')
      } else {
        img.classList.remove('is-full')
      }
    }
  }
};
</script>

<style>
.unsplash-img {
  height: 600px;
}
.unsplash-img img {
  cursor: zoom-in;
}
.unsplash-img.is-full {
  border: none;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: fade 0.25s;
  width: 100%;
  height: 100%;
  background: #333;
  cursor: zoom-out;
}
.unsplash-img.is-full img {
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