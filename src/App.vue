<template>
  <div>
    <div class="footer_wrap">
      <!-- <span @click="change('/find', 'Find')">发现音乐</span>
      <span @click="change('/my', 'My')">我的音乐</span>
      <span @click="change('/part', 'Part')">朋友</span> -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part">朋友</router-link>
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/part">朋友</a> -->
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    change(tpath, tname) {
      this.$router.push({
        // path: path,
        query: {
          id: 123,
        },
        params: {
          age: 18,
        },
        name: tname,
      })
    },
  },
}
</script>

<style >
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.router-link-active {
  background-color: red !important;
}
.top {
  padding-top: 62px;
}
</style>
