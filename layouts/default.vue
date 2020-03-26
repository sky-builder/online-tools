<template>
  <div class="app">
    <div class="app__header shadow shadow-yellow-500">
      <div class="app__header-inner text-center">
        <a href="/">🐝小蜜蜂工具网</a>
      </div>
    </div>
    <div class="app__body px-2 py-2">
      <nuxt />
      <tool-description :name="toolName" />
    </div>
    <div class="app__footer border-t border-gray-300">
      <div class="app__footer-inner text-center">
        <span>©小蜜蜂工具网 2020</span>
        <nuxt-link to="/contact" class="ml-2 hover:underline">留言</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import vue from "vue";
import ToolDescription from "@/components/ToolDescription";
import LazyImage from "@/components/LazyImage";
import FullScreenImage from "@/components/FullScreenImage";
import DragAndDropUploader from "@/components/DragAndDropUploader";
import DragAndDropList from "@/components/drag-and-drop-list";
vue.component("tool-description", ToolDescription);
vue.component("lazy-image", LazyImage);
vue.component("full-screen-image", FullScreenImage);
vue.component("drag-and-drop-uploader", DragAndDropUploader);
vue.component("drag-and-drop-list", DragAndDropList);
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'https://57890b15376e4f089fd781bde3482b4e@sentry.io/5175895',
  integrations: [new Integrations.Vue({vue, attachProps: true})],
});
const loadingDirective = {
  inserted: (el, binding) => {
    let isLoading = binding.value;
    let div = document.createElement("div");
    div.setAttribute("v-loading", true);
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.display = "none";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.background = "#fff";
    let span = document.createElement("span");
    span.innerHTML = "loading...";
    span.style.color = "#ecc94b";
    div.appendChild(span);
    el.appendChild(div);
    if (isLoading) {
      div.style.display = "flex";
    }
  },
  update: (el, binding) => {
    let isLoading = binding.value;
    let loadingEl = el.querySelector("[v-loading]");
    if (isLoading) {
      loadingEl.style.display = "flex";
    } else {
      loadingEl.style.display = "none";
    }
  }
};
const spinDirective = {
  inserted: (el, binding) => {
    let loading = binding.value;
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.display = "none";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.background = "#ecc94b";
    div.innerHTML = `
    <?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="translate(80,50)">
<g transform="rotate(0)">
<circle cx="0" cy="0" r="6" fill="#333333" fill-opacity="1" transform="scale(1.14246 1.14246)">
  <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s"></animate>
</circle>
</g>
</g><g transform="translate(71.21320343559643,71.21320343559643)">
<g transform="rotate(45)">
<circle cx="0" cy="0" r="6" fill="#333333" fill-opacity="0.875" transform="scale(1.20496 1.20496)">
  <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"></animate>
</circle>
</g>
</g><g transform="translate(50,80)">
<g transform="rotate(90)">
<circle cx="0" cy="0" r="6" fill="#333333" fill-opacity="0.75" transform="scale(1.26746 1.26746)">
  <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s"></animate>
</circle>
</g>
</g><g transform="translate(28.786796564403577,71.21320343559643)">
<g transform="rotate(135)">
<circle cx="0" cy="0" r="6" fill="#333333" fill-opacity="0.625" transform="scale(1.32996 1.32996)">
  <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
</circle>
</g>
</g><g transform="translate(20,50.00000000000001)">
<g transform="rotate(180)">
<circle cx="0" cy="0" r="6" fill="#333333" fill-opacity="0.5" transform="scale(1.39246 1.39246)">
  <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s"></animate>
</circle>
</g>
</g><g transform="translate(28.78679656440357,28.786796564403577)">
<g transform="rotate(225)">
<circle cx="0" cy="0" r="6" fill="#333333" fill-opacity="0.375" transform="scale(1.45496 1.45496)">
  <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"></animate>
</circle>
</g>
</g><g transform="translate(49.99999999999999,20)">
<g transform="rotate(270)">
<circle cx="0" cy="0" r="6" fill="#333333" fill-opacity="0.25" transform="scale(1.01746 1.01746)">
  <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s"></animate>
</circle>
</g>
</g><g transform="translate(71.21320343559643,28.78679656440357)">
<g transform="rotate(315)">
<circle cx="0" cy="0" r="6" fill="#333333" fill-opacity="0.125" transform="scale(1.07996 1.07996)">
  <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
</circle>
</g>
</g>
<!-- [ldio] generated by https://loading.io/ --></svg>
    `;
    div.setAttribute("v-spin", true);
    el.appendChild(div);
    if (loading) {
      div.style.display = "flex";
    }
  },
  update: (el, binding) => {
    let loading = binding.value;
    let div = el.querySelector("[v-spin]");
    if (loading) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  }
};
vue.directive("spin", spinDirective);
export default {
  computed: {
    toolName() {
      let route = this.$route;
      return route.fullPath.split("/").pop();
    }
  }
};
</script>
<style>
html {
  /* font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", "Microsoft Yahei", Arial, sans-serif; */
  font-size: 100%;
  line-height: 1.5;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.app__body {
  flex: 1;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.app__header,
.app__footer {
  flex-shrink: 0;
  flex-grow: 0;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.app__header-inner,
.app__footer-inner {
  @apply text-xs;
}
@media (min-width: 1280px) {
  .app__body {
    width: 1280px;
  }
  .app__header-inner,
  .app__footer-inner {
    width: 1280px;
    margin: 0 auto;
  }
}
</style>
