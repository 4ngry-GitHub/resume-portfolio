<template>
	<h1 class="text-red-600 text-3xl">Home Page {{ key }}</h1>
	<button class="text-white bg-gray-800 rounded-xl" @click="someFunc">CLICK</button>
</template>

<script>
import { useToast } from 'vue-toastification';

export default {
	name: 'HomeView',
	data() {
		return { key: 'hello world' };
	},
	methods: {
		someFunc() {
			console.log('ABC');
			this.toast.error('HELLO WORLD');
		},
	},
	setup() {
		return { toast: useToast() };
	},
};
</script>
