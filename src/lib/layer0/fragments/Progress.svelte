<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { quadOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let scrollY, timer;

	let actual = null;
	const progress = tweened(0, {
		duration: 800,
		easing: quadOut
	});

	const getProgress = () => {
		const p =
			scrollY / (document.documentElement.scrollHeight - document.documentElement.offsetHeight);
		return p * 100;
	};

	const handleScroll = () => {
		actual = getProgress();

		clearTimeout(timer);

		timer = setTimeout(() => {
			progress.set(actual);
		}, 110);
	};

	onMount(() => {
		actual = getProgress();
		progress.set(actual, { duration: 0 });

		return () => clearTimeout(timer);
	});
</script>

<!-- scrollY -->
{#if actual !== null}
	<div class="bar-progress" aria-hidden="true" style="--p:{$progress}vh">
		L{`${5 - Math.round($progress / 10)}`.padStart(2, '0')}
	</div>
{/if}

<svelte:window bind:scrollY on:scroll={handleScroll} />

<style>
	.bar-progress {
		position: fixed;
		box-sizing: border-box;
		user-select: none;
		z-index: 10;
		left: 0;

		color: var(--color-accent);

		opacity: 0.4;

		top: clamp(0.25em, var(--p), 100vh - 2em);
	}

	@media (min-width: 1100px) {
		.bar-progress {
			padding: 0.25em 0.5em;
		}
	}
</style>
