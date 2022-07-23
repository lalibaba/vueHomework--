import Vue from 'vue'
// import App from './04作业1切换页面.vue'
// import App from './05作业2二级嵌套 copy.vue'
import App from './07作业4三级嵌套.vue'
Vue.config.productionTip = false

// import router from './router/index1'
// import router from './router/index2'
// import router from './router/index3'
import router from './router/index4'

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
