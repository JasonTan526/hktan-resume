<template>
	<div class="Detail_Container rounded-3 p-lg-3 mb-3 mb-lg-2 pointer" v-for="(Education, Index) in EducationDetail"
		:key="Index">
		<a class="d-flex flex-column flex-lg-row text-decoration-none" :href="Education.Link" target="_blank">
			<div class="color-Normal fs-12px my-1 w-lg-25">
				{{ Education.StartDate }} ~ {{ Education.EndDate }}
			</div>
			<div class="ms-lg-3 w-lg-75">
				<div class="DetailTitle fs-6 color-Header">
					{{ Education.CourseName }}
				</div>
				<div class="color-Normal mb-2">
					{{ Education.SchoolName }}
				</div>
				<div class="color-Normal">
					{{ isChinese ? Education.Description.zh : Education.Description.en }}
				</div>
			</div>
		</a>

	</div>
</template>

<script>
import EducationDetail from '@/assets/Detail/EducationDetail.json';
import { mapGetters } from 'vuex'; // Correct import

export default {
	data() {
		return {
			EducationDetail: EducationDetail,
		};
	},
	computed: {
		...mapGetters(['isChinese']) // Correct usage
	},
	created() {
		// Reverse the arrays immediately after they are loaded
		this.EducationDetail = [...this.EducationDetail].reverse();
	},
	mounted() {
		console.log(this.isChinese); // Use 'this' to access computed properties
	}
};
</script>
