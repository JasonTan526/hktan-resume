<template>
	<div class="w-100 row g-3">
		<div class="col-6  overflow-hidden HobbyBox" v-for="(Hobby, Index) in HobbyDetail" :key="Index">
			<div class="position-relative">
				<img class="w-100 pointer" :src="Hobby.img" alt="">
				<div
					class="position-absolute HobbyTitle d-flex justify-content-center align-items-center bottom-0 h-100 w-100 pointer">
					<div class="fw-bold fs-20px">
						{{ isChinese ? Hobby.zh : Hobby.en }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HobbyDetail from '@/assets/Detail/HobbyDetail.json';
import { mapGetters } from 'vuex'; // Correct import

export default {
	data() {
		return {
			HobbyDetail: HobbyDetail,
		};
	},
	computed: {
		...mapGetters(['isChinese']) // Correct usage
	},
}

</script>

<style scoped>
.HobbyBox:hover .HobbyTitle {
	transform: translateY(0%);
}

.HobbyTitle {
	inset: 0;
	transform: translateY(100%);
	background-color: rgba(0, 0, 0, 0.7);
	color: rgb(94 234 212);
	transition: 0.3s all;
}
</style>