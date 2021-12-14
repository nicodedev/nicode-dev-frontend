<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`index.json`);

		if (!res.ok) return;

		const { consultants } = await res.json();

		return { props: { consultants } };
	};
</script>

<script lang="ts">
	import HashSection from '$lib/wrappers/HashSection.svelte';
	export let consultants: ConsultantType[];
</script>

<svelte:head>
	<title>nicode</title>
</svelte:head>

<article class="article fadein">
	<HashSection title="Welcome to nicode!">
		<p>We are a tiny consultancy firm focused on people as much as code.</p>
		<div>
			{#each consultants as consultant}
				<a sveltekit:prefetch href={consultant.name}>
					<span>{consultant.name}</span>
				</a>
			{/each}
		</div>
	</HashSection>
</article>

<style>
	a {
		border-radius: 6px;
		text-decoration: none;
		padding: 0.5em 1em;
		border: 2px solid var(--color-interactive);
	}
	div {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		gap: 1em;
		margin: 2em auto;
	}
</style>
