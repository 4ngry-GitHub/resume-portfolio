import { defineStore } from 'pinia';
import axios from '@/modules/axios-helper';
import settings from '@/settings/settings.js';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const useHomeStore = defineStore('homeStore', {
	state: () => ({
		showcase: null,
	}),

	getters: {
		getShowcase: state => state.showcase,
	},

	actions: {
		async GET_SHOWCASE() {
			try {
				const response = await axios.get(settings.backEndUrl + '/showcase/list');

				if (response.status === 200) {
					this.showcase = response.data.data;
					return this.showcase;
				} else {
					console.error(`Error: ${response.data.error}`);
					return;
				}
			} catch (error) {
				console.error('GET_SHOWCASE error:', error);
				return;
			}
		},
	},
});
