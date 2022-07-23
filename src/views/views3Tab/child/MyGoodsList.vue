<template>
  <div>
    <div>
      <MyTable :goodList="list">
        <template #title>
          <th>序号</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>标签</th>
          <th>操作</th>
        </template>
        <template #content="scoped">
          <td>{{ scoped.row.id }}</td>
          <td>{{ scoped.row.goods_name }}</td>
          <td>{{ scoped.row.goods_price }}</td>
          <td>
            <input
              v-gfocus
              type="text"
              class="tag-input form-control"
              style="width: 100px"
              v-if="scoped.row.inputVisible"
              @blur="scoped.row.inputVisible = false"
              v-model="scoped.row.inputValue"
              @keyup.enter="enterfn(scoped.row)"
              @keyup.esc="scoped.row.inputVisible = false"
            />
            <button
              @click="scoped.row.inputVisible = !scoped.row.inputVisible"
              v-else
              class="btn btn-primary btn-sm add-tag"
            >
              +Tag
            </button>
            <span
              class="badge badge-warning"
              style="margin-left: 8px"
              v-for="(item, index) in scoped.row.tags"
              :key="index"
            >
              {{ item }}
            </span>
          </td>
          <td>
            <button
              @click="delfn(scoped.row.id)"
              type="button"
              class="btn btn-warning"
            >
              删除
            </button>
          </td>
        </template>
      </MyTable>
    </div>
  </div>
</template>

<script>
import MyTable from '../../views3Tab/MyTable.vue'
export default {
  data() {
    return {
      list: [],
    }
  },
  components: {
    MyTable,
  },
  methods: {
    delfn(id) {
      let index = this.list.findIndex((ele) => ele.id === id)
      this.list.splice(index, 1)
    },
    enterfn(val) {
      if (val.inputValue.trim() == '') {
        val.inputValue = ''
        return alert('添加成功')
      } else {
        val.tags.push(val.inputValue)
        val.inputValue = ''
      }
    },
  },
  created() {
    this.$axios({
      url: '/api/goods',
    })
      .then((res) => {
        console.log(res.data.data)
        this.list = res.data.data
      })
      .catch((err) => console.log(err))
  },
}
</script>

<style lang="less" scoped></style>
