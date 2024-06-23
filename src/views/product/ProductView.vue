<template>
	<div class="bg-neutral-200 dark:bg-zinc-700 min-h-screen py-6 sm:py-8 lg:py-12 flex flex-col">
		<section
			id="Projects"
			class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 flex-1">
			<div
				v-for="(product, index) in products"
				:key="index"
				class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
				<a href="#">
					<img
						:src="product.image || defaultImage"
						alt="Product"
						:class="[
							'h-80 w-72 object-cover rounded-t-xl',
							{ 'grayscale brightness-50 transition duration-500 ease-in-out': !product.is_active },
						]" />
					<div class="px-4 py-3 w-72">
						<span class="text-gray-400 mr-3 uppercase text-xs">Арт. {{ product.article }}</span>
						<p class="text-lg font-bold text-black truncate block capitalize">{{ product.title }}</p>
						<div class="flex items-center">
							<div>
								<p v-if="product.is_active" class="text-lg font-semibold text-black cursor-auto my-3">
									₴{{ product.price / 100 }}
								</p>
								<p v-else class="text-md font-light text-black cursor-auto my-3">Немає в наявності.</p>
							</div>
							<div class="ml-auto">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-bag-plus"
									viewBox="0 0 16 16">
									<path
										fill-rule="evenodd"
										d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
									<path
										d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
								</svg>
							</div>
						</div>
					</div>
				</a>
			</div>
		</section>
	</div>
</template>

<script>
import { useProductStore } from '@/store/modules/product.js';
import productPlaceholder from '@/assets/product-placeholder.jpg';

export default {
	name: 'ProductView',
	data() {
		return {
			defaultImage: productPlaceholder,
		};
	},
	methods: {
		addProductToCart(product) {
			this.store.addToCart(product);
		},
		removeProductFromCart(product) {
			this.store.removeFromCart(product);
		},
		clearProductCart() {
			this.store.clearCart();
		},
	},
	computed: {
		products() {
			return this.store.getProducts;
		},
		page() {
			return this.store.getPage;
		},
	},
	created() {
		this.store = useProductStore();
		this.store.GET_PRODUCTS();
		this.store.GET_PRODUCT_PAGE();
	},
};
</script>
