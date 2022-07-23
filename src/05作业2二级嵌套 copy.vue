<template>
  <div>
    <div class="top">
      <router-link to="/first1">主体</router-link>&nbsp;
      <router-link to="/first2">新闻</router-link>&nbsp;
      <router-link to="/first3">体育</router-link>&nbsp;
    </div>
    <h3>显示一级路由</h3>
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
