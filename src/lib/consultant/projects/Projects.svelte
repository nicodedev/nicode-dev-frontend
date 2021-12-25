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
	}
	li + li {
		margin-top: 4em;
	}
	li {
		position: relative;

		display: flex;
		flex-direction: column;
	}

	@media (min-width: 1000px) {
		li {
			margin: 0 auto;
		}
	}
</style>
