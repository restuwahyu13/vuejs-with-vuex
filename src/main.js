import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import vueRouter from './router'
import vueStore from './vuex/store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
	store: vueStore,
	router: vueRouter,
	render: (h) => h(App)
}).$mount('#app')
