export default {
	INCREMENT(state, payload) {
		state.count += payload
	},
	DECREMENT(state, payload) {
		state.count -= payload
	},
	LIST_VIEW(state, payload) {
		state.users = payload
	}
}
