import axios from 'axios';
import { useToast } from 'vue-toastification';
import router from '@/router';

const toast = useToast();

axios.interceptors.request.use(
	function (config) {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (!error.response) {
			toast.error('Network error');
			router.push({ name: 'error' });
			return Promise.reject(error);
		}

		if (error.response.status === 401) {
			localStorage.removeItem('token');
			router.push({ name: 'login' });
			return Promise.reject(error);
		}

		if (error.response.status === 404) {
			const routesToCheck = ['/lunches', '/images', '/messages'];
			const currentRoute = router.currentRoute.value.path;
			if (currentRoute && !routesToCheck.includes(currentRoute)) {
				router.push({ name: 'error' });
				return Promise.reject(error);
			}
			return Promise.reject(error);
		}

		if (error.response.status === 422) {
			if (typeof error.response?.data?.detail === 'string') {
				toast.error(`Error: ${error.response.data.detail}`);
				return Promise.reject(error);
			} else {
				toast.error(`Error: ${error.response.data.detail[0].msg}`);
				return Promise.reject(error);
			}
		}

		// toast.error(`Error: ${error.response.data.detail}`);
		return Promise.reject(error);
	},
);

export default axios;
