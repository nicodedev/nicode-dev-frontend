<script>
	export let consultant;

	$: intro = consultant.intro;
</script>

<p>
	{@html intro}
</p>

<style>
	p {
		font-size: 1.4em;
		max-width: 480px;
	}
	@media (max-width: 600px) {
		p {
			max-width: 300px;
		}
	}
	@media (max-width: 480px) {
		p {
			text-align: center;
		}
	}
</style>
