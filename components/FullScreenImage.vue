<template>
  <div>
    <img ref="img" :draggable="draggable" :src="imgSrc" class="mx-auto img-border" alt @click="toggleFullScreen" />
    <div class="full-screen-image" :class="{'is-full': isFullScreen}">
      <img
        ref="fit-width-img"
        :src="src"
        class="hidden w-full h-auto fit-width"
        alt
        @click="toggleFullScreen"
      />
      <img
        ref="fit-height-img"
        :src="src"
        class="hidden h-full w-auto fit-height"
        alt
        @click="toggleFullScreen"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    draggable: Boolean,
    placeHolderWidth: Number,
    placeHolderHeight: Number
  },
  computed: {
    imgSrc() {
      return this.loadedSrc ? this.loadedSrc : this.placeholderSrc();
    }
  },
  watch: {
    src: {
      handler: function(val) {
        if (process.server) return;
        if (/^https?/.test(val)) {
          let img = new Image();
          img.onload = () => {
            this.loadedSrc = val;
          }
          img.src = val;
        } else if (val) {
          this.loadedSrc = val;
        }
      },
      immediate: true,
    }
  },
  data() {
    return {
      isFullScreen: false,
      loadedSrc: ''
    };
  },
  methods: {
    placeholderSrc() {
      return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.placeHolderWidth || 600} ${this.placeHolderHeight || 200}"%3E%3C/svg%3E`
    },
    toggleFullScreen() {
      if (!this.isFullScreen) {
        let body = document.body;
        let bodyWidth = body.clientWidth;
        let bodyHeight = body.clientHeight;
        let img = this.$refs["img"];
        let nw = img.naturalWidth;
        let nh = img.naturalHeight;
        let s1, s2;
        s1 = nw / bodyWidth;
        s2 = nh / bodyHeight;
        let fsImg;
        let isFitWidth = ((s1 > 1 || s2 > 1) && s1 > s2) || (s1 <= 1 && s2 <= 1 && s1 > s2);
        if (isFitWidth) {
          fsImg = this.$refs["fit-width-img"];
        } else {
          fsImg = this.$refs["fit-height-img"];
        }
        fsImg.classList.remove("hidden");
        this.isFullScreen = true;
      } else {
        let fitWidthImg = this.$refs["fit-width-img"];
        let fitHeightImg = this.$refs["fit-height-img"];
        fitWidthImg.classList.add("hidden");
        fitHeightImg.classList.add("hidden");
        this.isFullScreen = false;
      }
    }
  }
};
</script>

<style>
.full-screen-image img {
  cursor: zoom-in;
}
.full-screen-image.is-full {
  background-color: #333;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: fade-in 0.25s;
  cursor: zoom-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.full-screen-image.is-full .fit-width {
  width: 100% !important;
  height: auto !important;
}
.full-screen-image.is-full .fit-height {
  height: 100% !important;
  width: auto !important;
}
.full-screen-image.is-full .fit-width-img,
.fit-height-img {
  padding: 0;
  border: none;
  cursor: zoom-out;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>