<template>
	<div v-show="showModal">
		<CheckoutModal @close-checkout-modal="toggleModal" />
	</div>

	<section class="bg-neutral-200 py-8 antialiased dark:bg-zinc-700 md:py-16 min-h-screen">
		<div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
			<h1 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Кошик</h1>

			<div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
				<div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
					<div class="space-y-6">
						<!-- start cart -->
						<div v-if="cart.length === 0">
							<p class="text-lg font-medium text-gray-600 dark:text-gray-300">Кошик порожній.</p>
						</div>
						<div
							v-for="product in cart"
							:key="product.id"
							class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-neutral-800 md:p-6">
							<div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
								<a href="#" class="shrink-0 md:order-1">
									<img class="h-20 w-20" :src="product.image || defaultProductImage" alt="..." />
								</a>

								<div class="flex items-center justify-between md:order-3 md:justify-end">
									<div class="flex items-center">
										<button
											type="button"
											@click="decreaseQuantity(product)"
											data-input-counter-decrement="counter-input"
											class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
											<svg
												class="h-2.5 w-2.5 text-gray-900 dark:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 18 2">
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M1 1h16" />
											</svg>
										</button>
										<!-- product quantity -->
										<p
											class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
											{{ product.quantity }}
										</p>
										<!-- end product quantity -->
										<button
											type="button"
											@click="increaseQuantity(product)"
											data-input-counter-increment="counter-input"
											class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
											<svg
												class="h-2.5 w-2.5 text-gray-900 dark:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 18 18">
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M9 1v16M1 9h16" />
											</svg>
										</button>
									</div>
									<div class="text-end md:order-4 md:w-32">
										<p class="text-base font-bold text-gray-900 dark:text-white">
											₴{{ (product.price * product.quantity) / 100 }}
										</p>
									</div>
								</div>

								<div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
									<a
										:href="`/product/${product.id}`"
										class="text-base truncate block font-medium text-gray-900 hover:underline dark:text-white"
										>{{ product.title }}</a
									>

									<div class="flex items-center gap-4">
										<button
											@click="removeFromCart(product)"
											type="button"
											class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
											<svg
												class="me-1.5 h-5 w-5"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												fill="none"
												viewBox="0 0 24 24">
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M6 18 17.94 6M18 18 6.06 6" />
											</svg>
											Видалити з кошика
										</button>
									</div>
								</div>
							</div>
						</div>
						<!-- end cart -->
					</div>
				</div>

				<div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
					<div
						class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
						<p class="text-xl font-semibold text-gray-900 dark:text-white">Результат замовлення</p>

						<div class="space-y-4">
							<dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
								<dt class="text-base font-bold text-gray-900 dark:text-white">До сплати</dt>
								<dd class="text-base font-bold text-gray-900 dark:text-white">₴{{ total }}</dd>
							</dl>
						</div>

						<a
							@click="toggleModal"
							class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-green-800 dark:text-green-500 border-green-800 dark:border-green-500 border-2 hover:cursor-pointer hover:shadow-lg hover:shadow-green-100 dark:hover:shadow-green-800"
							>Сплатити</a
						>

						<div class="flex items-center justify-center gap-2">
							<span class="text-sm font-normal text-gray-500 dark:text-gray-400"> або </span>
							<a
								href="/product"
								title=""
								class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500 text-indigo-500">
								Продовжити покупки
								<svg
									class="h-5 w-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24">
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 12H5m14 0-4 4m4-4-4-4" />
								</svg>
							</a>
						</div>
						<a
							v-if="cart.length > 0"
							@click="clearCart"
							class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-neutral-200 border-2 border-zinc-700 dark:border-neutral-200 hover:animate-pulse hover:cursor-pointer"
							>Очистити кошик</a
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { ref, computed } from 'vue';
import { useProductStore } from '@/store/modules/product.js';
import productPlaceholder from '@/assets/product-placeholder.jpg';
import CheckoutModal from '@/components/CheckoutModal.vue';

export default {
	name: 'CheckoutView',
	components: {
		CheckoutModal,
	},
	setup() {
		const store = useProductStore();
		const cart = ref(store.getCart());
		const total = ref(store.getTotal());
		const showModal = ref(false);

		const updateCartAndTotal = () => {
			cart.value = store.getCart();
			total.value = store.getTotal();
		};

		const increaseQuantity = product => {
			store.increaseQuantity(product);
			updateCartAndTotal();
		};

		const decreaseQuantity = product => {
			store.decreaseQuantity(product);
			updateCartAndTotal();
		};

		const removeFromCart = product => {
			store.removeFromCart(product);
			updateCartAndTotal();
		};

		const clearCart = () => {
			if (store.getCart().length > 0 && confirm('Ви впевнені, що хочете очистити кошик?')) {
				store.clearCart();
				updateCartAndTotal();
			}
		};

		const toggleModal = () => {
			if (cart.value.length === 0) {
				return;
			}
			showModal.value = !showModal.value;
		};

		return {
			defaultProductImage: productPlaceholder,
			cart,
			total,
			showModal,
			increaseQuantity,
			decreaseQuantity,
			removeFromCart,
			clearCart,
			toggleModal,
			CheckoutModal,
		};
	},
};
</script>
