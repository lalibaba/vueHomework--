<template>
  <tr>
    <td><input type="checkbox" v-model="obj.checked" /></td>
    <td>{{ obj.name }}</td>
    <td>{{ obj.price }}</td>
    <td>
      <button @click="jian(obj.name)">-</button> {{ obj.num }}
      <button @click="jia(obj.name)">+</button>
    </td>
    <td>{{ obj.num * obj.price }}</td>
    <td><button @click="deltr(obj.name)">删除</button></td>
  </tr>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    deltr(val) {
      this.$emit('deltr', val)
    },
    jia(val) {
      this.$emit('jia', val)
    },
    jian(val) {
      this.$emit('jian', val)
    },
  },
}
</script>
<style scoped></style>
