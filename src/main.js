import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import store from './store'

//卫国
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//引入axios
import axios from 'axios';
//设置baseURL
const wedding = axios.create({
  baseURL: 'http://121.40.124.130:10086/'    //上线后需要改成服务器ip
});
Vue.prototype.$axios = axios;
Vue.prototype.$wedding = wedding;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
