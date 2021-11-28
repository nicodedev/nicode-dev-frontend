<script lang="ts">
	import { consultants } from '$lib/db';
	import ConsultantPreview from '$lib/consultant/ConsultantsPreview.svelte';
	import ContentArticle from '$lib/wrappers/ContentArticle.svelte';
</script>

<svelte:head>
	<title>nicode</title>
</svelte:head>

<ContentArticle>
	<ConsultantPreview {consultants} />
</ContentArticle>
