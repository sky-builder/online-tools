<template>
  <div class="app">
    <div class="app__header shadow shadow-yellow-500">
      <div class="app__header-inner">
        <a class="hover:text-yellow-400" href="/">小蜜蜂工具网</a>
      </div>
    </div>
    <nuxt class="app__body" />
    <div class="app__footer">
      <div class="app__footer-inner">©小蜜蜂工具网 2020</div>
    </div>
  </div>
</template>
<script>
import vue from "vue";
const loadingDirective = {
  inserted: (el, binding) => {
    let isLoading = binding.value;
    if (isLoading) {
      let div = document.createElement("div");
      div.setAttribute('v-loading', true);
      div.style.position = "absolute";
      div.style.top = "0";
      div.style.left = "0";
      div.style.width = "100%";
      div.style.height = "100%";
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.justifyContent = "center";
      div.style.background = '#333';
      let span = document.createElement("span");
      span.innerHTML = "处理中，请稍等...";
      span.style.color = '#ecc94b';
      div.appendChild(span);
      el.appendChild(div);
    }
  },
  update: (el, binding) => {
    let isLoading = binding.value;
    let loadingEl = el.querySelector('[v-loading]')
    if (isLoading) {
      if (loadingEl) {
        loadingEl.style.display = 'flex';
      } else {
        let div = document.createElement("div");
        div.setAttribute('v-loading', true);
        div.style.position = "absolute";
        div.style.top = "0";
        div.style.left = "0";
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        let span = document.createElement("span");
        div.style.background = '#333';
        span.innerHTML = "处理中，请稍等...";
        span.style.color = '#ecc94b';
        div.appendChild(span);
        el.appendChild(div);
      }
    } else {
      if (loadingEl) {
        loadingEl.style.display = 'none';
      }
    }
  }
};
vue.directive("loading", loadingDirective);
export default {};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", "Microsoft Yahei", Arial, sans-serif;
  font-size: 100%;
  line-height: 1.5;
  background-color: #333;
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
}
@media (min-width: 1280px) {
  .app__body {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .app__header,
  .app__footer {
    height: 48px;
    flex-shrink: 0;
    flex-grow: 0;
  }
  .app__header {
    border-bottom: 1px solid rgba(236, 201, 75, 0.25);
  }
  .app__footer {
    border-top: 1px solid rgba(236, 201, 75, 0.25);
  }
  .app__header-inner,
  .app__footer-inner {
    line-height: 48px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @apply text-xs;
  }
}
</style>
