<template>
	<main class="main home mt-4">
		<div class="page-content">
			<intro-section></intro-section>

			<banner-section></banner-section>

			<new-collection></new-collection>

			<category-section></category-section>

			<featured-collection
				:products1="featured"
				:products2="bestSelling"
			></featured-collection>

			<blog-section :posts="posts"></blog-section>

			<instagram-section></instagram-section>
		</div>
	</main>
</template>

<script>
import IntroSection from '~/components/partials/home/IntroSection';
import BannerSection from '~/components/partials/home/BannerSection';
import NewCollection from '~/components/partials/home/NewCollection';
import CategorySection from '~/components/partials/home/CategorySection';
import FeaturedCollection from '~/components/partials/home/FeaturedCollection';
import BlogSection from '~/components/partials/home/BlogSection';
import InstagramSection from '~/components/partials/home/InstagramSection';

import Api, { baseUrl, currentDemo } from '~/api';
import { getCookie } from '~/utils';

export default {
	components: {
		IntroSection,
		BannerSection,
		NewCollection,
		CategorySection,
		FeaturedCollection,
		BlogSection,
		InstagramSection
	},
	data: function () {
		return {
			bestSelling: null,
			featured: null,
			posts: null,
			timer: null
		};
	},
	mounted: function () {
		Api.get( `${ baseUrl }/demo-${ currentDemo }`, {
			params: {
				best_selling: true,
				limit: 8,
				featured: true,
				is_post: true,
				latest: true
			}
		} )
			.then( response => {
				this.bestSelling = response.data.bestSelling;
				this.featured = response.data.featured;
				this.posts = response.data.posts;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );


		this.timer = setTimeout( () => {
			if ( this.$route.path === '/' && getCookie( 'newsletter' ) !== 'false' ) {
				this.$modal.show(
					() => import( '~/components/elements/modal/NewsletterModal' ),
					null,
					{
						width: '720',
						height: 'auto',
						adaptive: true,
						class: 'newsletter-modal'
					}
				);
			}
		}, 10000 );
	},
	destroyed: function () {
		if ( this.timer ) clearTimeout( this.timer );
	}
};
</script>