<template>
	<div class="mb-4 Detail_Container rounded-3 p-lg-3">
		<div class="DetailTitle color-Header fs-16px fs-md-20px mb-1 mb-md-2 fw-bold">AI Coding</div>

		<div class="d-flex flex-wrap gap-2">
			<div v-for="(skill, skillIndex) in SkillDetail.AICoding" :key="skillIndex"
				class="badge rounded-pill bg-badge color-lightgreen px-3 py-2 pointer skill-pill">
				{{ skill }}
			</div>
		</div>
	</div>

	<div class="mb-4 Detail_Container rounded-3 p-lg-3">
		<div class="DetailTitle color-Header fs-16px fs-md-20px mb-1 mb-md-2 fw-bold">Web Coding</div>

		<div class="d-flex flex-wrap gap-2">
			<div v-for="(skill, skillIndex) in SkillDetail.WebCoding" :key="skillIndex"
				class="badge rounded-pill bg-badge color-lightgreen px-3 py-2 pointer skill-pill">
				{{ skill }}
			</div>
		</div>
	</div>

	<div class="mb-4 Detail_Container rounded-3 p-lg-3">
		<div class="DetailTitle color-Header fs-16px fs-md-20px mb-1 mb-md-2 fw-bold">Tool</div>
		<div class="d-flex flex-wrap gap-2">
			<div v-for="(skill, skillIndex) in SkillDetail.Tool" :key="skillIndex"
				class="badge rounded-pill bg-badge color-lightgreen px-3 py-2 pointer skill-pill">
				{{ skill }}
			</div>
		</div>
	</div>
</template>

<script>
import SkillDetail from '@/assets/Detail/SkillDetail.json';

export default {
	data() {
		return {
			SkillDetail: SkillDetail[0],
		}
	}
}

</script>

<style scoped>
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