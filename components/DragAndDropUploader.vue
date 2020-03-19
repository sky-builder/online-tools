<template>
  <div
    @dragenter="handleDragEnter"
    @dragover="handleDragEnter"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
    class="drop-area border-gray-300 sm:h-32 border-gray-500 border-dashed sm:border-4 rounded-lg flex flex-col items-center justify-center"
  >
    <span class="text-gray-500 hidden sm:inline">拖放图片</span>
    <span class="text-sm text-gray-300 text-center hidden sm:inline">or</span>
    <label for="js-input" class="button w-full text-center sm:w-auto" v-loading="loading">
      <span>选择图片</span>
      <input
        type="file"
        name="image"
        class="hidden"
        id="js-input"
        :disabled="loading"
        @input="handleInput"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('files', e.target.files);
    },
    handleDragEnter(e) {
      e.preventDefault();
      e.stopPropagation();
      e.target.classList.add("is-active");
    },
    handleDragLeave(e) {
      e.preventDefault();
      e.stopPropagation();
      e.target.classList.remove("is-active");
    },
    handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      e.target.classList.remove("is-active");
      let data = e.dataTransfer;
      let files = data.files;
      this.$emit('files', files);
    }
  }
};
</script>
<style>
.drop-area.is-active {
  @apply border-yellow-500;
}
</style>