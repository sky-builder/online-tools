<template>
  <div>
    <h1>unsplash每日图片</h1>
    <img
      class="img-border w-full"
      src="https://source.unsplash.com/daily"
      alt
      ref="img"
    />
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