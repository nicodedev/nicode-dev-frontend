<script lang="ts">
	import Project from './fragments/Project.svelte';

	export let consultant: ConsultantType;

	let projects: ProjectType[] = consultant.projects;
</script>

<ul>
	{#each projects as project}
		<Project {project} />
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}
</style>
