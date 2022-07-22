<template>
  <div>
    <h1>v-model在自定义组件上的使用</h1>
    <!-- v-model 用在一个组件上 会默认被解析成 
    1. 名为 value 的属性 
    2. 名为 input 的事件 -->
    <BaseInput v-model="test"></BaseInput>
    <!-- <BaseInput v-bind:value="test" @input="test=e.target.input.value"></BaseInput> -->
  </div>
</template>

<script>
import BaseInput from './child/base-input.vue'
export default {
  name: 'Demo02VModel',

  data() {
    return {
      test: '',
      checked: 0,
    }
  },
  components: {
    BaseInput,
  },
}
</script>

<style lang="css" scoped></style>
