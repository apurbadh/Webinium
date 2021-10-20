import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, Router } from "vue-router"
import Home from "./pages/Home.vue"

const router : Router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path : "/", name: "Home", component : Home}
	]
});

createApp(App)
.use(router)
.mount('#app')
