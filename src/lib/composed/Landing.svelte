<script lang="ts">
	import ConsultantCta from '$lib/consultant/nav/ConsultantCta.svelte';
	import Background from '$lib/backdrops/Background.svelte';
	import Nodes from '$lib/backdrops/Nodes.svelte';
	import { consultants } from '$lib/_db';
</script>

<svelte:head>
	<title>nicode</title>
</svelte:head>

<Background bgvariation={new Date().getMinutes()} />
<Nodes />

<article class="page">
	<h1><span>Welcome to</span> <span>nicode</span></h1>
	<div>
		<p>
			<span>
				A tiny consultancy firm focused on people as much as code<span class="blnk">_</span>
			</span>
		</p>
		<ConsultantCta consultants={consultants.filter(({ visible }) => visible)} />
	</div>
</article>

<style>
	article {
		gap: var(--box-space);
		width: max-content;

		min-height: 60%;
		justify-content: center;
	}
	h1 {
		text-align: center;

		font-size: 4em;
	}
	h1 > span:first-of-type {
		font-weight: normal;
	}

	p {
		display: flex;
		align-items: center;
		font-size: 1.2em;
		padding: calc(var(--box-space) * 0.4);
		max-width: 23ch;
	}
	div {
		gap: 2rem;

		display: grid;
		grid-template-columns: 1fr 1fr;

		border-radius: 6px;
		overflow: hidden;
	}

	@media (max-width: 550px) {
		div {
			grid-template-columns: 1fr;
		}
		h1 {
			max-width: 8ch;
			line-height: 1.2;
		}
		p {
			padding: calc(var(--box-space) * 0.2);
			text-align: justify;
			letter-spacing: 1.4px;
		}
		article {
			align-items: center;
			font-size: 1.2em;
			margin: 0;
			padding: calc(var(--box-space) * 0.5);
		}
	}

	.blnk {
		animation: blink ease-in-out 0.66s infinite alternate;
	}
	@keyframes blink {
		0% {
			opacity: 0;
		}
		70% {
			opacity: 1;
		}
	}
</style>
