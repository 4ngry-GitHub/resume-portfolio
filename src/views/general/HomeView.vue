<template>
	<h1 class="text-red-600 text-3xl">Home Page {{ key }}</h1>
	<button class="text-red-200 bg-gray-800 rounded-xl p-5 ml-5 mt-5 hover:p-10" @click="someFunc">CLICK</button>
</template>

<script>
import { useToast } from 'vue-toastification';
import axios from '@/modules/axios-helper';

export default {
	name: 'HomeView',
	data() {
		return { key: 'hello world' };
	},
	methods: {
		async someFunc() {
			console.log('ABC');
			const response = await axios.get('http://localhost:8000/product/list');
			this.toast.info('HELLO WORLD');
			console.log(response.ok)
			console.log(response)
		},
	},
	setup() {
		return { toast: useToast() };
	},
};
</script>
