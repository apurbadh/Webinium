<script setup lang="ts">
  import Navbar from "./components/Navbar.vue"
  import Upper from './components/Upper/Upper.vue'
  import First from './components/MIddle/First/First.vue'
</script>

<template>
  <Navbar/>
  <Upper/>
  <First/> 
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
