<script lang="ts">
	import { consultants } from '$lib/db';
	import ConsultantPreview from '$lib/consultant/ConsultantsPreview.svelte';
</script>

<ConsultantPreview {consultants} />
