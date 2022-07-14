<template>
  <div>
    <span>用户名:</span>
    <input type="text" :value="val" @input="fn" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      val: '请输入用户名',
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
