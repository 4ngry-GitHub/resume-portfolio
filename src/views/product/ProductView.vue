<template>
	<div class="bg-neutral-200 dark:bg-zinc-700 min-h-screen py-6 sm:py-8 lg:py-12 flex flex-col">
		<section
			id="Projects"
			class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 flex-1">
			<div
				v-for="(product, index) in products"
				:key="index"
				class="w-72 bg-white shadow-md rounded-xl h-fit duration-500 hover:scale-105 hover:shadow-xl">
				<router-link :to="{ name: 'product-detail', params: { id: product.id } }">
					<img
						:src="product.image || defaultImage"
						alt="Product"
						:class="[
							'h-80 w-72 object-cover rounded-t-xl',
							{ 'grayscale brightness-50 transition duration-500 ease-in-out': !product.is_active },
						]" />
					<div class="px-4 py-3 w-72">
						<span class="text-gray-500 mr-3 uppercase text-xs">Арт. {{ product.article }}</span>
						<p class="text-lg font-bold text-black truncate block capitalize">{{ product.title }}</p>
						<div class="flex items-center">
							<div>
								<p v-if="product.is_active" class="text-lg font-semibold text-black cursor-auto my-3">
									₴{{ product.price / 100 }}
								</p>
								<p v-else class="text-md font-light text-black cursor-auto my-3">Немає в наявності.</p>
							</div>
						</div>
					</div>
				</router-link>
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
