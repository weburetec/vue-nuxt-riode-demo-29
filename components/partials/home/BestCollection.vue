<template>
	<div
		class="product-wrapper row"
		data-animation-options="{
                    'delay': '.6s'
                }"
		v-animate
	>
		<h2
			class="title text-center d-block appear-animate"
			data-animation-options="{'name': 'fadeInUpShorter','delay': '.5s'}"
			v-animate
		>Best of the Week
		</h2>

		<swiper-carousel
			class="swiper-theme swiper-nav-full"
			:options="bestSlider"
			v-if="!products"
		>
			<div
				class="swiper-slide"
				v-for="item in [1,2,3,4,5]"
				:key="`featured-skel-${item}`"
			>
				<div class="product-loading-overlay"></div>
			</div>
		</swiper-carousel>

		<swiper-carousel
			class="swiper-theme swiper-nav-full"
			:options="bestSlider"
			v-else
		>
			<div
				class="swiper-slide"
				v-for="item in products"
				:key="`featured-${item.slug}`"
			>
				<product-two
					class="text-center"
					:product="item"
				></product-two>
			</div>
		</swiper-carousel>
	</div>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductTwo from '~/components/elements/product/ProductTwo';

import { bestSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		ProductTwo
	},
	props: {
		products: Array
	},
	data: function () {
		return {
			bestSlider: bestSlider
		};
	}
};
</script>