<template>
  <div>
    <div
      v-for="(item, index) in arr"
      :key="index"
      :style="{ display: 'inline-Block' }"
    >
      <input type="checkbox" :value="item" v-model="a" /><span>{{ item }}</span>
    </div>
    <p>你选中的元素累加值和为{{ sum }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      a: [],
    }
  },
  computed: {
    sum() {
      return this.a.reduce((pre, curr) => {
        return curr + pre
      }, 0)
    },
  },
}
</script>
