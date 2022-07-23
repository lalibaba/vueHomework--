import Vue from 'vue'

// //作业2路由组件配置
// #region
// import MyHeader from './components/MyHeader.vue'
// import MyTabBar from './components/MyTabBar.vue'
//一路二级组件
import MyGoodsList from '../views/views3Tab/child/MyGoodsList.vue'
import MyGoodsSearch from '../views/views3Tab/child/MyGoodsSearch.vue'
import MyUserInfo from '../views/views3Tab/child/MyUserInfo.vue'
// 引入router插件
import VueRouter from 'vue-router'
//注册插件
Vue.use(VueRouter)
//指定路由规则
const routes = [
  {
    path: '/',
    redirect: '/MyGoodsList',
  },
  {
    path: '/MyGoodsList',
    component: MyGoodsList,
  },
  {
    path: '/MyGoodsSearch',
    component: MyGoodsSearch,
  },
  {
    path: '/MyUserInfo',
    component: MyUserInfo,
  },
]
//创建路由器
const router = new VueRouter({
  routes,
  mode: 'history',
})

import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/fonts/iconfont.css'
import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.directive('gfocus', {
  inserted(el) {
    el.focus()
  },
})

export default router
