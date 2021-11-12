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
		max-width: var(--main-content-width);

		display: flex;
		gap: 2em;
		align-items: center;
		justify-content: space-between;
	}

	@media (max-width: 480px) {
		section {
			flex-direction: column;
		}
	}
</style>
