<template>
  <div id="root-side-bar">
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
          <span>用户中心</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="1-1">用户管理</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-2">权限管理</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-3">角色管理</el-menu-item>
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

      <el-sub-menu index="3">

        <template #title>
          <el-icon><location /></el-icon>
          <span>组件中心</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="3-1">组件管理</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="3-2">路由管理</el-menu-item>
        </el-menu-item-group>

      </el-sub-menu>

      <el-button>nacos</el-button>

      <el-button>mq</el-button>




    </el-menu>

  </div>
</template>

<script setup>



</script>

<style scoped>
#root-side-bar {
  height: 100%;
}
.el-menu {
  height: 100%;
}
</style>
