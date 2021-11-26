<script lang="ts">
	import ProjectsView from './projects/ProjectsView.svelte';
	import ConsultantHeroSection from './hero/ConsultantHeroSection.svelte';
	import Section from '$lib/wrappers/Section.svelte';

	export let consultant: ConsultantType;

	let { availability, focus } = consultant;
</script>

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
