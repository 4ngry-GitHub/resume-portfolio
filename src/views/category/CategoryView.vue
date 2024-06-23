<template>
	<div class="bg-neutral-200 dark:bg-zinc-700 min-h-screen py-6 sm:py-8 lg:py-12">
	  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
		  <div class="flex items-center gap-12">
			<h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Категорiї</h2>
			<p class="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
			  Оберіть категорію для перегляду товарів із цією категорії.
			</p>
		  </div>
		</div>
  
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
		  <a
			v-for="(category, index) in categories"
			:key="index"
			:href="`/category/${category.id}`"
			class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
		  >
			<img
			  :src="category.image || defaultImage"
			  :alt="category.title"
			  loading="lazy"
			  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
			/>
			<div
			  class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
			></div>
			<span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{{ category.title }}</span>
		  </a>
		</div>
	  </div>
	</div>
  </template>

<script>
import { useCategoryStore } from '@/store/modules/category.js';
import categoryPlaceholder from '@/assets/category-placeholder.jpg';

export default {
	name: 'CategoryView',
	data() {
		return {
			defaultImage: categoryPlaceholder,
		};
	},
	computed: {
		categories() {
			return this.store.getCategories;
		},
		page() {
			return this.store.getPage;
		},
	},
	created() {
		this.store = useCategoryStore();
		this.store.GET_CATEGORIES();
		this.store.GET_CATEGORY_PAGE();
	},
};
</script>
