<!--product的静态页面，可直接复制-->
<template>
  <div class="my-product">
    <h3 :style="{ color: 'green' }">标题: {{ obj.proname }}</h3>
    <p>价格: {{ obj.proprice }}元</p>
    <p>{{ obj.info }}</p>
    <button @click="kanjia">按钮</button>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      required: true,
      default: () => ({}), //设置默认值返回空对象
    },
  },
  methods: {
    kanjia() {
      this.obj.proprice--
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
