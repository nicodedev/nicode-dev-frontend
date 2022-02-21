<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`stats.json`);

		if (!res.ok) return;

		const { data } = await res.json();

		return { props: { data } };
	};
</script>

<script>
	import UAstring from '$lib/stats/UAstring.svelte';
	import Requests from '$lib/stats/Requests.svelte';
	export let data;

	function dateRange(start, end) {
		let range = [];
		let current = start;

		while (current <= end) {
			range.push(new Date(current));
			current.setDate(current.getDate() + 1);
		}

		return range;
	}

	$: _browsers = Object.entries(data.browser).sort((a, b) => {
		return b[1] - a[1];
	});
	$: _oss = Object.entries(data.os).sort((a, b) => {
		return b[1] - a[1];
	});

	$: _sessions = data.sessions;

	$: _requests = Object.entries(data.requests);
	$: _dateRange = dateRange(
		new Date(_requests[0][0]),
		new Date(_requests[_requests.length - 1][0])
	);

	$: _requestElements = _dateRange.map((d) => {
		const current = data.requests[d.toLocaleDateString('en')];
		if (current) {
			const _current = Object.entries(current);

			const total = _current.reduce((sum, p) => {
				return sum + p[1].hits;
			}, 0);

			return {
				date: d,
				paths: _current,
				total
			};
		} else {
			return {
				date: d,
				paths: []
			};
		}
	});
</script>

<article class="page">
	<h1>Nicode stats</h1>
	<h2>{_sessions} sessions created</h2>
	<UAstring browser={_browsers} os={_oss} />
	<Requests requests={_requestElements} />
</article>

<style>
	h1 {
		font-size: 1.5rem;
	}
</style>
