<template>
  <div>
    <!-- 需求:将数组arr的内容渲染到ul中 
      v-for 循环数据 每循环一次 生成对应的dom元素
      key: 唯一值 类型string/number 提高性能
      -->
    <!-- ---遍历对象 -->
    <ul>
      <p>遍历数组----</p>
      <li v-for="item in stuArr" :key="item.id">
        {{ item.name }}-{{ item.sex }}-{{ item.hobby }}
      </li>
    </ul>

    <!-- ---遍历对象 -->
    <ul>
      <p>遍历对象----</p>
      <li v-for="(item, key) in tObj" :key="item">{{ key }}-{{ item }}</li>
    </ul>
    <!-- ---遍历数字 -->
    <ul>
      <p>遍历数字----</p>
      <li v-for="(item, index) in 10" :key="item">{{ index }}-{{ item }}</li>
    </ul>
  </div>
</template>
1

<script>
export default {
  name: 'App',
  data() {
    return {
      arr: ['章三', '李四', '迪丽热巴', 'xxx'],
      stuArr: [
        {
          id: 1001,
          name: '孙悟空',
          sex: '男',
          hobby: '吃桃子',
        },
        {
          id: 1002,
          name: '猪八戒',
          sex: '男',
          hobby: '背媳妇',
        },
      ],
      tObj: {
        name: '小黑',
        age: 18,
        class: '1期',
      },
      count: 10,
    }
  },
}
</script>

<style></style>
