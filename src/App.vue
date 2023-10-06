<template>
  <div id="app">
    <!--<InitWelcome />-->
    <!--<TodoHome/>-->
    <!--<PasswordHome/>-->
    <!--<RootHome></RootHome>-->
    <router-view></router-view>
  </div>
</template>

<script setup>
  // import InitWelcome from './components/InitWelcome.vue'
  // import TodoHome from "@/views/TodoHome/TodoHome.vue";
  // import RootHome from "@/views/RootHome/RootHome.vue";
  // import PasswordHome from "@/views/PasswordHome/PasswordHome.vue";
</script>

<style>
/*重置样式*/
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
