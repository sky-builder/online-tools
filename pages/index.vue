<template>
  <div class="home">
    <div class="home__search"></div>
    <section>
      <h1 class="text-5xl">格式化工具 - test ci</h1>
      <div class="grid grid-cols-5 gap-5">
        <nuxt-link
          class="flex p-6 bg-white shadow-md hover:shadow-lg"
          v-for="item in formatToolList"
          :key="item.name"
          :to="item.href"
        >
          <img class="w-12 h-12 flex-none" src="~/assets/icons/css.svg" alt />
          <h4 class="text-xl truncate" >{{ item.name }}</h4>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formatToolList: [
        {
          name: "CSS格式化",
          href: "/formatter/css"
        }
      ]
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
