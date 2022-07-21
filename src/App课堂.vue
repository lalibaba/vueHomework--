<template>
  <div>
    <!-- <hr />
    <h1>案例1动态组件</h1>
    <donTai></donTai>
    <hr />
    <h1>案例2动态组件+缓存+激活与失活</h1>
    <donTai2></donTai2>
    <hr />
    <h1>案例3插槽</h1>
    <cacao> </cacao>
    <hr />
    <h1>案例4具名插槽</h1>
    <cacao2> </cacao2>
    <hr />
    <h1>案例4作用域插槽</h1>
    <cacao3> </cacao3> -->
    <hr />
    <h1>案例5作用域插槽案例</h1>
    <cacao4> </cacao4>
  </div>
</template>

<script>
import donTai from './views/01_UseDynamic.vue'
import donTai2 from './views/02_UseDynamic.vue'
import cacao from './views/03_UseSlot.vue'
import cacao2 from './views/04_UseSlot.vue'
import cacao3 from './views/05_UseSlot.vue'
import cacao4 from './views/06_UseTable.vue'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    donTai,
    donTai2,
    cacao,
    cacao2,
    cacao3,
    cacao4,
  },
}
</script>

<style></style>
