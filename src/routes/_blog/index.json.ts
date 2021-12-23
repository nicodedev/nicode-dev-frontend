import { blogPosts } from '$lib/db';
import { getTextStats } from './_utils';

export const get = async () => {
	const posts: BlogPostType[] = blogPosts
		.filter(({ visible, published }) => {
			const isPublished = new Date().getTime() >= new Date(published).getTime();
			// don't show unpublished or hidden posts
			return visible && isPublished;
		})
		.map((post) => {
			return { ...post, meta: getTextStats(post.content) };
		});

	return { body: { posts } };
};
