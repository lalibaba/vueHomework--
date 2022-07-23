<template>
  <div id="app">
    <MyHeader :title="'我的tab'"></MyHeader>
    <router-view></router-view>
    <!-- <div style="margin-top: 45px">
      <component :is="comName"></component>
    </div> -->
    <MyTabBar :list="tabList"></MyTabBar>
  </div>
</template>

<script>
// //引入view组件
import MyHeader from './views/views3Tab/MyHeader.vue'
import MyTabBar from './views/views3Tab/MyTabBar.vue'
// import MyTable from './views/views3Tab/MyTable.vue'
// //一路二级组件
// import MyGoodsList from './MyGoodsList.vue'
// import MyGoodsSearch from './view/MyGoodsSearch.vue'
// import MyUserInfo from './view/MyUserInfo.vue'

export default {
  name: 'App',
  data() {
    return {
      // comName: 'MyGoodsList',
      tabList: [
        {
          to: '/MyGoodsList',
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          to: '/MyGoodsSearch',
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          to: '/MyUserInfo',
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    }
  },
  components: {
    MyHeader,
    MyTabBar,
    // MyGoodsList,
    // MyGoodsSearch,
    // MyUserInfo,
  },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
