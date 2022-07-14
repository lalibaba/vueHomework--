<template>
  <div>
    <a v-bind:href="urlhref">跳转</a>
    <img :src="imgUrl" alt="" />
  </div>
</template>

<script>
import img from "./assets/微信截图_20220713105521.png"
export default {
  name: "App",
  components: {},
  data () {
    return {
      urlhref: "http://baidu.com",
      imgUrl: img,
    }
  },
}
</script>

<style></style>
