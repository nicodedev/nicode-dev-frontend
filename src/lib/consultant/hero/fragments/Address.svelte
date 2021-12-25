<script lang="ts">
	export let contact: ContactType;
	$: ({ email, mobile, linkedin } = contact);
</script>

<address>
	{#if email}
		<a title="email" href="mailto:{email}" aria-label="email address">
			<span>E</span>
			<span>{email}</span>
		</a>
	{/if}

	{#if linkedin}
		<a
			title="linkedin"
			href={'https://www.linkedin.com/in/' + linkedin}
			aria-label="linked in profile"
		>
			<span>L</span>
			<span>{linkedin}</span>
		</a>
	{/if}

	{#if mobile}
		<a title="mobile" href="tel:{mobile}" aria-label="mobile phone">
			<span>M</span>
			<span>{mobile}</span>
		</a>
	{/if}
</address>

<style>
	address {
		display: flex;
		flex-flow: column;
		gap: 0.5em;
		font-size: 0.8em;
		justify-content: space-between;
		max-width: max-content;
	}
	address a {
		display: flex;
		gap: 5px;
		font-size: 1em;
		text-decoration: none;
		width: min-content;
	}
	address a span {
		padding: 0.2em 0.4em;
	}

	address a span:first-child {
		border: 2px solid var(--color-interactive);
		border-radius: 999px;
		width: 2em;
		height: 2em;
		display: inline-flex;
		justify-content: center;
		align-items: center;

		transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
	}
	address a:hover span:first-child {
		transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
		background-color: var(--color-interactive);
		color: var(--color-background);
	}
</style>
