<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;
	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`index.json`);

		if (!res.ok) return;

		const { consultants } = await res.json();

		return { stuff: { consultants }, props: { consultants } };
	};
</script>

<script lang="ts">
	import '@fontsource/archivo';
	import '../default.css';
	import '../config.css';

	import Navigation from '$lib/nav/Navigation.svelte';

	export let consultants;
</script>

<svelte:head>
	{#each consultants as { headshot }}
		<link rel="preload" as="image" href={headshot} />
	{/each}
</svelte:head>

<div style="display: contents;">
	<header>
		<Navigation />
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>Created with love, <time datetime="2021-02">Dec 2021</time></p>
	</footer>
</div>

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
		padding: calc(var(--box-space) * 0.5) var(--box-space);

		color: var(--color-content);
	}

	footer > p {
		max-width: var(--site-width);
		width: 100%;
		font-size: 0.6em;
		opacity: 0.6;
	}
</style>
