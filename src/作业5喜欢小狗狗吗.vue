<template>
  <div id="app">
    <dog></dog>
    <dog></dog>
  </div>
</template>
<script>
import dog from './components/dog.vue'
export default {
  components: {
    dog,
  },
}
</script>
<style scoped>
#app {
  display: flex;
}
</style>
