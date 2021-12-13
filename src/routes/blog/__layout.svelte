<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`/blog.json`);

		if (!res.ok) return;

		const { posts } = await res.json();

		return { stuff: { posts } };
	};
</script>

<script>
	import '@fontsource/source-sans-pro';
</script>

<div>
	<slot />
</div>

<style>
	div {
		display: contents;
		font-family: 'Source Sans Pro', sans-serif;
	}
	:global(.blog-post) {
		letter-spacing: 0.07em;
		line-height: 1.2;
		font-weight: 400;

		word-spacing: 110%;

		max-width: 65ch;
	}
</style>
