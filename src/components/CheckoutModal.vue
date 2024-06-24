<template>
	<!-- Main modal -->
	<div
		tabindex="-1"
		class="flex items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-neutral-500 dark:bg-zinc-900 bg-opacity-90 dark:bg-opacity-90">
		<div class="relative p-4 w-full max-w-md max-h-full justify-center">
			<!-- Modal content -->
			<div class="relative bg-neutral-200 rounded-lg shadow dark:bg-zinc-700">
				<!-- Modal header -->
				<div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Оформлення замовлення</h3>
					<button
						@click="closeModal"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
						data-modal-toggle="crud-modal">
						<svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
						</svg>
					</button>
				</div>
				<!-- Modal body -->
				<form @submit.prevent="processCheckout" class="p-4 md:p-5">
					<div class="grid gap-4 mb-4 grid-cols-2">
						<div class="col-span-2">
							<label for="credentials" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Iм'я та прізвище</label
							>
							<input
								v-model="credentials"
								:minlength="cfg.credentialsMinLength"
								:maxlength="cfg.credentialsMaxLength"
								required
								placeholder="Iм'я та прізвище"
								class="bg-gray-50 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								type="text" />
							<label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Номер телефону</label
							>
							<input
								v-model="phoneNumber"
								:minlength="cfg.phoneNumberLength"
								:maxlength="cfg.phoneNumberLength"
								required
								placeholder="+(380)"
								class="bg-gray-50 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								type="text" />
							<label for="delivery-address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Адреса доставки та номер відділення</label
							>
							<input
								v-model="deliveryAddress"
								placeholder="Адреса доставки та номер відділення"
								:minlength="cfg.deliveryAddressMinLength"
								:maxlength="cfg.deliveryAddressMaxLength"
								required
								class="bg-gray-50 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								type="text" />
							<label for="note" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Коментар до замовлення</label
							>
							<input
								v-model="orderNote"
								:maxlength="cfg.orderNoteMaxLength"
								placeholder="Коментар до замовлення"
								class="bg-gray-50 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								type="text" />
						</div>
						<div class="col-span-2 sm:col-span-1">
							<label for="postal-method" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Спосіб оплати</label
							>
							<select
								id="category"
								v-model="postalMethod"
								required
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
								<option value="credit-card">Оплата карткою</option>
								<option value="cash-on-receiving">Післяплата</option>
								<option value="courier-delivery">Доставка кур'єром</option>
							</select>
							<label for="postal-service" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Поштовий сервіс</label
							>
							<select
								id="category"
								v-model="postalService"
								required
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
								<option value="nova-poshta">Нова Пошта</option>
								<option value="ukr-poshta">Укр Пошта</option>
								<option value="self-pickup">Самовивiз</option>
							</select>
						</div>
					</div>
					<button
						type="submit"
						class="text-gray-700 dark:text-gray-100 inline-flex items-center bg-green-500 hover:bg-green-400 dark:bg-green-500 dark:hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4">
						<svg
							class="w-6 h-6 text-gray-700 dark:text-gray-100"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m8 12 2 2 5-5m4.5 5.3 1-.9a2 2 0 0 0 0-2.8l-1-.9a2 2 0 0 1-.6-1.4V7a2 2 0 0 0-2-2h-1.2a2 2 0 0 1-1.4-.5l-.9-1a2 2 0 0 0-2.8 0l-.9 1a2 2 0 0 1-1.4.6H7a2 2 0 0 0-2 2v1.2c0 .5-.2 1-.5 1.4l-1 .9a2 2 0 0 0 0 2.8l1 .9c.3.4.6.9.6 1.4V17a2 2 0 0 0 2 2h1.2c.5 0 1 .2 1.4.5l.9 1a2 2 0 0 0 2.8 0l.9-1a2 2 0 0 1 1.4-.6H17a2 2 0 0 0 2-2v-1.2c0-.5.2-1 .5-1.4Z" />
						</svg>
						Підтвердити
					</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
import { useProductStore } from '@/store/modules/product.js';
import { useToast } from 'vue-toastification';
import axios from '@/modules/axios-helper';
import config from '@/settings/config.js';
import settings from '@/settings/settings.js';

export default {
	name: 'CheckoutModal',
	emits: ['close-checkout-modal'],
	data() {
		return {
			credentials: '',
			phoneNumber: '',
			deliveryAddress: '',
			postalService: null,
			postalMethod: null,
			orderNote: '',
			products: [],
		};
	},
	computed: {
		cart() {
			return this.store.getCart();
		},
	},
	methods: {
		closeModal() {
			this.$emit('close-checkout-modal');
		},
		async sendCheckout(payload) {
			try {
				const response = await axios.post(settings.backEndUrl + '/order/checkout', payload);

				if (response.status === 200) {
					this.toast.success("Заявка на доставку надіслана. Наш менеджер зв'яжеться з вами найближчим часом");
				} else {
					toast.error('Помилка! Спробуйте пізніше.');
				}
			} catch (error) {
				this.toast.error('Помилка! Спробуйте пізніше.');
				console.error('sendCheckout error:', error);
			}
		},
		async processCheckout() {
			// validating data
			if (!this.validateOrder()) {
				return;
			}
			// filling payload object
			const payload = {};
			payload.products = this.serializeProducts();
			payload.credentials = this.credentials;
			payload.phone_number = this.phoneNumber;
			payload.delivery_address = this.deliveryAddress;
			payload.postal_service = this.postalService;
			payload.postal_method = this.postalMethod;
			payload.order_note = this.orderNote || null;
			// sending request
			await this.sendCheckout(payload);
			// closing modal and clearing cart
			this.store.clearCart(false);
			this.closeModal();
		},
		validateOrder() {
			// phone number
			if (!this.cfg.phoneNumberPattern.test(this.phoneNumber)) {
				this.toast.error('Невірний формат номеру телефону');
				return false;
			}
			// credentials
			if (this.credentials < this.cfg.credentialsMinLength || this.credentials > this.cfg.credentialsMaxLength) {
				this.toast.error(
					`Довжина ім'я та прізвища має бути від ${this.cfg.credentialsMinLength} до ${this.cfg.credentialsMaxLength} символів`,
				);
				return false;
			}
			// delivery address
			if (
				this.deliveryAddress < this.cfg.deliveryAddressMinLength ||
				this.deliveryAddress > this.cfg.deliveryAddressMaxLength
			) {
				this.toast.error(
					`Довжина адреси має бути від ${this.cfg.deliveryAddressMinLength} до ${this.cfg.deliveryAddressMaxLength} символів`,
				);
				return false;
			}
			// order note
			if (this.orderNote > this.cfg.orderNoteMaxLength) {
				this.toast.error(`Довжина коментаря має бути не більше ${this.cfg.orderNoteMaxLength} символів`);
				return false;
			}

			// validating method and service
			if (this.postalMethod === 'courier-delivery' && this.postalService === 'self-pickup') {
				this.toast.error('Вкажіть спосіб доставки або поштової сервіс');
				return false;
			}

			return true;
		},
		serializeProducts() {
			const products = this.cart;

			if (products.length === 0) {
				this.toast.error('Кошик порожній');
				return;
			}

			const serializedProducts = [];

			for (let product of products) {
				serializedProducts.push({ id: product.id, quantity: product.quantity });
			}
			return serializedProducts;
		},
	},
	setup() {
		return {
			toast: useToast(),
			cfg: config,
		};
	},
	created() {
		this.store = useProductStore();
	},
};
</script>
