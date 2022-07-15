<template>
  <div>
    <!-- 需求:将数组arr的内容渲染到ul中 
      v-for 循环数据 每循环一次 生成对应的dom元素
      key: 唯一值 类型string/number 提高性能
      -->
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      <!-- item 数组里边的每一个元素 -->
      <!-- <li v-for="item in list" :key="item">{{ item }}</li> -->

      <!-- item 数组里边的每一个元素,
      index 索引号 -->
      <!-- <li v-for="(item, index) in list" :key="index">{{ item }}-{{ index }}</li> -->
    </ul>
  </div>
</template>
1

<script>
export default {
  name: 'App',
  data() {
    return {
      list: ['章三', '李四', '迪丽热巴', 'xxx'],
    }
  },
}
</script>

<style></style>
