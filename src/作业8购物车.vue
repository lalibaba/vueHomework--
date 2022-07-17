<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isAll" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <trtd
          v-for="(item, index) in goodList"
          :key="index"
          :obj="item"
          :index="index"
          @deltr="deltr"
          @jia="jia"
          @jian="jian"
        ></trtd>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">{{ total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import trtd from './components/trtd.vue'
export default {
  data() {
    return {
      goodList: [
        {
          name: '诸葛亮',
          price: 1000,
          num: 1,
          checked: true,
        },
        {
          name: '蔡文姬',
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: '妲己',
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: '鲁班',
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    }
  },
  computed: {
    total() {
      // var sum = 0
      // // return sum
      // this.goodList.forEach(function (ele) {
      //   if (ele.checked) sum = sum + ele.price * ele.num
      // })
      // return sum
      return this.goodList.reduce((pre, curr) => {
        if (curr.checked) {
          return pre + curr.num * curr.price
        } else {
          return pre
        }
      }, 0)
    },
    isAll: {
      set(val) {
        // 7. 全选框 - 选中状态(true/false)
        this.goodList.forEach((obj) => (obj.checked = val))
      },
      get() {
        // 6. 统计小选框状态 ->  全选状态
        // every口诀: 查找数组里"不符合"条件, 直接原地返回false
        return this.goodList.every((obj) => obj.checked === true)
      },
    },
  },
  methods: {
    deltr(val) {
      let index = this.goodList.findIndex((ele) => ele.name == val)
      this.goodList.splice(index, 1)
    },
    jia(val) {
      let index = this.goodList.findIndex((ele) => ele.name == val)
      this.goodList[index].num++
    },
    jian(val) {
      let index = this.goodList.findIndex((ele) => ele.name == val)
      this.goodList[index].num--
    },
  },
  components: {
    trtd,
  },
}
</script>

<style></style>
