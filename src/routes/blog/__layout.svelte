<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`/blog.json`);

		if (!res.ok) return;

		const { posts } = await res.json();

		return { stuff: { posts } };
	};
</script>

<slot />
