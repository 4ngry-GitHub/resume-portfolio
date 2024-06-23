<template>
	<h1>Contacts Page {{ key }}</h1>
</template>

<script>
export default {
	name: 'ContactsView',
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