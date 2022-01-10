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
	import { session } from '$app/stores';
	import { onMount } from 'svelte';
	import { prettyTime } from '$lib/utils';

	export let consultants;

	onMount(() => {
		// uptime

		console.log(
			'uptime',
			Object.entries(prettyTime($session.stats.uptime))
				.filter(([k, v]) => v > 0)
				.map(([k, v]) => `${v} ${k}`)
				.join(' ') + ` - ${$session.stats.sessions} sessions`
		);
	});
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
</div>

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
		padding: var(--pheader) calc(var(--pheader) + 30px) var(--pheader) var(--pheader);
	}
	main {
		flex: auto;
		position: relative;
		z-index: 10;
	}
</style>
