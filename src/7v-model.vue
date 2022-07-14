<template>
  <div>
    <!-- v-model:是实现vuejs 变量和表单标签value属性, 双向绑定的指令-->
    <div>
      <span>用户名:</span>
      <input type="text" :value="val" @input="fn" />
    </div>
    <div>
      <span>密码: </span>
      <input type="password" v-mode:value="password" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  // data:{msg: 'holle world',},
  data() {
    return {
      val: 'holle world',
      password: '',
    }
  },
  methods: {
    fn(e) {
      console.log(e.target.value)
      this.val = e.target.value
    },
  },
}
</script>

<style></style>
