<template>
  <div>
    <h3>{{ msg }}</h3>
    <h2>{{ obj.name }}</h2>
    <h2>{{ obj.age }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data () {
    return {
      msg: "我是msg展示页面",
      obj: {
        name: "test",
        age: 18,
      },
    }
  },
}
</script>

<style></style>
