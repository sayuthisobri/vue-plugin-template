import Component from './Component.vue';

export default function install(Vue) {
  Vue.component('counter', Component);
}

/* global window */
if (typeof window !== 'undefined' && typeof window.Vue === 'function') {
  window.Vue.use(install);
}

export {Component};
