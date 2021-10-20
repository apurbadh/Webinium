import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, Router } from "vue-router"
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Contact from "./pages/Contact.vue"
import Team from "./pages/Team.vue"
import Order from "./pages/Order.vue"

const router : Router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path : "/", name: "Home", component : Home },
		{ path : "/about", name: "About", component : About },
		{ path : "/contact", name : "Contact", component : Contact },
		{ path : "/team", name : "Team", component : Team },
		{ path : '/order', name : "Order", component : Order }
	]
});

createApp(App)
.use(router)
.mount('#app')
