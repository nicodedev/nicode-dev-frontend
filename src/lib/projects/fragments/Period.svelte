<script lang="ts">
	export let period: PeriodType;

	const YYYYMM = (d: Date) => {
		const date = new Date(d);
		return date.getFullYear() + '-' + (date.getMonth() + 1);
	};
	let from = YYYYMM(period.from);
	let to = YYYYMM(period.to);
</script>

<div>
	<time datetime={from}>{from}</time>
	{#if to}
		<time datetime={to}>{to}</time>
	{/if}
</div>

<style>
	div {
		display: flex;
		gap: 1em;
	}
</style>
