<template>
	<h1 class="text-red-500 text-3xl">Checkout test</h1>
</template>
<script>
import { useProductStore } from '@/store/modules/product.js';

export default {
	name: 'FeedbackModal',
	data() {
		return {
			credentials: '',
			phoneNumber: '',
			postalService: '',
			postalMethod: '',
			orderNote: '',
			products: [],
		};
	},
};
</script>
