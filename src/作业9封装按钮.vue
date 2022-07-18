<template>
  <div>
    <elbutton title="默认按钮" @click1="btn"></elbutton>{{ a }}
    <elbutton title="成功按钮" type="success"></elbutton>
    <elbutton title="主要按钮" type="good"></elbutton>
  </div>
</template>

<script>
import elbutton from './components/button.vue'
export default {
  data() {
    return {
      a: 0,
    }
  },
  components: {
    elbutton,
  },
  methods: {
    btn() {
      console.log('你好帅')
    },
  },
  mounted() {
    this.a++
  },
}
</script>

<style></style>
