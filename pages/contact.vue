<template>
  <div class="contact">
    <h1>给作者留言</h1>
    <form action="" @submit.prevent="doSend">
      <label class="block mt-2" for="js-name" >名字</label>
      <input name="name" type="text" id="js-name" class="w-64" required>
      <label class="block mt-2" for="js-email" >邮箱</label>
      <input name="email" type="email" id="js-email" class="w-64" required>
      <label class="mt-2 block" for="js-content" > 内容</label>
      <textarea name="content" id="js-content" cols="30" rows="10" class="w-full" required></textarea>
      <button type="submit">发送</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  methods: {
    doSend(e) {
      let form = e.target;
      let formData = new FormData(form);
      let data = {};
      formData.forEach((value, key) => {
        data[key] = value
      })
      axios.post('http://api.magisk.tech/message', data)
      .then(resp => {
        form.reset();
      })
      .catch(e => {
        console.log('err', e);
      })
    }
  }
}
</script>

<style>

</style>