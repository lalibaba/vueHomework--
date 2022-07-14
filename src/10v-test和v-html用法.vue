<template>
 
  <div>
    <h1 v-html="str"></h1>
    <h1 v-text="str"></h1>
    <h1 v-text="str1">1213{{ str1 }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: '<span>88888</span>',
      str1: '888',
    }
  },
}
</script>

<style></style>
