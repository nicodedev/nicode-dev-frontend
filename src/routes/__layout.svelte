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

<style>
	header,
	main {
		display: flex;
		flex-direction: column;
		align-items: center;

		max-width: var(--site-width);
		margin: 0 auto;
		width: 100%;
	}
	header {
		z-index: 11;
	}

	header {
		--pheader: calc(var(--box-space) * 0.5);
		padding: var(--pheader);
	}
	main {
		flex: auto;
		position: relative;
		z-index: 10;
	}
</style>
