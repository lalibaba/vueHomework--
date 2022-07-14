<template>
  <div @click="btn3">
    <!-- vue对事件进行了修饰符设置, 在事件后面.修饰符名即可使用更多的功能 
				 .stop - 阻止事件冒泡
				 .prevent - 阻止默认行为
         .once - 程序运行期间, 只触发一次事件处理函数-->
    <a href="http://www.baidu.com" @click="btn(e)">.prevent阻止默认行为</a>
    <a href="http://www.baidu.com" @click="btn2(5, $event)"
      >.prevent阻止默认行为</a
    >
    <button @click="btn4">.once程序运行期间, 只触发一次事件处理函数</button>
    <button @click.stop="btn5">
      .once程序运行期间, 只触发一次事件处理函数
    </button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data () {
    return {}
  },
  methods: {
    btn (e) {
      console.log("阻止默认行为")
      e.preventDefault()
    },
    btn2 (val, e) {
      console.log("传参阻止默认行为" + val)
      e.preventDefault()
    },
    btn3 () {
      console.log("父亲冒泡")
    },
    btn4 () {
      console.log("儿子冒泡")
    },
    btn5 () {
      console.log("防止父亲冒泡")
    },
  },
}
</script>

<style></style>
