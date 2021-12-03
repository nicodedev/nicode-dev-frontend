<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				status,
				message: error.message,
				stack: error.stack
			}
		};
	}
</script>

<script>
	import { dev } from '$app/env';
	export let status;
	export let message;
	export let stack;
</script>

<h1>{status}</h1>
{#if message}
	<h2>{message}</h2>
{/if}
{#if dev && stack}
	<pre>{stack}</pre>
{/if}

<style>
	pre {
		font-size: 0.85em;
		width: min(1100px, 100%);
		white-space: pre-wrap;
	}
</style>
