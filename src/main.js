import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { globalVue } from './global-vue';

Vue.config.productionTip = false;

// Global Vue mixin
Vue.mixin(globalVue());

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


