<script lang="ts">
	export default {
		name : "Navbar"
	}
</script>
<template>
<nav class="navbar is-white">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <h1 style="color: #042454; font-size: 20px"><b>Webinium</b></h1>
    </router-link>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" to="https://bulma.io/">
        Home
      </router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          Pages
        </a>
        <div class="navbar-dropdown is-boxed">
          <router-link class="navbar-item" to="/team">
            Team
          </router-link>
          <router-link class="navbar-item" to="/about">
            About
          </router-link>
          <router-link class="navbar-item" to="/contact">
            Contact
          </router-link>
          <hr class="navbar-divider">
          <router-link class="navbar-item" to="/order">
            Order
          </router-link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a style="color: #042454" class="bd-tw-button button" target="_blank" href="https://www.facebook.com/Webinium-103348078810128/" >
              <span class="icon">
                <i class="fab fa-facebook"></i>
              </span>
              <span>
                Facebook
              </span>
            </a>
          </p>
          <p class="control">
            <a style="background: #042454;" class="button is-primary" href="https://www.instagram.com/webinium352/" target="__blank">
              <span class="icon">
                <i class="fab fa-instagram"></i>
              </span>
              <span>Instagram</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>      
</template>
<style scoped>
	a:hover{
		color: #042454;
	}
</style>