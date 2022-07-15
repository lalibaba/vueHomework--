import Vue from 'vue'
import App from './作业移动端导航.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.filter('toLow', (vel) => {
  return vel.toLowerCase()
})
new Vue({
  render: (h) => h(App),
  // render: function (h) {
  //   h(App)
  // },
}).$mount('#app')
