<template>
	<footer class="bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white w-full mt-auto static">
		<div class="w-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
			<div class="md:w-2/3 w-full px-4 text-white flex flex-col">
				<div class="flex mt-2 flex-col md:flex-row md:justify-between">
					<p class="w-full md:w-2/3 text-gray-800 text-base dark:text-gray-200">
						Якщо ви хочете отримувати більше інформації про наш сайт або товари та послуги, будь ласка, зв’яжіться з
						нами.
					</p>
					<div class="w-44 pt-6 md:pt-0">
						<a class="bg-indigo-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
							>Зворотній зв’язок</a
						>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex mt-2 mb-2 flex-row justify-between">
						<div class=""></div>
						<a
							href="/"
							class="hidden md:block cursor-pointer text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-500 uppercase"
							>Головна</a
						>
						<a
							href="/contacts"
							class="hidden md:block cursor-pointer text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-500 uppercase"
							>Контакти</a
						>
						<a
							href="/category"
							class="hidden md:block cursor-pointer text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-500 uppercase"
							>Категорії</a
						>
						<a
							href="/product"
							class="hidden md:block cursor-pointer text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-500 uppercase"
							>Товари</a
						>
						<div class="flex flex-row space-x-8 items-center justify-between"></div>
					</div>
					<hr class="border-gray-600" />
					<p class="w-full text-center my-2 text-gray-600 dark:text-gray-200">Copyright © {{ year }} Ice Coffee</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			year: new Date().getFullYear(),
			showModel: false,
      phoneNumber: null,
      message: null,
		};
	},
	methods: {
		toggleModal() {
			this.showModel = !this.showModel;
		},
	},
};
</script>
