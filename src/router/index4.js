import Vue from 'vue'

// //作业2路由组件配置
// #region
//引入view2组件
import first1 from '../views/views4/first1.vue'
import first2 from '@/views/views4/first2.vue'
import first3 from '@/views/views4/first3.vue'
//引入二级组件
import second1 from '@/views/views4/child/second1.vue'
import second2 from '@/views/views4/child/second2.vue'
import second3 from '@/views/views4/child/second3.vue'
//引入三级组件
import thir1 from '@/views/views4/child/children/thir1.vue'
import thir2 from '@/views/views4/child/children/thir2.vue'
// 引入router插件
import VueRouter from 'vue-router'
//注册插件
Vue.use(VueRouter)
//指定路由规则
const routes = [
  {
    path: '/',
    redirect: '/first3',
  },
  {
    path: '/first1',
    component: first1,
  },
  {
    path: '/first2',
    component: first2,
    redirect: '/first2/second1',
    children: [
      {
        path: 'second1', //不能加斜杠，否则会找到根目录去
        component: second1,
      },
      {
        path: 'second2',
        component: second2,
      },
      {
        path: 'second3',
        component: second3,
        redirect: '/first2/second3/thir1',
        children: [
          {
            path: 'thir1', //不能加斜杠，否则会找到根目录去
            component: thir1,
          },
          {
            path: 'thir2',
            component: thir2,
          },
        ],
      },
    ],
  },
  {
    path: '/first3',
    component: first3,
  },
]
//创建路由器
const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
