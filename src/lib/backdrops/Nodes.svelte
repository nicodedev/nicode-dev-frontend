<script lang="ts">
	import { clamp, Debounce, generateId } from '$lib/utils';
	import { onMount } from 'svelte';
	let W, H, CX, CY, canvas, ctx;
	let points = [];

	const resizeCooldown = new Debounce(() => {
		canvas.width = W;
		canvas.height = H;
		CX = W / 2;
		CY = H / 2;
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
			const maxRange = Math.min(Math.min(W, H) / 6, 250);
			for (let i = 0; i < ps.length; i++) {
				if (this.id < ps[i].id) {
					if (this.distanceTo(ps[i]) < maxRange) {
						this.drawTo.push(ps[i]);
					}
				}
			}

			//move away from center
			// const angleToCenter = Math.atan2(this.y - CY, this.x - CX);
			// this.x += Math.cos(angleToCenter) * 0.3;
			// this.y += Math.sin(angleToCenter) * 0.3;

			//is outside
			// if (
			// 	this.x > W - this.r ||
			// 	this.x - this.r < 0 ||
			// 	this.y > H - this.r ||
			// 	this.y - this.r < 0
			// ) {
			// 	this.reposition();
			// }

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
		distanceTo(point) {
			return Math.hypot(this.x - point.x, this.y - point.y);
		}
		reposition() {
			this.x = Math.random() * W;
			this.y = Math.random() * H;
		}
		randomize() {
			this.vx = (Math.random() * 2 - 1) * 0.08;
			this.vy = (Math.random() * 2 - 1) * 0.08;
		}
	}

	onMount(() => {
		resizeCooldown.execute();
		ctx = canvas.getContext('2d');

		const idIter = generateId();

		const rafLoop = () => {
			ctx.font = `12px sans-serif`;
			ctx.fillStyle = 'hsla(260, 80%, 30%, 0.3)';
			ctx.strokeStyle = 'hsla(260, 80%, 30%, 0.2)';

			ctx.clearRect(0, 0, W, H);

			if (points.length < clamp(Math.max(W, H) / 20, 50, 200)) {
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

<canvas bind:this={canvas} />

<style>
	canvas {
		width: 100%;
		height: 100%;
		animation: fadein 2s backwards;
	}
	@keyframes fadein {
		from {
			scale: 0.8;
			opacity: 0;
		}
	}
</style>
