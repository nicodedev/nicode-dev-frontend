<script lang="ts">
	export let tags: String[];
</script>

<ul>
	{#each tags as tag}
		<li>{tag}</li>
	{/each}
</ul>

<style>
	ul,
	li {
		position: relative;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		gap: 0.5em;
	}
	ul::before,
	ul::after {
		font-weight: bold;
		font-size: 1.3em;
	}
	ul::after {
		content: ']';
	}
	ul::before {
		content: '[';
	}
	li:not(:last-of-type)::after {
		content: ',';
	}
</style>
