<template>
  <div>
    <div class="top">
      <ul>
        <li>
          <router-link to="/first2/second1">All contact</router-link>
        </li>
        <li><router-link to="/first2/second2">Alice</router-link></li>
        <li><router-link to="/first2/second3">BOb</router-link></li>
        <!-- <li><span @chlik="changefn">All" contact</span></li>
        <li><span @chlik="changefn">Alice</span></li>
        <li><span @chlik="changefn">BOb</span></li> -->
      </ul>
    </div>
    <button @click="changefn">随机显示</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AA',
  data() {
    return {}
  },
  methods: {
    changefn() {
      let arr = ['/first2/second1', '/first2/second2', '/first2/second3']
      let index = Math.floor(Math.random() * 3)
      this.$router.push({
        path: arr[index],
      })
    },
  },
}
</script>

<style ></style>
