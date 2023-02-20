<script lang="ts">
	import '../app.css';

	import type { PageData } from './$types';

	export let data: PageData;
	$: user = data.user;
</script>

<div
	class="flex gap-4 justify-between items-center px-10 w-full min-h-[3em] border-b-2 border-b-gray-300"
>
	<div class="py-4">
		<a
			class="px-8 py-6 text-center text-blue-500 transition-all border-b-blue-500 hover:border-b-8 "
			href="/">Home</a
		>
		<a
			class="px-8 py-6 text-center text-blue-500 transition-all border-b-blue-500 hover:border-b-8 "
			href="/posts">Posts</a
		>

		{#if user}
			<a
				class="px-8 py-6 text-center text-blue-500 transition-all border-b-blue-500 hover:border-b-8 "
				href="/posts/new">New Post</a
			>
		{/if}
	</div>

	<div class="py-4 flex gap-3 items-center">
		{#if user}
			<p class="text-blue-500 text-xl">Hello {user.name}</p>
			<form action="/logout" method="post">
				<button
					class="px-8 py-3 text-bold text-center
					 text-blue-500 bg-white border border-blue-500 rounded-md
					  hover:text-white hover:bg-blue-500 transition-all"
					type="submit">Logout</button
				>
			</form>
		{:else}
			<a
				class="px-8 py-3 text-bold text-center
			text-white bg-blue-500 border border-blue-500 rounded-md
			 hover:text-blue-500 hover:bg-white transition-all"
				href="/login">Login</a
			>

			<a
				class="px-8 py-3 text-bold text-center
				text-blue-500 bg-white border border-blue-500 rounded-md
				 hover:text-white hover:bg-blue-500 transition-all"
				href="/signup">Signup</a
			>
		{/if}
	</div>
</div>
<slot />
