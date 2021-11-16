<script lang="ts">
	import ProjectsView from '$lib/projects/ProjectsView.svelte';
	import { consultants } from '$lib/content';
	import ConsultantHeroSection from '$lib/intro/ConsultantHeroSection.svelte';
	import Section from '$lib/Section.svelte';

	let consultant: ConsultantType = consultants[1];

	let { availability, focus } = consultant;
</script>

<article>
	<ConsultantHeroSection {consultant} />

	<Section title="Availability">
		<p>
			{availability}
		</p>
	</Section>

	<Section title="About Me">
		<p>
			{focus}
		</p>
	</Section>

	<Section title="Experience and projects">
		<ProjectsView {consultant} />
	</Section>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 4em;
	}
</style>
