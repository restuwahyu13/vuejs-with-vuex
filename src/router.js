import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import ListView from './components/ListView.vue'
import Counter from './components/Counter.vue'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			name: 'home',
			path: '/',
			component: Home
		},
		{
			name: 'listview',
			path: '/list',
			component: ListView
		},
		{
			name: 'counter',
			path: '/counter',
			component: Counter
		}
	]
})
