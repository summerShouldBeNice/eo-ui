<template>
  <div id="user-info">
    <el-popover placement="left" :width="300" trigger="click">
      <template #reference>
        <el-avatar :size="50" :src="defaultAvatar" />
      </template>
      <el-container>
        <el-header>
          <el-avatar :size="70" :src="defaultAvatar" />
          <div class="userinfo-wrapper">
            <el-text class="username-wrapper">warmwind</el-text>
            <el-text class="role-wrapper">普通用户</el-text>
          </div>
        </el-header>
        <el-main>
          <ul class="user-func-list">
            <li>
              <el-icon :size="popoverSize" class="popover-left-icon"><User /></el-icon>
              <el-text>个人中心</el-text>
              <el-icon :size="popoverSize"><ArrowRight /></el-icon>
            </li>
            <li>
              <el-icon :size="popoverSize" class="popover-left-icon"><Setting /></el-icon>
              <el-text>我的设置</el-text>
              <el-icon :size="popoverSize" ><ArrowRight /></el-icon>
            </li>
            <li>
              <el-icon :size="popoverSize" class="popover-left-icon"><Reading /></el-icon>
              <el-text>帮助中心</el-text>
              <el-icon :size="popoverSize"><ArrowRight /></el-icon>
            </li>
            <li>
              <el-icon :size="popoverSize" class="popover-left-icon"><SwitchButton /></el-icon>
              <el-text>退出登录</el-text>
              <el-icon :size="popoverSize"><ArrowRight /></el-icon>
            </li>
          </ul>
        </el-main>
      </el-container>
    </el-popover>


    <el-badge :value="12" class="item">
      <!--<el-button>消息</el-button>-->
      <el-text>消息</el-text>
    </el-badge>
    <el-text>
      历史
    </el-text>
    <el-text>
      帮助
    </el-text>
    <el-button style="width: 70px">发布</el-button>
  </div>
</template>

<script setup>
import {ref} from "vue";

const defaultAvatar = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')

const popoverSize = 20

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#user-info {
  width: 100%;
  height: 100%;
  /*background-color: #999;*/
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.el-header {
  display: flex;
  height: 70px;
  flex-direction: row;
  align-items: center;
}
.userinfo-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.username-wrapper {
  font-size: 22px;
}
.role-wrapper {
  margin-top: 5px;
}
.el-main .el-text {
  width: 240px;
  height: 40px;
  /*background-color: #444;*/
  margin-top: 10px;
  font-size: 17px;
  /*line-height: 36px;*/
  margin-top: 20px;
  text-align: center;
  /*margin-top: 4px;*/
  border-radius: 5px;
}

.user-func-list li {
  list-style: none;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-func-list li:hover {
  background-color: #e3e5e7;
}
.popover-left-icon {
  margin-left: 15px;
}
</style>
