<script lang="ts">
	export let values: {
		name?: string;
		number?: string;
		email?: string;
		message?: string;
	} = {};

	export let errors: {
		name?: string[];
		number?: string[];
		email?: string[];
		message?: string[];
		unknown?: string;
	} = {};
</script>

<form class="w-full" method="post" action="/contact">
	<div class="flex gap-4 w-full">
		<div class="w-full">
			<label class="block mb-2 text-teal-500 text-lg" for="name">Name</label>
			<input
				class="w-full py-2 px-2 border border-gray-300 roudned-sm focus:outline-teal-500 focus:shadow-md"
				id="name"
				name="name"
				placeholder="name"
				bind:value={values.name}
			/>
			{#if errors.name}
				<p class="my-1 text-red-500">{errors.name[0]}</p>
			{/if}
		</div>
		<div class="w-full">
			<label class="block mb-2 text-teal-500 text-lg" for="number">Phone Number</label>
			<input
				class="w-full py-2 px-2 border border-gray-300 roudned-sm focus:outline-teal-500 focus:shadow-md"
				id="number"
				name="number"
				placeholder="(xxx) xxx-xxxx"
				bind:value={values.number}
			/>
			{#if errors.number}
				<p class="my-1 text-red-500">{errors.number[0]}</p>
			{/if}
		</div>
	</div>

	<div class="w-full mt-5">
		<label class="block mb-2 text-teal-500 text-lg" for="email">Email</label>
		<input
			class="w-full py-2 px-2 border border-gray-300 roudned-sm focus:outline-teal-500 focus:shadow-md"
			id="email"
			name="email"
			placeholder="example@example.com"
         bind:value={values.email}
		/>
		{#if errors.email}
			<p class="my-1 text-red-500">{errors.email[0]}</p>
		{/if}
	</div>

	<div class="w-full mt-5">
		<label class="block mb-2 text-teal-500 text-lg" for="message">Message</label>
		<textarea
			class="w-full py-2 px-2 border border-gray-300 roudned-sm focus:outline-teal-500 focus:shadow-md"
			id="message"
			name="message"
			placeholder="Message..."
         bind:value={values.message}
		/>
		{#if errors.message}
			<p class="my-1 text-red-500">{errors.message[0]}</p>
		{/if}
	</div>

	<button
		type="submit"
		class="w-full px-8 py-2 bg-teal-500 border border-teal-500 text-white rounded-sm transition-all hover:bg-white hover:text-teal-500"
	>
		Send Message
	</button>
</form>
