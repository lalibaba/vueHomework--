<template>
  <div>
    <div>8888{{ a }}</div>
  </div>
</template>

<script>
import eventBus from '../eveBus'
export default {
  name: 'A',
  data() {
    return {
      a: 0,
    }
  },
  mounted() {
    //mounted会立即执行一次/绑定
    eventBus.$on('btn', () => {
      return this.a++
    })
  },
}
</script>

<style></style>
