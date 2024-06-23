<template>
	<section v-if="product" class="text-gray-700 body-font overflow-hidden bg-neutral-200 dark:bg-zinc-700 min-h-screen">
		<div class="container px-5 py-24 mx-auto">
			<div class="lg:flex lg:flex-wrap items-start -mx-4">
				<div class="lg:w-1/2 px-4 mb-10 lg:mb-0">
					<img
						alt="Product Image"
						class="w-full h-96 object-cover object-center rounded border border-gray-200"
						:class="[
							'h-80 w-72 object-cover rounded-xl shadow-2xl',
							{ 'grayscale brightness-50 transition duration-500 ease-in-out': !product.is_active },
						]"
						:src="product.image || defaultImage" />
				</div>
				<div class="lg:w-1/2 px-4">
					<div>
						<h2 class="text-sm text-gray-500 dark:text-gray-300 tracking-widest mb-2">Арт. {{ product.article }}</h2>
						<h1 class="text-gray-900 dark:text-gray-100 text-3xl font-medium mb-4 leading-tight break-words">
							{{ product.title }}
						</h1>
					</div>
					<p class="leading-relaxed text-gray-900 dark:text-gray-100 mb-6 break-words">
						{{ product.is_active ? 'В наявності.' : 'Немає в наявності.' }}
					</p>
					<p v-if="product.description" class="leading-relaxed text-gray-900 dark:text-gray-100 mb-6 break-words">
						{{ product.description }}
					</p>
					<div class="flex flex-col lg:flex-row items-center lg:gap-6">
						<span class="text-2xl text-gray-900 dark:text-gray-100 mt-4 lg:mt-0"> ₴{{ product.price / 100 }} </span>
						<div class="flex mt-4 lg:mt-0 w-full lg:w-auto">
							<button
								@click="store.addToCart(product)"
								class="flex items-center justify-center text-black dark:text-white dark:bg-zinc-800 bg-neutral-100 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 dark:hover:bg-indigo-500 rounded-3xl shadow-lg w-full lg:w-auto mb-4 lg:mb-0">
								Додати до кошика
							</button>
							<button
								@click="proceedToCheckout(product)"
								class="flex items-center justify-center text-black dark:text-white dark:bg-zinc-800 bg-neutral-100 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 dark:hover:bg-indigo-500 rounded-3xl shadow-lg w-full lg:w-auto mb-4 lg:mb-0">
								Придбати
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import productPlaceholder from '@/assets/product-placeholder.jpg';
import { useProductStore } from '@/store/modules/product.js';

export default {
	name: 'ProductDetailView',
	computed: {
		product() {
			return this.store.product;
		},
	},
	methods: {
		proceedToCheckout(product) {
			this.store.addToCart(product, false);
			this.$router.push({ name: 'checkout' });
		},
	},
	data() {
		return {
			defaultImage: productPlaceholder,
		};
	},
	created() {
		this.store = useProductStore();
		const productId = this.$route.params.id;
		this.store.GET_PRODUCT(productId);
	},
};
</script>
