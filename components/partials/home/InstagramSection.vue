<template>
	<section class="grey-section pt-10 pb-10">
		<div class="container">
			<h2 class="title text-center d-block pt-3">Instagram</h2>
			<swiper-carousel
				class="swiper-carousel swiper-theme mb-4 pb-4"
				:options="instagramSlider"
			>
				<figure
					class="instagram appear-animate swiper-slide"
					data-animation-options="{
                                'name': 'fadeInUpShorter',
                                'delay': '.3s',
                                'duration': '.8s'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<img
							src="~/static/images/home/instagram/1.jpg"
							alt="Instagram"
							width="213"
							height="213"
						>
					</a>
				</figure>
				<figure
					class="instagram appear-animate swiper-slide"
					data-animation-options="{
                                'name': 'fadeInUpShorter',
                                'delay': '.3s',
                                'duration': '.8s'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<img
							src="~/static/images/home/instagram/2.jpg"
							alt="Instagram"
							width="213"
							height="213"
						>
					</a>
				</figure>
				<figure
					class="instagram appear-animate swiper-slide"
					data-animation-options="{
                                'name': 'fadeInUpShorter',
                                'delay': '.3s',
                                'duration': '.8s'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<img
							src="~/static/images/home/instagram/3.jpg"
							alt="Instagram"
							width="213"
							height="213"
						>
					</a>
				</figure>
				<figure
					class="instagram appear-animate swiper-slide"
					data-animation-options="{
                                'name': 'fadeInUpShorter',
                                'delay': '.3s',
                                'duration': '.8s'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<img
							src="~/static/images/home/instagram/4.jpg"
							alt="Instagram"
							width="213"
							height="213"
						>
					</a>
				</figure>
				<figure
					class="instagram appear-animate swiper-slide"
					data-animation-options="{
                                'name': 'fadeInUpShorter',
                                'delay': '.3s',
                                'duration': '.8s'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<img
							src="~/static/images/home/instagram/5.jpg"
							alt="Instagram"
							width="213"
							height="213"
						>
					</a>
				</figure>
				<figure
					class="instagram appear-animate swiper-slide"
					data-animation-options="{
                                'name': 'fadeInUpShorter',
                                'delay': '.3s',
                                'duration': '.8s'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<img
							src="~/static/images/home/instagram/6.jpg"
							alt="Instagram"
							width="213"
							height="213"
						>
					</a>
				</figure>
			</swiper-carousel>
		</div>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { instagramSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
	},
	data: function () {
		return {
			instagramSlider: instagramSlider
		};
	}
};
</script>