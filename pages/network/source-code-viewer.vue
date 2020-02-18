<template>
  <div>
    <label for="js-input">网址</label>
    <input type="text" class="border border-gray-300 w-100" v-model="input"/>
    <button class="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1" @click="doSearch">查询</button>
    <textarea
      name="source-code"
      id="js-output"
      cols="30"
      rows="10"
      class="border border-gray-300 w-full"
      v-model="output"
    ></textarea>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            input: '',
            output: '',
        }
    },
    methods: {
        doSearch() {
            let input = this.input;
            axios.get(input)
            .then(resp => {
                console.log(resp);
                this.output = resp;
            })
        }
    }
};
</script>

<style>
</style>