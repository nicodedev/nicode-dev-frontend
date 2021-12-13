<script context="module" lang="ts">
	import type { ErrorLoad, ErrorLoadInput, LoadOutput } from '@sveltejs/kit';
	export const load: ErrorLoad = ({ error, status }: ErrorLoadInput) => {
		return {
			props: {
				status,
				message: error.message,
				stack: error.stack
			}
		} as LoadOutput;
	};
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
	h1 {
		color: var(--color-accent);
		font-size: 4em;
	}
	h1,
	h2,
	pre {
		width: min(var(--main-content-width), 100%);
	}
	pre {
		font-size: 0.85em;
		white-space: pre-wrap;
	}
</style>
