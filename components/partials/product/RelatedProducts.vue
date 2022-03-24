<template>
	<section
		v-if="products.length > 0"
		class="product-wrapper related-products pb-10"
	>
		<div class="title-wrapper text-center">
			<h2 class="title">Related Products</h2>
		</div>

		<swiper-carousel
			class="swiper-theme swiper-nav-full related-products-carousel"
			:options="relatedSlider"
		>
			<product-two
				class="swiper-slide text-center"
				:product="item"
				v-for="item in products.slice(0, 4)"
				:key="`related-produts-${item.slug}`"
			></product-two>
		</swiper-carousel>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductTwo from '~/components/elements/product/ProductTwo';
import { relatedSlider } from '~/utils/data/carousel';

export default {
	props: {
		products: Array
	},
	components: {
		SwiperCarousel,
		ProductTwo
	},
	data: function () {
		return {
			relatedSlider: relatedSlider
		};
	}
};
</script>