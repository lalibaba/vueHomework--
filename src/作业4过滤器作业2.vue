<template>
  <div id="app">
   <h4 v-for="(item,index) in obj" :key="index">时间：{{ item.num | fn(item.add)}}</h4>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      obj:[{
        add:'横杠',
        num:1636450540055
      },{
        add:'斜杠',
        num:1636450540055
      }]
    }
  },
  filters:{
    fn:(val,add)=>{
      if(add=="横杠")return moment(new Date(val)).format('YYYY-MM-DD')
      if(add=="斜杠")return moment(new Date(val)).format('YYYY/MM/DD')
    }
  }
}
</script>
<style>
#app {
  width: 600px;
  margin: 10px auto;
}
