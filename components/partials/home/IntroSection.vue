<template>
	<swiper-carousel
		class="swiper-theme intro-slider animation-slider swiper-dot-inner"
		:options="introSlider"
		v-animate
		ref="introSlider"
	>
		<div
			class="intro-slide1 banner banner-fixed swiper-slide"
			style="background-color: #e6e8e9;"
		>
			<figure>
				<img
					src="~/static/images/home/slides/1.jpg"
					alt="banner"
					width="1903"
					height="469"
				/>
			</figure>
			<div class="container">
				<div class="banner-content y-50">
					<h3
						class="banner-subtitle d-inline-block slide-animate text-uppercase"
						data-animation-options="{
                                'name': 'fadeInUpShorter',
                                'duration': '1.5s',
                                'delay': '.3s'
                            }"
					>From Online Store</h3>
					<h2
						class="banner-title slide-animate"
						data-animation-options="{
                                'name': 'fadeInUpShorter',
                                'duration': '1.3s',
                                'delay': '.4s'
                            }"
					>Originals Comper Star. Xbox</h2>
					<p
						class="font-primary mb-6 slide-animate"
						data-animation-options="{
                                'name': 'fadeInUpShorter',
                                'duration': '1.2s',
                                'delay': '.5s'
                            }"
					>Free Shipping on all orders over $320.00</p>
					<nuxt-link
						to="/shop"
						class="btn btn-rounded btn-dark btn-outline mb-1 slide-animate"
						data-animation-options="{
                                'name': 'fadeInUpShorter',
                                'duration': '1s',
                                'delay': '.6s'
                            }"
					>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
				</div>
			</div>
		</div>
		<div
			class="intro-slide2 banner banner-fixed swiper-slide"
			style="background-color: #e6e8e9;"
		>
			<figure>
				<img
					src="~/static/images/home/slides/2.jpg"
					alt="banner"
					width="1903"
					height="469"
				/>
			</figure>
			<div class="container">
				<div class="banner-content y-50 ml-auto text-right">
					<div
						class="slide-animate"
						data-animation-options="{
                                    'name': 'blurIn',
                                    'duration': '.8s'
                                }"
					>
						<h4 class="banner-subtitle text-uppercase">Lifestyle Collection</h4>
						<h2 class="banner-title"><b class="text-primary">Sophisticated</b>Domestic Electric
							Machines</h2>
						<nuxt-link
							to="/shop"
							class="btn btn-rounded btn-outline btn-dark"
						>Shop now<i class="d-icon-arrow-right"></i></nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</swiper-carousel>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { introSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel
	},
	data: function () {
		return {
			introSlider: introSlider
		};
	}
};
</script>