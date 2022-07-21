import Vue from 'vue'
import App from './作业图书管理.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
// axios.defaults.baseURL = 'http://123.57.109.30:3006'
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
Vue.prototype.$axios = axios
Vue.directive('gbfocus', {
  inserted(el) {
    el.focus()
    el.style.borderColor = 'yellow'
  },
})
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
}).$mount('#app')



