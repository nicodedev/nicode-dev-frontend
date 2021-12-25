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
		padding: calc(var(--box-space) * 0.4);
	}
	h2 {
		margin-top: -0.4em;
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
