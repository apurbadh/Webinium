<script lang="ts">
	export default {
		name : "Navbar"
	}
</script>
<template>
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <h1 style="color: #00C4A7; font-size: 20px"><b>Webinium</b></h1>
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
        <a class="navbar-link" to="https://bulma.io/documentation/overview/start/">
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
          <router-link class="navbar-item is-active" to="/order">
            Order
          </router-link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span class="icon">
                <i class="fab fa-facebook"></i>
              </span>
              <span>
                Facebook
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
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
		color:  #00C4A7;
	}
</style>