<template>
  <div class="home">
    <div class="home__search"></div>
    <section>
      <h1 class="text-5xl">在线格式化工具</h1>
      <div class="grid grid-cols-5 gap-5">
        <nuxt-link
          class="flex p-6 bg-white shadow-md hover:shadow-lg"
          v-for="item in formatToolList"
          :key="item.name"
          :to="item.href"
        >
          <img class="w-12 h-12 flex-none" src="~/assets/icons/css.svg" alt />
          <h4 class="text-xl truncate">{{ item.name }}</h4>
        </nuxt-link>
      </div>
    </section>
    <section>
      <h1 class="text-5xl">在线图片处理工具</h1>
      <div class="grid grid-cols-5 gap-5">
        <a
          class="flex p-6 bg-white shadow-md hover:shadow-lg"
          v-for="item in imageToolList"
          :key="item.name"
          :href="item.href"
          target="_blank"
        >
          <img class="w-12 h-12 flex-none" src="~/assets/icons/image.png" alt />
          <h4 class="text-xl truncate">{{ item.name }}</h4>
        </a>
      </div>
    </section>
    <section>
      <h1 class="text-5xl">在线加密/解密工具</h1>
      <div class="grid grid-cols-5 gap-5">
        <a
          class="flex p-6 bg-white shadow-md hover:shadow-lg"
          v-for="item in hashToolList"
          :key="item.name"
          :href="item.href"
        >
          <!-- <img class="w-12 h-12 flex-none" src="~/assets/icons/image.png" alt /> -->
          <h4 class="text-xl truncate">{{ item.name }}</h4>
        </a>
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
      ],
      imageToolList: [
        {
          name: "在线水印制作",
          href: "https:/www.ishuiyin.net"
        }
      ],
      hashToolList: [
        {
          name: 'MD5加密',
          href: "/hash/md5",
          icon: ''
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
