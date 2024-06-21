<template>
	<!-- old footer -->
	<!-- Grid -->
	<div class="text-center">
		<!-- End Col -->

		<div class="mt-3">
			<p class="text-gray-500">Ice Coffee {{ year }} © All rights reserved.</p>
		</div>
	</div>
	<!-- End Grid -->
	<!-- old footer -->
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			year: new Date().getFullYear(),
		};
	},
};
</script>
