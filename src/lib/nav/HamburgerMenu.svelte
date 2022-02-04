<script>
	import { onMount } from 'svelte';

	export let close = true;
	export let back = false;
	let enabled;

	const fire = () => {
		if (back) {
			window.history.back();
		}
		if (close) {
		}
	};

	const handleClick = () => {
		fire();
	};

	const handleKeypress = (e) => {
		if (e.key === 'Enter') {
			fire();
			e.preventDefault();
		}
	};

	// const handleClickOutside = (e) => {
	// 	if (open) {
	// 		e.stopPropagation();
	// 		open = false;
	// 		console.log('spagetti');
	// 	}
	// };
	// const handleScroll = () => {
	// 	if (window.scrollY > 0) {
	// 		open = false;
	// 	}
	// };

	onMount(() => {
		enabled = true;
	});
</script>

{#if enabled}
	<div>
		<svg
			tabindex="0"
			class:close
			class:back
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			role="button"
			on:click={handleClick}
			on:keypress={handleKeypress}
		>
			<title>Menu</title>
			<path d="M0 15 H 100 " />
			<path d="M0 50 H 100 " />
			<path d="M0 85 H 100 " />
		</svg>
	</div>
{/if}

<style>
	div {
		position: relative;
		height: 55px;
		width: 55px;
	}
	svg {
		position: absolute;
		height: 100%;

		cursor: pointer;

		padding: 5px;
		border-radius: 8px;
		background-color: var(--color-background);
		/* background-color: red; */
	}

	path {
		stroke: var(--color-interactive);
		fill: none;
		stroke-width: 5;
		stroke-linecap: round;
		stroke-linejoin: round;

		transform-box: fill-box;
		transform-origin: center;

		transition: stroke-width 0.5s, transform 0.5s;
	}

	.close path:nth-of-type(1) {
		transform: translateY(35px) rotate(-135deg);
		stroke: var(--color-content);
	}
	.close path:nth-of-type(2) {
		transform: translateX(100px) scale(0);
	}
	.close path:nth-of-type(3) {
		transform: translateY(-35px) rotate(135deg);
		stroke: var(--color-content);
	}

	svg:hover path,
	svg:focus path {
		transition: stroke-width 0.1s, transform 0.3s;
		stroke-width: 10;
	}
</style>
