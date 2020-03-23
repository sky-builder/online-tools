<template>
  <ul>
    <li
      v-for="(item, i) in list"
      :key="item"
      class="droparea"
      :data-index="i"
      draggable="true"
      @dragstart="handleDragStart"
      @dragenter="handleDragEnter"
      @dragover="handleDragOver"
      @drop.stop="onDrop"
    >
      <div>{{item}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3]
    };
  },
  methods: {
    handleDrag() {},
    handleDragStart(e) {
      e.dataTransfer.setData("text/plain", e.target.getAttribute('data-index'));
      e.dataTransfer.dropEffect = "move";
    },
    handleDragEnd(e) {},
    handleDragEnter(e) {
      // e.preventDefault();
    },
    handleDragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    },
    handleDragLeave(e) {},
    handleDragExit(e) {},
    onDrop(e) {
      e.preventDefault();
      let target = e.target;
      console.log(target);
      while(target.tagName.toLowerCase() !== 'li') {
        target = target.parentElement;
        console.log(target)
      }
      const srcIndex = e.dataTransfer.getData("text/plain");
      const tarIndex = target.getAttribute('data-index');
      let list = this.list.slice();
      list.splice(srcIndex, 1, this.list[tarIndex]);
      list.splice(tarIndex, 1, this.list[srcIndex]);
      this.list = list;
    }
  }
};
</script>

<style>
.droparea:-moz-drag-over {
  outline: 1px solid black;
}
</style>