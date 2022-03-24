<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-top">
				<swiper-carousel
					class="swiper-carousel swiper-theme swiper-middle"
					:options="serviceSlider"
				>
					<div class="icon-box icon-box-side slide-icon-box justify-content-center swiper-slide">
						<i
							class="icon-box-icon d-icon-truck"
							style="font-size: 46px;"
						>
						</i>
						<div class="icon-box-content">
							<h4 class="icon-box-title">Free shipping &amp; Return</h4>
							<p>Free shipping on orders over $99</p>
						</div>
					</div>
					<div class="icon-box icon-box-side slide-icon-box justify-content-center swiper-slide">
						<i class="icon-box-icon d-icon-service">
						</i>
						<div class="icon-box-content">
							<h4 class="icon-box-title">Customer Support 24/7</h4>
							<p>Instant access to perfect support</p>
						</div>
					</div>
					<div class="icon-box icon-box-side slide-icon-box justify-content-center swiper-slide">
						<i class="icon-box-icon d-icon-secure">
						</i>
						<div class="icon-box-content">
							<h4 class="icon-box-title">100% Secure Payment</h4>
							<p>We ensure secure payment!</p>
						</div>
					</div>
				</swiper-carousel>
			</div>
			<div class="footer-middle">
				<div class="container p-0">
					<div class="row">
						<div class="col-lg-4 col-md-12">
							<div class="widget widget-about">
								<nuxt-link
									to="/"
									class="logo-footer"
								>
									<img
										src="~/static/images/home/logo-footer.png"
										alt="logo-footer"
										width="154"
										height="43"
									/>
								</nuxt-link>
								<div class="widget-body">
									<p>Fringilla urna porttitor rhoncus dolor purus luctus <br> venenatis lectus
										magna
										fringilla diam maecenas <br> ultricies mi eget mauris.
									</p>
									<a href="mailto:mail@example.com">Riode@example.com</a>
								</div>
							</div>
						</div>
						<div class="col-lg-8 col-md-12">
							<div class="row">
								<div class="col-md-4 col-sm-12">
									<div class="widget">
										<h4 class="widget-title">About Us</h4>
										<ul class="widget-body">
											<li>
												<nuxt-link to="/pages/about-us">About Us</nuxt-link>
											</li>
											<li>
												<a href="javascript:;">Order History</a>
											</li>
											<li>
												<nuxt-link to="/pages/faqs">FAQ</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/pages/contact-us">Contact Us</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/pages/login">Log in</nuxt-link>
											</li>
										</ul>
									</div>
								</div>
								<div class="col-md-4 col-sm-12">
									<div class="widget">
										<h4 class="widget-title">Customer Service</h4>
										<ul class="widget-body">
											<li>
												<a href="javascript:;">Payment Methods</a>
											</li>
											<li>
												<a href="javascript:;">Money-back Guarantee!</a>
											</li>
											<li>
												<a href="javascript:;">Returns</a>
											</li>
											<li>
												<a href="javascript:;">Shipping</a>
											</li>
											<li>
												<a href="javascript:;">Terms and Conditions</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="col-md-4 col-sm-12">
									<div class="widget">
										<h4 class="widget-title">My Account</h4>
										<ul class="widget-body">
											<li>
												<a href="javascript:;">Sign in</a>
											</li>
											<li>
												<nuxt-link to="/pages/cart">View Cart</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/pages/wishlist">My Wishlist</nuxt-link>
											</li>
											<li>
												<a href="javascript:;">Track My Order</a>
											</li>
											<li>
												<a href="javascript:;">Help</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="footer-bottom">
				<div class="container p-0">
					<div class="footer-left">
						<figure class="payment">
							<img
								src="~/static/images/payment.png"
								alt="payment"
								width="159"
								height="29"
							/>
						</figure>
					</div>
					<div class="footer-center">
						<p class="copyright">Riode eCommerce &copy; 2021. All Rights Reserved</p>
					</div>
					<div class="footer-right">
						<div class="social-links">
							<a
								href="javascript:;"
								title="social-icon-facebook"
								class="social-link social-facebook fab fa-facebook-f"
							></a>
							<a
								href="javascript:;"
								title="social-icon-twitter"
								class="social-link social-twitter fab fa-twitter"
							></a>
							<a
								href="javascript:;"
								class="social-link social-linkedin fab fa-linkedin-in mr-0"
							></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>


<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { serviceSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel
	},
	data: function () {
		return {
			serviceSlider: serviceSlider
		};
	}
};
</script>