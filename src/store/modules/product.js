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

		async GET_PRODUCT_PAGE(page = 1, size = 10) {
			try {
				const response = await axios.get(settings.backEndUrl + '/product/page', null, { params: { page, size } });

				if (response.status === 200) {
					this.productPage = response.data;
					return this.productPage;
				} else {
					toast.error(`Error: ${response.data.error}`);
				}
			} catch (error) {
				toast.error('Помилка! Спробуйте пізніше.');
				console.error('GET_PRODUCT_PAGE error:', error);
			}
		},

		getCart() {
			if (!window.localStorage.getItem('product-cart')) {
				window.localStorage.setItem('product-cart', JSON.stringify([]));
			}
			return JSON.parse(window.localStorage.getItem('product-cart'));
		},

		addToCart(product) {
			const productCart = this.getCart();

			if (productCart.filter(p => p.id === product.id).length !== 0) {
				toast.warning('Товар вже в кошику.');
				return;
			}

			if (!product.is_active) {
				toast.warning('Помилка. Товар недоступний.');
				return;
			}

			productCart.push({
				id: product.id,
				quantity: 1,
				title: product.title,
				image: product.image,
				price: product.price,
			});
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

		clearCart(sendToast = true) {
			if (this.getCart().length === 0) {
				if (sendToast) {
					toast.warning('Помилка. Кошик вже порожній.');
				}
				return;
			}

			window.localStorage.setItem('product-cart', JSON.stringify([]));
			if (sendToast) {
				toast.success('Кошик очищено успішно.');
			}
		},
		increaseQuantity(product) {
			const productCart = this.getCart();
			if (productCart.filter(p => p.id === product.id).length === 0) {
				toast.warning('Помилка. Товар не знайдено.');
				return;
			}

			for (const item of productCart) {
				if (item.id === product.id) {
					item.quantity++;
				}
			}

			window.localStorage.setItem('product-cart', JSON.stringify(productCart));
		},
		decreaseQuantity(product) {
			const productCart = this.getCart();
			if (productCart.filter(p => p.id === product.id).length === 0) {
				toast.warning('Помилка. Товар не знайдено.');
				return;
			}

			if (productCart.find(i => i.id === product.id).quantity == 1) {
				toast.warning('Скористайтеся кнопкую "Видалити з кошика".');
				return;
			}

			for (const item of productCart) {
				if (item.id === product.id) {
					item.quantity--;
				}
			}

			window.localStorage.setItem('product-cart', JSON.stringify(productCart));
		},
		getTotal() {
			const productCart = this.getCart();
			let total = 0;
			for (const item of productCart) {
				total += item.price * item.quantity;
			}
			return total / 100;
		},
	},
});
