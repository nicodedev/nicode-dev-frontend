<script lang="ts">
	export let consultant: ConsultantType;
</script>

<div>
	<img src={consultant.headshot} alt="consultant {consultant.shortName}" />
</div>

<style>
	div {
		width: clamp(180px, 40%, 384px);

		position: relative;
	}
	img {
		width: 100%;
		border-radius: 9999px;
	}

	div::after,
	div::before {
		content: '';
		position: absolute;

		border: 2px solid var(--color-accent-cta);
		border-radius: 4px;

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
			border-radius: 0;
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
			transition: transform 0.3s 0.5s ease-out, width 0.3s ease-out, height 0.3s ease-out;
			transform: rotate(-45deg);
		}
	}

	div::after {
		border-right: 0;
		border-bottom: 0;
		z-index: -1;
	}
	div::before {
		border-top: 0;
		border-left: 0;
	}
</style>
