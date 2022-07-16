<!--product的静态页面，可直接复制-->
<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ info }}</p>
    <!-- 第一步子组件中绑定点击事件 -->
    <button @click="kanjia">按钮</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'info', 'index'],
  methods: {
    kanjia() {
      // 第二步设定触发事件，该事件为自定义事件，并传入需要的参数
      this.$emit('delevent', this.index)
    },
  },
}
</script>

<style scoped>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
