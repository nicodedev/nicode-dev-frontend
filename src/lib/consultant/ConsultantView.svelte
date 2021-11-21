<script lang="ts">
	import ProjectsView from './projects/ProjectsView.svelte';
	import ConsultantHeroSection from './intro/ConsultantHeroSection.svelte';
	import Section from '$lib/Section.svelte';

	export let consultant: ConsultantType;

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
		gap: 8em;
	}
</style>
