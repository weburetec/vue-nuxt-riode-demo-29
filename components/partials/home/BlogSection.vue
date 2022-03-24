<template>
	<section class="blog-section pt-10 mt-3 pb-8">
		<div class="container">
			<h2 class="title text-center d-block">Latest News</h2>

			<swiper-carousel
				class="swiper-theme post-slider"
				:options="blogSlider"
			>
				<div
					class="swiper-slide"
					v-for="item in posts"
					overlayClass="overlay-zoom"
					:key="`post-${item.slug}`"
				>
					<post-three
						:post="item"
						:showLarge="true"
						btnClass="ls-normal text-normal font-weight-normal btn-underline"
					></post-three>
				</div>
			</swiper-carousel>
		</div>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import PostThree from '~/components/elements/post/PostThree';

import { blogSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		PostThree
	},
	props: {
		posts: Array
	},
	data: function () {
		return {
			blogSlider: blogSlider
		}
	}
}
</script>