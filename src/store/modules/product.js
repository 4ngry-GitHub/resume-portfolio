import { defineStore } from 'pinia';
import axios from '@/modules/axios-helper';
import settings from '@/settings/settings.js';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const useProductStore = defineStore('productStore', {
	state: () => ({
		products: null,
		product: null,
		productPage: null,
	}),

	getters: {
		getProducts: state => state.products,
		getProduct: state => state.product,
		getPage: state => state.productPage,
	},

	actions: {
		async GET_PRODUCTS() {
			try {
				const response = await axios.get(settings.backEndUrl + '/product/list');

				if (response.status === 200) {
					this.products = response.data.data;
					return this.products;
				} else {
					toast.error(`Error: ${response.data.error}`);
				}
			} catch (error) {
				toast.error('Помилка! Спробуйте пізніше.');
				console.error('GET_PRODUCTS error:', error);
			}
		},

		async GET_PRODUCT(productId) {
			try {
				const response = await axios.get(settings.backEndUrl + `/product/${productId}`);

				if (response.status === 200) {
					this.product = response.data.data;
					return this.product;
				} else {
					toast.error(`Error: ${response.data.error}`);
				}
			} catch (error) {
				toast.error('Помилка! Спробуйте пізніше.');
				console.error('GET_PRODUCT error:', error);
			}
		},
		getCart() {
			if (!window.localStorage.getItem('product-cart')) {
				window.localStorage.setItem('product-cart', JSON.stringify([]));
			}
			console.log(JSON.parse(window.localStorage.getItem('product-cart')));
			return JSON.parse(window.localStorage.getItem('product-cart'));
		},

		addToCart(product) {
			const productCart = this.getCart();

			if (productCart.filter(p => p.id === product.id).length !== 0) {
				toast.warning('Помилка. Товар вже в кошику.');
				return;
			}

			productCart.push(product);
			window.localStorage.setItem('product-cart', JSON.stringify(productCart));
			toast.success('Товар додано до кошика.');

			return;
		},

		removeFromCart(product) {
			const productCart = this.getCart();

			if (productCart.filter(p => p.id === product.id).length === 0) {
				toast.warning('Помилка. Товар не знайдено.');
				return;
			}

			productCart.splice(productCart.indexOf(product), 1);
			window.localStorage.setItem('product-cart', JSON.stringify(productCart));
			toast.success('Товар видалено з кошика.');
		},

		clearCart() {
			if (this.getCart().length === 0) {
				toast.warning('Помилка. Кошик вже порожній.');
				return;
			}

			window.localStorage.setItem('product-cart', JSON.stringify([]));
			toast.success('Кошик очищено успішно.');
		},
	},
});
