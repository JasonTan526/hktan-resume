<template>
	<div class="Detail_Container rounded-3 p-lg-3 mb-3 mb-lg-2 pointer" v-for="(Job, Index) in JobDetail" :key="Index">
		<div class="d-flex flex-column flex-lg-row">
			<div class="color-Normal fs-12px my-1 w-lg-25">
				{{ Job.StartDate }} ~ {{ Job.EndDate }}
			</div>
			<div class="ms-lg-3 w-lg-75">
				<div class="DetailTitle fs-6 color-Header">
					{{ Job.JobTitle }}
				</div>
				<div class="color-Normal mb-2">
					{{ Job.Company }}
				</div>
				<div class="color-Normal mb-3">
					{{ isChinese ? Job.JobDescription.zh : Job.JobDescription.en }}
				</div>
				<div class="d-flex flex-wrap gap-2">
					<div v-for="(skill, skillIndex) in Job.SkillTool" :key="skillIndex"
						class="badge rounded-pill bg-badge color-lightgreen px-3 py-2 skill-pill">
						{{ skill }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import JobDetail from '@/assets/Detail/JobDetail.json';
import { mapGetters } from 'vuex'; // Correct import

export default {
	data() {
		return {
			JobDetail: JobDetail,
		};
	},
	computed: {
		...mapGetters(['isChinese']) // Correct usage
	},
	created() {
		// Reverse the arrays immediately after they are loaded
		this.JobDetail = [...this.JobDetail].reverse();
	},
}

</script>

<style scoped>
.DetailTitle {
	transition: all 0.1s;
}

.Detail_Container:hover .DetailTitle {
	color: rgb(94 234 212) !important;
}

.skill-pill:hover {
	transform: scale(1.1);
	transition: all 0.3s;
}

/* CSS after 992 px */
@media (min-width: 992px) {
	.Detail_Container {
		transition: all 0.3s;
	}

	.Detail_Container:hover {
		background-color: rgba(30, 41, 59, .5);
		box-shadow: 0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148, 163, 184, .1);

	}
}
</style>