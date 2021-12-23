<script lang="ts">
	import '@fontsource/archivo';
	import '../default.css';
	import '../config.css';

	import Navigation from '$lib/nav/Navigation.svelte';
</script>

<header>
	<Navigation />
</header>

<main>
	<slot />
</main>

<footer>
	<p>Created with love, <time datetime="2021-02">Dec 2021</time></p>
</footer>

<style>
	header,
	main,
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;

		max-width: var(--site-width);
		margin: 0 auto;
		width: 100%;
	}
	header,
	footer {
		z-index: 11;
	}

	header {
		--pheader: calc(var(--box-space) * 0.5);
		padding: var(--pheader) calc(var(--pheader) + 30px) var(--pheader) var(--pheader);
	}
	main {
		flex: auto;
		position: relative;
		z-index: 10;
	}
	footer {
		padding: var(--box-space) var(--box-space) calc(var(--box-space) / 4);

		color: var(--color-content);
	}

	footer > p {
		max-width: var(--site-width);
		width: 100%;
		font-size: 0.6em;
		opacity: 0.6;
	}
</style>
