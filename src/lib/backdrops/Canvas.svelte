<script lang="ts">
	import { Debounce } from '$lib/utils';
	import { onMount } from 'svelte';
	let W, H, canvas, ctx;
	const history = [];
	const resizeCooldown = new Debounce(() => {
		canvas.width = W;
		canvas.height = H;
	}, 100);

	const drawHistory = () => {
		ctx.clearRect(0, 0, W, H);
		if (history.length < 3) return;
		// ctx.beginPath();
		// ctx.moveTo(history[0].x, history[0].y);
		// for (let i = 1; i < history.length; i++) {
		// 	ctx.lineTo(history[i].x, history[i].y);
		// }
		// ctx.stroke();
		const { x, y, vx, vy } = history[0];
		ctx.beginPath();
		ctx.arc(x, y, Math.abs(vx + vy), 0, Math.PI * 2);
		ctx.fill();
	};

	const handleMouseMove = ({ clientX, clientY, movementX, movementY }) => {
		requestAnimationFrame(drawHistory);
		history.push({ x: clientX, y: clientY, vx: movementX || 0, vy: movementY || 0 });
		if (history.length > 500) {
			history.shift();
		}
	};

	onMount(() => {
		resizeCooldown.execute();
		ctx = canvas.getContext('2d');
		ctx.fillStyle = ctx.strokeStyle = 'rgba(50, 255, 255, 0.1)';

		const t = setInterval(() => {
			if (history.length > 0) {
				history.shift();
				requestAnimationFrame(drawHistory);
			}
		}, 30);
	});
</script>

<svelte:window
	bind:innerHeight={H}
	bind:innerWidth={W}
	on:resize={resizeCooldown.call}
	on:mousemove={handleMouseMove}
	on:keydown={({ key }) => {
		if (key === ' ') {
			console.log(history);
		}
		if (key === 'd') {
			history.length = 0;
			drawHistory();
		}
	}}
/>

<canvas bind:this={canvas} />

<style>
	canvas {
		width: 100%;
		height: 100%;
	}
</style>
