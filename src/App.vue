<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="navbar-brand">
				<router-link exact to="/" class="text-decoration-none font-weight-bold text-light px-3"> VueJs With Vuex</router-link>
			</div>
			<ul class="navbar-nav ml-auto mr-5">
				<li>
					<router-link exact to="/" class="nav-link active"> Home </router-link>
				</li>
				<li class="nav-item">
					<router-link to="/counter" class="nav-link active">Counter</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/list" class="nav-link active">List</router-link>
				</li>
				>
			</ul>
		</nav>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>
