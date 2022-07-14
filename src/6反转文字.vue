<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="btn">逆转</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  // data:{msg: 'holle world',},
  data() {
    return {
      msg: 'holle world',
    }
  },
  methods: {
    btn() {
      this.msg = this.msg.split('').reverse().join('')
    },
  },
}
</script>

<style></style>
