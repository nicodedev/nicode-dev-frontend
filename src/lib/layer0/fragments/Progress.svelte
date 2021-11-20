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

<!-- scrollY -->
<div class="bar" aria-hidden="true" style="height: {$w}vh;" />

<svelte:window bind:scrollY on:scroll={handleScroll} />

<style>
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
