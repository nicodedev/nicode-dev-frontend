<script lang="ts">
	import '../default.css';
	import '../config.css';
	import Nicode from '$lib/logo/Nicode.svelte';

	let scrollY = 0;
	// $: pos = scrollY /
</script>

<svelte:head>
	<title>Nicode</title>
</svelte:head>

<header>
	<Nicode />
</header>

<main>
	<slot />
</main>

<footer>
	<p>Created by <strike>Nicolai</strike> Hans in <strike>Elm</strike> Svelte</p>
</footer>
<div aria-hidden="true" />
<svelte:window bind:scrollY />

<style>
	header,
	main,
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2em;
	}
	main {
		flex: auto;
		margin: 100px 0;
		position: relative;
		z-index: 10;
	}

	footer p {
		max-width: var(--main-content-width);
		width: 100%;
		opacity: 0.6;
		transition: opacity 1.1s 2s;
		font-size: 0.65em;
	}
	footer:hover p {
		transition: opacity 0.2s;
		opacity: 1;
	}

	div {
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		position: fixed;
		z-index: -5;

		background-image: image-set(url('bgs/t1.webp') 1x, url('bgs/t1.jpg') 1x);
		background-image: -webkit-image-set(url('bgs/t1.webp') 1x, url('bgs/t1.jpg') 1x);

		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;

		opacity: 0.05;
	}
</style>
