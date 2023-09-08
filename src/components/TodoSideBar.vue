<template>
  <div id="todo-side-bar">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >

      <el-sub-menu index="1">

        <template #title>
          <el-icon><Reading /></el-icon>
          <span>待办管理</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="1-1">个人待办</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-2">个人备忘录</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-3">个人目标</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-4">个人日记</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-5">倒计时</el-menu-item>
        </el-menu-item-group>

      </el-sub-menu>

      <el-sub-menu index="2">

        <template #title>
          <el-icon><location /></el-icon>
          <span>配置中心</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="2-1">todo...</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="2-2">正在开发中...</el-menu-item>
        </el-menu-item-group>

      </el-sub-menu>




    </el-menu>

  </div>
</template>

<script setup>



</script>

<style scoped>
#todo-side-bar {
  height: 100%;
}
.el-menu {
  height: 100%;
}
</style>
