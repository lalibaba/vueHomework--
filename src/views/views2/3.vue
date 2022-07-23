<template>
  <div>
    <h1>体育</h1>
    <div class="top">
      <router-link to="/first3/second1">体育主页</router-link>&nbsp;
      <router-link to="/first3/second2">国内新闻</router-link>&nbsp;
      <router-link to="/first3/second3">国外体育</router-link>&nbsp;
    </div>
    <h3>显示二级路由</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AA',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
