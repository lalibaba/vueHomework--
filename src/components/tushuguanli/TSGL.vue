<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div style="display: flex">
        <h4>图书管理</h4>
        <h5 v-show="isShow" style="color: #ccc">
          &nbsp;&nbsp;正在请求请稍等...
        </h5>
      </div>

      <div class="form-group">
        <div class="input-group">
          <div class="form-group">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="搜索书名"
                v-model="searchBook"
                @keydown.enter="searchbook"
              />
              <button class="btn btn-primary" @click="searchbook">搜索</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 添加书籍 -->
      <form class="form-inline" style="display: flex; margin-top: 8px">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="书名"
              v-model="newbookObj.bookname"
              :readonly="read"
              @click="read = false"
            />
          </div>
        </div>
        &nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="作者"
              v-model="newbookObj.author"
              :readonly="read"
              @click="read = false"
            />
          </div>
        </div>
        &nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="出版社"
              v-model="newbookObj.publisher"
              :readonly="read"
              @click="read = false"
            />
          </div>
        </div>
        <!-- &nbsp;&nbsp;&nbsp;&nbsp; -->
        <!-- 阻止表单提交 -->
        &nbsp;&nbsp;
        <button class="btn btn-primary" @click.prevent="addBook" v-show="!read">
          新增
        </button>
      </form>
      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>序号</th>
            <th>书名</th>
            <th>作者</th>
            <th>出版商</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataArr" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.bookname }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.publisher }}</td>
            <td>
              <a href="javascript:;" @click="delbook(item.id)">删除</a
              >&nbsp;&nbsp;
              <a href="javascript:;" @click="bookinfo(item.id)">详情</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      read: false,
      searchBook: '',
      newbookObj: {
        bookname: '',
        author: '',
        publisher: '',
      },
      isShow: false,
    }
  },
  props: {
    dataArr: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    //更新书籍
    updateBook() {
      this.$axios({
        url: '/api/getbooks',
      }).then((res) => {
        this.$parent.list = res.data.data
        // console.log(res)
      })
    },
    //搜索书籍
    searchbook() {
      if (!this.searchBook.trim()) return alert('请输入书名')
      this.isShow = true
      this.$parent
        .$axios({
          method: 'GET',
          url: '/api/getbooks',
          params: {
            bookname: this.searchBook.trim(),
          },
        })
        .then((res) => {
          this.isShow = false
          // console.log(res)
          if (res.data.data.length === 0) return alert('没有该数书')
          this.$parent.list = res.data.data
        })
    },
    //添加书籍
    addBook() {
      // this.read = false
      // 获取指定范围内的随机数
      function randomAccess(min, max) {
        return Math.floor(Math.random() * (min - max) + max)
      }
      function decodeUnicode(str) {
        str = '\\u' + str
        str = str.replace(/\\/g, '%')
        str = unescape(str)
        str = str.replace(/%/g, '\\')
        return str
      }
      function getRandomName(NameLength) {
        let name = ''
        for (let i = 0; i < NameLength; i++) {
          let unicodeNum = ''
          unicodeNum = randomAccess(0x4e00, 0x9fa5).toString(16)
          name += decodeUnicode(unicodeNum)
        }
        return name
      }
      this.newbookObj.bookname = 'yyds' + getRandomName(1)
      this.newbookObj.author = 'yyds'
      this.newbookObj.publisher = 'yyds' + getRandomName(1)
      if (!this.newbookObj.bookname.trim()) return alert('书名不能为空')
      if (!this.newbookObj.author.trim()) return alert('作者不能为空')
      if (!this.newbookObj.publisher.trim()) return alert('出版社不能为空')
      this.isShow = true
      this.$parent
        .$axios({
          method: 'POST',
          url: '/api/addbook',
          data: {
            appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
            ...this.newbookObj,
          },
        })
        .then((res) => {
          this.isShow = false
          // alert(res.data.msg)
          this.updateBook() //更新书籍
        })
    },
    //删除书籍
    delbook(val) {
      this.isShow = true
      this.$parent
        .$axios({
          method: 'GET',
          url: '/api/delbook',
          params: {
            id: val,
          },
        })
        .then((res) => {
          this.isShow = false
          alert(res.data.msg)
          this.updateBook()
          // let index = this.$parent.list.findIndex((ele) => ele.id == val)
          // this.$parent.list.splice(index, 1)
        })
    },
    bookinfo(val) {
      this.read = true
      let index = this.$parent.list.findIndex((ele) => ele.id == val)
      this.newbookObj.bookname = this.$parent.list[index].bookname
      this.newbookObj.author = this.$parent.list[index].author
      this.newbookObj.publisher = this.$parent.list[index].publisher
    },
  },
}
</script>

<style>
.red {
  color: red;
}
</style>
