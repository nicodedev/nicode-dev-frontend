<script lang="ts">
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	let scrollY, timer;

	const w = spring(0, {
		stiffness: 0.01,
		damping: 0.05,
		precision: 0.025
	});

	const getProgress = (): number => {
		return (
			scrollY / (document.documentElement.scrollHeight - document.documentElement.offsetHeight)
		);
	};

	const handleScroll = () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			// bar width in %
			w.set(getProgress() * 100);
		}, 110);
	};

	onMount(() => {
		w.set(getProgress() * 100, { hard: true });
		return () => clearTimeout(timer);
	});
</script>

<div aria-hidden="true" class="bg" />
<!-- scrollY -->
<div class="bar" aria-hidden="true" style="height: {$w}vh;" />

<svelte:window bind:scrollY on:scroll={handleScroll} />

<style>
	.bg {
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		position: fixed;
		z-index: -5;

		background-image: image-set(url('bgs/t1.webp') 1x, url('bgs/t1.jpg') 1x);
		background-image: -webkit-image-set(url('bgs/t1.webp') 1x, url('bgs/t1.jpg') 1x);

		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;

		opacity: 0.05;
	}

	.bar {
		position: fixed;
		z-index: 10;
		top: 0;
		right: 0;
		width: 2px;
		height: 0;
		background-color: var(--color-primary);
	}
</style>
