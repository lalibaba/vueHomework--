<template>
  <div>
    <Life v-if="sh"></Life>
    <button @click="sh =!sh ">销毁</button>
  </div>
</template>

<script>
import Life from './components/Life.vue'
export default {
  data() {
    return { sh: true }
  },
  components: {
    Life,
  },
}
</script>

<style></style>
