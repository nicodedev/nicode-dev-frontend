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

<article class="article fadein">
	<h1>Blog</h1>
	<ul>
		{#each posts as { title, published }}
			<li>
				<span>{published}</span>
				<a href="blog/{title}">{title}</a>
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

	li a:not(:visited)::before {
		content: '';
		width: 0.1em;
		height: 0.1em;
		background-color: var(--color-accent);
	}
</style>
