<template>
  <div class="unsplash-daily-photo">
    <h1>☀unsplash每日图片</h1>
    <!-- <lazy-image class="mt-4" src="https://source.unsplash.com/daily" :width="400" :height="600" /> -->
    <full-screen-image src="https://source.unsplash.com/daily" />
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
</style>