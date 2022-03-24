<template>
	<header class="header">
		<div class="header-top">
			<div class="container">
				<div class="header-left">
					<p class="welcome-msg">Welcome to Riode store message or remove it!</p>
				</div>
				<div class="header-right">
					<div class="dropdown">
						<a href="javascript:;">USD</a>
						<ul class="dropdown-box">
							<li>
								<a href="javascript:;">USD</a>
							</li>
							<li>
								<a href="javascript:;">EUR</a>
							</li>
						</ul>
					</div>

					<div class="dropdown ml-5">
						<a href="javascript:;">ENG</a>
						<ul class="dropdown-box">
							<li>
								<a href="javascript:;">ENG</a>
							</li>
							<li>
								<a href="javascript:;">FRH</a>
							</li>
						</ul>
					</div>

					<span class="divider"></span>
					<nuxt-link
						to="/pages/contact-us"
						class="contact d-lg-show"
					><i class="d-icon-map"></i>Contact</nuxt-link>
					<a
						href="javascript:;"
						class="help d-lg-show"
					><i class="d-icon-info"></i> Need Help</a>

					<header-login></header-login>
				</div>
			</div>
		</div>

		<sticky-wrapper>
			<div class="header-middle sticky-header fix-top sticky-content">
				<div class="container">
					<div class="header-left">
						<a
							href="javascript:;"
							class="mobile-menu-toggle"
							@click="showMobileMenu"
						>
							<i class="d-icon-bars2"></i>
						</a>
						<nuxt-link
							to="/"
							class="logo mr-4"
						>
							<img
								src="~/static/images/home/logo.png"
								alt="logo"
								width="153"
								height="43"
							/>
						</nuxt-link>
					</div>

					<div class="header-center mr-xl-6 ml-xl-8">
						<search-box></search-box>
					</div>

					<div class="header-right">
						<a
							href="tel:#"
							class="icon-box icon-box-side mr-lg-3"
						>
							<div class="icon-box-icon mr-0 mr-lg-2">
								<i class="d-icon-phone"></i>
							</div>
							<div class="icon-box-content d-lg-show">
								<h4 class="icon-box-title">Call Us Now:</h4>
								<p>0(800) 123-456</p>
							</div>
						</a>

						<span class="divider"></span>
						<a
							href="javascript:;"
							class="compare mr-xl-7 mr-4"
						>
							<i class="d-icon-compare"></i>
						</a>
						<nuxt-link
							to="/pages/wishlist"
							title="header-wishlist"
							class="wishlist"
						>
							<i class="d-icon-heart"></i>
						</nuxt-link>
						<span class="divider"></span>

						<cart-menu></cart-menu>
					</div>
				</div>
			</div>
		</sticky-wrapper>

		<div class="header-bottom">
			<div class="container">
				<div class="header-category-menu row gutter-no text-white w-100">
					<div class="category-menu-content scrollable scrollable-light">
						<div class="category category-icon">
							<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'computers-3'}}">
								<figure class="category-media">
									<i class="d-icon-desktop"></i>
								</figure>
								<div class="category-content">
									<h4 class="category-name">Computers</h4>
								</div>
							</nuxt-link>
						</div>
						<div class="category category-icon">
							<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'component'}}">
								<figure class="category-media">
									<i class="d-icon-wireless"></i>
								</figure>
								<div class="category-content">
									<h4 class="category-name">Component</h4>
								</div>
							</nuxt-link>
						</div>
						<div class="category category-icon">
							<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'electronics-8'}}">
								<figure class="category-media">
									<i class="d-icon-camera2"></i>
								</figure>
								<div class="category-content">
									<h4 class="category-name">Electronics</h4>
								</div>
							</nuxt-link>
						</div>
						<div class="category category-icon">
							<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'game-consoles'}}">
								<figure class="category-media">
									<i
										class="d-icon-gamepad2"
										style="font-size: 3.3rem; margin-bottom: 4px;"
									></i>
								</figure>
								<div class="category-content">
									<h4 class="category-name">Game consoles</h4>
								</div>
							</nuxt-link>
						</div>
						<div class="category category-icon">
							<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'networks'}}">
								<figure class="category-media">
									<i
										class="d-icon-wifi"
										style="font-size: 4rem; margin: -7px auto 3px;"
									></i>
								</figure>
								<div class="category-content">
									<h4 class="category-name">Networks</h4>
								</div>
							</nuxt-link>
						</div>
						<div class="category category-icon">
							<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'office-solution'}}">
								<figure class="category-media">
									<i class="d-icon-officebag"></i>
								</figure>
								<div class="category-content">
									<h4 class="category-name">Office Solution</h4>
								</div>
							</nuxt-link>
						</div>
						<div class="category category-icon">
							<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'smart-phone'}}">
								<figure class="category-media">
									<i
										class="d-icon-mobile"
										style="font-size: 3.7rem; margin: -3px auto 2px;"
									></i>
								</figure>
								<div class="category-content">
									<h4 class="category-name">SmartPhone</h4>
								</div>
							</nuxt-link>
						</div>
						<div class="category category-icon">
							<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'industrial'}}">
								<figure class="category-media">
									<i class="d-icon-bridge-lamp"></i>
								</figure>
								<div class="category-content">
									<h4 class="category-name">Industrial</h4>
								</div>
							</nuxt-link>
						</div>
						<div class="category category-icon">
							<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'headphones'}}">
								<figure class="category-media">
									<i class="d-icon-headphone"></i>
								</figure>
								<div class="category-content">
									<h4 class="category-name">Headphones</h4>
								</div>
							</nuxt-link>
						</div>
						<div class="category category-icon">
							<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'accessories-12'}}">
								<figure class="category-media">
									<i
										class="d-icon-memory"
										style="font-size: 3.6rem; margin: -5px auto 4px;"
									></i>
								</figure>
								<div class="category-content">
									<h4 class="category-name">Accessories</h4>
								</div>
							</nuxt-link>
						</div>
						<div class="category category-icon">
							<nuxt-link :to="{path: '/shop', query: {...$route.query, category: 'all'}}">
								<figure class="category-media">
									<i class="d-icon-category"></i>
								</figure>
								<div class="category-content">
									<h4 class="category-name">All Categories</h4>
								</div>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import SearchBox from '~/components/common/partials/SearchBox';
import CartMenu from '~/components/common/partials/CartMenu';
import HeaderLogin from '~/components/common/partials/HeaderLogin';
import StickyWrapper from '~/components/elements/StickyWrapper';

export default {
	components: {
		SearchBox,
		CartMenu,
		HeaderLogin,
		StickyWrapper
	},
	methods: {
		showMobileMenu: function () {
			document.querySelector( 'body' ).classList.add( 'mmenu-active' );
		}
	}
};
</script>