<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <pan1 title="成华大道"></pan1>
    <pan1 :title="text"></pan1>
    <pan2></pan2>
  </div>
</template>

<script>
import pan1 from './components/pan1.vue'
export default {
  data() {
    return {
      text: '二仙桥送二大爷',
    }
  },
  components: {
    pan1: pan1,
  },
}
</script>

<style lang="less" scoped>
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid rgb(125, 81, 167);
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
</style>
