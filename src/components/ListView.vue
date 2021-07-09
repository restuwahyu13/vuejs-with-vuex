<template>
	<div class="container mt-5">
		<div class="row ">
			<h4 v-if="loading">Loading...</h4>
			<div class="col-12" v-if="$store.state.users.length > 0" :style="{ display: !loading ? 'block' : 'none' }">
				<h2><u>From Store</u></h2>
				<ul v-for="(v, i) in $store.state.users" :key="i" class="nav">
					<li class="nav-item py-2"><strong>Name:</strong> {{ v.name }} - {{ v.email }}</li>
				</ul>
			</div>
			<div class="col-12 mt-5" v-if="users.length > 0" :style="{ display: !loading ? 'block' : 'none' }">
				<h2><u>Not From Store</u></h2>
				<ul v-for="(v, i) in users" :key="i" class="nav">
					<li class="nav-item py-2"><strong>Name:</strong> {{ v.name }} - {{ v.email }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ListView',
		data() {
			return {
				users: [],
				loading: true
			}
		},
		mounted() {
			this.fetchUsers()
			this.fetchUsersStore()
		},
		methods: {
			async fetchUsers() {
				const res = await this.$axios.get('https://jsonplaceholder.typicode.com/users')
				this.users = res.data
				if (res.data) setTimeout(() => (this.loading = false), 1500)
			},
			async fetchUsersStore() {
				this.$store.dispatch('listview')
			}
		}
	}
</script>
