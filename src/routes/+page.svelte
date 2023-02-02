<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ posts } = data);
</script>

<div class="p-10">
	<h1 class="text-3xl">Welcome to psl-stack</h1>
	<h3 class="text-xl">With:</h3>
	<ul class="p-4">
		<li>Svelte Kit</li>
		<li>Typescript</li>
		<li>Tailwind</li>
		<li>Prisma</li>
	</ul>

	<h2 class="text-2xl">Posts</h2>
	{#each posts as post}
		<div class="my-2">
      <h3 class="text-xl">Id: {post.id}</h3>
			<h3 class="text-xl">Title: {post.title}</h3>
			<p>Body: {post.body}</p>
		</div>
	{/each}

	<form class="mt-2" action="?/addPost" method="post">
		<h2 class="text-2xl">Add Post</h2>
		<label class="block" for="title">Title</label>
		<input
			class="border-gray-300 border rounded p-2 w-56 focus:border-blue-400 focus:border-2 outline-none"
			type="text"
			name="title"
			placeholder="Example Title"
      required
		/>

		<div>
			<label class="block" for="body">Body</label>
			<textarea class="border p-2 border-gray-300 rounded w-1/4 h-32 focus:border-blue-400 focus:border-2 outline-none" name="body" required/>
		</div>
    <button class="py-2 px-6 bg-blue-500 text-white rounded w-1/4 hover:bg-blue-700" type="submit">Add Post</button>
	</form>
</div>
