<template>
  <div>
    <button :class="type" @click="btn">{{ title }}</button>
  </div>
</template>
<script>
export default {
  // props: ['title', 'type'],
  props: {
    title: String,
    type: {
      type: String,
      default: 'success',
      validator: (val) => {
        return ['primary', 'good', 'success'].includes(val)
      },
    },
  },
  methods: {
    btn() {
      this.$emit('click1',)
    },
  },
}
</script>
<style scoped>
button {
  text-align: center;
  width: 110px;
  height: 44px;
  border-radius: 5px;
  font-size: 20px;
}
.primary {
  border: 1px solid #ccc;
  background-color: white;
  color: black;
}
.success {
  border: 1px solid green;
  background-color: green;
  color: #fff;
}
.good {
  border: 1px solid blue;
  background-color: blue;
  color: #fff;
}
</style>
