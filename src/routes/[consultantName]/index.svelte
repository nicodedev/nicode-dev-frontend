<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ stuff, page }) => {
		const consultant = await stuff.consultants.find(({ name }) => {
			return name.toLowerCase() === page.params.consultantName.toLowerCase();
		});

		if (!consultant) return;

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

<article class="page">
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
