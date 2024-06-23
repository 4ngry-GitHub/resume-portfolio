<template>
	<header
		class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full dark:bg-neutral-800 bg-light text-sm py-3 sm:py-0">
		<nav
			class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
			aria-label="Global">
			<div class="flex items-center justify-between">
				<router-link to="/" class="flex-none text-3xl font-semibold text-brand-steel" aria-label="Ice Coffee">
					<img class="w-16 sm:w-24" src="@/assets/ice-coffee-logo.png" alt="Ice Coffee logo" />
				</router-link>
				<div class="sm:hidden">
					<button
						type="button"
						class="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border text-zinc-900 border-neutral-400 hover:border-zinc-400 dark:border-white/20 dark:text-white dark:hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 focus:ring-zinc-300 dark:focus:ring-gray-600"
						data-hs-collapse="#navbar-collapse-with-animation"
						aria-controls="navbar-collapse-with-animation"
						aria-label="Toggle navigation">
						<svg
							class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<line x1="3" x2="21" y1="6" y2="6" />
							<line x1="3" x2="21" y1="12" y2="12" />
							<line x1="3" x2="21" y1="18" y2="18" />
						</svg>
						<svg
							class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>
				</div>
			</div>
			<div
				id="navbar-collapse-with-animation"
				class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
				<div
					class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
					<router-link
						:to="{ name: 'home' }"
						class="font-medium text-brand-gray hover:text-gray-500 dark:text-gray-200 dark:hover:text-white sm:py-6"
						>Головна</router-link
					>
					<router-link
						:to="{ name: 'category' }"
						class="font-medium text-brand-gray hover:text-gray-500 dark:text-gray-200 dark:hover:text-white sm:py-6"
						>Категорї</router-link
					>
					<router-link
						:to="{ name: 'product' }"
						class="font-medium text-brand-gray hover:text-gray-500 dark:text-gray-200 dark:hover:text-white sm:py-6"
						>Усi товари</router-link
					>
					<router-link
						:to="{ name: 'contacts' }"
						class="font-medium text-brand-gray hover:text-gray-500 dark:text-gray-200 dark:hover:text-white sm:py-6"
						>Контакти</router-link
					>
					<a
						class="flex items-center gap-x-2 font-medium text-brand-gray hover:text-gray-500 dark:text-white/[.8] dark:hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6"
						href="/checkout">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-7 w-7">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
						</svg>
						Кошик
					</a>
					<button
						type="button"
						class="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-indigo-500"
						data-hs-theme-click-value="dark">
						<svg
							class="flex-shrink-0 w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
						</svg>
					</button>
					<button
						type="button"
						class="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-indigo-500 font-medium dark:text-gray-400 dark:hover:text-indigo-500"
						data-hs-theme-click-value="light">
						<svg
							class="flex-shrink-0 w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<circle cx="12" cy="12" r="4" />
							<path d="M12 8a2 2 0 1 0 4 4" />
							<path d="M12 2v2" />
							<path d="M12 20v2" />
							<path d="m4.93 4.93 1.41 1.41" />
							<path d="m17.66 17.66 1.41 1.41" />
							<path d="M2 12h2" />
							<path d="M20 12h2" />
							<path d="m6.34 17.66-1.41 1.41" />
							<path d="m19.07 4.93-1.41 1.41" />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'NavBar',
	data() {
		return {
			showMobileMenu: false,
		};
	},
};
</script>

<style>
#navbar-collapse-with-animation .router-link-exact-active {
	@apply text-indigo-500 transition-colors duration-300;
}
</style>
