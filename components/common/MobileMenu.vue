<template>
	<div class="mobile-menu-wrapper">
		<div
			class="mobile-menu-overlay"
			@click="hideMobileMenu"
		>
		</div>

		<a
			class="mobile-menu-close"
			href="javascript:;"
			@click="hideMobileMenu"
		><i class="d-icon-times"></i></a>

		<div class="mobile-menu-container scrollable">
			<form
				action="#"
				class="input-wrapper"
				@submit.prevent="searchProducts"
			>
				<input
					type="text"
					class="form-control"
					name="search"
					autocomplete="off"
					placeholder="Search your keyword..."
					v-model="searchTerm"
					required
				/>
				<button
					class="btn btn-search"
					type="submit"
				>
					<i class="d-icon-search"></i>
				</button>
			</form>

			<ul class="mobile-menu mmenu-anim">
				<li>
					<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'computers-3'}}">
						<i class="d-icon-desktop"></i>Computers
					</nuxt-link>
				</li>

				<li>
					<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'component'}}">
						<i class="d-icon-wireless"></i>Component
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'electronics-8'}}">
						<i class="d-icon-camera2"></i>Electronics
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'game-consoles'}}">
						<i class="d-icon-gamepad2"></i>Game consoles
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'networks'}}">
						<i class="d-icon-wifi"></i>Networks
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'office-solution'}}">
						<i class="d-icon-officebag"></i>Office Solution
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'smart-phone'}}">
						<i class="d-icon-mobile"></i>SmartPhone
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'industrial'}}">
						<i class="d-icon-bridge-lamp"></i>Industrial
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'headphones'}}">
						<i class="d-icon-headphone"></i>Headphones
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'accessories-12'}}">
						<i class="d-icon-memory"></i>Accessories
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'all'}}">
						<i class="d-icon-category"></i>All Categories
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';

export default {
	components: {
		VueSlideToggle
	},
	data: function () {
		return {
			openState: new Array( 100 ).fill( false ),
			searchTerm: ''
		};
	},
	methods: {
		hideMobileMenu: function () {
			document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
		},
		toggleState: function ( index ) {
			let temp = [ ...this.openState ];
			temp[ index ] = !temp[ index ];
			this.openState = temp;
		},
		searchProducts: function () {
			if ( this.searchTerm.length > 2 ) {
				this.$router.push( {
					path: '/shop',
					query: {
						search: this.searchTerm
					}
				} )

				this.searchTerm = '';
			}
		}
	}
};
</script>