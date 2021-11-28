<script lang="ts">
	import Section from '$lib/wrappers/Section.svelte';
	import IntroText from './fragments/IntroText.svelte';
	import Headshot from './fragments/Headshot.svelte';

	export let consultant: ConsultantType;
</script>

{#if consultant}
	<Section hideTitle title={consultant.shortName}>
		<div>
			<Headshot {consultant} />
			<IntroText {consultant} />
		</div>
	</Section>
{/if}

<style>
	div {
		display: flex;
		gap: 2.5em;
		align-items: center;
		justify-content: space-evenly;
	}

	@media (max-width: 480px) {
		div {
			flex-direction: column;
		}
	}
</style>
