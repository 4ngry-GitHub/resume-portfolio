import './modules/dark-mode';
import { createApp } from 'vue';
import './index.css';
import 'preline/preline';

import App from './App.vue';

// router
import router from './router';

// pinia data store
import { createPinia } from 'pinia';
const pinia = createPinia();

// toasts
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
const toastOptions = {
	position: 'top-center',
	timeout: 4990,
	closeOnClick: true,
	pauseOnFocusLoss: false,
	pauseOnHover: false,
	draggable: true,
	draggablePercent: 0.6,
	showCloseButtonOnHover: false,
	hideProgressBar: false,
	closeButton: 'button',
	icon: true,
	rtl: false,
	transition: 'Vue-Toastification__slideBlurred',
	// filterBeforeCreate: (toast, toasts) => {
	// 	if (toasts.filter(t => t.type === toast.type).length !== 0) {
	// 		return false;
	// 	}
	// 	return toast;
	// },
};

createApp(App).use(router).use(pinia).use(Toast, toastOptions).mount('#app');
