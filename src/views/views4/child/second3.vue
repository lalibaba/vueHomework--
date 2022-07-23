<template>
  <div>
    <ul>
      <li><router-link to="/first2/second3/thir1">第三级1</router-link></li>
      <li><router-link to="/first2/second3/thir2">第三级2</router-link></li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AA',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>
