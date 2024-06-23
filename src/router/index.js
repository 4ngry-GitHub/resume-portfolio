import { createRouter, createWebHistory } from 'vue-router';

// import { useToast } from 'vue-toastification';

import HomeView from '@/views/general/HomeView.vue';
import ContactsView from '@/views/general/ContactsView.vue';
import ProductView from '@/views/product/ProductView.vue';
import ProductDetailView from '@/views/product/ProductDetailView.vue'
import CategoryView from '@/views/category/CategoryView.vue';
import CheckoutView from '@/views/checkout/CheckoutView.vue';

// const toast = useToast();
import { IStaticMethods } from 'preline/preline';

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: {
				title: 'Home',
			},
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: ContactsView,
			meta: {
				title: 'Contacts',
			},
		},
		{
			path: '/category',
			name: 'category',
			component: CategoryView,
			meta: {
				title: 'Category',
			},
		},
		{
			path: '/product',
			name: 'product',
			component: ProductView,
			meta: {
				title: 'Product',
			},
		},
		{
			path: '/product/:id',
			name: 'product-detail',
			component: ProductDetailView,
			meta: {
				title: 'Product detail',
			},
		},
		{
			path: '/checkout',
			name: 'checkout',
			component: CheckoutView,
			meta: {
				title: 'Checkout',
			},
		},
		{ path: '/:catchAll(.*)', redirect: '/', name: 'undefined' },
	],
});

router.afterEach((to, from, failure) => {
	if (!failure) {
		setTimeout(() => {
			window.HSStaticMethods.autoInit();
		}, 100);
	}
});

export default router;
