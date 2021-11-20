<script>
	export let consultant;

	$: ({ preamble, email, mobile, linkedin } = consultant.intro);
</script>

<div>
	<p>
		{preamble}
	</p>

	<address>
		{#if email}
			<a href="mailto:{email}" aria-label="email">
				<span>E</span>
				<span>{email}</span>
			</a>
		{/if}

		{#if linkedin}
			<a href={'https://www.linkedin.com/in/' + linkedin} aria-label="linked in profile">
				<span>L</span>
				<span>{linkedin}</span>
			</a>
		{/if}

		{#if mobile}
			<a href="tel:{mobile}" aria-label="mobile phone">
				<span>M</span>
				<span>{mobile}</span>
			</a>
		{/if}
	</address>
</div>

<style>
	address {
		display: flex;
		flex-flow: column;
		gap: 0.1em;
		font-size: 0.8em;
		justify-content: space-between;
	}
	address a {
		display: flex;
		gap: 5px;
		font-size: 1em;
	}
	address a span {
		padding: 0.2em 0.4em;
		border-radius: 4px;
	}
	address a:hover span:first-of-type {
		text-decoration: none;
		background-color: var(--color-accent-cta);
		color: var(--color-secondary);
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 1em;
		font-size: 1.4em;
		max-width: 480px;
	}
	@media (max-width: 600px) {
		div {
			max-width: 300px;
			text-align: justify;
		}
	}
</style>
