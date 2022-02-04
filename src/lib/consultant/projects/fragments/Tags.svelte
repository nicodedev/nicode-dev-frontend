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
		gap: 0 0.5em;
	}

	li {
		letter-spacing: 0;
		word-spacing: -0.2rem;
	}

	li:last-of-type:after {
		content: ' ]';
	}
	li:first-of-type:before {
		content: '[ ';
	}
	li:not(:last-of-type)::after {
		content: ',';
	}
</style>
