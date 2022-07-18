<template>
  <div>
    <button @click="btn()">按钮</button>
  </div>
</template>

<script>
import eventBus from '../eveBus'
export default {
  name: 'B',
  data() {
    return {}
  },
  mounted() {},
  methods: {
    btn() {
      eventBus.$emit('btn')
    },
  },
}
</script>

<style></style>
