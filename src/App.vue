<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  margin: 5px;
}
.plugins {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
