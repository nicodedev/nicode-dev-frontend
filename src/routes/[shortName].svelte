<script context="module" lang="ts">
	import { consultants } from '$lib/db';

	export const load = async ({ page }) => {
		// look up the consultant, ignore case
		const consultant = consultants.find(
			(c) => c.shortName.toLowerCase() === page.params.shortName.toLowerCase()
		);

		return { props: { consultant }, status: consultant ? 200 : 404 };
	};
</script>

<script lang="ts">
	import ConsultantView from '$lib/consultant/ConsultantView.svelte';
	export let consultant;
</script>

<svelte:head>
	<title>nicode - {consultant.shortName}</title>
</svelte:head>

<ConsultantView {consultant} />
