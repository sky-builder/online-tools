<template>
  <div class="loading">
    <svg class="loading__icon" width="30" height="30">
      <circle class="loading__spin" cx="15" cy="15" r="12" stroke="#cfa81d" stroke-dasharray="30, 80" fill="transparent"></circle>
    </svg>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.loading {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: hsla(0,0%,100%,0.8);
}
.loading__icon {
  animation: rotate 2s linear infinite;
}
.loading__spin {
  animation: fade 2s linear infinite;
}
@keyframes fade {
  from {
    stroke-dasharray: 1, 200;
  }
  to {
    stroke-dasharray: 50, 100;
    stroke-dashoffset: -70;
  }
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg)
  }
}
</style>