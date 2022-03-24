<template>
	<section class="grey-section pt-10 pb-10">
		<div class="container pt-6 mb-4">
			<h2
				class="title text-center d-block appear-animate"
				data-animation-options="{'name': 'fadeIn', 'delay': '.3s'}"
				v-animate
			>Our Featured</h2>

			<div
				class="row mb-10 pb-4 appear-animate skeleton-body"
				v-animate
			>
				<template v-if="products1">
					<div
						class="col-md-6 col-lg-4 col-xl-4 col-xxl-3"
						v-for="item in products1"
						:key="`featured-${item.slug}`"
					>
						<product-nine :product="item"></product-nine>
					</div>
				</template>
				<template v-else>
					<div
						class="col-md-6 col-lg-4 col-xl-4 col-xxl-3"
						v-for="item in [1,2,3,4,5,6,7,8]"
						:key="`featured-skel-${item}`"
					>
						<div class="skel-post"></div>
					</div>
				</template>
			</div>

			<div class="product-wrapper row">
				<h2
					class="title text-center d-block appear-animate"
					data-animation-options="{'name': 'fadeInUpShorter','delay': '.5s'}"
					v-animate
				>Best of the Week
				</h2>

				<swiper-carousel
					class="swiper-theme swiper-nav-full mb-4"
					:options="bestSlider"
					v-if="!products2"
				>
					<div
						class="swiper-slide"
						v-for="item in [1,2,3,4,5]"
						:key="`best-skel-${item}`"
					>
						<div class="product-loading-overlay"></div>
					</div>
				</swiper-carousel>

				<swiper-carousel
					class="swiper-theme swiper-nav-full mb-4"
					:options="bestSlider"
					v-else
				>
					<div
						class="swiper-slide"
						v-for="item in products2"
						:key="`best-${item.slug}`"
					>
						<product-two
							class="text-center"
							:product="item"
							:is-review="false"
						></product-two>
					</div>
				</swiper-carousel>
			</div>
		</div>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductNine from '~/components/elements/product/ProductNine';
import ProductTwo from '~/components/elements/product/ProductTwo';

import { bestSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		ProductTwo,
		ProductNine
	},
	props: {
		products1: Array,
		products2: Array
	},
	data: function () {
		return {
			bestSlider: bestSlider
		};
	}
};
</script>