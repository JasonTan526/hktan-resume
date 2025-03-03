<template>
	<div class="Detail_Container rounded-3 p-lg-3 mb-3 mb-lg-2 pointer" v-for="(Reference, Index) in ReferenceDetail"
		:key="Index">
		<div class="d-flex flex-column flex-lg-row">
			<div class="ms-lg-3 w-100">
				<div class="DetailTitle fs-18px fw-bold color-Header">
					{{ Reference.Name }}
				</div>
				<div class="color-Normal mb-2">
					{{ Reference.PositionTitle }}
				</div>
				<div class="color-Normal mb-3">
					{{ Reference.Email }}
				</div>
				<div class="color-Normal mb-3">
					{{ Reference.Contact }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ReferenceDetail from '@/assets/Detail/ReferenceDetail.json';

export default {
	data() {
		return {
			ReferenceDetail: ReferenceDetail,
		};
	}
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