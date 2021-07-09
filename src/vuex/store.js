import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import mutation from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
	state: { ...action.state },
	actions: { ...action.type },
	mutations: { ...mutation }
})
