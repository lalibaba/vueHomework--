<template>
  <div>
    <div class="nav_main">
      <!-- <p>推荐</p>
    <p>排行榜</p>
    <p>歌单</p> -->
      <router-link to="/find/recommend">推荐</router-link>
      <router-link to="/find/ranking">排行榜</router-link>
      <router-link to="/find/songList">歌单</router-link>
      <!-- <p>{{ $route.query.username }}</p>
    <p>{{ $route.query.age }}</p> -->
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AA',
}
</script>

<style scoped>
.nav_main {
  background-color: rgb(99, 136, 200);
  color: white;
  padding: 10px 0;
}
.nav_main a {
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 12px;
  margin: 7px 17px 0;
  padding: 0px 15px 2px 15px;
  height: 20px;
  display: inline-block;
  line-height: 20px;
  border-radius: 20px;
}
.nav_main a:hover {
  background-color: rgb(83, 212, 136);
}
 .nav_main .router-link-exact-active {
  background-color: rgb(208, 156, 192) !important;
}
</style>
