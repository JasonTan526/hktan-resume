<template>
	<div class="Detail_Container rounded-3 p-lg-3 mb-3 mb-lg-2 pointer" v-for="(Education, Index) in EducationDetail"
		:key="Index">
		<!-- <a class="d-flex flex-column flex-lg-row text-decoration-none" :href="Education.Link" target="_blank"> -->
		<div class="d-flex flex-column flex-lg-row text-decoration-none">
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

				<div>
					<p class="d-inline-flex gap-2">
						<button class="btn btn-sm border-lightgreen color-lightgreen" type="button"
							data-bs-toggle="collapse" :data-bs-target="'#collapse' + Index" aria-expanded="false"
							:aria-controls="'collapse' + Index">
							{{ $t('readmore') }}
						</button>

						<a :href="Education.Link" target="_blank">
							<button class="btn btn-sm border-lightgreen color-lightgreen" type="button">
								{{ $t('learnmore') }}
							</button>
						</a>
					</p>

					<div class="collapse border-lightgreen color-Header rounded-3" :id="'collapse' + Index">
						<div class="card card-body bg-Normal fs-14px">
							{{ isChinese ? Education.Description.zh : Education.Description.en }}
						</div>
					</div>
				</div>
			</div>
		</div>
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
};
</script>


<style scoped>
.DetailTitle {
	transition: all 0.1s;
}

.Detail_Container:hover .DetailTitle {
	color: rgb(94 234 212) !important;
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