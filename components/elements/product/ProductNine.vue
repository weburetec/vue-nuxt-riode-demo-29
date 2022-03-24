<template>
	<div class="product product-list-sm">
		<figure class="product-media">
			<nuxt-link :to="`/product/default/${product.slug}`">
				<img
					v-for="(item,index) in product.pictures.slice(0,2)"
					:key="`one-${index}`"
					v-lazy="`${baseUrl}${item.url}`"
					alt="picture"
					:width="item.width"
					:height="item.height"
					:class="{'last-image': index === 1}"
				/>
			</nuxt-link>
		</figure>

		<div class="product-details">
			<div class="product-cat">
				<span
					v-for="(cat,index) in product.product_categories"
					:key="`product-category-${index}`"
				>
					<nuxt-link :to="{ path: '/shop', query: { category: cat.slug }}">{{ cat.name }}</nuxt-link>
					<template v-if="index < product.product_categories.length - 1">,</template>
				</span>
			</div>

			<h3 class="product-name">
				<nuxt-link :to="'/product/default/' + product.slug">{{ product.name }}</nuxt-link>
			</h3>

			<div class="product-price">
				<template v-if="product.display_price[ 0 ] === product.display_price[ 1 ]">
					<span class="price">${{ product.display_price[0] | priceFormat  }}</span>
				</template>

				<template v-else>
					<template v-if="product.variants.length === 0 || (product.variants.length > 0 && !product.variants[0].price)">
						<ins class="new-price">${{ product.display_price[0] | priceFormat }}</ins>
						<del class="old-price">${{ product.display_price[1] | priceFormat }}</del>
					</template>

					<template v-else>
						<ins class="new-price">${{ product.display_price[0] | priceFormat }} &ndash; ${{ product.display_price[1] | priceFormat }}</ins>
					</template>
				</template>
			</div>

			<div class="ratings-container">
				<div class="ratings-full">
					<span
						class="ratings"
						:style="{width: product.ratings * 20 + '%'}"
					></span>
					<span class="tooltiptext tooltip-top">{{ product.ratings | priceFormat }}</span>
				</div>
			</div>

			<a
				href="javascript:;"
				class="btn-product btn-cart mr-0"
				title="Add to cart"
				v-if="product.variants.length === 0"
				@click="addCart"
			><i class="d-icon-bag"></i><span>Add to cart</span></a>

			<nuxt-link
				:to="`/product/default/${product.slug}`"
				class="btn-product btn-cart mr-0"
				title="Go to detail"
				v-else
			><i class="d-icon-arrow-right"></i><span>Select Options</span></nuxt-link>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

import { baseUrl } from '~/api';

export default {
	props: {
		product: Object
	},
	data: function () {
		return {
			baseUrl: baseUrl
		}
	},
	methods: {
		...mapActions( 'cart', [ 'addToCart' ] ),
		addCart: function () {
			if ( this.product.stock > 0 ) {
				let saledProduct = {
					...this.product,
					price: this.product.display_price[ 0 ]
				};
				this.addToCart( { product: saledProduct } );
			}
		}
	}
}
</script>