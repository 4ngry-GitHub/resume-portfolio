import { createRouter, createWebHistory } from 'vue-router';

// import { useToast } from 'vue-toastification';

import HomeView from '@/views/general/HomeView.vue';
import AboutView from '@/views/general/AboutView.vue';
import ProductView from '@/views/product/ProductView.vue';

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
			path: '/about',
			name: 'about',
			component: AboutView,
			meta: {
				title: 'About',
			},
		},
		{
			path: '/products',
			name: 'products',
			component: ProductView,
			meta: {
				title: 'Products',
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
