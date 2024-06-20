<template>
	<div class="dark:bg-dark bg-light flex flex-col h-screen overflow-hidden">
		<!-- <NavBar v-if="showNavBar" /> -->
		<main class="flex-1 overflow-y-scroll">
      <h1 class="text-red-600">Test</h1>
			<router-view></router-view>
		</main>
		<!-- <FooterBar /> -->
	</div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';
// import FooterBar from '@/components/FooterBar.vue';

export default {
	name: 'App',
	// components: { NavBar, FooterBar },
	// computed: {
	// 	showNavBar() {
	// 		const excludedRoutes = ['login', 'register', 'error'];
	// 		const routeNames = this.$router.options.routes.map(route => route.name);
	// 		const filteredRouteNames = routeNames.filter(name => !excludedRoutes.includes(name));
	// 		return filteredRouteNames.includes(this.$route.name);
	// 	},
	// },
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
