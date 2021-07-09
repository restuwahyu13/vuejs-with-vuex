import axios from 'axios'

export default {
	state: {
		count: 0,
		users: []
	},
	type: {
		increment(action, payload) {
			action.commit('INCREMENT', payload)
		},
		decrement(action, payload) {
			action.commit('DECREMENT', payload)
		},
		async listview({ commit }) {
			try {
				const res = await axios.get('https://jsonplaceholder.typicode.com/users')
				commit('LIST_VIEW', res.data)
			} catch (err) {
				throw new Error(err)
			}
		}
	}
}
