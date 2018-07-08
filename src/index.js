import App from './App.vue';
import router from './router/routes';
import Vue from 'vue';
import './assets/style/global.scss';
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
