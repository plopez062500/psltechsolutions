<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="p-4">
	<h1 class="text-3xl mb-3">Posts</h1>

	<div class="flex gap-5">
		{#each data.posts as post}
			<div class="p-4 rounded-md max-h-32 shadow-md">
				<h3 class="text-xl">{post.title}</h3>
				<p>{post.body}</p>
			</div>
		{/each}
	</div>
</div>
