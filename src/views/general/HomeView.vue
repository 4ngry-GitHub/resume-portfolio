<template>
	<!-- hero seciton -->
	<div class="relative w-full h-[320px]" id="home">
		<div class="absolute inset-0 opacity-70">
			<img :src="headerImage" alt="Background Image" class="object-cover object-center w-full h-full" />
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
						Наша кав'ярня є місцем, де кожна чашка кави - це справжнє мистецтво. Ми прагнемо досягти вищої якості у
						кожному ковтку, обираючи тільки найкращі зерна кави з усього світу. У нас ви знайдете атмосферу тепла і
						комфорту, де кожен візит стає справжнім насолодою для смаку і душі. Приходьте до нас насолодитися унікальним
						смаком нашої кави та дружньою атмосферою!
					</p>
				</div>
				<div class="mt-12 md:mt-0 w-full md:w-96">
					<img
						src="https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="About Us Image"
						class="object-cover rounded-lg shadow-md w-full h-72 md:h-auto" />
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
					title: 'Якість кави',
					image: null,
					description:
						'Наша кава відзначається високою якістю зерен та витонченим смаком, який не залишить байдужим жодного шанувальника кави.',
				},
				{
					title: 'Команда бариста',
					image: null,
					description:
						'Ми маємо професійну команду бариста, яка любить свою роботу і завжди готова дарувати найсмачніший кавовий досвід нашим клієнтам.',
				},
				{
					title: 'Атмосфера',
					image: null,
					description:
						'Наша кав`ярня створює затишну та дружню атмосферу, де можна не тільки смакувати каву, але й відпочивати та насолоджуватись кожною хвилиною.',
				},
				{
					title: 'Вибір напоїв',
					image: null,
					description:
						'Ми пропонуємо широкий вибір кавових напоїв, від класичних до авторських рецептів, що вразять навіть найвибагливіших гурманів.',
				},
				{
					title: 'Клієнтозадоволення',
					image: null,
					description:
						'Ми завжди ставимо на перше місце задоволення наших клієнтів, гарантуючи найкращу обслуговування та кавовий досвід на вищому рівні.',
				},
				{
					title: 'Повага до кожного клієнта',
					image: null,
					description:
						'Ваше задоволення - наш пріоритет. Ми прагнемо зробити кожен візит у нашу кав`ярню особливим, забезпечуючи вам незабутні враження та високий рівень обслуговування.',
				},
			],
		};
	},
};
</script>
