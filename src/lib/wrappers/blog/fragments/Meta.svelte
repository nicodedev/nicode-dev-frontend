<script lang="ts">
	export let post: BlogPostType;
</script>

<svelte:head>
	<meta name="author" content={post.author} />

	{#if post.tags.length}
		<meta name="keywords" content={post.tags.join(', ')} />
	{/if}
</svelte:head>

<section class="meta">
	<time aria-roledescription="published" datetime={post.published}>
		{post.published}
	</time>

	<span
		>Estimated reading time: {post.meta.readingTime === 1
			? '<' + post.meta.readingTime
			: '~' + post.meta.readingTime}min</span
	>
	<span>
		{post.meta.wordCount} words
	</span>
	<span>Readability Score: {post.meta.readability}</span>
	<div>
		<ul aria-roledescription="keywords">
			{#each post.tags as tag}
				<li>{tag}</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.meta {
		max-width: var(--main-content-width);
		width: 100%;
		margin-bottom: 1em;

		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		gap: 0 1em;

		font-size: 0.6em;
		opacity: 0.75;
	}
	.meta ul {
		display: flex;
		flex-flow: row wrap;
	}
	.meta li + li::before {
		content: ', ';
	}
</style>
