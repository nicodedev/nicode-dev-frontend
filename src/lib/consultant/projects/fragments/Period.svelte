<script lang="ts">
	export let period: PeriodType;

	let { from, to } = period;
</script>

<span>
	<time datetime={from}>{from}</time>
	-
	{#if to}
		<time datetime={to}>{to}</time>
	{:else}
		<time>present</time>
	{/if}
</span>

<style>
	span {
		display: flex;
		gap: 1em;
		font-size: 0.9em;
	}
</style>
