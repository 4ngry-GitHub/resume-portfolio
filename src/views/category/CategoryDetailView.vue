<template>
	<div class="bg-neutral-200 dark:bg-zinc-700 min-h-screen py-6 sm:py-8 lg:py-12 flex flex-col">
		<div class="flex justify-center px-4">
			<h2
				class="text-2xl font-light text-gray-600 lg:text-3xl dark:text-gray-300 text-center break-words w-full max-w-2xl">
				{{ products ? category.description : 'Товари для даної категорії відсутні.' }}
			</h2>
		</div>
		<section
			v-if="products"
			id="Projects"
			class="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-10 gap-x-6 mt-10 mb-5 flex-1 px-4 lg:px-0">
			<div
				v-for="(product, index) in products"
				:key="index"
				class="w-full max-w-sm bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl max-h-[500px] h-fit flex flex-col">
				<router-link :to="{ name: 'product-detail', params: { id: product.id } }">
					<img
						:src="product.image || defaultImage"
						alt="Product"
						:class="[
							'h-64 w-full object-cover rounded-t-xl lg:h-72',
							{ 'grayscale brightness-50 transition duration-500 ease-in-out': !product.is_active },
						]" />
					<div class="px-4 py-3 flex flex-col justify-between flex-1">
						<div>
							<span class="text-gray-500 mr-3 uppercase text-xs">Арт. {{ product.article }}</span>
							<p class="text-lg font-bold text-black truncate capitalize">{{ product.title }}</p>
						</div>
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
import { useCategoryStore } from '@/store/modules/category.js';
import productPlaceholder from '@/assets/product-placeholder.jpg';

export default {
	name: 'ProductView',
	data() {
		return {
			defaultImage: productPlaceholder,
		};
	},
	computed: {
		category() {
			return this.store.getCategory;
		},
		products() {
			return this.category?.products;
		},
		page() {
			return this.store.getPage;
		},
	},
	created() {
		this.store = useCategoryStore();
		const categoryId = this.$route.params.id;
		this.store.GET_CATEGORY(categoryId);
	},
};
</script>
