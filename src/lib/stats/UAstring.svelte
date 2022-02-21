<script>
	export let os;
	export let browser;
</script>

<section>
	<details>
		<summary>{os.length} Operating systems</summary>
		<ul>
			{#each os as [k, v]}
				<li>
					<span>{k}</span>
					<span>({v})</span>
				</li>
			{/each}
		</ul>
	</details>

	<details>
		<summary>{browser.length} User agents</summary>
		<ul>
			{#each browser as [k, v]}
				<li>
					<span>{k}</span>
					<span>({v})</span>
				</li>
			{/each}
		</ul>
	</details>
</section>

<style>
	section {
		min-width: 80%;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	ul li {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		font-size: 0.8rem;
	}
	li:hover {
		background-color: var(--color-content);
		color: var(--color-background);
	}
	/* --color-content: #f0f9ff;
	--color-background: #080720;
	--color-interactive: #00ffb3; */
	summary {
		font-size: 1.2rem;
		user-select: none;
	}
</style>
