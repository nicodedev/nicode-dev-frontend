<script lang="ts">
	import { consultants } from '$lib/db';
	import ConsultantPreview from '$lib/consultant/ConsultantsPreview.svelte';
</script>

<svelte:head>
	<title>nicode</title>
</svelte:head>

<ConsultantPreview {consultants} />
