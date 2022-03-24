<template>
	<div
		class="header-search hs-simple mr-0"
		ref="results"
	>
		<form
			action="#"
			method="get"
			class="input-wrapper"
			@submit.prevent="submitHandler"
		>
			<div class="select-box">
				<select
					id="category"
					name="category"
					v-model="search_category"
					@change="searchProducts"
				>
					<option value="all">All Categories</option>
					<option value="accessories-12">Accessories</option>
					<option value="dell">&nbsp;&nbsp;Dell</option>
					<option value="i-pad">&nbsp;&nbsp;iPad</option>
					<option value="lenovo">&nbsp;&nbsp;Lenovo</option>
					<option value="peach">&nbsp;&nbsp;Peach</option>
					<option value="sonny">&nbsp;&nbsp;Sonny</option>
					<option value="cameras">Cameras</option>
					<option value="lumix">&nbsp;&nbsp;Lumix</option>
					<option value="nikon-d850">&nbsp;&nbsp;Nikon D850</option>
					<option value="samsung">&nbsp;&nbsp;Samsung</option>
					<option value="canon-eos-80d">&nbsp;&nbsp;Canon EOS 80D</option>
					<option value="sony">&nbsp;&nbsp;Sony</option>
					<option value="component">Component</option>
					<option value="computers-3">Computers</option>
					<option value="electronics-8">Electronics</option>
					<option value="game-consoles">Game consoles</option>
					<option value="headphones">Headphones</option>
					<option value="acer-headphones">&nbsp;&nbsp;Acer</option>
					<option value="american-dreams-headphones">&nbsp;&nbsp;American Dreams</option>
					<option value="apple-headphones">&nbsp;&nbsp;Apple</option>
					<option value="arcade1up-headphones">&nbsp;&nbsp;Arcade 1 UP</option>
					<option value="samsung-headphones">&nbsp;&nbsp;Samsung</option>
					<option value="industrial">Industrial</option>
					<option value="networks">Networks</option>
					<option value="office-solution">Office Solution</option>
					<option value="smart-phone">SmartPhone</option>
					<option value="acer-smart-phone">&nbsp;&nbsp;Acer</option>
					<option value="american-dreams-smart-phone">&nbsp;&nbsp;American Dreams</option>
					<option value="apple-smart-phone">&nbsp;&nbsp;Apple</option>
					<option value="arcade1-up">&nbsp;&nbsp;Arcade1UP</option>
					<option value="samsung-smart-phone">&nbsp;&nbsp;Samsung</option>
					<option value="Speakers">speakers</option>
					<option value="5-g">&nbsp;&nbsp;5G</option>
					<option value="hp">&nbsp;&nbsp;HP</option>
					<option value="lg">&nbsp;&nbsp;LG</option>
					<option value="macintosh">&nbsp;&nbsp;Macintosh</option>
					<option value="riode">&nbsp;&nbsp;Riode</option>
					<option value="uncategorized-6">Uncategorized</option>
					<option value="watches-5">Watches</option>
					<option value="apple-watches">&nbsp;&nbsp;Apple</option>
					<option value="dell-watches">&nbsp;&nbsp;Dell</option>
					<option value="lenovo-watches">&nbsp;&nbsp;Lenovo</option>
					<option value="samsung-watches">&nbsp;&nbsp;Samsung</option>
					<option value="sony-watches">&nbsp;&nbsp;Sony</option>
				</select>
			</div>
			<input
				type="text"
				class="form-control"
				name="search"
				id="search"
				aria-label="search-box"
				autocomplete="off"
				v-model="search_term"
				@input="searchProducts"
				@click.stop="showResults"
				placeholder="Search..."
				required
			>
			<button
				class="btn btn-search"
				type="submit"
				name="search"
			><span class="sr-only">header search button</span><i class="d-icon-search"></i></button>
			<div
				class="live-search-list bg-white scrollable"
				v-if="suggestions.length > 0"
			>
				<nuxt-link
					:to="'/product/default/' + product.slug"
					class="autocomplete-suggestion"
					v-for="product in suggestions"
					:key="product.id"
				>
					<img
						:src="`${baseUrl}${product.pictures[0].url}`"
						alt="Product"
						width="40"
						height="40"
						class="product-image"
					/>

					<div
						class="search-name"
						v-html="emphasizeMatchWord( product.name )"
					></div>

					<div class="search-price">
						<template v-if="product.display_price[ 0 ] === product.display_price[ 1 ]">
							<span class="new-price">${{ product.display_price[0] | priceFormat  }}</span>
						</template>

						<template v-else>
							<template v-if="product.variants.length === 0 || (product.variants.length > 0 && !product.variants[0].price)">
								<span class="new-price mr-1">${{ product.display_price[0] | priceFormat }}</span>
								<span class="old-price">${{ product.display_price[1] | priceFormat }}</span>
							</template>

							<template v-else>
								<span class="new-price">${{ product.display_price[0] | priceFormat }} &ndash; ${{ product.display_price[1] | priceFormat }}</span>
							</template>
						</template>
					</div>
				</nuxt-link>
			</div>
		</form>
	</div>
</template>

<script>
import Api, { baseUrl, currentDemo } from '~/api';

export default {
	data: function () {
		return {
			search_term: '',
			search_category: 'all',
			suggestions: [],
			currentDemo: currentDemo,
			baseUrl: baseUrl,
			timeouts: []
		};
	},
	created: function () {
		document.querySelector( 'body' ).addEventListener( 'click', this.onBodyClick );
	},
	watch: {
		$route: function () {
			let self = this;

			setTimeout( () => {
				self.$refs.results.classList.remove( 'show-results' );
			}, 100 );
		}
	},
	destroyed: function () {
		document.querySelector( 'body' ).removeEventListener( 'click', this.onBodyClick );
	},
	methods: {
		searchProducts: function () {
			if ( this.search_term.length > 2 ) {
				var search_term = this.removeXSSAttacks( this.search_term )
					.__html;
				this.timeouts.map( timeout => {
					window.clearTimeout( timeout );
				} );
				this.timeouts.push(
					setTimeout( () => {
						Api.get( `${ baseUrl }/demo-${ this.currentDemo }/shop`, {
							params: {
								search: search_term,
								category: this.search_category
							}
						} )
							.then( response => {
								this.suggestions = response.data.data;
							} )
							.catch( error => { } );
					}, 500 )
				);
			} else {
				this.timeouts.map( timeout => {
					window.clearTimeout( timeout );
				} );
				this.suggestions = [];
			}
		},
		emphasizeMatchWord: function ( name ) {
			var regExp = new RegExp( this.search_term, 'i' );
			return name.replace(
				regExp,
				match => '<strong>' + match + '</strong>'
			);
		},
		removeXSSAttacks: function ( html ) {
			const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

			// Removing the <script> tags
			while ( SCRIPT_REGEX.test( html ) ) {
				html = html.replace( SCRIPT_REGEX, '' );
			}

			// Removing all events from tags...
			html = html.replace( / on\w+="[^"]*"/g, '' );

			return {
				__html: html
			};
		},
		submitHandler: function () {
			this.$router.push( {
				path: '/shop',
				query: { search: this.search_term, category: this.search_category, page: 1 }
			} );
		},
		onBodyClick: function ( e ) {
			this.$refs.results.classList.remove( 'show' );
			this.$refs.results.classList.remove( 'show-results' );
		},
		showResults: function () {
			this.$refs.results.classList.add( 'show-results' );
		}
	}
};
</script>