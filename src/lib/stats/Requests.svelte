<script>
	import { ColorMap } from './color';
	export let requests = [];

	let current = requests.length ? requests[requests.length - 1] : null;
	let dataKey = 'hits';

	const viewBox = [0, 0, 300, 150];
	const color = new ColorMap();

	$: maxHits = requests.reduce((max, r) => Math.max(max, r.total), 0);

	$: yRatio = viewBox[3] / maxHits;
	$: xW = viewBox[2] / requests.length;

	function sum(key, data) {
		return data.reduce((acc, d) => acc + d[1][key], 0);
	}

	function stackHeight(idx, key, data) {
		// sums up previous values as padding
		return sum(key, data.slice(0, idx - 1)) * yRatio;
	}
</script>

{#if requests.length}
	<div style:background-color={'red'}>
		<svg viewBox={viewBox.join(' ')}>
			{#each requests as { date, paths }, i}
				<g
					data-d={date}
					on:mouseenter={() => {
						current = { date, paths };
					}}
				>
					{#each paths as [pathName, _value], j}
						<rect
							fill={color.byName(pathName)}
							x={i * xW + 0.6}
							y={stackHeight(j, dataKey, paths) / yRatio}
							width={xW - 1}
							height={10 || _value[dataKey]}
						/>
					{/each}
				</g>
			{/each}
		</svg>
		{current.date.toLocaleDateString('no')}
		<ul>
			{#each current.paths as [pathName, { hits, unique }]}
				<li style="background-color:{color.byName(pathName)}">
					<span>{pathName}</span>
					<span>{hits}</span>
					<span>({unique})</span>
				</li>
			{/each}
		</ul>
		{maxHits}
	</div>
{/if}

<style>
	div {
		padding: 10px;
	}
	svg {
		transform: scale(1, -1);
		width: 100%;
	}
	rect {
		opacity: 0.5;
	}
	ul {
		font-size: 0.8rem;
		min-height: 300px;
	}
	li {
		width: fit-content;
	}
</style>
