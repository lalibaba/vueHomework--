<template>
  <div>
    <div class="content">
      <img :src="obj.dogImgUrl" alt="" />
      <p @click="likefn" :style="{ backgroundColor: Style }">
        {{ obj.dogName }}
      </p>
    </div>
  </div>
</template>
<script>
// import imgurl from './asset/dog.jpg'
export default {
  data() {
    return {
      col: ['red', 'green', 'yellow', 'blue', 'yellow'],
      Style: '',
    }
  },
  methods: {
    likefn() {
      this.Style = this.col[Math.floor(Math.random() * 5)]
      this.$emit('likedog', this.obj.dogName)
    },
  },
  props: {
    obj: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>
<style scoped>
.content {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}
img {
  width: 100%;
  height: 200px;
}
p {
  height: 40px;
  font-style: 24px;
  line-height: 40px;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
}
</style>
