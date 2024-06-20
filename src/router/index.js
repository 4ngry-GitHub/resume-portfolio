import { createRouter, createWebHistory } from 'vue-router';

// import { useToast } from 'vue-toastification';

import HomeView from '@/views/general/HomeView.vue';
import AboutView from '@/views/general/AboutView.vue';

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
	],
});

router.afterEach((to, from, failure) => {
	if (!failure) {
		setTimeout(() => {
			window.HSStaticMethods.autoInit();
		}, 100);
	}
});

const capitalizeFirstLetter = string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

router.beforeEach((toRoute, fromRoute, next) => {
	// window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Admin Panel';
	if (toRoute.meta?.requiresAuth && !auth.isLoggedIn()) {
		next('/login');
		// toast.error('You must be logged in to access this page.');
	}
	window.document.title = `Admin Panel: ${capitalizeFirstLetter(toRoute.name)}`;

	next();
});

export default router;
