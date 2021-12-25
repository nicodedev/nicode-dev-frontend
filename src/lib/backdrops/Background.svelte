<script lang="ts">
	const bgCount = 6;
	export let bgvariation = null;
</script>

{#if bgvariation !== null}
	<div
		aria-hidden="true"
		class="bg b{Math.max(1, Math.min(((bgvariation + bgCount - 1) % bgCount) + 1, bgCount))}"
	/>
{/if}

{#if $$slots.default}
	<div aria-hidden="true" class="slot">
		<slot />
	</div>
{/if}

<style>
	div {
		overflow: hidden;

		height: 100%;
		width: 100vw;
		top: 0;
		left: 0;
		position: fixed;
		z-index: -10;
	}
	.slot {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.bg {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	.b1 {
		background-image: image-set(url('/bgs/opt1.webp') 1x, url('/bgs/opt1.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/opt1.webp') 1x, url('/bgs/opt1.jpg') 1x);
		opacity: 0.08;
	}
	.b2 {
		background-image: image-set(url('/bgs/opt2.webp') 1x, url('/bgs/opt2.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/opt2.webp') 1x, url('/bgs/opt2.jpg') 1x);
		opacity: 0.2;
	}
	.b3 {
		background-image: image-set(url('/bgs/opt3.webp') 1x, url('/bgs/opt3.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/opt3.webp') 1x, url('/bgs/opt3.jpg') 1x);
		opacity: 0.12;
	}
	.b4 {
		background-image: image-set(url('/bgs/opt4.webp') 1x, url('/bgs/opt4.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/opt4.webp') 1x, url('/bgs/opt4.jpg') 1x);
		opacity: 0.1;
	}
	.b5 {
		background-image: image-set(url('/bgs/opt5.webp') 1x, url('/bgs/opt5.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/opt5.webp') 1x, url('/bgs/opt5.jpg') 1x);
		opacity: 0.08;
	}
	.b6 {
		background-image: image-set(url('/bgs/opt6.webp') 1x, url('/bgs/opt6.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/opt6.webp') 1x, url('/bgs/opt6.jpg') 1x);
		opacity: 0.05;
	}
</style>
