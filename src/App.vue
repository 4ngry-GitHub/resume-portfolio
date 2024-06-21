<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/FooterBar.vue';
</script>

<template>
	<div class="flex flex-col h-screen overflow-hidden">
		<NavBar />
		<main class="flex-1 overflow-y-scroll">
			<router-view></router-view>
		</main>
		<Footer />
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
