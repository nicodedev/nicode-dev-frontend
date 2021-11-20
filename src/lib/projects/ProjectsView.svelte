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
		gap: 6em;

		counter-reset: projex;
	}
	li {
		position: relative;
		padding: 1em;
		display: flex;
		flex-direction: column;
		font-size: 0.9em;
		counter-increment: projex;
	}
	@media (min-width: 1100px) {
		li {
			padding: 2em;
		}
	}

	li::after {
		position: absolute;
		content: '0' counter(projex);
		right: 1em;
		top: -0.735em;
		font-size: 2em;
		text-align: right;
		color: var(--color-accent);
	}
	li:nth-of-type(n + 10):after {
		content: counter(projex);
	}

	li::before {
		border: 2px solid var(--color-accent);
		position: absolute;
		content: '';
		z-index: -1;
		right: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 4px;

		clip-path: polygon(
			-2% -2%,
			calc(100% - 5.5em) -2%,
			calc(100% - 5.5em) 10%,
			calc(100% - 1em) 10%,
			calc(100% - 1em) -2%,
			102% -2%,
			102% 102%,
			-2% 102%
		);
	}
</style>
