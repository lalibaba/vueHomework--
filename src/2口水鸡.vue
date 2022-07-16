<!--product的静态页面，可直接复制-->
<template>
  <div>
    <kousuiji
      v-for="(item, index) in list"
      :key="item.id"
      :title="item.proname"
      :price="item.proprice.toFixed(1)"
      :info="item.info"
      :index="index"
      v-on:delevent="delfn"
    ></kousuiji>
    <!-- 第三步:在父组件绑定自定义事件 -->
  </div>
</template>

<script>
import kousuiji from './components/kousuiji.vue'
// import kousuiji from './components/kousuiji2.vue'
export default {
  data() {
    return {
      msg: '超级好吃的口水鸡',
      list: [
        {
          id: 1,
          proname: '超级好吃的棒棒糖',
          proprice: 18.8,
          info: '开业大酬宾, 全场8折',
        },
        {
          id: 2,
          proname: '超级好吃的大鸡腿',
          proprice: 34.2,
          info: '好吃不腻, 快来买啊',
        },
        {
          id: 3,
          proname: '超级无敌的冰激凌',
          proprice: 14.2,
          info: '炎热的夏天, 来个冰激凌了',
        },
        {
          id: 4,
          proname: '超级无敌的冰激凌',
          proprice: 13.2,
          info: '炎热的夏天, 来个冰激凌了',
        },
      ],
    }
  },
  components: {
    kousuiji,
  },
  methods: {
    //第四步在父组件设定自定义事件的回调函数
    delfn(val) {
      this.list[val].proprice--
    },
    // delfn(val) {
    //   console.log('触发', val)
    //   this.list[val].proprice--
    // },
  },
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
