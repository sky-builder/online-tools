import Vue from 'vue';
import loading from './loading.vue';

let Loading = Vue.extend(loading);
let ld;
let obj = {
  inserted: (el, binding) => {
    if (binding.value) {
      ld = new Loading().$mount();
      ld.parentOriginPosition = el.style.position;
      if (ld.parentOriginPosition !== 'fixed' && ld.parentOriginPosition !== 'absolute') {
        el.style.position = 'relative';
      }
      el.appendChild(ld.$el);
    }
  },
  update: (el, binding) => {
    if (binding.value) {
      if (ld) {
        return;
      }
    } else {
      el.removeChild(ld.$el);
    }
  }
}

Vue.directive('my-loading', obj);