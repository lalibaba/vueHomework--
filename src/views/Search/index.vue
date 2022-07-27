<template>
  <div>
    <div class="bannel">
      <!-- 搜索 -->
      <div class="top">
        <i class="iconfont icon-back" @click="backfn"></i>
        <div class="top1">
          <div class="add">地址</div>
          <i class="iconfont icon-arrow"></i>
          <i class="iconfont icon-seach"></i>
          <input type="text" name="" id="" placeholder="请输入小区或地址" />
        </div>
        <i class="iconfont icon-map"></i>
      </div>
    </div>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value2" :options="option3" />
      <van-dropdown-item v-model="value2" :options="option4" />
    </van-dropdown-menu>

    <van-card
      v-for="(item, index) in housesList"
      :key="index"
      :price="item.price + ' 元 / 月'"
      :desc="item.desc"
      :title="item.title"
      :thumb="'http://liufusong.top:8080' + item.houseImg"
    >
      <template #tags>
        <van-tag plain type="danger">{{ item.tags }}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
import { housesApi } from '@/api'
export default {
  name: 'App',
  data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 'a',
      value4: 'a',
      option1: [
        { text: '区域', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '方式', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      option3: [
        { text: '租金', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      option4: [
        { text: '筛选', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],

      value: '',
      housesList: [],
      songList: [],

      list: [],
      loading: false,
      finished: false,

      limit: 20,
      page: 1,
      timer: null,
    }
  },
  methods: {
    backfn() {
      this.$router.push({
        path: '/Layout/Home',
      })
    },
    async gethouses() {
      try {
        const res = await housesApi()
        this.housesList = res.data.body.list
        // console.log(res.data.body.list)
      } catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.gethouses()
  },
}
</script>

<style scoped>
/* 搜索容器的样式 */
.icon-arrow {
  font-size: 16px;
  line-height: 24px;
  padding-right: 10px;
  border-right: 1px solid #000;
}
.icon-seach {
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
}
.icon-back {
  font-size: 16px;
  line-height: 24px;
  margin: 0 10px;
  color: #fff;
}
.icon-map {
  font-size: 25px;
  line-height: 24px;
  margin: 0 10px;
  color: #fff;
}
.bannel {
  background-color: #21b97a;
  height: 50px;

  position: relative;
}
.top {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 34px;

  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top1 {
  padding: 0 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  font-size: 14px;
  height: 34px;
  border-radius: 5px;
}
.add {
  line-height: 24px;
  width: 35px;
}

input {
  margin: 0 5px;
  border-color: rgba(0, 0, 0, 0);
}
</style>
