<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Sketch from '$lib/components/Sketch.svelte';

	function scrollIntoView(id: string) {
		const e = document.getElementById(id);

		if (!e) return;

		e.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div class="flex h-[85vh]  justify-around items-center w-screen">
	<div class="text-center md:text-left w-[95%] md:w-[38vw]">
		<h1 class=" text-teal-500 text-5xl md:text-6xl">In Home Tech Support and Device Repair</h1>
		<h2 class="py-4 text-teal-800 text-2xl ">Your one stop shop for tech help.</h2>

		<div class="mt-4 w-full flex flex-col sm:flex-row justify-between gap-1 sm:gap-4">
			<button
				class="w-full px-8 py-3 bg-teal-500 border border-teal-500 text-white rounded-sm transition-all hover:bg-white hover:text-teal-500"
				on:click={() => scrollIntoView('section-pc-repair')}
			>
				Learn More
			</button>
			<a
				href="/contact"
				class="w-full px-8 py-3 border border-teal-500 text-teal-500  text-center rounded-sm transition-all hover:bg-teal-500 hover:text-white"
			>
				Get In Touch
			</a>
		</div>
	</div>

	<div class="w-[40vw] hidden md:block">
		<Sketch />
	</div>
</div>

<div class="flex flex-col  items-center w-[95%] max-w-[900px] mx-auto">
	<section id="section-pc-repair" class="my-10 w-full ">
		<h2 class="mb-4 text-teal-500 text-2xl font-bold ">PC REPAIR</h2>

		<p class="text-lg">
			We provide a wide range of repairs for all of your technology devices. Whether you need a
			tuneup/cleanup or phsyical damage fixed we got you covered. We even do in home mobile repairs!
			No more waiting in long lines at your local repair shop or waiting on hold for over the phone
			tech support. Give us a call and get a free quote for your repair.
		</p>
	</section>

	<section class="my-10 w-full">
		<h2 class="mb-4 text-teal-500 text-2xl font-bold ">MOBILE REPAIR</h2>
		<p>
			Cracked your phone screen? Schedule on appointment for us to stop by and replace it for you!
		</p>
	</section>

	<section class="my-10 w-full">
		<h2 class="mb-4 text-teal-500 text-2xl font-bold ">TECH SUPPORT</h2>
		<p>
			Technology is rapidly changing making it near impossible to keep up. For this reason we offer
			one-on-one tech support to you in your own home. Whether you need help setting up your new
			printer or you need a crash course on computer basics we've got you covered.
		</p>
	</section>

	<section class="my-10 w-full">
		<h2 class="mb-4 text-teal-500 text-2xl font-bold ">PC BUILDING</h2>
		<p>
			Why would you want to build a computer when you can buy one from a store? A lot of times big
			name manufactures will equip computers with cheaper versions of cruicial components of your
			pc. In the name of increasing profit margins, the end user (YOU!) gets stuck with low quality
			parts for a premium price. When you build a pc you have complete control over the quality and
			the power of your PC. In most cases it is less expensive too! Bulding a PC also gives you the
			option to upgrade in the future. Instead of buying a brand new PC when your current hardware
			just wont cut it you can replace a few parts and for a fraction of the cost get brand new
			performence. With the help of an experienced technician you can design your personalized
			computer for now and the future.
		</p>
	</section>

	<section class="my-10 w-full">
		<h2 class="mb-4 text-teal-500 text-2xl font-bold ">GET IN TOUCH</h2>
		<ContactForm />
	</section>
</div>

<style>
	:global(body) {
		overflow-x: hidden;
	}
</style>
