<script lang="ts">
	import { dev } from '$app/env';
	import { onMount } from 'svelte';

	const getWeather = async () => {
		if (dev) {
			return Math.random() * 30;
		}

		const res = await fetch(
			'https://api.met.no/weatherapi/locationforecast/2.0/compact?altitude=5&lat=60.397076&lon=5.324383'
		);
		const f = await res.json();
		const t = f.properties.timeseries[0].data.instant.details.air_temperature;

		return t;
	};

	let promise = getWeather();

	onMount(() => {
		const oneHour = 3600000;
		const interval = setInterval(() => {
			promise = getWeather();
		}, oneHour);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{#await promise then temp}
	<div>
		<span aria-label="current temperature in bergen in celsius">
			{Math.round(temp)}
		</span>
		<span aria-hidden="true">°C Bergen</span>
	</div>
{/await}

<style>
	div {
		position: absolute;
		display: flex;
		padding: 8px;
		color: var(--color-accent);
	}
</style>
