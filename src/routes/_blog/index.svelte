<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ stuff }) => {
		const posts: BlogPostType[] = stuff.posts;
		return { props: { posts } };
	};
</script>

<script lang="ts">
	export let posts: BlogPostType[];
</script>

<svelte:head>
	<title>nicode - blog</title>
</svelte:head>

<article class="page">
	<h1>Blog</h1>
	<ul>
		{#each posts as { slug, title, published }}
			<li>
				<div>
					<span>{published}</span>
					<a href="blog/{slug}">{title}</a>
				</div>
			</li>
		{/each}
	</ul>
</article>

<style>
	ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1em;
	}

	li a {
		position: relative;
	}
</style>
