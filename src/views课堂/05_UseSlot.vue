<template>
  <div>
    <pannel>
      <template v-slot:title="scope">
        <a :href="scope.row.href" v-if="scope.row.href.indexOf('https')!==1"></a>
        <a v-else>{{scope.row.href}}</a>
        <h4 >{{ scope.row.name }}</h4>
      </template>
      <template v-slot:content>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </template>
    </pannel>
    <pannel>
      <template #title>
        <h4>美女</h4>
      </template>
      <template #content>
        <img src="../assets/mm.gif" alt="" />
      </template>
    </pannel>
    <pannel></pannel>
  </div>
</template>

<script>
import pannel from '../components/05/Panel.vue'
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
