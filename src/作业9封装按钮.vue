<template>
  <div>
    <elbutton title="默认按钮" type="primary"></elbutton>
    <elbutton title="成功按钮" type="success"></elbutton>
    <elbutton title="主要按钮" type="good"></elbutton>
  </div>
</template>

<script>
import elbutton from './components/button.vue'
export default {
  data() {
    return {}
  },
  components: {
    elbutton,
  },
}
</script>

<style></style>
