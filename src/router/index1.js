//作业1路由组件配置
// #region
import Vue from 'vue'
import min1 from '../views/views1/1.vue'
import min2 from '../views/views1/2.vue'
import min3 from '../views/views1/3.vue'
import min4 from '../views/views1/4.vue'
//第二步引入vue-router路由插件
import VueRouter from 'vue-router'
//第三步注册使用vue-router模块
Vue.use(VueRouter)
//第4步制定组件路径
const routes = [
  {
    path: '/min1',
    component: min1,
  },
  {
    path: '/min2',
    component: min2,
  },
  {
    path: '/min3',
    component: min3,
  },
  {
    path: '/min4',
    component: min4,
  },
]
//创建路由器
const router = new VueRouter({
  routes,
  // mode: 'history',
})
// #endregion
// export default router
export default router
