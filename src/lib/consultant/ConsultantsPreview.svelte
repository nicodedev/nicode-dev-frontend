<script lang="ts">
	export let consultants: ConsultantType[];
</script>

<section>
	{#each consultants as consultant}
		<a sveltekit:prefetch href={consultant.shortName}>
			<span>{consultant.shortName}</span>
		</a>
	{/each}
</section>

<style>
	a {
		border-radius: 4px;
		border: 2px solid var(--color-primary);
		background-color: var(--color-secondary);
		text-decoration: none;
		padding: 20px;

		border: 2px solid var(--color-accent-cta);
	}

	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1em;
	}
</style>
