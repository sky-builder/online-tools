<template>
  <div>
    <h1>⌚在线unix时间戳转换</h1>
    <table class="mt-4 w-full">
      <tbody>
        <tr>
          <td>当前北京时间</td>
          <td>{{ currentTime }}</td>
        </tr>
        <tr>
          <td>当前unix时间戳(ms)</td>
          <td>{{ currentTimeStamp }}</td>
        </tr>
      </tbody>
    </table>
    <div class="sm:hidden mt-4">
      <div class="border py-4 px-2">
        <h2>unix时间戳(ms)转北京时间</h2>
        <input type="text" v-model="unixInput" class="border block w-full mt-2" placeholder="请在此输入UNIX时间戳" />
        <button class="mt-2 w-full" @click="unix2time">转换</button>
        <div class="mt-2">北京时间：{{ unixOutput }}</div>
      </div>
      <div class="mt-4 border py-4 px-2">
        <h2>北京时间转unix时间戳(ms)</h2>
        <input type="text" v-model="timeInput" class="border block w-full mt-2" placeholder="请在此输入北京时间：2020-03-19 20:12:16
" />
        <button class="mt-2 w-full" @click="time2unix">转换</button>
        <div class="mt-2">unix时间戳(ms)：{{ timeOutput }}</div>
      </div>
    </div>
    <table class="mt-2 hidden sm:block">
      <tbody>
        <tr>
          <td class="p-2 border border-gray-300">
            <label for="js-input-unix">unix时间戳(ms)</label>
          </td>
          <td class="p-2 border border-gray-300">
            <input type="tet" v-model="unixInput" class="border" />
          </td>
          <td class="p-2 border border-gray-300">
            <button @click="unix2time">转换</button>
          </td>
          <td class="p-2 border border-gray-300">
            <span>北京时间</span>
          </td>
          <td class="p-2 border border-gray-300">
            <span>{{ unixOutput }}</span>
          </td>
        </tr>
        <tr>
          <td class="p-2 border border-gray-300">
            <label for="js-time-input">北京时间</label>
          </td>
          <td class="p-2 border border-gray-300">
            <input type="text" v-model="timeInput" class="border" placeholder="2020-01-01 12:00:00" />
          </td>
          <td class="p-2 border border-gray-300">
            <button @click="time2unix">转换</button>
          </td>
          <td class="p-2 border border-gray-300">
            <span>unix时间戳(ms)</span>
          </td>
          <td class="p-2 border border-gray-300">
            <span>{{ timeOutput }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import dayjs from 'dayjs';
export default {
  head() {
    return {
      title: 'unix时间戳转换',
    }
  },
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
      this.currentTime = dayjs(now).format('YYYY-MM-DD HH:mm:ss')
      this.currentTimeStamp = now.getTime();
    },
    unix2time() {
      let input = this.unixInput;
      let output = dayjs(new Date(+input)).format('YYYY-MM-DD HH:mm:ss')
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