<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-12">
				<div class="d-flex flex-column justify-content-center align-items-center">
					<button type="button" class="btn btn-primary mx-3 my-2 col-6" @click="increment">Increment</button>
					<button type="button" class="btn btn-success mx-3 my-2 col-6" @click="decrement">Decrement</button>
					<h4 class="font-weight-bold text-gray text-center mt-3">Count: {{ $store.state.count }}</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Counter',
		methods: {
			increment() {
				this.$store.dispatch('increment', 1)
			},
			decrement() {
				this.$store.dispatch('decrement', 1)
			}
		}
	}
</script>
