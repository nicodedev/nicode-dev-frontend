<script lang="ts">
	type BackgroundVariation = 1 | 2 | 3 | 4;
	export let variation: BackgroundVariation = 4;
</script>

<div aria-hidden="true" class="b{variation}" />

<style>
	div {
		height: 100%;
		width: 100vw;
		top: 0;
		left: 0;
		position: fixed;
		z-index: -10;

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
		opacity: 0.17;
	}
	.b3 {
		background-image: image-set(url('/bgs/opt3.webp') 1x, url('/bgs/opt3.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/opt3.webp') 1x, url('/bgs/opt3.jpg') 1x);
		opacity: 0.14;
	}

	.b4 {
		background-image: image-set(url('/bgs/opt4.webp') 1x, url('/bgs/opt4.jpg') 1x);
		background-image: -webkit-image-set(url('/bgs/opt4.webp') 1x, url('/bgs/opt4.jpg') 1x);
		opacity: 0.07;
	}

	@media (prefers-color-scheme: dark) {
		.b1 {
			opacity: 0.03;
		}
		.b2 {
			opacity: 0.08;
		}
		.b3 {
			opacity: 0.05;
		}

		.b4 {
			opacity: 0.04;
		}
	}
</style>
