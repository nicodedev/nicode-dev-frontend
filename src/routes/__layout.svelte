<script lang="ts">
	import '@fontsource/overpass-mono/400.css';
	import '@fontsource/overpass-mono/700.css';
	import '@fontsource/jost';
	import '../default.css';
	import '../config.css';
	import Nicode from '$lib/Nicode.svelte';
	import BackgroundImage from '$lib/backdrops/BackgroundImage.svelte';
</script>

<header>
	<Nicode />
</header>

<main>
	<slot />
</main>

<footer>
	<!-- <p>Created by Hans in Svelte, <time datetime="2021-02">Dec 2021</time></p> -->
</footer>

<BackgroundImage />

<style>
	header,
	main,
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	header {
		margin: 3em 0 0;
	}
	main {
		flex: auto;
		position: relative;
		z-index: 10;
		margin: 3em 0;
	}
	footer {
		margin-top: 5em;
		padding: 0.5em 2em;

		color: var(--color-accent);
	}

	/* footer > p {
		max-width: var(--main-content-width);
		width: 100%;
		transition: opacity 1.1s 0.2s;
		font-size: 0.65em;
	}
	footer:hover > p {
		opacity: 1;
	}

	@media (max-width: 900px) {
		footer > p {
			opacity: 0.5;
			font-size: 0.8em;
		}
	} */
</style>
