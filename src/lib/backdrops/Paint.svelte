<script lang="ts">
	import { Debounce } from '$lib/utils';
	import { onMount } from 'svelte';
	let W, H, canvas, ctx;

	const resizeCooldown = new Debounce(() => {
		canvas.width = W;
		canvas.height = H;
	}, 100);

	const artwork = [];
	let currentStroke = [];

	const handleMouseMove = ({ clientX, clientY, movementX, movementY, buttons }) => {
		if (buttons === 0 && currentStroke.length > 0) {
			artwork.push(currentStroke);
			currentStroke = [];
		}

		if (buttons === 1) {
			currentStroke.push([clientX - W / 2, clientY - H / 2, movementX, movementY]);
		}
	};

	const drawLineArray = (lineArray) => {
		if (!lineArray.length) return;
		ctx.beginPath();
		ctx.moveTo(lineArray[0][0] + W / 2, lineArray[0][1] + H / 2);
		for (let i = 1; i < lineArray.length; i++) {
			ctx.lineTo(lineArray[i][0] + W / 2, lineArray[i][1] + H / 2);
		}
		ctx.stroke();
	};

	onMount(() => {
		resizeCooldown.execute();
		ctx = canvas.getContext('2d');

		const rafLoop = () => {
			ctx.clearRect(0, 0, W, H);

			ctx.lineWidth = 2;
			ctx.font = '10px Arial';
			ctx.fillStyle = 'hsla(160, 80%, 30%, 1)';

			ctx.strokeStyle = `hsla(200, 50%, 50%, 0.5)`;
			ctx.fillText(artwork.length, 100, 100);
			ctx.fillText(currentStroke.length, 100, 110);

			for (let i = 0; i < artwork.length; i++) {
				const stroke = artwork[i];
				if (stroke.length < 1) continue;
				drawLineArray(stroke);
			}
			drawLineArray(currentStroke);

			frame = requestAnimationFrame(rafLoop);
		};
		let frame = requestAnimationFrame(rafLoop);

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<svelte:window
	bind:innerHeight={H}
	bind:innerWidth={W}
	on:resize={resizeCooldown.call}
	on:mousemove={handleMouseMove}
	on:keydown|preventDefault={({ key }) => {
		if (key === ' ') {
			console.log(artwork);
		}
		if (key === 'z') {
			console.log('stroke removed');

			if (currentStroke.length) {
				currentStroke = [];
			} else {
				artwork.pop();
			}
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
