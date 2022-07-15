<template>
  <div>
    <h4 v-for="(item, index) in arr" :key="index">{{ item }}</h4>
    <button @click="btn">数组翻转</button>
    <button @click="btn1">截取前3个</button>
    <button @click="btn2">更新第一个元素值</button>
  </div>
</template>

<script>
// 响应式
// 数据变化 ==》 视图直接更新
// 视图 ==》数据更新
export default {
  data() {
    return {
      arr: ['章三', '李四', '迪丽热巴', 'xxx'],
    }
  },
  methods: {
    change() {
      this.obj.a = 10
    },
    btn() {
      this.arr.reverse()
      // reverse 是会改变原组数
    },
    btn1() {
      // this.arr.slice(0, 3);
      // console.log(this.arr.slice(0, 3));
      // console.log(this.arr);
      // slice 不会改变原数组
      // 解决方案
      // 1.直接重新赋值
      // this.arr = this.arr.slice(0, 3);
      // 2. splice(开始的位置， 删除的长度，替换元素)
      this.arr.splice(0, 3) // 是会改变原组数
      // 只要 可以 改变原组数 就会触发视图更新
    },
    btn2() {
      this.arr[0] = 1000
      console.log(this.arr)
      // vm.$set(target, propertyName/index, value)
      // target 目标对象
      // propertyName/index 属性/索引号
      // value
      // this.$set(this.arr, 0, 1000)
    },
  },
}
</script>
