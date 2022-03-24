<template>
	<main class="main skeleton-body shop">
		<div class="page-content pb-10">
			<div class="container">
				<ul class="breadcrumb breadcrumb-sm">
					<li>
						<nuxt-link to="/"><i class="d-icon-home"></i></nuxt-link>
					</li>
					<li>Shop</li>
				</ul>

				<div class="row main-content-wrap gutter-lg">
					<sidebar-filter-one :showFilterButton="false"></sidebar-filter-one>

					<div class="col-lg-9 main-content">
						<div
							class="shop-banner-default banner"
							style="background-image: url('./images/home/shop-banner.jpg'); background-color: #f2f2f3;"
						>
							<div class="banner-content">
								<h4 class="banner-subtitle mb-2 text-body text-uppercase ls-m font-weight-normal">
									Riode Shop</h4>
								<h1 class="banner-title font-weight-normal text-uppercase ls-normal mb-4"><strong class="ls-m">Banner</strong> With<br /> Sidebar</h1>
								<p
									class="font-primary lh-1 ls-m mb-0"
									style="font-size: 1.6rem;"
								>Simple and Fresh ShopStyle</p>
							</div>
						</div>

						<product-list-one :itemsPerRow="4"></product-list-one>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ShopBanner from '~/components/partials/shop/ShopBanner';
import ProductListOne from '~/components/partials/shop/product-list/ProductListOne';
import SidebarFilterOne from '~/components/partials/shop/sidebar/SidebarFilterOne';

export default {
	components: {
		ShopBanner,
		SidebarFilterOne,
		ProductListOne
	}
};
</script>