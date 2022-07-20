<template>
  <div>
    <TSGL :dataArr="list"></TSGL>
  </div>
</template>

<script>
import TSGL from './components/tushuguanli/TSGL.vue'
export default {
  data() {
    return {
      list: [],
    }
  },
  components: {
    TSGL,
  },
  created() {
    this.$axios({
      url: '/api/getbooks',
    }).then((res) => {
      this.list = res.data.data
      console.log(res)
    })
  },
  
}
</script>

<style></style>
