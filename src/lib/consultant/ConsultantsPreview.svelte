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
		border-radius: var(--b-radius);
		background-color: var(--color-secondary);
		text-decoration: none;
		padding: 20px;

		border: var(--b-thickness) solid var(--color-accent-cta);
	}

	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1em;
	}
</style>
