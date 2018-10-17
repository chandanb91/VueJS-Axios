import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-axios-24412.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'Sandalwood';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor - ', config);
  return config;
});
const resInterceptor = axios.interceptors.response.use(response => {
  console.log('Response Interceptor - ', response);
  return response;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
