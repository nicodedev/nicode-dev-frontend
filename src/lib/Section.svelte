<script>
	export let title;

	$: id = encodeURIComponent(title.toLowerCase().replace(/\s/g, '-'));
</script>

<section>
	{#if title}
		<h2 {id}>
			<a href="#{id}">#</a>
			{title}
		</h2>
	{/if}
	<slot />
</section>

<style>
	section {
		max-width: var(--main-content-width);
	}
	section h2 {
		margin-bottom: 1em;
	}
	section h2 a {
		color: var(--color-accent-cta);
	}
	@media (min-width: 1100px) {
		section h2 {
			position: relative;
		}
		section h2 a {
			position: absolute;
			left: -1em;
		}
	}

	/* scrolling */
	h2 {
		scroll-margin: 1em 0 0 0;
	}
</style>
