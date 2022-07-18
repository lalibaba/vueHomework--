<template>
  <div>
    <Beve></Beve>
    <Aeve></Aeve>
  </div>
</template>

<script>
import Beve from './components/eventBusB.vue'
import Aeve from './components/eventBusA.vue'
export default {
  data() {
    return {}//好
  },
  components: {
    Beve,
    Aeve,
  },
}
</script>

<style></style>
