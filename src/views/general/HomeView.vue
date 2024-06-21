<template>
	<!-- nav bar section -->
	<nav class="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
		<!-- <div class="text-xl">{{ projectName }}</div> -->

		<!-- <div class="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
			<a href="tel:+123">
				<div class="flex justify-end">
					<div class="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
						</svg>
						Call now
					</div>
				</div>
			</a>
		</div> -->
	</nav>
	<!-- hero seciton -->
	<div class="relative w-full h-[320px]" id="home">
		<div class="absolute inset-0 opacity-70">
			<img
				src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png"
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

	<!-- our services section -->
	<!-- <section class="py-10" id="services">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Нашi послуги</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8" v-for="service in servicesCards" :key="service">
				<div class="bg-white rounded-lg shadow-md overflow-hidden">
					<img
						src="https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp"
						alt="wheat flour grinding"
						class="w-full h-64 object-cover" />
					<div class="p-6 text-center">
						<h3 class="text-xl font-medium text-gray-800 mb-2">{{service.title }}</h3>
						<p class="text-gray-700 text-base">
							{{ service.description }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section> -->
	<section class="py-10" id="services">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Нашi послуги</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				<!-- Loop through servicesCards array -->
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
					<h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
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

	<!-- Visit us section -->
	<section class="bg-gray-100">
		<div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
			<div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
				<h2 class="text-3xl font-extrabold text-gray-900" id="contactUs">Visit Our Location</h2>
				<p class="mt-3 text-lg text-gray-500">Let us serve you the best</p>
			</div>
			<div class="mt-8 lg:mt-20">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<div class="max-w-full mx-auto rounded-lg overflow-hidden">
							<div class="border-t border-gray-200 px-6 py-4">
								<h3 class="text-lg font-bold text-gray-900">Contact</h3>
								<p class="mt-1 font-bold text-gray-600"><a href="tel:+123">Phone: +91 123456789</a></p>
								<a class="flex m-1" href="tel:+919823331842">
									<div class="flex-shrink-0">
										<div class="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2">
											<!-- Heroicon name: phone -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="w-6 h-6">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
											</svg>
											Call now
										</div>
									</div>
								</a>
							</div>
							<div class="px-6 py-4">
								<h3 class="text-lg font-medium text-gray-900">Our Address</h3>
								<p class="mt-1 text-gray-600">Sale galli, 60 foot road, Latur</p>
							</div>
							<div class="border-t border-gray-200 px-6 py-4">
								<h3 class="text-lg font-medium text-gray-900">Hours</h3>
								<p class="mt-1 text-gray-600">Monday - Sunday : 2pm - 9pm</p>
							</div>
						</div>
					</div>
					<div class="rounded-lg overflow-hidden order-none sm:order-first">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.7850672491236!2d76.58802159999999!3d18.402630699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83ca88e84341%3A0x841e547bf3ad066d!2zQmFwcGEgZmxvdXIgbWlsbCB8IOCkrOCkquCljeCkquCkviDgpKrgpYDgpKAg4KSX4KS_4KSw4KSj4KWALCDgpK7gpL_gpLDgpJrgpYAg4KSV4KS-4KSC4KSh4KSqIOCkhuCko-CkvyDgpLbgpYfgpLXgpL7gpK_gpL4!5e0!3m2!1sen!2sin!4v1713433597892!5m2!1sen!2sin"
							class="w-full"
							width="600"
							height="450"
							style="border: 0"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { useToast } from 'vue-toastification';
import axios from '@/modules/axios-helper';

export default {
	name: 'HomeView',
	data() {
		return {
			projectName: 'Ice Coffee',
			phoneNumber: '+38 (099) 999-99-99',
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
	setup() {
		return { toast: useToast() };
	},
};
</script>
