<template>
	<!-- header -->
	<div class="relative w-full h-[320px]" id="home">
		<div class="absolute inset-0 opacity-90">
			<img :src="headerImage" alt="..." class="object-cover object-center w-full h-full" />
		</div>
		<div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
			<div class="md:w-1/2 mb-4 md:mb-0">
				<h1 class="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2 text-white">{{ projectName }}</h1>
				<p class="font-regular text-xl mb-8 mt-4 text-gray-400">Гарна кава за доступними цiнами</p>
			</div>
		</div>
	</div>

	<!-- showcase -->
	<section v-if="showcase" class="py-10 bg-neutral-200 dark:bg-zinc-700" id="services">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold mb-8 text-center text-black dark:text-white">Вітрина</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				<div v-for="item in showcase" :key="item">
					<div
						@click="redirectTo(item.url)"
						class="bg-white rounded-lg shadow-md overflow-hidden h-full hover:scale-105 hover:shadow-xl"
						:class="{ 'cursor-pointer': item.url }">
						<img :src="item.image || showcaseImage" alt="..." class="w-full h-64 object-cover" />
						<div class="p-6 text-center">
							<h3 class="text-xl font-medium text-gray-800 mb-2">{{ item.title }}</h3>
							<p class="text-gray-700 text-base">{{ item.text }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- about us -->
	<section class="bg-neutral-200 dark:bg-zinc-700">
		<div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
				<div class="max-w-lg">
					<h2 class="text-3xl font-bold text-black dark:text-white mb-8 text-center">Про нас</h2>
					<p class="mt-4 text-gray-800 dark:text-gray-200 text-lg">
						Наша кав'ярня є місцем, де кожна чашка кави - це справжнє мистецтво. Ми прагнемо досягти вищої якості у
						кожному ковтку, обираючи тільки найкращі зерна кави з усього світу. У нас ви знайдете атмосферу тепла і
						комфорту, де кожен візит стає справжнім насолодою для смаку і душі. Приходьте до нас насолодитися унікальним
						смаком нашої кави та дружньою атмосферою!
					</p>
				</div>
				<div class="mt-12 md:mt-0 w-full md:w-96">
					<img
						:src="headerImage"
						alt="About Us Image"
						class="object-cover rounded-lg shadow-md w-full h-72 md:h-auto" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import headerImagePlaceholder from '@/assets/home-header.jpg';

import { useHomeStore } from '@/store/index.js';

export default {
	name: 'HomeView',
	computed: {
		showcase() {
			return this.store.showcase;
		},
	},
	data() {
		return {
			projectName: 'Ice Kava',
			headerImage: headerImagePlaceholder,
			showcaseImage: headerImagePlaceholder,
			address: 'Kyiv Hreshiatyk st. 24',
		};
	},
	methods: {
		redirectTo(url) {
			if (!url) {
				return;
			}
			window.location.href = url;
		},
	},
	created() {
		this.store = useHomeStore();
		this.store.GET_SHOWCASE();
	},
};
</script>
