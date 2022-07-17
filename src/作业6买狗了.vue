<template>
  <div id="app">
    <dog v-for="(item, index) in list" :key="index" :obj="item"></dog>
  </div>
</template>
<script>
import dog from './components/dogceil.vue'
export default {
  data() {
    return {
      list: [
        {
          dogImgUrl:
            'http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg',
          dogName: '博美',
        },
        {
          dogImgUrl:
            'https://img0.baidu.com/it/u=3465699022,2509026331&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1658163600&t=b2eda6b0e17784753f7ce211d84bfb4c',
          dogName: '泰迪',
        },
        {
          dogImgUrl:
            'https://img2.baidu.com/it/u=1847655973,1103091453&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1658163600&t=8624eb3eb1d94a4014aae4a3c898aeb7',
          dogName: '金毛',
        },
        {
          dogImgUrl:
            'https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c',
          dogName: '哈士奇',
        },
        {
          dogImgUrl:
            'https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c',
          dogName: '阿拉斯加',
        },
        {
          dogImgUrl:
            'https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c',
          dogName: '萨摩耶',
        },
      ],
    }
  },
  components: {
    dog,
  },
}
</script>
<style>
#app {
  width: 700px;
  float: left;
  overflow: hidden;
}
</style>
