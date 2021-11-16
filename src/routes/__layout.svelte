<script lang="ts">
	import '../default.css';
	import '../config.css';
	import Nicode from '$lib/logo/Nicode.svelte';
</script>

<svelte:head>
	<title>Nicode</title>
</svelte:head>

<header>
	<Nicode />
</header>

<main>
	<slot />
</main>

<footer>
	<p>Created by <strike>Nicolai</strike> Hans in <strike>Elm</strike> Svelte</p>
</footer>

<style>
	header,
	main,
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px 0;
	}
	main {
		flex: auto;
	}
	footer p {
		max-width: var(--main-content-width);
		width: 100%;
		opacity: 0.6;
		transition: opacity 1.1s 2s;
		font-size: 0.65em;
	}
	footer:hover p {
		transition: opacity 0.2s;
		opacity: 1;
	}
</style>
