<script setup lang="ts">
  import Navbar from "./components/Navbar.vue"
  import Upper from './components/Upper/Upper.vue'
  import First from './components/MIddle/First/First.vue'
  import Second from './components/MIddle/Second/Second.vue'
</script>

<template>
  <Navbar/>
  <br>
  <Upper/>
  <First/>
  <Second/>
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
