<template>
  <div id="root">
    <button @click="fn">生成</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }} <button @click="fn2(index)">删除</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [1, 2, 4],
    }
  },
  methods: {
    fn() {
      this.arr.push(Math.ceil(Math.random() * 10))
    },
    fn2(val) {
      this.arr.splice(val, 1)
    },
  },
}
</script>
<style scoped>
#root {
  padding: 50px;
}
</style>
