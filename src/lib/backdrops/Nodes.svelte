<script lang="ts">
	import { Debounce, generateId } from '$lib/utils';
	import { onMount } from 'svelte';
	let W, H, DPR, canvas, ctx;
	let points = [];

	const resizeCooldown = new Debounce(() => {
		canvas.width = W;
		canvas.height = H;

		DPR = window.devicePixelRatio;
		points = [];
	}, 100);

	class Point {
		x: number;
		y: number;
		vx: number;
		vy: number;
		r: number;
		id: number;
		drawTo: Point[];

		constructor(id) {
			this.r = 3;
			this.id = id;
			this.drawTo = [];
			this.reposition();
			this.randomize();
		}
		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			ctx.fill();

			for (let i = 0; i < this.drawTo.length; i++) {
				const p = this.drawTo[i];
				ctx.beginPath();
				ctx.moveTo(this.x, this.y);
				ctx.lineTo(p.x, p.y);
				ctx.stroke();
			}
			ctx.fillText(this.drawTo.length, this.x + 5, this.y - 5);
		}
		update(ps) {
			this.drawTo = [];
			const maxRange = Math.min((W + H / 2) / (6 * DPR), 200) * DPR;
			for (let i = 0; i < ps.length; i++) {
				if (this.id < ps[i].id) {
					if (this.distanceTo(ps[i]) < maxRange) {
						this.drawTo.push(ps[i]);
					}
				}
			}

			//move away from center
			// const angleToCenter = Math.atan2(this.y - H / 2, this.x - W / 2);
			// this.x += Math.cos(angleToCenter) * 0.3;
			// this.y += Math.sin(angleToCenter) * 0.3;

			// bounce off walls
			if (this.x > W - this.r || this.x - this.r < 0) {
				this.vx = -this.vx;
			}
			if (this.y > H - this.r || this.y - this.r < 0) {
				this.vy = -this.vy;
			}

			//update position
			this.x += this.vx * (this.drawTo.length || 1);
			this.y += this.vy * (this.drawTo.length || 1);
		}
		isChild(point) {
			return this.id > point.id;
		}
		isOutside() {
			return (
				this.x > W - this.r || this.x - this.r < 0 || this.y > H - this.r || this.y - this.r < 0
			);
		}
		distanceTo(point) {
			return Math.hypot(this.x - point.x, this.y - point.y);
		}
		reposition() {
			this.x = Math.random() * W;
			this.y = Math.random() * H;
		}
		randomize() {
			this.vx = (Math.random() * 2 - 1) * 0.04;
			this.vy = (Math.random() * 2 - 1) * 0.04;
		}
	}

	onMount(() => {
		resizeCooldown.execute();
		ctx = canvas.getContext('2d');

		const idIter = generateId();

		const rafLoop = () => {
			ctx.font = `12px sans-serif`;
			ctx.fillStyle = 'hsla(260, 80%, 30%)';
			ctx.strokeStyle = 'hsla(260, 80%, 30%)';
			ctx.lineWidth = 1;

			ctx.clearRect(0, 0, W, H);

			const nodeCount = Math.min((W + H / 2) / (20 * DPR), 200) * DPR;

			if (points.length < nodeCount) {
				points.push(new Point(idIter.next().value));
			}

			points.forEach((point) => {
				point.update(points);
				point.draw();
			});

			frame = requestAnimationFrame(rafLoop);
		};
		let frame = requestAnimationFrame(rafLoop);

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<svelte:window bind:innerHeight={H} bind:innerWidth={W} on:resize={resizeCooldown.call} />

<canvas aria-hidden="true" bind:this={canvas} />

<style>
	canvas {
		width: 100%;
		height: 100%;
		animation: fadein 5s backwards;
		opacity: 0.35;

		height: 100%;
		width: 100vw;
		top: 0;
		left: 0;
		position: fixed;
		z-index: -10;
	}
	@keyframes fadein {
		from {
			scale: 0.9;
			opacity: 0;
		}
	}
</style>
