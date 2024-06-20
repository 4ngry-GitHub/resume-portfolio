<template>
	<h1>About Page {{ key }}</h1>
</template>

<script>
export default {
	name: 'AboutView',
	setup() {
		return {key: "value"};
	},
};
</script>

<style scoped>
body {
    background: red;
}
</style>