<template>
	<section
		class="grey-section product-wrapper mt-10 pt-10 pb-4"
		data-animation-options="{'delay': '.3s'}"
		v-animate
	>
		<div class="container pt-2">
			<div class="title-wrapper with-filters d-flex align-items-center justify-content-between pt-2 mb-4">
				<h2
					class="title title-simple mb-md-0 appear-animate"
					data-animation-options="{'name': 'fadeInLeftShorter','delay': '.2s'}"
					v-animate
				>New Arrivals</h2>
				<ul
					class="nav-filters product-filters font-weight-semi-bold mr-0 appear-animate"
					v-animate
				>
					<li @click="getProductHandler1('all', $event)"><a
							href="javascript:;"
							class="nav-filter active"
						>All</a></li>
					<li @click="getProductHandler1('headphones', $event)"><a
							href="javascript:;"
							class="nav-filter"
						>Headphones</a></li>
					<li @click="getProductHandler1('accessories-12', $event)"><a
							href="javascript:;"
							class="nav-filter"
						>Accessories</a></li>
					<li @click="getProductHandler1('speakers', $event)"><a
							href="javascript:;"
							class="nav-filter"
						>Speakers</a></li>
				</ul>
			</div>
			<div class="grid-border">
				<div class="row grid products-grid pb-2 mb-8">
					<template v-if="products1">
						<div
							class="grid-item col-xl-2 col-lg-3 col-sm-4 col-6"
							v-for="item in products1"
							:key="'product-filter1-' + item.slug"
						>
							<product-two
								class="text-center"
								:is-cat="false"
								:product="item"
								:is-review="false"
								:is-badge="false"
							>
							</product-two>
						</div>
					</template>

					<template v-else>
						<div
							class="grid-item col-xl-2 col-lg-3 col-sm-4 col-6"
							v-for="item in [1,2,3,4,5,6]"
							:key="'product-filter1-skel-' + item"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</template>
				</div>
			</div>

			<div class="title-wrapper with-filters d-flex align-items-center justify-content-between pt-1 mb-4">
				<h2
					class="title title-simple mb-md-0 appear-animate"
					data-animation-options="{'name': 'fadeInLeftShorter','delay': '.2s'}"
					v-animate
				>Best Sellers</h2>
				<ul
					class="nav-filters product-filters font-weight-semi-bold mr-0 appear-animate"
					v-animate
				>
					<li @click="getProductHandler2('all', $event)"><a
							href="javascript:;"
							class="nav-filter active"
						>All</a></li>
					<li @click="getProductHandler2('headphones', $event)"><a
							href="javascript:;"
							class="nav-filter"
						>Headphones</a></li>
					<li @click="getProductHandler2('accessories-12', $event)"><a
							href="javascript:;"
							class="nav-filter"
						>Accessories</a></li>
					<li @click="getProductHandler2('speakers', $event)"><a
							href="javascript:;"
							class="nav-filter"
						>Speakers</a></li>
				</ul>
			</div>
			<div class="grid-border">
				<div class="row grid products-grid pb-2 mb-8">
					<template v-if="products2">
						<div
							class="grid-item col-xl-2 col-lg-3 col-sm-4 col-6"
							v-for="item in products2"
							:key="'product-filter2-' + item.slug"
						>
							<product-two
								class="text-center"
								:is-cat="false"
								:product="item"
								:is-review="false"
								:is-badge="false"
							>
							</product-two>
						</div>
					</template>

					<template v-else>
						<div
							class="grid-item col-xl-2 col-lg-3 col-sm-4 col-6"
							v-for="item in [1,2,3,4,5,6]"
							:key="'product-filter2-skel-' + item"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ProductTwo from '~/components/elements/product/ProductTwo';

import Api, { baseUrl, currentDemo } from '~/api';

export default {
	components: {
		ProductTwo
	},
	data: function () {
		return {
			products1: null,
			products2: null
		};
	},
	mounted: function () {
		this.products1 = null;
		this.products2 = null;
		Api.get( `${ baseUrl }/demo-${ currentDemo }`, {
			params: {
				latest: true,
				best_selling: true,
				limit: 6
			}
		} )
			.then( response => {
				this.products1 = response.data.latest;
				this.products2 = response.data.bestSelling;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );
	},
	methods: {
		getProductHandler1: function ( category, e ) {
			this.products1 = null;

			e.currentTarget.parentNode.querySelector( '.nav-filter.active' ).classList.remove( 'active' );
			e.currentTarget.querySelector( '.nav-filter' ).classList.add( 'active' );
			Api.get( `${ baseUrl }/demo-${ currentDemo }/shop`, {
				params: {
					from: 0,
					to: 6,
					category: category
				}
			} )
				.then( response => {
					this.products1 = response.data.data;
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		},
		getProductHandler2: function ( category, e ) {
			this.products2 = null;

			e.currentTarget.parentNode.querySelector( '.nav-filter.active' ).classList.remove( 'active' );
			e.currentTarget.querySelector( '.nav-filter' ).classList.add( 'active' );
			Api.get( `${ baseUrl }/demo-${ currentDemo }/shop`, {
				params: {
					from: 6,
					to: 12,
					category: category
				}
			} )
				.then( response => {
					this.products2 = response.data.data;
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		}
	}
};
</script>