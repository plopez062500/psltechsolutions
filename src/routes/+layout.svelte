<script lang="ts">
	import { goto } from '$app/navigation';
	import Hamburger from '$lib/components/Hamburger.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import '../app.css';

	let mobileNavOpen = false;

	function logoClicked() {
		goto('/');
	}

	function toggleMobileNav() {
		mobileNavOpen = !mobileNavOpen;
	}
</script>

<!-- Mobile Nav Drawer -->
{#if mobileNavOpen}
	<div class="mobile-nav-bg" on:click={toggleMobileNav}>
		<div class="mobile-nav-drawer" on:click={toggleMobileNav}>
			<a
				class="block px-8 py-3 text-xl text-teal-500 transition-all  "
				href="/"
				on:click={toggleMobileNav}
			>
				HOME
			</a>
			<a
				class="block px-8 py-3 text-xl text-teal-500 transition-all"
				href="/pricing"
				on:click={toggleMobileNav}
			>
				PRICING
			</a>
			<a
				class="block px-8 py-3 text-xl text-teal-500 transition-all"
				href="/contact"
				on:click={toggleMobileNav}
			>
				CONTACT
			</a>
		</div>
	</div>
{/if}

<!-- Nav bar -->
<div
	class="flex md:gap-10 items-center bg-white md:relative px-4 md:px-32 py-2 w-screen min-h-[3em] shadow-lg duration"
>
	<div class="w-[75px] cursor-pointer" on:click={logoClicked}>
		<Logo />
	</div>

	<h1 class="text-teal-500 text-xl ml-2 md:hidden">Technology Solutions</h1>

	<div class="w-[40px] ml-auto md:hidden" on:click={toggleMobileNav}>
		<Hamburger />
	</div>

	<div class="py-4 hidden md:block">
		<a class="px-8 py-3 text-center rounded-none text-teal-500 transition-all nav-item " href="/">
			Home
		</a>
		<a
			class="px-8 py-3 text-center rounded-none text-teal-500 transition-all nav-item"
			href="/pricing"
		>
			Pricing
		</a>
		<a
			class="px-8 py-3 text-center rounded-none text-teal-500 transition-all nav-item"
			href="/contact"
		>
			Contact
		</a>
	</div>
</div>

<slot />

<div class="flex flex-wrap justify-around mt-auto py-10 w-full min-h-[35vh] bg-teal-500 text-whtie">
	<div class="text-center mb-3">
		<h3 class="font-bold text-white text-xl">Quick Links</h3>
		<a class="block px-8 py-1 text-lg text-white" href="/"> Home </a>
		<a class="block px-8 py-1 text-lg text-white" href="/pricing"> Pricing </a>
		<a class="block px-8 py-1 text-lg text-white" href="/contact"> Contact </a>
	</div>

	<div class="text-center">
		<h3 class="font-bold text-white text-xl">Contact Info</h3>
		<p class="block px-8 py-1 text-lg text-white transition-all  ">psltechsolutions00@gmail.com</p>
		<p class="block px-8 py-1 text-lg text-white transition-all  ">270-832-1066</p>
	</div>
</div>

<style>
	@keyframes hover-animation {
		0% {
			border-radius: 0px;
		}

		25% {
			--tw-bg-opacity: 1;
			background-color: rgb(20 184 166 / var(--tw-bg-opacity));
			--tw-text-opacity: 1;
			color: rgb(255 255 255 / var(--tw-text-opacity));
		}

		75% {
			border-radius: 0.75rem;
		}

		100% {
			--tw-bg-opacity: 1;
			background-color: rgb(20 184 166 / var(--tw-bg-opacity));
			--tw-text-opacity: 1;
			color: rgb(255 255 255 / var(--tw-text-opacity));
			border-radius: 0.375rem;
		}
	}

	.nav-item:hover {
		animation-name: hover-animation;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
	}

	.mobile-nav-bg {
		animation-name: mobile-nav-bg-open;
		animation-duration: 0.2s;
		animation-fill-mode: forwards;
		width: 100vw;
		height: 100vh;
		background-color: black;
		display: hidden;
		background-color: rgba(0, 0, 0, 0);
		position: absolute;
		overflow-x: hidden;
	}

	@keyframes mobile-nav-bg-open {
		0% {
			display: block;
		}

		100% {
			background-color: rgba(0, 0, 0, 0.5);
		}
	}

	.mobile-nav-drawer {
		animation-name: mobile-nav-drawer-open;
		animation-duration: 0.2s;
		animation-fill-mode: forwards;
		background-color: white;
		text-align: center;
		padding: 1rem;
		width: 70vw;
		height: 100vh;
		position: absolute;
		right: -70vw;
	}

	@keyframes mobile-nav-drawer-open {
		100% {
			right: 0;
		}
	}
</style>
