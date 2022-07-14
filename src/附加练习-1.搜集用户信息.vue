<template>
  <div id="app">
    <div>
      <span>选择所在是地区</span>
      <input type="radio" value="中国大陆" name="area" v-model="area" />中国大陆
      <input type="radio" value="中国香港" name="area" v-model="area" />中国香港
    </div>
    <div>
<span>手机号码：</span>
<input type="text" name="phone" v-model="phone">
</div>
<div>
<span>年龄: </span>
<input type="text" name="age" v-model="age">
</div>
<div>
  <span>密码：</span>
<input type="password" name="password" v-model="password">
</div>
<div>
<span>爱好：</span>
<input type="checkbox" v-model="hobby" value="看书">看书
<input type="checkbox" v-model="hobby" value="学习">学习
<input type="checkbox" v-model="hobby" value="写代码">写代码
<input type="checkbox" v-model="hobby" value="游戏">游戏
</div>
<div>
<input type="checkbox" v-model="isgrow"> 记住密码
</div>
<!-- ================================================================
<div>
我来自：{{area}}
<br>
手机号码是：{{phone}}
<br>
年龄是：{{age}}
<br>
密码是：{{password}}
<br>
爱好是：{{hobby.join(',')}}
<br>
是否记住密码：{{isgrow ? '是' : '否'}}
</div>
</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      area: "中国大陆",
      phone:'',
      age:'',
      password:"",
      hobby:[],
      isgrow:true,
    }
  },
}
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .title h4 {
      line-height: 2;
      margin: 0;
    }
    .container {
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .btn {
      /* 鼠标改成手的形状 */
      cursor: pointer;
    }
  }
}
</style>
