<template>
  <div class="home">
    <div class="home__search"></div>
    <section>
      <h1 class="text-5xl">在线格式化工具</h1>
      <div class="grid grid-cols-5 gap-5">
        <nuxt-link
          class="flex p-6 bg-white shadow-md hover:shadow-lg hover:underline"
          v-for="item in formatToolList"
          :key="item.name"
          :to="item.href"
        >
          <h4 class="text-xl truncate">{{ item.name }}</h4>
        </nuxt-link>
      </div>
    </section>
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
      <h1 class="text-5xl">在线加密/解密工具</h1>
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
    <section>
      <h1 class="text-5xl">生活工具</h1>
      <div class="grid grid-cols-5 gap-5">
        <nuxt-link
          class="flex p-6 bg-white shadow-md hover:shadow-lg hover:underline"
          v-for="item in lifeToolList"
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
      lifeToolList: [
        {
          name: '历史上的今天',
          href: '/life/history-today'
        },
        {
          name: 'unsplash 每日图片',
          href: '/life/unsplash-daily-photo'
        },
        {
          name: "bing每日图片",
          href: '/life/bing-daily-photo'
        }
      ],
      formatToolList: [
        {
          name: "CSS格式化",
          href: "/formatter/css"
        },
        {
          name: "HTML格式化",
          href: '/formatter/html'
        },
        {
          name: "JavaScript格式化",
          href: '/formatter/js'
        },
        {
          name: 'JavaScript压缩',
          href: '/formatter/minify-js'
        },
        {
          name: 'JSON美化',
          href: '/formatter/json'
        }
      ],
      textToolList: [
        {
          name: "字数统计",
          href: "/text/word-counter",
          icon: ""
        },
        {
          name: "在线lorem ipsum生成",
          href: "/text/lorem-ipsum-generator",
          icon: ""
        }
      ],
      imageToolList: [
        {
          name: "在线水印制作",
          href: "https:/www.ishuiyin.net"
        },
        {
          name: "在线查看图片EXIF信息",
          href: "/image/exif-viewer"
        },
        {
          name: '图片转base64',
          href: '/image/image2base64'
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
        },
        {
          name: '功率单位转换',
          href: '/converter/power-converter'
        },
        {
          name: "压力单位转换",
          href: '/converter/pressure-converter'
        },
        {
          name: '温度单位转换',
          href: '/converter/temprature-converter'
        },
        {
          name: "面积单位转换",
          href: '/converter/square-converter'
        },
        {
          name: "体积单位转换",
          href: "/converter/capacity-converter"
        },
        {
          name: "速度单位转换",
          href: '/converter/speed-converter'
        },
        {
          name: "长度转换单位",
          href: '/converter/length-converterd'
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
        },
        {
          name: "HMAC-MD5 加密",
          href: "/hash/hmac-md5",
          icon: ""
        },
        {
          name: "HMAC-SHA1 加密",
          href: "/hash/hmac-sha1",
          icon: ""
        },
        {
          name: "HMAC-SHA256 加密",
          href: "/hash/hmac-sha256",
          icon: ""
        },
        {
          name: "HMAC-SHA512 加密",
          href: "/hash/hmac-sha512",
          icon: ""
        },
        {
          name: "AES 加密/解密",
          href: "/hash/aes",
          icon: ""
        },
        {
          name: "DES 加密/解密",
          href: "/hash/des",
          icon: ""
        },
        {
          name: "3DES(Triple DES)加密/解密",
          href: "/hash/triple-des",
          icon: ""
        },
        {
          name: "Rabbit 加密/解密",
          href: "/hash/rabbit",
          icon: ""
        },
        {
          name: "RC4 加密/解密",
          href: "/hash/rc4",
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
