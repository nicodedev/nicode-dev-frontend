<script lang="ts">
	import Consultant from '$lib/consultant/Consultant.svelte';
	import { consultants } from '$lib/content';

	const nicolai: ConsultantType = consultants.find((c) => c.shortName === 'Nicolai');
	const hans: ConsultantType = consultants.find((c) => c.shortName === 'Hans');
</script>

<Consultant consultant={hans} />
