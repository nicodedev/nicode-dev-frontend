<script lang="ts">
	import BgImage from './fragments/BgImage.svelte';
	import Progress from './fragments/Progress.svelte';
	import Forecast from './fragments/Forecast.svelte';

	export let background = false;
	export let progress = false;
	export let forecast = false;

	$: show = [
		[background, BgImage],
		[progress, Progress],
		[forecast, Forecast]
	].map((element) => (element[0] ? element[1] : null));
</script>

{#each show as component}
	<svelte:component this={component} />
{/each}
