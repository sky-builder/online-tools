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
