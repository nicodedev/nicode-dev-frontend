<script lang="ts">
	import ProjectsSection from '$lib/projects/ProjectsSection.svelte';
	import { consultants } from '$lib/content';
	import ConsultantHeroSection from '$lib/intro/ConsultantHeroSection.svelte';
	import Section from '$lib/Section.svelte';

	let consultant: ConsultantType = consultants[1];

	let { availability, focus } = consultant;
</script>

<article>
	<ConsultantHeroSection {consultant} />

	<Section title="Availability" text={availability} />
	<Section title="About Me" text={focus} />

	<ProjectsSection {consultant} />
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 5em;
	}
</style>
