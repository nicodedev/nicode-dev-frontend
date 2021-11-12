<script lang="ts" context="module">
	export type Project = {
		title: string;
		description: string;
		period: PeriodType;
		tags: string[];
	};
</script>

<script lang="ts">
	import Period from './Period.svelte';
	import Tags from './Tags.svelte';

	export let project: Project;

	let { title, period, description, tags } = project;
</script>

<li>
	<Period {period} />
	<h3>
		{title}
	</h3>
	<p>{description}</p>
	<Tags {tags} />
</li>

<style>
	li {
		padding: 1em;
		border: 1px solid var(--color-accent);
		border-radius: 6px;
		display: flex;
		flex-direction: column;
		font-size: 0.9em;
	}
	p {
		margin: 1em 0;
	}
</style>
