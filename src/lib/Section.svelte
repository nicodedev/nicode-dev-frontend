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
		scroll-margin: 2rem 0 0 0;
		max-width: var(--main-content-width);
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	section h2 {
		max-width: max-content;
	}

	@media (min-width: 1100px) {
		section h2 {
			position: relative;
		}
		section h2 a {
			position: absolute;
			left: -1em;
			transition: opacity 0.1s 0.1s ease-in-out;
			opacity: 0;
		}
		section h2:hover > a,
		section h2:focus-within > a,
		section:target h2 > a {
			transition: opacity 0.05s;
			opacity: 1;
		}
	}
</style>
