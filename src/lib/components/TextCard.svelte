<script lang="ts">

   export let text: string;
   export let price: string;
</script>

<div
	class="flex gap-4 items-center py-4 px-6 shadow-xl border border-gray-200 rounded-sm text-teal-500"
>
	<p>•</p>
   <p>{text}</p>
   <p>${price}</p>
</div>
