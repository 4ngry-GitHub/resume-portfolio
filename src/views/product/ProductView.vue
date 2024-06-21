<template>
	<h1 class="text-red-600 text-3xl">Product Page</h1>
	{{ myKey }}
	<br />
	<button @click="clearProductCart" class="bg-slate-300 p-10 rounded-xl hover:shadow-xl">ABOBA</button>
	<ul v-for="product in products" :key="product">
		<li class="py-5 my-6 bg-green-500" @click="addProductToCart(product)">Add: {{ product.id }}</li>
		<li class="py-5 my-6 bg-red-500" @click="removeProductFromCart(product)">Remove: {{ product.id }}</li>
	</ul>

	<!-- {{ products || 'Loading...' }} -->
</template>

<script>
import { useProductStore } from '@/store/modules/product.js';

export default {
	name: 'ProductView',
	data() {
		return {
			myKey: 'myValue',
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
		}
	},
	computed: {
		products() {
			return this.store.getProducts;
		},
	},
	created() {
		this.store = useProductStore();
		this.store.GET_PRODUCTS();
	},
};
</script>

<style></style>
