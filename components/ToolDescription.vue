<script>
export default {
  render(h) {
    try {
      let data = require(`@/assets/tool-description/${this.name}.json`)
      let descList = [];
      data.list.forEach(item => {
        let h2 = h('h2', {class: ['opacity-75 mt-4']}, item.title,);
        item.desc = item.desc.replace(/<br \/>/g, '\n')
        let p = h('p',{class: ['whitespace-pre-line']}, item.desc);
        descList.push(h2, p);
      })
      let h1 = h('h1', null, '📝工具说明')
      return h('div', {
        class: ['w-3/4 mt-12 pl-8 border-l-8']
      }, [h1].concat(descList));
    } catch (err) {
      return;
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>