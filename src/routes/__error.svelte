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

<script lang="ts">
	import { dev } from '$app/env';
	export let status: number;
	export let message: string;
	export let stack: string;
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
		color: var(--color-content);
		font-size: 4em;
		opacity: 0.75;
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
