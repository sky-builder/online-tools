<template>
  <ul class="dnd-list">
    <li
      v-for="(item, index) in localList"
      :key="'dnd-list-item-' + index"
      class="dnd-list-item"
      :data-index="index"
      draggable="true"
      @dragstart="handleDragStart"
      @dragenter="handleDragEnter"
      @dragover="handleDragOver"
      @drop.stop="onDrop"
    >
      <slot name="item" v-bind:item="item">
        item
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      localList: []
    };
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    list(val) {
      this.localList = val;
    }
  },
  methods: {
    handleDrag() {},
    handleDragStart(e) {
      e.dataTransfer.setData("text/plain", e.target.getAttribute("data-index"));
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
      while (target.tagName.toLowerCase() !== "li") {
        target = target.parentElement;
      }
      const srcIndex = e.dataTransfer.getData("text/plain");
      const tarIndex = target.getAttribute("data-index");
      let list = this.localList.slice();
      console.log(srcIndex, tarIndex);
      list.splice(srcIndex, 1, this.localList[tarIndex]);
      list.splice(tarIndex, 1, this.localList[srcIndex]);
      this.localList = list;
      this.$emit('change', list);
    }
  }
};
</script>

<style>
.dnd-list {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
}
.dnd-list-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.dnd-list-item {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>