<template>
  <div>
    <!-- 1. 绑定键盘按下事件.enter-回车 -->
    <input type="text" @keyup.enter="enter" />
    <!-- 2. 绑定键盘按下事件.esc修饰符 - 取消键 -->
    <hr />
    <input type="text" @keyup.esc="esc" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
    methods: {
    enter() {
      console.log(enter)
    },
    esc() {
      console.log(esc)
    },
  },
}
</script>

<style></style>
