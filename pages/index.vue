<template>
  <div class="home">
    <div class="home__search"></div>
    <!-- <section>
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
    </section>-->
    <section>
      <h1 class="text-5xl">在线图片处理工具</h1>
      <div class="grid grid-cols-5 gap-5">
        <a
          class="flex p-6 bg-white shadow-md hover:shadow-lg hover:underline"
          v-for="item in imageToolList"
          :key="item.name"
          :href="item.href"
          target="_blank"
        >
          <h4 class="text-xl truncate">{{ item.name }}</h4>
        </a>
      </div>
    </section>
    <section>
      <h1 class="text-5xl">在线加密工具</h1>
      <div class="grid grid-cols-5 gap-5">
        <nuxt-link
          class="flex p-6 bg-white shadow-md hover:shadow-lg hover:underline"
          v-for="item in hashToolList"
          :key="item.name"
          :to="item.href"
        >
          <!-- <img class="w-12 h-12 flex-none" src="~/assets/icons/image.png" alt /> -->
          <h4 class="text-xl truncate">{{ item.name }}</h4>
        </nuxt-link>
      </div>
    </section>
    <section>
      <h1 class="text-5xl">在线编码/解码工具</h1>
      <div class="grid grid-cols-5 gap-5">
        <nuxt-link
          class="flex p-6 bg-white shadow-md hover:shadow-lg hover:underline"
          v-for="item in convertToolList"
          :key="item.name"
          :to="item.href"
        >
          <!-- <img class="w-12 h-12 flex-none" src="~/assets/icons/image.png" alt /> -->
          <h4 class="text-xl truncate">{{ item.name }}</h4>
        </nuxt-link>
      </div>
    </section>
      <section>
      <h1 class="text-5xl">在线文本工具</h1>
      <div class="grid grid-cols-5 gap-5">
        <nuxt-link
          class="flex p-6 bg-white shadow-md hover:shadow-lg hover:underline"
          v-for="item in textToolList"
          :key="item.name"
          :to="item.href"
        >
          <!-- <img class="w-12 h-12 flex-none" src="~/assets/icons/image.png" alt /> -->
          <h4 class="text-xl truncate">{{ item.name }}</h4>
        </nuxt-link>
      </div>
    </section>
    </section>
      <section>
      <h1 class="text-5xl">在线网络工具</h1>
      <div class="grid grid-cols-5 gap-5">
        <nuxt-link
          class="flex p-6 bg-white shadow-md hover:shadow-lg hover:underline"
          v-for="item in networkToolList"
          :key="item.name"
          :to="item.href"
        >
          <!-- <img class="w-12 h-12 flex-none" src="~/assets/icons/image.png" alt /> -->
          <h4 class="text-xl truncate">{{ item.name }}</h4>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      networkToolList: [
        {
          name: "在线网站源码查看",
          href: "/network/source-code-viewer"
        }
      ],
      formatToolList: [
        {
          name: "CSS格式化",
          href: "/formatter/css"
        }
      ],
      textToolList: [
        {
          name: "字数统计",
          href: "/text/word-counter",
          icon: ""
        }
      ],
      imageToolList: [
        {
          name: "在线水印制作",
          href: "https:/www.ishuiyin.net"
        },
        {
          name: '在线查看图片EXIF信息',
          href: '/image/exif-viewer'
        }
      ],
      convertToolList: [
        {
          name: "Base64 编码/解码",
          href: "/hash/base64",
          icon: ""
        },
        {
          name: "URI 编码/解码",
          href: "/hash/uri",
          icon: ""
        },
        {
          name: "进制转换",
          href: "/hash/base",
          icon: ""
        },
        {
          name: "unix时间戳转换",
          href: "/converter/unix-time-stamp",
          icon: ""
        }
      ],
      hashToolList: [
        {
          name: "MD5 加密",
          href: "/hash/md5",
          icon: ""
        },
        {
          name: "SHA-1 加密",
          href: "/hash/sha1",
          icon: ""
        },
        {
          name: "SHA-256 加密",
          href: "/hash/sha256",
          icon: ""
        },
        {
          name: "SHA-512 加密",
          href: "/hash/sha512",
          icon: ""
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
