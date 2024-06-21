<template>
	<header
		class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full dark:bg-zinc-900 bg-light text-sm py-3 sm:py-0">
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
						to="/"
						class="font-medium text-brand-gray hover:text-gray-500 dark:text-gray-200 dark:hover:text-white sm:py-6"
						>Home</router-link
					>
					<router-link
						to="/about"
						class="font-medium text-brand-gray hover:text-gray-500 dark:text-gray-200 dark:hover:text-white sm:py-6"
						>About</router-link
					>
					<button
						type="button"
						class="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
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
						class="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
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

					<a
						class="flex items-center gap-x-2 font-medium text-brand-gray hover:text-gray-500 dark:text-white/[.8] dark:hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6"
						:href="discordLink">
						<svg
							class="h-7 w-7"
							fill="currentColor"
							viewbox="0 0 24 24"
							style="color: #7289da"
							xmlns="http://www.w3.org/2000/svg"
							fill-rule="evenodd"
							clip-rule="evenodd">
							<path
								d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
						</svg>
						Join
					</a>
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
			discordLink: 'https://discord.gg/JEjVS7fzzQ',
		};
	},
};
</script>

<style>
#navbar-collapse-with-animation .router-link-exact-active {
	@apply text-brand-steel transition-colors duration-300;
}
</style>
