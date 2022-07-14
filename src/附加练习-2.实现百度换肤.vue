<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img src="./assets/01.jpg" @mouseenter="fn(1)" @click="fn2(1)" alt="" />
      <img src="./assets/02.jpg" @mouseenter="fn(2)" @click="fn2(2)" alt="" />
      <img src="./assets/03.jpg" @mouseenter="fn(3)" @click="fn2(3)" alt="" />
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="imgUrl" alt="" style="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>
<script>
import img1 from './assets/01.jpg'
import img2 from './assets/02.jpg'
import img3 from './assets/03.jpg'
export default {
  data() {
    return {
      imgUrl: img1,
    }
  },
  methods: {
    fn(vel) {
      this.imgUrl = { 1: img1, 2: img2, 3: img3 }[vel]
    },
    fn2(vel) {
      document.body.style.background = `url(${this.imgUrl}) no-repeat 0/cover`
    },
  },
}
</script>
<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>
