<script lang="ts">
	const bgCount = 9;
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
		background-image: image-set(url('/bgs/1.webp') 1x, url('/bgs/1.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/1.webp') 1x, url('/bgs/1.jpg') 1x);
		opacity: 0.08;
	}
	.b2 {
		background-image: image-set(url('/bgs/2.webp') 1x, url('/bgs/2.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/2.webp') 1x, url('/bgs/2.jpg') 1x);
		opacity: 0.2;
	}
	.b3 {
		background-image: image-set(url('/bgs/3.webp') 1x, url('/bgs/3.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/3.webp') 1x, url('/bgs/3.jpg') 1x);
		opacity: 0.2;
	}
	.b4 {
		background-image: image-set(url('/bgs/4.webp') 1x, url('/bgs/4.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/4.webp') 1x, url('/bgs/4.jpg') 1x);
		opacity: 0.1;
	}
	.b5 {
		background-image: image-set(url('/bgs/5.webp') 1x, url('/bgs/5.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/5.webp') 1x, url('/bgs/5.jpg') 1x);
		opacity: 0.08;
	}
	.b6 {
		background-image: image-set(url('/bgs/6.webp') 1x, url('/bgs/6.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/6.webp') 1x, url('/bgs/6.jpg') 1x);
		opacity: 0.1;
	}
	.b7 {
		background-image: image-set(url('/bgs/7.webp') 1x, url('/bgs/7.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/7.webp') 1x, url('/bgs/7.jpg') 1x);
		opacity: 0.12;
	}
	.b8 {
		background-image: image-set(url('/bgs/8.webp') 1x, url('/bgs/8.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/8.webp') 1x, url('/bgs/8.jpg') 1x);
		opacity: 0.2;
	}
	.b9 {
		background-image: image-set(url('/bgs/9.webp') 1x, url('/bgs/9.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/9.webp') 1x, url('/bgs/9.jpg') 1x);
		opacity: 0.1;
	}
</style>
