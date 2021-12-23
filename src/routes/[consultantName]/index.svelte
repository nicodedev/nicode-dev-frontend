<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ page, fetch }) => {
		const res = await fetch(`/${page.params.consultantName}.json`);

		if (!res.ok) return;

		const { consultant } = await res.json();

		return { props: { consultant } };
	};
</script>

<script lang="ts">
	import Projects from '$lib/consultant/projects/Projects.svelte';
	import ConsultantHeroSection from '$lib/consultant/hero/ConsultantHeroSection.svelte';
	import HashSection from '$lib/wrappers/HashSection.svelte';

	export let consultant: ConsultantType;

	let { availability, focus } = consultant;
</script>

<svelte:head>
	<title>nicode - {consultant.name}</title>
</svelte:head>

<article class="page fadein">
	<ConsultantHeroSection {consultant} />

	<HashSection title="About Me">
		<p>
			{focus}
		</p>
		<p>
			{availability} <a href="mailto:{consultant.contact.email}">Contact me!</a>
		</p>
	</HashSection>

	<HashSection title="Experience and projects">
		<Projects {consultant} />
	</HashSection>
</article>

<style>
	p:nth-of-type(2) {
		margin-top: 1em;
		font-style: italic;
	}

	article {
		gap: var(--section-space);
	}
</style>
