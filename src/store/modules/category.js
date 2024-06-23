import { defineStore } from 'pinia';
import axios from '@/modules/axios-helper';
import settings from '@/settings/settings.js';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const useCategoryStore = defineStore('categoryStore', {
	state: () => ({
		categories: null,
		category: null,
		categoryPage: null,
	}),

	getters: {
		getCategories: state => state.categories,
		getCategory: state => state.category,
		getPage: state => state.categoryPage,
	},

	actions: {
		async GET_CATEGORIES() {
			try {
				const response = await axios.get(settings.backEndUrl + '/category/list');

				if (response.status === 200) {
					this.categories = response.data.data;
					return this.categories;
				} else {
					toast.error(`Error: ${response.data.error}`);
				}
			} catch (error) {
				toast.error('Помилка! Спробуйте пізніше.');
				console.error('GET_CATEGORIES error:', error);
			}
		},

		async GET_CATEGORY(categoryId) {
			try {
				const response = await axios.get(settings.backEndUrl + `/category/${categoryId}`);

				if (response.status === 200) {
					this.category = response.data.data;
					return this.category;
				} else {
					toast.error(`Error: ${response.data.error}`);
				}
			} catch (error) {
				toast.error('Помилка! Спробуйте пізніше.');
				console.error('GET_CATEGORY error:', error);
			}
		},

		async GET_CATEGORY_PAGE(page = 1, size = 10) {
			try {
				const response = await axios.get(settings.backEndUrl + '/category/page', null, { params: { page, size } });

				if (response.status === 200) {
					this.categoryPage = response.data;
					return this.categoryPage;
				} else {
					toast.error(`Error: ${response.data.error}`);
				}
			} catch (error) {
				toast.error('Помилка! Спробуйте пізніше.');
				console.error('GET_CATEGORY_PAGE error:', error);
			}
		},
	},
});
