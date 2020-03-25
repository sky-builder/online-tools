<template>
  <div>
    <h1>🦋历史上的今天 - {{today}}</h1>
    <table class="mt-4 w-full">
      <thead>
        <tr>
          <th class="border" colspan="2">大事件</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in eventList" :key="item.titleList.join(',')">
          <td class="w-24 align-top">{{ item.year }}</td>
          <td>{{ item.titleList.join('\n')}}</td>
        </tr>
      </tbody>
    </table>
    <table class="mt-4 w-full">
      <thead>
        <tr>
          <th class="border" colspan="2">出生</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in birthList" :key="item.titleList.join(',')">
          <td class="w-24 align-top">{{ item.year }}</td>
          <td>{{ item.titleList.join('\n')}}</td>
        </tr>
      </tbody>
    </table>
    <table class="mt-4 w-full">
      <thead>
        <tr>
          <th class="border" colspan="2">逝世</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in deathList" :key="item.titleList.join(',')">
          <td class="w-24 align-top">{{ item.year }}</td>
          <td>{{ item.titleList.join('\n')}}</td>
        </tr>
      </tbody>
    </table>
    <table class="mt-4 w-full">
      <thead>
        <tr>
          <th class="border" colspan="2">节日和假期</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in holidayList" :key="item">
          <td>{{ item }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="flex flex-row justify-center" v-for="(row,i) in calender" :key="i">
      <table v-for="m in row" :key="m">
        <thead>
          <tr>
            <th colspan="7">{{ m }} </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="j in  Math.ceil(monthDayMap[m] / 7)" :key="`${m}-${j}`">
            <td v-for="k in 7" :key="`${m}-${j}-${k}`"> 
              {{ (j - 1) * 7 + k > monthDayMap[m] ? '' : (j - 1) * 7 + k }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
import cryptoJs from "crypto-js";
export default {
  head() {
    return {
      title: "历史上的今天 - " + this.today
    };
  },
  async asyncData({ params }) {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let today = `${month}月${day}日`;
    const { data } = await axios.get(
      `http://api.magisk.tech/history-today/${month}/${day}`
    );
    let output = cryptoJs.AES.decrypt(data, "ilovelucy");
    output = cryptoJs.enc.Utf8.stringify(output);
    output = JSON.parse(output);
    return { ...output, today: today };
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>