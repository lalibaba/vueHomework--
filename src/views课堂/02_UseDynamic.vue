<template>
  <div>
    <button @click="comName = 'UserInfo'">账号密码填写UserInfo</button>
    <button @click="comName = 'UserName'">个人信息填写UserName</button>

    <p>下面显示注册组件-动态切换:</p>
    <div style="border: 1px solid red">
      <!-- 对应的内容显示在这儿 -->
      <keep-alive exclude="UserInfo">
        <!-- include="组件名"--包含在内的被缓存  exclude="组件"--除该组件其他的都被缓存 -->
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UserInfo from '../components/02/UserInfo.vue'
import UserName from '../components/02/UserName.vue'
export default {
  data() {
    return {
      comName: 'UserInfo',
    }
  },
  components: {
    UserInfo,
    UserName,
  },
}
</script>
