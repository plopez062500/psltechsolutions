<script lang="ts">
	import type { ActionData } from './$types';
	import ContactForm from '$lib/components/ContactForm.svelte';

	export let form: ActionData;

	let name = form?.formData.name;
	let number = form?.formData.number;
	let email = form?.formData.email;
	let message = form?.formData.message;
</script>

<div class="flex flex-col  items-center w-[95%] max-w-[900px] min-h-[60vh] mx-auto">
	<section class="mt-10 mb-4 w-full">
		<h2 class="mb-4 text-teal-500 text-2xl font-bold ">GET IN TOUCH</h2>
		<ContactForm values={{ ...form?.formData }} errors={form?.errors} />
		{#if form?.errors?.unknown}
			<p class="my-2 text-red-500">{form?.errors?.unknown}</p>
		{/if}

		{#if form?.status === 200}
			<div class="w-full mt-4 px-2 py-3 bg-green-500 rounded-sm">
				<p class="text-white ">Your message has been sent!</p>
			</div>
		{/if}

		{#if form?.errors?.unknown}
			<div class="w-full mt-4 px-2 py-3 bg-red-500 rounded-sm">
				<p class="text-white ">We had some trouble sending your message. Please try again later.</p>
			</div>
		{/if}
	</section>
</div>
