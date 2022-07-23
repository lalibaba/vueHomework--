<template>
  <div>
    <div class="top">
      <router-link to="/min1">首页</router-link>
      <router-link to="/min2">分类</router-link>
      <router-link to="/min3">订单</router-link>
      <router-link to="/min4">我的</router-link>
    </div>
    <h3>显示路由切换页面</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
