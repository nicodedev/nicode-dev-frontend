<script lang="ts">
	export let consultants;

	$: alt = consultants.length === 1;
</script>

<section>
	<ul>
		{#each consultants as { name }}
			<li>
				<a href="/{name}" sveltekit:prefetch>
					<span>{alt ? 'About Me' : name}</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		padding: calc(var(--box-space) * 0.4);
	}
	@media (min-width: 550px) {
		section {
			justify-content: end;
		}
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
</style>
