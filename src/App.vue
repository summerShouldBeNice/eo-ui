<template>
  <div id="app">
    <!--<InitWelcome />-->
    <!--<TodoHome/>-->
    <PasswordHome></PasswordHome>
  </div>
</template>

<script setup>
  // import InitWelcome from './components/InitWelcome.vue'
  // import TodoHome from "@/views/TodoHome/TodoHome.vue";
import PasswordHome from "@/views/PasswordHome/PasswordHome.vue";
</script>

<style>
/*重置样式*/
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
