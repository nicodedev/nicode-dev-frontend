<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ page, fetch }) => {
		const res = await fetch(`${page.params.consultantName}.json`);

		if (!res.ok) return;

		const { consultant } = await res.json();

		return { props: { consultant } };
	};
</script>

<script lang="ts">
	import ConsultantArticle from '$lib/consultant/ConsultantArticle.svelte';
	export let consultant: ConsultantType;
</script>

<svelte:head>
	<title>nicode - {consultant.name}</title>
</svelte:head>

<ConsultantArticle {consultant} />
