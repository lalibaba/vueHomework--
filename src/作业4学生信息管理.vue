<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="fix(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    del(index) {
      this.list.splice(index, 1)
    },
    add() {
      console.log(this.tag)
      if (this.tag == 1) {
        if (this.name.trim() && this.age != 0 && this.sex) {
          this.list[this.ind].name = this.name
          this.list[this.ind].age = this.age
          this.list[this.ind].sex = this.sex
          this.tag = 0
          this.name = ''
          this.age = ''
          this.sex = ''
        } else {
          alert('必须都有值才能增加新数据')
        }
      } else if (this.name.trim() && this.age != 0 && this.sex) {
        this.list.push({ name: this.name, age: this.age, sex: this.sex })
        this.name = ''
        this.age = ''
        this.sex = ''
      } else {
        alert('必须都有值才能增加新数据')
      }
    },
    fix(val) {
      this.tag = 1
      this.name = this.list[val].name
      this.age = this.list[val].age
      this.sex = this.list[val].sex
      this.ind = this.list.findIndex((ele) => ele.name == this.name)
    },
  },
  data() {
    return {
      ind: null,
      tag: 0,
      name: '',
      age: 0,
      sex: '',
      list: [
        { name: '川岛芳子', age: 18, sex: '男' },
        { name: '二大爷', age: 60, sex: '男' },
      ],
    }
  },
}
</script>
