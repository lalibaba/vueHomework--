<template>
  <div>
    <h1>App组件</h1>
    <a href="#/home">首页</a>&nbsp; <a href="#/movie">电影</a>&nbsp;
    <a href="#/about">关于</a>&nbsp;
    <component :is="comName"></component>
  </div>
</template>

<script>
import Movie from './views/Find.vue'
import Home from './views/My.vue'
import About from './views/Part'
export default {
  name: 'DemoApp',
  data() {
    return {
      comName: '',
    }
  },
  components: {
    Movie,
    Home,
    About,
  },
  mounted() {
    //如果hash值发生改变会执行以下代码
    window.onhashchange = () => {
      console.log('===', location.hash)
      // 有路径 找组件
      // #/movie
      // #/home
      // #/about
      switch (location.hash) {
        case '#/movie':
          this.comName = 'Movie'
          break
        case '#/home':
          this.comName = 'Home'
          break
        case '#/about':
          this.comName = 'About'
          break
      }
    }
  },

  methods: {},
}
</script>

<style scoped></style>
