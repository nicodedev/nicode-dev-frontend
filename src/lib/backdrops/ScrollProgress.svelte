<script lang="ts">
	import { Spring, spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	let scrollY: number;
	let actual: number = 0;
	let timer: ReturnType<typeof setTimeout>;
	const progress: Spring<number> = spring(0, {
		damping: 0.065,
		stiffness: 0.01,
		precision: 0.05
	});

	const getProgress = (): number => {
		const pageHeight =
			document.documentElement.scrollHeight - document.documentElement.offsetHeight;
		if (pageHeight === 0) return 0;

		const p = scrollY / pageHeight;

		return p * 100;
	};

	const handleScroll = (): void => {
		clearTimeout(timer);
		actual = getProgress();
		timer = setTimeout(() => {
			progress.set(actual);
		}, 60);
	};

	onMount(() => {
		actual = getProgress();
		progress.set(actual, { hard: true });

		return () => clearTimeout(timer);
	});
</script>

<div class="bar-progress" aria-hidden="true" style="--p:{$progress}vh">
	{`${Math.round(actual)}`.padStart(3, '0')}
</div>

<svelte:window bind:scrollY on:scroll={handleScroll} />

<style>
	.bar-progress {
		position: fixed;
		box-sizing: border-box;
		user-select: none;
		z-index: 10;
		right: 0;

		color: var(--color-content);

		padding: 8px 0;

		/* use transforms instead? */
		top: clamp(0em, var(--p), 100vh - 2em);

		font-size: 0.8em;
	}

	@media (min-width: 1100px) {
		.bar-progress {
			padding: 8px;
			font-size: 1em;
		}
	}
</style>
