<template>
  <div id="root">
    <el-container>
      <el-header>

        <el-row>
          <el-col :span="8">
            <div class="logo">
              el-header
            </div>
          </el-col>
          <el-col :span="8">

          </el-col>
          <el-col :span="8">
            <UserInfo/>
          </el-col>
        </el-row>

      </el-header>
      <el-container>
        <el-aside width="100%">
          <RootSideBar></RootSideBar>
        </el-aside>
        <el-main>
          <RootUserManage></RootUserManage>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import RootSideBar from "@/components/RootSideBar.vue";
import UserInfo from "@/components/UserInfo.vue";
import RootUserManage from "@/views/RootHome/RootUserManage.vue";


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#root {
  height: 100%;
  background-color: #fff;
}
.el-header {
  border-bottom: 1px solid #f4f6f9;
}
.el-container {
  height: 100%;
}
.el-aside {
  /*height: 100%;*/
  width: 300px;
  /*background-color: #999;*/
}
.el-main {
  height: 100%;
  background-color: #f4f6f9;
}
.el-empty {
  background-color: #fff;
  margin: 10px;
  height: 100%;
}
</style>
