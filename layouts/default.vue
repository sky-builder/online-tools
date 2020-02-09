<template>
  <div class="app">
    <div class="app__header shadow-md">
      <a href="/">小蜜蜂工具网</a>
    </div>
    <nuxt class="app__body  my-6" />
    <div class="app__footer border-t border-gray-200">©小蜜蜂工具网 2020</div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.app {
  display: flex;
  min-height: 100vh;  flex-direction: column;
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
 }

.app__header, .app__footer {
  height: 60px;
      flex-shrink: 0;
      flex-grow: 0;
  display: flex;
        justify-content: center;
  align-items: center;
}


</style>
