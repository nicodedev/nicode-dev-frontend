<script lang="ts">
	import Address from './Address.svelte';

	export let consultant: ConsultantType;
</script>

<div>
	<p>
		Hi i am <span class="name">{consultant.name}</span>, {consultant.preamble}
	</p>
	<Address contact={consultant.contact} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1em;
		font-size: 1.5em;
		max-width: 500px;
	}
	@media (max-width: 600px) {
		div {
			max-width: 300px;
		}
	}
</style>
