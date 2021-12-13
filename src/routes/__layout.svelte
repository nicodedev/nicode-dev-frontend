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
		padding: calc(var(--box-space) / 2) var(--box-space) 0;
	}
	main {
		flex: auto;
		position: relative;
		z-index: 10;
	}
	footer {
		padding: var(--box-space) var(--box-space) calc(var(--box-space) / 2);

		color: var(--color-content);
	}

	footer > p {
		max-width: var(--site-width);
		width: 100%;
		font-size: 0.5em;
		opacity: 0.75;
	}
</style>
