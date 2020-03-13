<template>
  <div class="unsplash-daily-photo">
    <h1>unsplash每日图片</h1>
    <lazy-image src="https://source.unsplash.com/daily" :width="400" :height="600" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'unsplash每日图片',
    }
  },
};
</script>

<style>
.unsplash-daily-photo .lazy-img {
  height: 600px;
}
</style>