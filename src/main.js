import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.use(Antd);

Vue.use(YmapPlugin, {
  version: '2.1',
  coordorder: 'latlong',
  apiKey: '2d6d0e6a-5358-45fc-a45c-c4dd25d6f054',
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');