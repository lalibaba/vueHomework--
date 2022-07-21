import Vue from 'vue'
import App from './App课堂.vue'

Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  // render: function (h) {
  //   h(App)
  // },
}).$mount('#app')
