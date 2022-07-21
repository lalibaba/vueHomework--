<template>
  <div>
    <pannel>
      <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p>
    </pannel>
    <pannel>
      <img src="../assets/a.jpg" alt="">
    </pannel>
    <pannel></pannel>
  </div>
</template>

<script>
import pannel from '../components/03/Panel.vue'
export default {
  name: 'Demo03UseSlot',
  data() {
    return {}
  },
  components: {
    pannel,
  },
}
</script>

<style scoped></style>
