import Vue from 'vue'
import App from './02.v-model在自定义组件的使用.vue'
Vue.config.productionTip = false
//第一步引入要路由的视图组件
import Find from './views/Find.vue'
import My from './views/My.vue'
import Part from './views/Part.vue'
import Recommend from './views/Second/Recommend.vue'
import Ranking from './views/Second/Ranking.vue'
import SongList from './views/Second/SongList.vue'
import NotFound from './views/NotFound.vue'
//第二步引入vue-router路由插件
import VueRouter from 'vue-router'
//第三步注册使用vue-router模块
Vue.use(VueRouter)
//第4步制定组件路径

const routes = [
  // { path: '/', redirect: '/find' },
  {
    path: '/',
    redirect: '/find',
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
    redirect: '/find/recommend',
    children: [
      {
        path: 'recommend',
        component: Recommend,
      },
      {
        path: 'ranking',
        component: Ranking,
      },
      {
        path: 'songList',
        component: SongList,
      },
    ],
  },

  {
    path: '/my',
    name: 'My',
    component: My,
  },
  {
    path: '/part',
    name: 'Part',
    component: Part,
  },
  { path: '*', component: NotFound, name: 'Finde' },
]
//第5步创建VueRouter实例
const router = new VueRouter({
  routes,
  // mode: 'history',
}) //路由管理者

// const isLogin = false
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   if (to.path == '/my' && !isLogin) {
//     alert('请登录')
//   } else {
//     next()
//   }
// })

const vm = new Vue({
  //第6步关联到vue实例 //第7步在App中加入<router-view></router-view>
  router,

  render: (h) => h(App),
  // render: function (h) {
  //   h(App)
  // },
}).$mount('#app')
console.log(vm)
