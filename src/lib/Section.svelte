<script>
	export let title;

	$: id = encodeURIComponent(title.toLowerCase().replace(/\s/g, '-'));
</script>

<section {id}>
	{#if title}
		<h2>
			<a href="#{id}">#</a>
			{title}
		</h2>
	{/if}
	<slot />
</section>

<style>
	section {
		max-width: var(--main-content-width);
		margin: 8px;
	}
	section h2 {
		margin-bottom: 1em;
	}
	section h2 a {
		color: var(--color-accent-cta);
		user-select: none;
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
	section {
		scroll-margin: 2rem 0 0 0;
	}

	section:target h2 {
		text-decoration: underline;
	}
</style>
