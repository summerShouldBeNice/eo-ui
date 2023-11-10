<template>
  <div id="root-role-manage">
    <el-card class="role-name-box-card">
      <template #header>
        <div class="role-name-card-header">
          <span>角色列表</span>
          <el-button type="primary" plain>添加</el-button>
          <el-button type="primary" plain>刷新</el-button>
          <el-button type="primary" plain disabled>保存</el-button>
        </div>
      </template>
      <div class="list-content-wrapper">
        <ul>
          <li>
            <el-text>ROLE_USER</el-text>
            <el-text class="delete-role-name">删除</el-text>
          </li>
          <li>
            <el-text>ROLE_ROOT</el-text>
            <el-text class="delete-role-name">删除</el-text>
          </li>
          <li>
            <el-text>ROLE_ADMIN</el-text>
            <el-text class="delete-role-name">删除</el-text>
          </li>
        </ul>
      </div>
    </el-card>

    <el-card class="menu-box-card">
      <template #header>
        <div class="menu-card-header">
          <span>菜单列表</span>
          <el-button type="primary" plain>添加</el-button>
          <el-button type="primary" plain>刷新</el-button>
          <el-button type="primary" plain disabled>保存</el-button>
        </div>
      </template>
      <div class="list-content-wrapper">
        <el-table :data="menuTableData" stripe style="width: 100%" >
          <el-table-column prop="id" label="编号" width="70"/>
          <el-table-column prop="menuName" label="菜单名" />
          <el-table-column prop="path" label="菜单路径" />
          <el-table-column fixed="right" label="操作" width="120">
            <template #default>
              <el-button link type="primary" size="small" @click="showDetails">详情</el-button
              >
              <el-button link type="warning" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

  </div>
</template>

<script setup>
import {ref,reactive} from "vue";

const tags = ref(5)

const menuTableData = ref([
  {
    id: 1,
    menuName: "用户登录",
    path: "post:/user/login"
  },
  {
    id: 2,
    menuName: "用户注册",
    path: "post:/user/register"
  }

])
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#root-role-manage {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
li {
  list-style: none;
}
.role-name-box-card {
  width: 400px;
}
.menu-box-card {
  width: 600px;
}
.role-name-card-header {
  /*background-color: #999;*/
}
.role-name-card-header > .el-button {
  width: 80px;
  margin-left: 10px;
}
.list-content-wrapper {
  display: flex;
  flex-direction: column;
}
.list-content-wrapper > ul > li {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-top: 5px;
}
.list-content-wrapper > ul > li:hover {
  background-color: #e3e5e7;
}
.el-text {
  font-size: 18px;
  padding-left: 15px;
}
.delete-role-name {
  font-size: 14px;
  display: none;
  padding-right: 5px;
}
.list-content-wrapper li:hover .delete-role-name{
  display: inline;
}
.menu-card-header > .el-button {
  width: 80px;
  margin-left: 10px;
}
</style>
