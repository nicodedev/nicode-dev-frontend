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

<Period {period} />
<h3>
	{title}
</h3>
<p>{description}</p>
<Tags {tags} />

<style>
	h3 {
		margin-top: 0.25em;
	}
	p {
		margin: 1em 0;
	}
</style>
