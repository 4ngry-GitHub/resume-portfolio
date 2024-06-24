<template>
	<div v-if="showModal">
		<FeedbackModal @close-feedback-modal="toggleModal" />
	</div>

	<footer class="bg-neutral-100 dark:bg-neutral-800">
		<div class="container px-6 py-6 mx-auto">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-y-4 lg:grid-cols-2 items-center">
				<div class="flex justify-center lg:justify-start">
					<h3 class="max-w-lg text-m font-normal tracking-tight text-gray-800 dark:text-white">
						Якщо ви хочете отримувати більше інформації про наш сайт або товари та послуги, будь ласка, зв’яжіться з
						нами.
					</h3>
				</div>
				<div class="flex justify-center lg:justify-end">
					<button
						@click="toggleModal"
						class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform lg:w-auto focus:outline-none bg-gray-700 rounded-lg hover:bg-indigo-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
						Зворотній зв’язок
					</button>
				</div>
			</div>

			<hr class="my-2 border-gray-200 md:my-2 dark:border-gray-700" />

			<div class="flex items-center justify-center">
				<p class="text-neutral-800 dark:text-gray-400 flex mx-2">Copyright © {{ year }} Ice Coffee</p>
			</div>
		</div>
	</footer>
</template>

<script>
import FeedbackModal from '@/components/FeedbackModal.vue';

export default {
	name: 'Footer',
	components: {
		FeedbackModal,
	},
	data() {
		return {
			year: new Date().getFullYear(),
			showModal: false,
		};
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal;
		},
	},
};
</script>
