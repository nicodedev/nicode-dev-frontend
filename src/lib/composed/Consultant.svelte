<script lang="ts">
	import Projects from '$lib/consultant/projects/Projects.svelte';
	import ConsultantHeroSection from '$lib/consultant/hero/ConsultantHeroSection.svelte';
	import HashSection from '$lib/wrappers/HashSection.svelte';
	import { consultants } from '$lib/_db';
	import Background from '$lib/backdrops/Background.svelte';
	import Nodes from '$lib/backdrops/Nodes.svelte';

	let consultant = consultants[0];

	let innerWidth, innerHeight;
</script>

<svelte:head>
	<title>nicode - {consultant.name}</title>
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight />

<Background bgvariation={new Date().getMinutes()} />
{#if innerWidth > 600 && innerHeight > 600}
	<Nodes />
{/if}

<article class="page">
	<ConsultantHeroSection {consultant} />

	<HashSection title="About Me">
		<p>
			{consultant.focus}
		</p>
		<p>
			{consultant.availability} <a href="mailto:{consultant.contact.email}">Contact me!</a>
		</p>
	</HashSection>

	<HashSection title="Experience and projects">
		<Projects {consultant} />
	</HashSection>
</article>

<style>
	p {
		font-size: 1.1em;
	}

	p:nth-of-type(2) {
		margin-top: 1em;
		font-style: italic;
	}
	article {
		gap: var(--section-space);
	}
</style>
