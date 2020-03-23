import Vue from 'vue';
import loading from './loading.vue';

let Loading = Vue.extend(loading);
let ld;
function toggleLoading(el, val) {
  if (!ld) {
    ld = new Loading().$mount();
  }
  if (val) {
    ld.parentOriginPosition = el.style.position;
    if (ld.parentOriginPosition !== 'fixed' && ld.parentOriginPosition !== 'absolute') {
      el.style.position = 'relative';
    }
    el.appendChild(ld.$el);
    ld.isVisible = true;
  } else {
    if (ld.isVisible) {
      ld.isVisible = false;
      el.removeChild(ld.$el);
    }
  }
}
let obj = {
  inserted: (el, binding) => {
    if (binding.value) {
      toggleLoading(el, binding.value);
    }
  },
  update: (el, binding) => {
    if (binding.value !== binding.oldValue) {
      toggleLoading(el, binding.value);
    }
  }
}

Vue.directive('loading', obj);