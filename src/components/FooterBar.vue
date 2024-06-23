<template>
<!--Footer container-->
<footer
  class="bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white">
  <!--Sign-up form section-->
  <div class="px-6 pt-6">
    <form>
      <div
        class="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
        <div class="md:mb-6 md:ms-auto">
          <p>
            <strong>Служба підтримки</strong>
          </p>
        </div>

        <div class="relative md:mb-6" data-twe-input-wrapper-init>
          <input
            type="number"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            placeholder="Номер телефону" />
          <label
            for="exampleFormControlInputEmail2"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >Номер телефону:
          </label>
        </div>

		<div class="relative md:mb-6" data-twe-input-wrapper-init>
          <input
            type="text"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            placeholder="Ваше питання" />
          <label
            for="exampleFormControlInputEmail2"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >Ваше питання:
          </label>
        </div>

        <div class="mb-6 md:me-auto">
          <button
            type="button"
            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Відправити
          </button>
        </div>
      </div>
    </form>
  </div>

  <!--Copyright section-->
  <div class="bg-black/5 p-4 text-center">
    © 2023 Copyright:
    <a href="https://tw-elements.com/">TW Elements</a>
  </div>
</footer>
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
