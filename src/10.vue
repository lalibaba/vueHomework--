<template>
  <!-- 1 .number修饰符-把值parseFloat转数值再赋予给v-model对应的变量
         2 .trim修饰 - 去除首尾两边空格
         3 .lazy修饰符 - 失去焦点内容改变时(onchange事件), 把内容同步给v-model的变量 -->
  <div>
    <h1 v-html="str"></h1>
    <h1 v-text="str"></h1>
    <h1 v-text="str1">1213{{ str1 }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: '<span>88888</span>',
      str1: '888',
    }
  },
}
</script>

<style></style>
