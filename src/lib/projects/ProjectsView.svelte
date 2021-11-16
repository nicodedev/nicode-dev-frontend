<script lang="ts">
	import Project from './fragments/Project.svelte';

	export let consultant: ConsultantType;

	let projects: ProjectType[] = consultant.projects;
</script>

<ul>
	{#each projects as project}
		<li>
			<Project {project} />
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: 2em;

		counter-reset: projex;
	}
	li {
		position: relative;
		padding: 1em;
		border: 2px solid var(--color-accent);
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		font-size: 0.9em;
	}

	/* counting */
	li::after {
		position: absolute;
		counter-increment: projex;
		content: '0' counter(projex);
		right: 0.5em;
		top: -0.75em;
		font-size: 2em;
		text-align: right;
		padding: 0 0.5em;
		background-color: var(--color-secondary);
		color: var(--color-accent);
	}
	li:nth-of-type(n + 10):after {
		content: counter(projex);
	}
</style>
