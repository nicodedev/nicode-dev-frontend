<script lang="ts">
	import '@fontsource/overpass-mono';
	import '../default.css';
	import '../config.css';
	import Nicode from '$lib/logo/Nicode.svelte';
	import Layer0 from '$lib/layer0/Layer0.svelte';
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

<Layer0 />

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
</style>
