<article>
	<slot />
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 8em;

		padding: 2em;
		margin: 1em;
	}

	/* @supports (backdrop-filter: blur(0px)) {
		article::after {
			background-color: transparent;
			backdrop-filter: blur(30px) brightness(0.7);
		}
	} */

	/* @media (min-width: 1100px) {

	} */
</style>
