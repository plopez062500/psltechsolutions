<script>
	import TextCard from '$lib/components/TextCard.svelte';
</script>

<div class="flex flex-col  items-center w-[95%] max-w-[900px] mx-auto">
	<section class="my-10 w-full ">
		<h2 class="mb-4 text-teal-500 text-2xl font-bold ">PC REPAIR PRICING</h2>

		<p class="text-teal-500 my-5">
			NOTE: Diagnostic fee will be waived if the repair is completed by us. Some services overlap
			eachother in which case a significant discount will be applied.
		</p>

		<div class="flex flex-wrap w-full gap-4">
			<TextCard text="Diagnostics" price="60" />
			<TextCard text="Tuneup/Cleanup" price="60" />
			<TextCard text="Hardware replacement" price="30 + parts" />
			<TextCard text="Password Reset/Removal" price="40" />
			<TextCard text="Virus Removal" price="40" />
			<TextCard text="Reimage" price="40" />
			<TextCard text="Data Recovery Starting at" price="40" />
		</div>
	</section>

	<section class="my-10 w-full ">
		<h2 class="mb-4 text-teal-500 text-2xl font-bold ">MOBILE REPAIR PRICING</h2>

		<div class="flex flex-wrap w-full gap-4">
			<TextCard text="Iphone 7 Screen" price="80" />
			<TextCard text="Iphone 7 Battery" price="80" />

			<TextCard text="Iphone 7 Plus Screen" price="90" />
			<TextCard text="Iphone 7 Plus Battery" price="80" />

			<TextCard text="Iphone 8 Screen" price="80" />
			<TextCard text="Iphone 8 Battery" price="85" />

			<TextCard text="Iphone 8 Plus Screen" price="90" />
			<TextCard text="Iphone 8 Plus Battery" price="85" />

			<TextCard text="Iphone X Screen" price="110" />
			<TextCard text="Iphone X Battery" price="90" />

			<TextCard text="Iphone XR Screen" price="110" />
			<TextCard text="Iphone XR Battery" price="90" />

			<TextCard text="Iphone XS Screen" price="110" />
			<TextCard text="Iphone XS Battery" price="90" />

			<TextCard text="Iphone XS Max Screen" price="150" />
			<TextCard text="Iphone XS Max Battery" price="95" />

			<TextCard text="Iphone 11 Screen" price="110" />
			<TextCard text="Iphone 11 Battery" price="95" />

			<TextCard text="Iphone 11 Pro Screen" price="150" />
			<TextCard text="Iphone 11 Pro Battery" price="105" />

			<TextCard text="Iphone 11 Pro Max Screen" price="200" />
			<TextCard text="Iphone 11 Pro Max Battery" price="105" />
		</div>
	</section>

	<section class="my-10 w-full">
		<h2 class="mb-4 text-teal-500 text-2xl font-bold ">TECH SUPPORT PRICING</h2>

		<div class="flex flex-wrap w-full gap-4">
			<TextCard text="30min One-On-One" price="50" />
			<TextCard text="1hour One-On-One" price="80" />
			<TextCard text="Device Setup" price="30" />
			<TextCard text="Misc support" price="Contact for pricing" />
		</div>
	</section>

	<section class="my-10 w-full">
		<h2 class="mb-4 text-teal-500 text-2xl font-bold ">PC BUILDING PRICING</h2>

		<p class="text-teal-500 my-5">
			NOTE: All builds require a 20% deopsit on the final cost of the parts that will be applied
			towarards the final cost of the build.
		</p>

		<div class="flex flex-wrap w-full gap-4">
			<TextCard text="Misc build." price="80 build fee + parts" />
		</div>
	</section>
</div>
