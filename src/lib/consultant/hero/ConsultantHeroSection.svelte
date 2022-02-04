<script lang="ts">
	import IntroText from './fragments/IntroText.svelte';
	import Headshot from './fragments/Headshot.svelte';

	export let consultant: ConsultantType;
</script>

{#if consultant}
	<section>
		<Headshot {consultant} />
		<IntroText {consultant} />
	</section>
{/if}

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 2em;
	}

	@media (max-width: 600px) {
		section {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
