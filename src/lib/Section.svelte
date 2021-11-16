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
	section:target h2 a {
		opacity: 0.5;
	}
	@media (min-width: 1100px) {
		section h2 {
			position: relative;
		}
		section h2 a {
			position: absolute;
			left: -1em;
			opacity: 0;
			transition: opacity 0.2s 0.2s;
		}
		section:hover h2 a {
			opacity: 1;
			transition: opacity 0.1s;
		}
	}
	/* scrolling */
	section {
		scroll-margin: 2rem 0 0 0;
	}
</style>
