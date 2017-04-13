import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes' //routes.js파일에서 객체의 속성이라 저렇게 사용
import App from './App.vue'
import store from './store'


//use를 사용하여 뷰라우터를 사용한다고 설정
Vue.use(VueRouter);


const router = new VueRouter({
  //위에 routes가 여기에 들어옴
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,//사용되도록 설정
  store,
  render: h => h(App)
});


axios.defaults.baseURL   = 'http://api.pm0603.com';
