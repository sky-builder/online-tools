<template>
  <div>
    <section
      v-for="(tool, i) in toolList"
      :key="tool.title"
      class="shadow-md sm:shadow"
      :class="{'my-4 sm:my-2 lg:my-4': i > 0}"
    >
      <h1 class="opacity-75 py-4 bg-yellow-500 lg:bg-white lg:border-yellow-500 lg:border-l-8">&nbsp;&nbsp;{{tool.title}}</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 px-2 py-2">
        <template v-for="(item, index) in tool.list" >
          <a
            class="hover:underline py-2 opacity-75 hover:opacity-100 sm:border-0"
            :class="{'border-t border-gray-200 ': index > 0}"
            v-if="item.isLink"
            :key="item.name"
            :href="item.href"
            target="_blank"
          >{{ item.name }}</a>
          <nuxt-link
            :class="{'border-t border-gray-200': index > 0}"
            class="hover:underline py-2 opacity-75 hover:opacity-100 hover:text-yellow-700 sm:border-0"
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
  head() {
    return {
      title: '小蜜蜂工具网',
    }
  },
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
