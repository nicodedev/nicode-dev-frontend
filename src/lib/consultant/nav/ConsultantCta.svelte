<script lang="ts">
	export let consultants: ConsultantType[];
</script>

<section>
	<h2>Contact us!</h2>
	<ul>
		{#each consultants as { name }}
			<li>
				<a href="/{name}" sveltekit:prefetch>
					<span>{name}</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		padding: 1em;
	}
	h2 {
		font-size: 2em;
	}
	ul {
		display: flex;
		gap: 0.5em;
		font-size: 1.2em;
	}
	a {
		display: flex;
		align-items: center;

		padding: 0.5em 1em;
		border-radius: 6px;

		color: var(--color-interactive);
		border: 1px solid var(--color-interactive);
	}

	/* a:hover,
	a:focus {

	} */

	@media (min-width: 500px) {
		section {
			margin-top: -1em;
		}
	}
</style>
