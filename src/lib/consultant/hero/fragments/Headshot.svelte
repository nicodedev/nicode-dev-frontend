<script lang="ts">
	export let consultant: ConsultantType;
</script>

<div>
	<img
		src={consultant.headshot}
		alt="consultant {consultant.shortName}"
		width="500px"
		height="500px"
	/>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		width: clamp(180px, 70%, 390px);
	}
	img {
		border-radius: 9999px;

		width: 100%;
		object-fit: contain;
		height: min-content;

		display: flex;
		justify-content: center;
		align-items: center;

		/* hack to hide alt text if load fail (aviid layout shift uglyness) */
		color: rgba(0, 0, 0, 0);
		animation: fadeInAlt 0.2s 0.3s ease-in-out forwards;
	}
	@keyframes fadeInAlt {
		to {
			color: var(--color-primary);
		}
	}

	div::after,
	div::before {
		content: '';
		position: absolute;

		border: var(--b-thickness) solid var(--color-accent-cta);
		border-radius: var(--b-radius);

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		width: 90%;
		height: 90%;

		transition: transform 1.2s 1s ease-in-out, width 1.3s 0.5s ease-out, height 1.3s 0.5s ease-out;

		margin: auto;
		transform: rotate(0);

		pointer-events: none;
	}

	@media (max-width: 600px) {
		img {
			border-radius: var(--b-radius);
		}
		div::after,
		div::before {
			width: 100%;
			height: 100%;
			transform: rotate(10deg);
		}
	}

	@media (min-width: 960px) {
		div:hover::after,
		div:hover::before {
			transition: transform 0.3s 0.8s ease-out, width 0.5s ease-out, height 0.5s ease-out;
			transform: rotate(-45deg);
		}
	}

	div::after {
		border-right: 0;
		border-bottom: 0;
		z-index: -2;
	}
	div::before {
		z-index: 2;
		border-top: 0;
		border-left: 0;
	}
</style>
