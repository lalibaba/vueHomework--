<template>
  <div>
    <div>
      <span>用户名:</span>
      <input type="text" />
    </div>
    <div>
      <span>密码:</span>
      <input type="password" />
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log('我出生了')
  },
  destroyed() {
    console.log('我走了')
  },
  activated() {
    console.log('激活')
  },
  deactivated() {
    console.log('失活')
  },
}
</script>
