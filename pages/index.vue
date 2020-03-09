<template>
  <div class="my-4">
    <section
      v-for="(tool, i) in toolList"
      :key="tool.title"
      class="py-2"
      :class="{'my-4': i > 0}"
    >
      <h1 class="opacity-75 border-l-8 border-yellow-500">&nbsp;&nbsp;{{tool.title}}</h1>
      <div class="grid grid-cols-5 gap-2">
        <template v-for="item in tool.list">
          <a
            class="hover:underline"
            v-if="item.isLink"
            :key="item.name"
            :href="item.href"
            target="_blank"
          >{{ item.name }}</a>
          <nuxt-link
            class="hover:underline"
            v-else
            :key="item.name"
            :to="item.href"
          >{{ item.name }}</nuxt-link>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import toolList from "@/assets/js/tool-list";
export default {
  data() {
    return {
      toolList: toolList
    };
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
