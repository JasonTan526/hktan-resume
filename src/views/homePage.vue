<template>

	<!-- <div class="mouse-effect position-absolute rounded-circle"
		:style="{ left: (x - 300) + 'px', top: (y - 300) + 'px' }">
	</div> -->

	<div class="w-full py-5 px-3 px-md-5 py-lg-0">
		<div class="w-full d-flex flex-column max-w-xl min-vh-100 mx-auto main_container position-relative flex-lg-row">
			<div class="w-lg-48 py-lg-10 vh-lg-100 sticky-lg-top">
				<div class="h-lg-100 d-flex flex-column justify-content-between">
					<div>
						<h1 class="fw-bold color-Header mb-0">
							Jason Tan Heng Kern
						</h1>
						<h6 class="color-Normal mt-3 mb-0">
							{{ $t('Icanbe') }} <b class="color-Header">{{ $t('Job1') }}</b> {{ $t('or') }} <b
								class="color-Header">{{ $t('Job2') }}</b>
						</h6>

						<p class="color-Normal mt-4 mb-0" style="max-width: 30rem; min-height: 80px;">
							{{ $t('short-description') }}
						</p>

						<div id="scrollspy" class="d-lg-flex flex-column gap-3 mt-5" data-bs-spy="scroll"
							data-bs-target="#scrollspy" data-bs-offset="100" tabindex="0" style="display: none;">
							<div v-for="item in ['about', 'education', 'experience', 'skill', 'project', 'hobby', 'reference']"
								:key="item"
								:class="['text-uppercase fw-bold pointer contentTitle user-select-none transition-all d-flex align-items-center', { active: activeItem === item }]"
								:style="getItemStyle(item)" @click="scrollToSection(item)">
								<!-- Tail element before the text -->
								<span :style="getTailStyle(item)" class="item-tail"></span>
								{{ getItemText(item) }}
							</div>
						</div>
					</div>

					<div>
						<div class="d-flex flex-column">
							<div>
								<div class="form-check form-switch">
									<input class="form-check-input pointer" type="checkbox" role="switch"
										id="flexSwitchCheckChecked" v-model="isZH" @change="toggleLocale">
									<label class="form-check-label color-Header fw-bold pointer user-select-none"
										for="flexSwitchCheckChecked">
										{{ isZH ? '中文' : 'EN' }}</label>
								</div>
							</div>

							<div class="d-flex gap-3 mt-4">
								<a href="https://github.com/JasonTan526" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
										class="h-6 w-6 contact_icon pointer" aria-hidden="true">
										<path
											d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
										</path>
									</svg>
								</a>

								<a href="https://www.linkedin.com/in/jason-heng-kern-tan-1271932a2/" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
										class="h-6 w-6 contact_icon pointer" aria-hidden="true">
										<path
											d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
										</path>
									</svg>
								</a>

								<a href="https://www.instagram.com/jaaaaaaaaaaaason/" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"
										class="h-6 w-6 contact_icon pointer" aria-hidden="true">
										<path
											d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34">
										</path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="w-lg-50 py-10 ms-auto">
				<div class="pb-5">
					<h6 class=" text-uppercase color-Header fw-bold sticky-top mb-0 py-4 bg-Normal-75-blur d-lg-none">
						about
					</h6>

					<div id="about">
						<p class="color-Normal">
							Dedicated and enthusiastic person who has recently completed a four-year study program in
							<b class="color-Header"> Computer Engineering</b>,
							specialising in
							<b class="color-Header"> Artificial Intelligence</b>,
							at UCSI University.
						</p>
					</div>

				</div>

				<div class="pb-5">
					<h6 class="text-uppercase color-Header fw-bold sticky-top mb-0 py-4 bg-Normal-75-blur d-lg-none">
						education
					</h6>

					<div id="education">
						<div class="Detail_Container rounded-3 p-lg-3 mb-3 mb-lg-2 pointer"
							v-for="(Education, Index) in EducationDetail" :key="Index">
							<a class="d-flex flex-column flex-lg-row text-decoration-none" :href="Education.Link"
								target="_blank">
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
										{{ isZH ? Education.Description.zh : Education.Description.en }}
									</div>
								</div>
							</a>

						</div>
					</div>
				</div>

				<div class="pb-5">
					<h6 class="text-uppercase color-Header fw-bold sticky-top mb-0 py-4 bg-Normal-75-blur d-lg-none">
						experience
					</h6>

					<div id="experience">
						<div class="Detail_Container rounded-3 p-lg-3 mb-3 mb-lg-2 pointer"
							v-for="(Job, Index) in JobDetail" :key="Index">
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
										{{ isZH ? Job.JobDescription.zh : Job.JobDescription.en }}
									</div>
									<div class="d-flex flex-wrap gap-2">
										<div v-for="(skill, skillIndex) in Job.SkillTool" :key="skillIndex"
											class="badge rounded-pill bg-badge color-lightgreen px-3 py-2">
											{{ skill }}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="pb-5">
					<h6 class="text-uppercase color-Header fw-bold sticky-top mb-0 py-4 bg-Normal-75-blur d-lg-none">
						skill
					</h6>

					<div id="skill">
						<p class="color-Normal">
							Dedicated and enthusiastic person who has recently completed a four-year study program in
							<b class="color-Header"> Computer Engineering</b>,
							specialising in
							<b class="color-Header"> Artificial Intelligence</b>,
							at UCSI University.
						</p>
					</div>
				</div>

				<div class="pb-5">
					<h6 class="text-uppercase color-Header fw-bold sticky-top mb-0 py-4 bg-Normal-75-blur d-lg-none">
						project
					</h6>

					<div id="project">
						<p class="color-Normal">
							Dedicated and enthusiastic person who has recently completed a four-year study program in
							<b class="color-Header"> Computer Engineering</b>,
							specialising in
							<b class="color-Header"> Artificial Intelligence</b>,
							at UCSI University.
						</p>
					</div>
				</div>

				<div class="pb-5">
					<h6 class="text-uppercase color-Header fw-bold sticky-top mb-0 py-4 bg-Normal-75-blur d-lg-none">
						hobby
					</h6>

					<div id="hobby">
						<p class="color-Normal">
							Dedicated and enthusiastic person who has recently completed a four-year study program in
							<b class="color-Header"> Computer Engineering</b>,
							specialising in
							<b class="color-Header"> Artificial Intelligence</b>,
							at UCSI University.
						</p>
					</div>
				</div>

				<div class="pb-5">
					<h6 class="text-uppercase color-Header fw-bold sticky-top mb-0 py-4 bg-Normal-75-blur d-lg-none">
						reference
					</h6>

					<div id="reference">
						<p class="color-Normal">
							Dedicated and enthusiastic person who has recently completed a four-year study program in
							<b class="color-Header"> Computer Engineering</b>,
							specialising in
							<b class="color-Header"> Artificial Intelligence</b>,
							at UCSI University.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import JobDetail from '@/assets/Detail/JobDetail.json';
import EducationDetail from '@/assets/Detail/EducationDetail.json';
import HobbyDetail from '@/assets/Detail/HobbyDetail.json';
import SkillDetail from '@/assets/Detail/SkillDetail.json';
import ReferenceDetail from '@/assets/Detail/ReferenceDetail.json';

export default {
	data() {
		return {
			x: 0,
			y: 0,
			isZH: false,
			activeItem: '',
			JobDetail: JobDetail,
			EducationDetail: EducationDetail,
			HobbyDetail: HobbyDetail,
			SkillDetail: SkillDetail,
			ReferenceDetail: ReferenceDetail
		};
	},
	created() {
		// Reverse the arrays immediately after they are loaded
		this.JobDetail = [...this.JobDetail].reverse();
		this.EducationDetail = [...this.EducationDetail].reverse();
		this.ReferenceDetail = [...this.ReferenceDetail].reverse();
	},
	methods: {
		update(event) {
			this.x = event.pageX;
			this.y = event.pageY;
		},
		toggleLocale() {
			this.$i18n.locale = this.isZH ? 'zh' : 'en';
		},
		scrollToSection(item) {
			const section = document.getElementById(item);
			if (section) {
				const elementPosition = section.getBoundingClientRect().top; // Get the element's position relative to the viewport
				const offsetPosition = elementPosition + window.scrollY - 96;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth',
				});
			}
		},
		handleScrollSpy(event) {
			const sections = ['about', 'education', 'experience', 'skill', 'project', 'hobby', 'reference'];
			const scrollTop = window.scrollY + 100; // Adjust offset
			let active = '';

			sections.forEach((id) => {
				const section = document.getElementById(id);
				if (section) {
					const { top, bottom } = section.getBoundingClientRect();
					const sectionTop = window.scrollY + top;
					const sectionBottom = window.scrollY + bottom;

					if (scrollTop >= sectionTop && scrollTop <= sectionBottom) {
						active = id;
					}
				}
			});

			this.activeItem = active;
		},
		getItemStyle(item) {
			return {
				color: this.activeItem === item ? 'rgb(226 232 240)' : 'rgb(148 163 184)'
			};
		},
		getTailStyle(item) {
			return {
				width: this.activeItem === item ? '60px' : '30px',
				backgroundColor: this.activeItem === item ? 'rgb(226 232 240)' : 'rgb(148 163 184)',
			};
		},
		getItemText(item) {
			return this.$t(item);
		}
	},
	mounted() {
		window.addEventListener('mousemove', this.update);
		window.addEventListener('scroll', this.handleScrollSpy);
	},
	beforeDestroy() {
		window.removeEventListener('mousemove', this.update);
		window.removeEventListener('scroll', this.handleScrollSpy);
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

.contact_icon {
	fill: rgb(148 163 184);
	width: 30px;
	transition: all 0.3s;
}

.contact_icon:hover {
	fill: rgb(226 232 240);
}

.contentTitle {
	transition: all 0.1s;
}

.contentTitle:hover {
	color: rgb(226 232 240) !important;
}

.item-tail {
	display: inline-block;
	height: 1px;
	margin-right: 10px;
	width: 30px;
	background-color: rgb(148, 163, 184);
	transition: width 0.2s ease, background-color 0.3s ease;
}

.contentTitle:hover .item-tail {
	width: 60px !important;
	background-color: rgb(226, 232, 240) !important;
}

.DetailTitle {
	transition: all 0.1s;
}

.Detail_Container:hover .DetailTitle {
	color: rgb(94 234 212) !important;
}

/* CSS after 992 px */
@media (min-width: 992px) {
	.Detail_Container {
		transition: all 0.1s;
	}

	.Detail_Container:hover {
		background-color: rgba(30, 41, 59, .5);
		box-shadow: 0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148, 163, 184, .1);

	}
}
</style>
