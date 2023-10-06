<template>
  <div id="todo">
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
        <el-aside width="300px">
          <TodoSideBar></TodoSideBar>
        </el-aside>
        <el-main>
          <!--<el-empty description="description" />-->
          <!--<PersonalTodo></PersonalTodo>-->
          <!--<PersonalTarget></PersonalTarget>-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>

import TodoSideBar from "@/components/TodoSideBar.vue";
import UserInfo from "@/components/UserInfo.vue";
// import PersonalTodo from "@/views/TodoHome/PersonalTodo.vue";
// import PersonalTarget from "@/views/TodoHome/PersonalTarget.vue";

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#todo {
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
