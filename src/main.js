import Vue from 'vue'
import App from './作业9封装按钮.vue'
// import pan2 from './components/pan2.vue'
Vue.config.productionTip = false
// Vue.component('pan2', pan2)
new Vue({
  render: (h) => h(App),
  // render: function (h) {
  //   h(App)
  // },
}).$mount('#app')
