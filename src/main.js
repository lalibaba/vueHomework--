import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/flexible.js'
import './assets/reset.css'
import './assets/font/iconfont.css'
Vue.config.productionTip = false

import {
  Tabbar,
  TabbarItem,
  NavBar,
  Col,
  Row,
  Image,
  Cell,
  CellGroup,
  Icon,
  Search,
  List,
  PullRefresh,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Panel,
  Lazyload,
  DropdownMenu,
  DropdownItem,
  Card,
} from 'vant'

Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Col)
Vue.use(Row)
Vue.use(Image)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Search)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Panel)
Vue.use(Lazyload)
Vue.use(Card)

import Songitem from '@/components/Songitem'
Vue.component('Songitem', Songitem)
// import { recommendSongApi } from '@/api'
// recommendSongApi({
//   limit: 6,
// }).then((res) => console.log(res))

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
