<template>
	<!-- hero seciton -->
	<div class="relative w-full h-[320px]" id="home">
		<div class="absolute inset-0 opacity-70">
			<img
				:src="headerImage"
				alt="Background Image"
				class="object-cover object-center w-full h-full" />
		</div>
		<div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
			<div class="md:w-1/2 mb-4 md:mb-0">
				<h1 class="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">{{ projectName }}</h1>
				<p class="font-regular text-xl mb-8 mt-4">Гарна кава за доступними цiнами</p>
			</div>
		</div>
	</div>

	<section class="py-10" id="services">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Нашi послуги</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<div v-for="service in servicesCards" :key="service.id">
					<div class="bg-white rounded-lg shadow-md overflow-hidden">
						<img :src="service.image" :alt="service.title" class="w-full h-64 object-cover" />
						<div class="p-6 text-center">
							<h3 class="text-xl font-medium text-gray-800 mb-2">{{ service.title }}</h3>
							<p class="text-gray-700 text-base">{{ service.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- about us -->
	<section class="bg-gray-100" id="aboutus">
		<div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
				<div class="max-w-lg">
					<h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Про нас</h2>
					<p class="mt-4 text-gray-600 text-lg">
						Bappa flour mill provides our customers with the highest quality products and services. We offer a wide
						variety of flours and spices to choose from, and we are always happy to help our customers find the perfect
						products for their needs. We are committed to providing our customers with the best possible experience. We
						offer competitive prices, fast shipping, and excellent customer service. We are also happy to answer any
						questions that our customers may have about our products or services. If you are looking for a flour and
						spices service business that can provide you with the highest quality products and services, then we are the
						company for you. We look forward to serving you!
					</p>
				</div>
				<div class="mt-12 md:mt-0">
					<img
						src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
						alt="About Us Image"
						class="object-cover rounded-lg shadow-md" />
				</div>
			</div>
		</div>
	</section>

</template>

<script>
import headerImagePlaceholder from '@/assets/home-header.jpg';

export default {
	name: 'HomeView',
	data() {
		return {
			projectName: 'Ice Coffee',
			headerImage: headerImagePlaceholder,
			address: 'Kyiv Hreshiatyk st. 24',
			servicesCards: [
				{
					title: 'Cappuccino',
					description: 'Cappuccino is a coffee drink made with equal parts espresso and steamed milk.',
				},
				{
					title: 'Cappuccino',
					description: 'Cappuccino is a coffee drink made with equal parts espresso and steamed milk.',
				},
				{
					title: 'Cappuccino',
					description: 'Cappuccino is a coffee drink made with equal parts espresso and steamed milk.',
				},
				{
					title: 'Cappuccino',
					description: 'Cappuccino is a coffee drink made with equal parts espresso and steamed milk.',
				},
				{
					title: 'Cappuccino',
					description: 'Cappuccino is a coffee drink made with equal parts espresso and steamed milk.',
				},
				{
					title: 'Cappuccino',
					description: 'Cappuccino is a coffee drink made with equal parts espresso and steamed milk.',
				},
			],
		};
	},
};
</script>
