<template>
  <div id="app">
   <h4 v-for="(item,index) in obj" :key="index">{{item.add}}网站：粉丝数量：{{ item.num | fn(item.add)}}</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj:[{
        add:'国外',
        num:1876986
      },{
        add:'国内',
        num:1876986
      }]
    }
  },
  filters:{
    fn:(val,add)=>{
      if(add=="国外")return (val/1000)+'千'
      if(add=="国内")return (val/10000)+'万'
    }
  }
}
</script>
<style>
#app {
  width: 600px;
  margin: 10px auto;
}
