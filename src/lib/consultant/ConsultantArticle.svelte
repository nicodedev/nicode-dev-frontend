<script lang="ts">
	import Projects from './projects/Projects.svelte';
	import ConsultantHeroSection from './hero/ConsultantHeroSection.svelte';
	import HashSection from '$lib/wrappers/HashSection.svelte';

	export let consultant: ConsultantType;

	let { availability, focus } = consultant;
</script>

<article class="article fadein">
	<ConsultantHeroSection {consultant} />

	<HashSection title="About Me">
		<p>
			{focus}
		</p>
		<p>
			{availability} <a href="mailto:{consultant.contact.email}">Contact me!</a>
		</p>
	</HashSection>

	<HashSection title="Experience and projects">
		<Projects {consultant} />
	</HashSection>
</article>

<style>
	p:nth-of-type(2) {
		margin-top: 1em;
		font-style: italic;
	}

	article {
		gap: var(--section-space);
	}
</style>
