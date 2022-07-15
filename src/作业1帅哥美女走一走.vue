<template>
  <div id="root">
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <button @click="fn">走一走</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ['帅哥', '美女', '程序员'],
    }
  },
  methods: {
    fn() {
      this.arr.push(this.arr[0])
      this.arr.shift() //删除最前一个
    },
  },
}
</script>
<style scoped>
.id {
  padding: 50px;
}
</style>
