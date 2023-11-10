<template>
  <div id="header-logo">
    <el-image style="width: 40px; height: 40px" :src="iconUrl" :fit="fit" />
    <el-image style="width: 200px; height: 40px" :src="iconNameUrl"/>
  </div>
</template>

<script setup>
const iconUrl = require("../assets/logo.png")
const iconNameUrl = require("../assets/icon-name.png")
</script>

<style scoped>
#header-logo {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.el-image {
  margin-left: 30px;
}
</style>
