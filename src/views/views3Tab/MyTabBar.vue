<template>
  <div class="my-tab-bar">
    <router-link
      v-for="(item, index) in list"
      :key="item.componentName"
      :to="item.to"
    >
      <div
        class="tab-item"
        :class="{ current: curr == index }"
        @click="changefn(index)"
      >
        <!-- 图标 -->
        <span class="iconfont" :class="item.iconText"></span>
        <!-- 文字 -->
        <span>{{ item.text }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curr: 0,
    }
  },
  methods: {
    changefn(val) {
      this.curr = val
      this.$parent.comName = this.list[val].componentName
    },
  },
  props: {
    list: {
      type: Array,
      default: () => [],
      //限制list长度在2到5之间
      validator(val) {
        if (val.length >= 2 && val.length <= 5) {
          return true
        } else {
          return false
        }
      },
    },
  },
}
</script>

<style lang="less" scoped>
a {
  list-style: none;
  text-decoration: none;
}
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}

.current {
  color: #1d7bff;
}
</style>
