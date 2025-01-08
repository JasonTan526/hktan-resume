<template>
	<!-- <div class="mouse-effect position-absolute rounded-circle"
		:style="{ left: (x - 300) + 'px', top: (y - 300) + 'px' }">
	</div> -->

	<div class="w-full py-5 px-3 px-md-5 py-xl-0">
		<div class="w-full d-flex flex-colum">
			<div>

			</div>

			<div>

			</div>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			x: 0,
			y: 0,
		};
	},
	methods: {
		update(event) {
			this.x = event.pageX;
			this.y = event.pageY;
		},
	},
	mounted() {
		window.addEventListener('mousemove', this.update);
	},
	beforeDestroy() {
		window.removeEventListener('mousemove', this.update);
	},
};
</script>

<style scoped>
.mouse-effect {
	pointer-events: none;
	transition: all 0.1s ease-out;
	width: 600px;
	height: 600px;
	background: radial-gradient(rgba(29, 78, 216, 0.15), transparent 80%);
	filter: blur(20px);
}
</style>
