<script lang="ts">
	import '@fontsource/archivo';
	import '../default.css';
	import '../config.css';
	import Navigation from '$lib/nav/Navigation.svelte';
	import { session } from '$app/stores';
	import { onMount } from 'svelte';
	import { prettyTime } from '$lib/utils';

	onMount(() => {
		// uptime

		console.log(
			'awake for:',
			Object.entries(prettyTime($session.stats.awake))
				.filter(([k, v]) => v > 0)
				.map(([k, v]) => `${v} ${k}`)
				.join(' ')
		);
	});
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
