<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ page, stuff }) => {
		const post = stuff.posts.find((p) => p.title === page.params.title);
		if (!post) {
			return { status: 404, error: `Not found "${page.params.title}"` };
		}
		return { props: { post } };
	};
</script>

<script lang="ts">
	import BlogPost from '$lib/wrappers/blog/BlogPost.svelte';
	export let post: BlogPostType;
</script>

<svelte:head>
	<title>nicode - blog | {post.title}</title>
</svelte:head>

<BlogPost {post} />
