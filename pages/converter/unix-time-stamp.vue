<template>
  <div>
    <h1>在线unix时间戳转换</h1>
    <div>
      <span>当前时间：</span>
      <span>{{ currentTime }}</span>
    </div>
    <div class="mt-2">
      <span>当前unix时间戳(ms)：</span>
      <span>{{ currentTimeStamp }}</span>
    </div>
    <table class="mt-2">
      <tbody>
        <tr>
          <td class="p-2">
            <label for="js-input-unix">unix时间戳(ms)</label>
          </td>
          <td class="p-2">
            <input type="tet" v-model="unixInput" class="border" />
          </td>
          <td class="p-2">
            <button @click="unix2time">转换</button>
          </td>
          <td class="p-2">
            <span>时间</span>
          </td>
          <td class="p-2">
            <span>{{ unixOutput }}</span>
          </td>
        </tr>
        <tr>
          <td class="p-2">
            <label for="js-time-input">时间(例如: 2020-01-01 12:00:00)</label>
          </td>
          <td class="p-2">
            <input type="text" v-model="timeInput" class="border" />
          </td>
          <td class="p-2">
            <button @click="time2unix">转换</button>
          </td>
          <td class="p-2">
            <span>unix时间戳(ms)</span>
          </td>
          <td class="p-2">
            <span>{{ timeOutput }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="my-4">FAQ</h2>
    <h3 class="my-2">什么是unix时间戳</h3>
    <p>UNIX时间，或称POSIX时间是UNIX或类UNIX系统使用的时间表示方式：从UTC1970年1月1日0时0分0秒起至现在的总秒数，不考虑闰秒。 在多数Unix系统上Unix时间可以透过date +%s指令来检查。</p>
    <h3 class="my-2">2038年问题</h3>
    <p>
      现时大部分使用UNIX的系统都是32位的，即它们会以32位有符号整数表示时间类型time_t。因此它可以表示136年的秒数。表示协调世界时间1901年12月13星期五20时45分52秒至2038年1月19日3时14分07秒（二进制：01111111 11111111 11111111 11111111，0x7FFF:FFFF），在下一秒二进制数字会是10000000 00000000 00000000 00000000（0x8000:0000），这是负数，因此各系统会把时间误解作1901年12月13日20时45分52秒（亦有可能回归到1970年）。这时可能会令软件发生问题，导致系统瘫痪。
      当前的解决方案是把系统由32位转为64位系统。在64位系统下，此时间最多可以表示到292,277,026,596年12月4日15时30分08秒。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: "",
      currentTimeStamp: "",
      unixInput: "",
      unixOutput: "",
      timeInput: "",
      timeOutput: "",
      timer: null
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    tick() {
      let now = new Date();
      this.currentTime = now.toLocaleString();
      this.currentTimeStamp = now.getTime();
    },
    unix2time() {
      let input = this.unixInput;
      let output = new Date(+input).toLocaleString();
      this.unixOutput = output;
    },
    time2unix() {
      let input = this.timeInput;
      let output = new Date(input).getTime();
      this.timeOutput = output;
    }
  }
};
</script>

<style>
</style>