<template>
  <div>
    <div class="top">
      <router-link to="/first1">UI_Route</router-link>&nbsp;
      <router-link to="/first2">Contacts</router-link>&nbsp;
      <router-link to="/first3">About</router-link>&nbsp;
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
.router-link-active {
  color: red !important;
}
.router-link-exact-active {
  color: red !important;
}
</style>
