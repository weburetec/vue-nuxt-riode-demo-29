<template>
	<section class="banner-group pt-10 mt-6 pb-2 mb-10">
		<div class="container">
			<swiper-carousel
				class="swiper-theme mb-4"
				:options="categorySlider"
			>
				<div
					class="category category-banner category-absolute category-group-icon text-white chevron-inherit appear-animate swiper-slide p-0"
					data-animation-options="{
                                'name': 'fadeInLeftShorter',
                                'delay': '.3s'
                            }"
					style="background: #2C3642;"
					v-animate
				>
					<figure class="category-media">
						<img
							v-lazy="'./images/home/banner/6.jpg'"
							alt="banner image"
							width="380"
							height="213"
						>
					</figure>
					<div class="category-content">
						<h4>Headphones</h4>
						<ul class="category-list">
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'samsung-headphones' }}">Samsung</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'american-dreams-headphones' }}">American Dreams</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'apple-headphones' }}">Apple</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'acer-headphones' }}">Acer</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'arcade1up-headphones' }}">Arcade 1 UP</nuxt-link>
							</li>
						</ul>
					</div>
				</div>

				<div
					class="category category-banner category-absolute category-group-icon chevron-inherit appear-animate swiper-slide p-0"
					data-animation-options="{
                                'name': 'fadeIn',
                                'delay': '.3s'
                            }"
					style="background: #e6e6e6;"
					v-animate
				>
					<figure class="category-media">
						<img
							v-lazy="'./images/home/banner/7.jpg'"
							alt="banner image"
							width="380"
							height="213"
						>
					</figure>
					<div class="category-content">
						<h4>Cameras</h4>
						<ul class="category-list">
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'samsung' }}">Samsung</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'nikon-d850' }}">Nikon D850</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'sony' }}">Sony</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'canon-eos-80d' }}">Canon EOS 80D</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'lumix' }}">Lumix</nuxt-link>
							</li>
						</ul>
					</div>
				</div>

				<div
					class="category category-banner category-absolute category-group-icon text-white chevron-inherit appear-animate swiper-slide p-0"
					data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.3s'
                            }"
					style="background: #6a6c71;"
					v-animate
				>
					<figure class="category-media">
						<img
							v-lazy="'./images/home/banner/8.jpg'"
							alt="banner image"
							width="380"
							height="213"
						>
					</figure>
					<div class="category-content">
						<h4>Watches</h4>
						<ul class="category-list">
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'dell-watches' }}">Dell</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'lenovo-watches' }}">Lenovo</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'apple-watches' }}">Apple</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'sony-watches' }}">Sony</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'samsung-watches' }}">Samsung</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
			</swiper-carousel>

			<div class="row">
				<div class="col-md-6 mb-4">
					<div
						class="banner banner5 banner-fixed overlay-light content-middle appear-animate"
						data-animation-options="{
                                    'name': 'fadeInUpShorter',
                                    'delay': '.4s'
                                }"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banner/9.jpg'"
								alt="banner image"
								width="280"
								height="207"
							>
						</figure>
						<div class="banner-content pl-8">
							<h4 class="banner-subtitle text-white font-weight-bold">Flash Sale <span class="text-primary">50% OFF</span>
							</h4>
							<h3 class="banner-title text-white font-weight-bold">Wireless Earphone
							</h3>
							<p class="text-white font-weight-normal">
								Only until the end of this Week</p>
							<nuxt-link
								to="/shop"
								class="btn btn-rounded btn-white btn-outline font-weight-bold"
							>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-md-6 mb-4">
					<div
						class="banner banner6 banner-fixed overlay-light content-middle appear-animate"
						data-animation-options="{
                                    'name': 'fadeInUpShorter',
                                    'delay': '.6s'
                                }"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banner/10.jpg'"
								alt="banner image"
								width="280"
								height="207"
							>
						</figure>
						<div class="banner-content pl-8">
							<h4 class="banner-subtitle text-white font-weight-normal mb-0">Best Sellers
								Store</h4>
							<h3 class="banner-title text-white font-weight-bold">Up To 30% OFF</h3>
							<p class="text-white font-weight-normal opacity-8">
								Feel the charm in this spot</p>
							<nuxt-link
								to="/shop"
								class="btn btn-rounded btn-white btn-outline font-weight-bold"
							>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { categorySlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel
	},
	data: function () {
		return {
			categorySlider: categorySlider
		};
	}
}
</script>