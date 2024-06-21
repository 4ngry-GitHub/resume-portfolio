import { createApp } from 'vue';
import router from './router';
import 'preline/preline';
import './index.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import App from './App.vue';

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
	filterBeforeCreate: (toast, toasts) => {
		if (toasts.filter(t => t.type === toast.type).length !== 0) {
			// Returning false discards the toast
			return false;
		}
		// You can modify the toast if you want
		return toast;
	},
};

createApp(App).use(router).use(Toast, toastOptions).mount('#app');
