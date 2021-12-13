<script>
	const route = [{ desc: 'n' }];
</script>

<nav>
	<div>
		<a href="/" aria-label="front page">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
				<title>Nicode</title>
				<description>A circle with the letter "N" inside, created by a single line</description>
				<path pathLength="100" d="m50 50 20-20v40L30 30v54.6A40 40 0 1 1 50 90" />
			</svg>
		</a>
	</div>
	<!-- <div>
		<a href="/blog">
			<span>blog</span>
		</a>
	</div> -->
</nav>

<style>
	nav {
		--space: 1.25em;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		font-size: var(--space);

		gap: var(--space);
	}
	a {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	div {
		display: flex;
		align-items: center;
		gap: var(--space);
	}
	svg {
		height: calc(var(--space) * 1.35);
	}
	path {
		stroke: var(--color-interactive);
		fill: none;
		stroke-width: 5;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	@keyframes in-draw {
		0% {
			stroke-dasharray: 0;
		}
	}
</style>
