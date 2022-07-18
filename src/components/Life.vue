<template>
  <div>
    <p>学习生命周期 - 看控制台打印</p>
    <p id="myP">{{ msg }}</p>
    <ul id="myUL">
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <button @click="arr.push(1000)">点击末尾加值</button>
  </div>
</template>

<script>
export default {
  name: 'LifeAxiosLife',

  data() {
    return {
      msg: 'Hello Vue!',
      arr: [1, 2, 3, 4],
    }
  },

  beforeCreate() {
    this.msg = 'Hello Vue hahahhaha'
    console.log('beforeCreate执行')
  },
  created() {
    this.msg = 'Hello Vue hahahhaha'
    console.log('created执行')
   
    // debugger
    //初始化场景数据
  },
  beforeMount() {
    console.log(document.querySelector('#myP'))
    console.log('beforeMount执行')
    this.msg = '重新值'
  },
  mounted() {
    console.log('mounted执行')
    console.log(document.querySelector('#myP'))
  },
  beforeUpdate() {
    console.log('beforeUpdate执行了')
    console.log(document.querySelector('#myUL')[4])
  },
  updated() {
    console.log('updated执行了')
    console.log(document.querySelector('#myUL')[4])
  },
  beforeDestroy() {
    console.log(' beforeDestroy执行了')
  },
  destroyed() {
    console.log('destroyed执行了')
     this.timer = setTimeout(() => {
      console.log('00000')
    }, 4000)
  },
}
</script>
