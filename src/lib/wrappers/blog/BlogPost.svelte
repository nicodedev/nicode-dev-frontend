<script lang="ts">
	import Meta from './fragments/Meta.svelte';
	export let post: BlogPostType;
</script>

<article class="article fadein">
	<h1>
		{post.title}
	</h1>
	<Meta {post} />

	<section class="blog-post">
		{post.content}
	</section>
</article>

<style>
	.blog-post {
		font-family: sans-serif;
		letter-spacing: normal;
		word-spacing: normal;
		line-height: normal;
	}

	article {
		max-width: 65ch;
	}
</style>
