<template>
  <div>
    <h1 class="text-6xl">历史上的今天 - {{today}}</h1>
    <h2 class="text-4xl">大事件</h2>
    <ul>
      <li
        v-for="item in historyToday.eventList"
        :key="item.titleList.join(',')"
      >{{ item.year }}：{{ item.titleList.join('\n')}}</li>
    </ul>
    <h2 class="text-4xl">出生</h2>
    <ul>
      <li
        v-for="item in historyToday.birthList"
        :key="item.titleList.join(',')"
      >{{ item.year }}：{{ item.titleList.join('\n')}}</li>
    </ul>
    <h2 class="text-4xl">逝世</h2>
    <ul>
      <li
        v-for="item in historyToday.deathList"
        :key="item.titleList.join(',')"
      >{{ item.year }}：{{ item.titleList.join('\n')}}</li>
    </ul>
    <h2 class="text-4xl">节日和假期</h2>
    <ul>
      <li v-for="item in historyToday.holidayList" :key="item">{{ item }}</li>
    </ul>
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
let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let today = `${month}月${day}日`;
const todayData = require(`@/assets/history-today/${today}.json`);
export default {
  data() {
    return {
      historyToday: todayData,
      today: today,
      monthDayMap: {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
      },
      calender: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
      ]
    };
  }
};
</script>

<style>
</style>