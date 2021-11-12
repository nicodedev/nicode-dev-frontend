<script lang="ts">
	import Project from './fragments/Project.svelte';

	export let consultant: ConsultantType;

	let projects: ProjectType[] = consultant.projects;
</script>

<section>
	<h2>Experience and projects</h2>
	<ul>
		{#each projects as project}
			<Project {project} />
		{/each}
	</ul>
</section>

<style>
	section {
		max-width: var(--main-content-width);
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 3em;
	}
</style>
