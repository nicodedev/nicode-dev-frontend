<script lang="ts">
	import SvgFilter from './_SvgFilter.svelte';
	export let consultant: ConsultantType;
</script>

<SvgFilter />

<div>
	<img src={consultant.headshot} alt="consultant {consultant.name}" width="500px" height="500px" />
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		width: clamp(180px, 70%, 380px);

		border-radius: 9999px;
		overflow: hidden;

		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(0,0,0,0.03)' d='M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z' /%3E%3C/svg%3E");
		background-size: 130%;
		background-position: center 25%;
		background-repeat: no-repeat;

		box-shadow: 0 0 8px -4px var(--color-content);
	}

	img {
		width: 100%;
		object-fit: cover;
		height: min-content;

		display: flex;
		justify-content: center;
		align-items: center;

		/* hack to hide alt text if load fail (aviid layout shift uglyness) */
		color: rgba(0, 0, 0, 0);
		animation: fadeInAltAttr 0.2s 0.3s ease-in-out forwards;

		filter: sepia(1) hue-rotate(170deg) brightness(1.1) saturate(0.2);
	}
	@media (prefers-color-scheme: dark) {
		img {
			filter: sepia(1) hue-rotate(170deg) brightness(0.9) saturate(0.5);
		}
	}
	@keyframes fadeInAltAttr {
		to {
			color: var(--color-content);
		}
	}
	@media (max-width: 600px) {
		div {
			border-radius: 6px;
			max-width: 300px;
		}
	}
</style>
