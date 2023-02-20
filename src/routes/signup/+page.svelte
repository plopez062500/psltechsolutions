<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="p-10 max-w-[30%]">
	<h1 class="text-3xl mb-5">Singup</h1>
	<form method="post" action="?/signup">
		<label class="block text-xl" for="name"> Name </label>
		<input
			class=" w-full block mb-3 px-4 py-2 border-2 border-gray-300 rounded focus:outline-blue-500"
			type="text"
			name="name"
			placeholder="Name"
		/>
		{#if form?.nameErrors} <p class="text-red-500">{form.nameErrors[0]}</p> {/if}

		<label class="block text-xl" for="email"> Email </label>
		<input
			class=" w-full block mb-3 px-4 py-2 border-2 border-gray-300 rounded focus:outline-blue-500"
			type="text"
			name="email"
			placeholder="Email"
		/>
		{#if form?.emailErrors} <p class="text-red-500">{form.emailErrors[0]}</p> {/if}

		<label class="block text-xl" for="password"> Password </label>
		<input
			class="w-full block mb-3 px-4 py-2 border-2 border-gray-300 rounded focus:outline-blue-500"
			type="password"
			name="password"
			placeholder="Password"
		/>
		{#if form?.passwordErrors} <p class="text-red-500 mb-1">{form.passwordErrors[0]}</p> {/if}

		{#if form?.unknownError} <p class="text-red-500 mb-1">{form.unknownError}</p> {/if}
		<button class="py-2 px-6 bg-blue-500 text-white rounded w-full hover:bg-blue-700" type="submit"
			>Signup</button
		>
	</form>
</div>
