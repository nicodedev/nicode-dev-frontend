<script lang="ts">
	import Main from './fragments/Main.svelte';
	import Period from './fragments/Period.svelte';
	import Tags from './fragments/Tags.svelte';
	export let consultant: ConsultantType;

	let projects: ProjectType[] = consultant.projects;
</script>

<ul>
	{#each projects as { title, description, tags, period }}
		<li>
			<div class="period">
				<Period {period} />
			</div>
			<Main {title} {description} />
			<Tags {tags} />
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		margin: 1em 0;

		counter-reset: project;
	}
	li + li {
		margin-top: 4em;
	}
	li {
		position: relative;

		display: flex;
		flex-direction: column;
		font-size: 0.9em;

		counter-increment: project;
	}

	li::after {
		content: counter(project);
		position: absolute;
		left: 0;
		top: -0.2em;
		bottom: 0;
		right: 0;

		margin: auto;
		width: min-content;
		height: min-content;

		color: var(--color-background);
		text-shadow: inset 5px 5px 10px var(--color-accent);
		font-size: 12em;
		font-weight: bold;

		opacity: 0.5;

		z-index: -1;
	}
</style>
