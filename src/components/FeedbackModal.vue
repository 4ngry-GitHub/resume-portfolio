<template>
	<!-- Main modal -->
	<div
		tabindex="-1"
		class="flex items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-neutral-500 dark:bg-zinc-900 bg-opacity-90 dark:bg-opacity-90 h-screen">
		<div class="relative p-4 w-full max-w-md max-h-full justify-center">
			<!-- Modal content -->
			<div class="relative bg-neutral-200 rounded-lg shadow dark:bg-zinc-700">
				<!-- Modal header -->
				<div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Зворотній зв’язок</h3>
					<button
						@click="closeModal"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
						data-modal-toggle="crud-modal">
						<svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
						</svg>
					</button>
				</div>
				<!-- Modal body -->
				<form @submit.prevent="processFeedback" class="p-4 md:p-5">
					<div class="grid gap-4 mb-4 grid-cols-2">
						<div class="col-span-2">
							<label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Номер телефону</label
							>
							<input
								v-model="phoneNumber"
								:minlength="cfg.phoneNumberLength"
								:maxlength="cfg.phoneNumberLength"
								required
								placeholder="+(380)"
								class="bg-gray-50 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								type="text" />
							<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Ваше повiдомлення</label
							>
							<input
								v-model="message"
								:minlength="cfg.feedbackMessageMinLength"
								:maxlength="cfg.feedbackMessageMaxLength"
								required
								class="bg-gray-50 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								type="text" />
						</div>
					</div>
					<button
						type="submit"
						class="text-gray-700 dark:text-gray-100 inline-flex items-center bg-green-500 hover:bg-green-400 dark:bg-green-500 dark:hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4">
						<svg
							class="w-6 h-6 text-gray-700 dark:text-gray-100"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m8 12 2 2 5-5m4.5 5.3 1-.9a2 2 0 0 0 0-2.8l-1-.9a2 2 0 0 1-.6-1.4V7a2 2 0 0 0-2-2h-1.2a2 2 0 0 1-1.4-.5l-.9-1a2 2 0 0 0-2.8 0l-.9 1a2 2 0 0 1-1.4.6H7a2 2 0 0 0-2 2v1.2c0 .5-.2 1-.5 1.4l-1 .9a2 2 0 0 0 0 2.8l1 .9c.3.4.6.9.6 1.4V17a2 2 0 0 0 2 2h1.2c.5 0 1 .2 1.4.5l.9 1a2 2 0 0 0 2.8 0l.9-1a2 2 0 0 1 1.4-.6H17a2 2 0 0 0 2-2v-1.2c0-.5.2-1 .5-1.4Z" />
						</svg>
						Підтвердити
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { useToast } from 'vue-toastification';
import axios from '@/modules/axios-helper';
import config from '@/settings/config.js';
import settings from '@/settings/settings.js';

export default {
	name: 'FeedbackModal',
	emits: ['close-feedback-modal'],
	data() {
		return {
			phoneNumber: '',
			message: '',
		};
	},
	methods: {
		closeModal() {
			this.$emit('close-feedback-modal');
		},
		validatePhoneNumber() {
			return this.cfg.phoneNumberPattern.test(this.phoneNumber);
		},
		async sendFeedback(payload) {
			try {
				const response = await axios.post(settings.backEndUrl + '/feedback/', payload);

				if (response.status === 200) {
					this.toast.success("Ваш відгук надіслано. Наш менеджер зв'яжеться з вами найближчим часом");
					this.closeModal();
				} else {
					toast.error('Помилка! Спробуйте пізніше.');
				}
			} catch (error) {
				this.toast.error('Помилка! Спробуйте пізніше.');
				console.error('sendFeedback error:', error);
			}
		},
		validateFeedBack(payload) {
			if (!this.validatePhoneNumber(payload.phone_number)) {
				this.toast.error('Некоректний номер телефону. Введіть в форматі +380XXXXXXXXX');
				this.phoneNumber = '';
				return false;
			}

			if (
				payload.message.length < this.cfg.feedbackMessageMinLength ||
				payload.message.length > this.cfg.feedbackMessageMaxLength
			) {
				this.toast.error(
					`Довжина повідомлення має бути від ${this.cfg.feedbackMessageMinLength} до ${this.cfg.feedbackMessageMaxLength} символів`,
				);
				this.message = '';
				return false;
			}

			return true;
		},
		rateLimit() {
			if (!window.localStorage.getItem('feedback-rate-limit')) {
				const currentTime = new Date();
				// allowed once per 15 minutes
				const feedbackRateLimit = { allowed_at: new Date(currentTime.getTime() + 15 * 60000) };
				window.localStorage.setItem('feedback-rate-limit', JSON.stringify(feedbackRateLimit));
				return true;
			}

			const feedbackRateLimit = JSON.parse(window.localStorage.getItem('feedback-rate-limit'));
			const allowedAt = new Date(feedbackRateLimit.allowed_at);
			const currentTime = new Date();

			if (currentTime.getTime() < allowedAt.getTime()) {
				this.toast.error('Спробуйте пізніше. Ви можете надіслати повідомлення кожні 15 хвилин');
				return false;
			}
			
			// creating new time delta
			const newFeedbackRateLimit = { allowed_at: new Date(currentTime.getTime() + 15 * 60000) };
			window.localStorage.setItem('feedback-rate-limit', JSON.stringify(newFeedbackRateLimit));

			return true;
		},
		async processFeedback() {
			const payload = {
				phone_number: this.phoneNumber,
				message: this.message,
			};

			if (!this.rateLimit()) {
				return;
			}

			if (this.validateFeedBack(payload)) {
				await this.sendFeedback(payload);
			}
		},
	},
	setup() {
		return {
			toast: useToast(),
			cfg: config,
		};
	},
};
</script>
