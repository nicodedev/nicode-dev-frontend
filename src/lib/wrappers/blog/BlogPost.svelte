<script lang="ts">
	import Meta from './fragments/Meta.svelte';
	export let post: BlogPostType;
</script>

<article class="article fadein reading">
	<h1>
		{post.title}
	</h1>

	<Meta {post} />

	<section>
		{post.content}
	</section>
</article>
