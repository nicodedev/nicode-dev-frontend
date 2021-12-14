<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ page, stuff }) => {
		const post = stuff.posts.find((p: BlogPostType) => p.slug === page.params.slug);
		if (!post) {
			return { status: 404, error: `Not found "${page.params.slug}"` };
		}
		return { props: { post } };
	};
</script>

<script lang="ts">
	export let post: BlogPostType;
</script>

<svelte:head>
	<title>nicode - blog | {post.title}</title>

	<meta name="author" content={post.author} />

	{#if post.tags.length}
		<meta name="keywords" content={post.tags.join(', ')} />
	{/if}
</svelte:head>

<div class="blog-post">
	<div class="meta">
		<span>Reading {(post.meta.readingTime === 1 ? '<' : '~') + post.meta.readingTime} min</span>
		<span>
			{post.tags.join(', ')}
		</span>
	</div>

	<article class="article fadein paper">
		<div>
			<h1>
				{post.title}
			</h1>

			<section>
				{post.content}
			</section>
		</div>
	</article>
</div>

<style>
	.blog-post {
		max-width: 80ch;
		margin: var(--box-space) 0;
	}
	article {
		gap: 1em;
		margin: 0;
	}

	.meta {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;

		opacity: 0.8;
		font-size: 0.7em;
		margin: var(--box-space) var(--box-space) 0;
	}
</style>
