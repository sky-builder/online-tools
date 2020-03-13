<template>
  <div class="full-screen-image" :class="{'is-full': isFullScreen}">
    <img :src="src" class="mx-auto img-border" alt="" @click="toggleFullScreen">
  </div>
</template>

<script>
export default {
  props: {
    src: String
  },
  data() {
    return {
      isFullScreen: false,
    }
  },
  methods: {
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    }
  }
}
</script>

<style>
.full-screen-image img {
  cursor: zoom-in;
}
.full-screen-image.is-full {
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
.full-screen-image.is-full img {
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