<script setup lang="ts">
  import Navbar from "./components/Navbar.vue"
</script>

<template>
  <Navbar/>
  <h1>Webinium</h1>  
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
