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
            <span>时间</span>
          </td>
          <td class="p-2 border border-gray-300">
            <span>{{ unixOutput }}</span>
          </td>
        </tr>
        <tr>
          <td class="p-2 border border-gray-300">
            <label for="js-time-input">时间(例如: 2020-01-01 12:00:00)</label>
          </td>
          <td class="p-2 border border-gray-300">
            <input type="text" v-model="timeInput" class="border" />
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