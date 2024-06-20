import { createApp } from 'vue';
import router from './router';
import "preline/preline";
import './index.css';
import Toast from 'vue-toastification';
import App from './App.vue';

const toastOptions = {
	position: 'top-center',
	timeout: 2990,
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
};

createApp(App).use(router).use(Toast, toastOptions).mount('#app');
