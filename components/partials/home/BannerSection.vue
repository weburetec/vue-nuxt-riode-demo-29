<template>
	<div class="container">
		<section class="banners-grid pt-10 mt-6 pb-6">
			<h2 class="title title-simple">Special Offers</h2>

			<isotope
				ref="ref"
				class="grid row"
				:options="isotopeOptions"
				:list="[7,8,9,10,11]"
			>
				<div
					class="grid-item col-lg-6 height-x2"
					key="banner-group-1"
				>
					<div
						class="banner banner1 banner-fixed overlay-light appear-animate"
						data-animation-options="{
                                    'name': 'fadeInRightShorter'
                                }"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banner/2.jpg'"
								alt="banner image"
								width="680"
								height="508"
							>
						</figure>
						<div class="banner-content top w-100 text-center">
							<h4 class="banner-subtitle text-uppercase mb-2">
								Deals and Promotion</h4>
							<h3 class="banner-title font-weight-bold text-uppercase">Camera &amp; Lens</h3>
							<h5 class="text-uppercase">Start at <span class="text-primary">$250.00</span>
							</h5>
						</div>
						<div class="banner-content bottom w-100 text-center">
							<nuxt-link
								to="/shop"
								class="btn btn-rounded btn-outline btn-dark mb-4"
							>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
						</div>
					</div>
				</div>
				<div
					class="grid-item col-lg-3 col-xs-6 height-x1"
					key="banner-group-2"
				>
					<div
						class="banner banner2 banner-fixed overlay-light content-middle appear-animate"
						data-animation-options="{
                                    'name': 'fadeInDownShorter'
                                }"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banner/3.jpg'"
								alt="banner image"
								width="280"
								height="207"
							>
						</figure>
						<div class="banner-content">
							<h5 class="ls-l mb-1 opacity-8">Featured Event</h5>
							<h4 class="banner-subtitle text-uppercase ls-s mb-0">Black Friday</h4>
							<h3 class="banner-title text-primary font-weight-bold ls-s">Sale</h3>
							<nuxt-link
								to="/shop"
								class="btn btn-link btn-underline btn-dark"
							>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
						</div>
					</div>
				</div>
				<div
					class="grid-item col-lg-3 col-xs-6 height-x2"
					key="banner-group-3"
				>
					<div
						class="banner banner4 banner-fixed overlay-dark appear-animate"
						data-animation-options="{
                                    'name': 'fadeInLeftShorter'
                                }"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banner/5.jpg'"
								alt="banner image"
								width="280"
								height="434"
							>
						</figure>
						<div class="banner-content top w-100 text-center">
							<p class="banner-date text-right text-white font-weight-bold">
								18-25<sup>TH</sup>MAY</p>
							<h5 class="banner-subtitle text-uppercase text-white">
								The Season To Play</h5>
							<h3 class="banner-title font-weight-bold text-white text-uppercase">Up To 50%
							</h3>
							<h4 class="text-white text-uppercase font-weight-normal">Xbox one wireless controller</h4>
						</div>
					</div>
				</div>
				<div
					class="grid-item col-lg-3 col-xs-6 height-x1"
					key="banner-group-4"
				>
					<div
						class="banner banner3 banner-fixed overlay-dark content-middle appear-animate"
						data-animation-options="{
                                    'name': 'fadeInUpShorter'
                                }"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banner/4.jpg'"
								alt="banner image"
								width="280"
								height="207"
							>
						</figure>
						<div class="banner-content">
							<h5 class="ls-l text-white mb-1 opacity-8">Best Seller</h5>
							<h4 class="banner-subtitle text-uppercase ls-s text-white mb-1">Electronic</h4>
							<h3 class="banner-title font-weight-bold text-white ls-s ">20% Off</h3>
							<nuxt-link
								to="/shop"
								class="btn btn-link btn-underline btn-white"
							>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
						</div>
					</div>
				</div>
				<div
					class="grid-sizer col-lg-3 col-xs-6"
					key="banner-group-5"
				></div>
			</isotope>
		</section>
	</div>
</template>

<script>
import isotope from 'vueisotope';

export default {
	components: {
		isotope
	},
	data: function () {
		return {
			isotopeOptions: {
				itemSelector: '.grid-item',
				layoutMode: 'masonry',
				masonry: {
					columnWidth: '.grid-sizer'
				}
			}
		};
	},
}
</script>