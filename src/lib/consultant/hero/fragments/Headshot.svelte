<script lang="ts">
	export let consultant: ConsultantType;
</script>

<div>
	<img src={consultant.headshot} alt="consultant {consultant.name}" width="500px" height="500px" />

	<svg width="0" height="0">
		<!-- channels -->
		<filter id="f">
			<feColorMatrix
				type="matrix"
				result="r_"
				values="4 0 0 0 0
								0 0 0 0 0 
								0 0 0 0 0 
								0 0 0 1 0"
			/>
			<feOffset in="r_" dx="0" dy="0" result="red" />
			<feColorMatrix
				type="matrix"
				in="SourceGraphic"
				result="b_"
				values="1 0 0 0 0
								0 3 0 0 0 
								0 0 3 0 0 
								0 0 0 1 0"
			/>
			<feOffset in="b_" dx="-2" dy="-1" result="blue" />
			<feBlend mode="screen" in="red" in2="blue" result="res_" />
			<!-- pixelate -->
			<feFlood height="1" width="1" />
			<feComposite width="2" height="2" />
			<feTile result="a_" />
			<feComposite in="res_" in2="a_" operator="in" />
			<feMorphology operator="dilate" radius="1" />
		</filter>
	</svg>
</div>

<style>
	@keyframes fadeInAlt {
		to {
			color: var(--color-content);
		}
	}
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		width: clamp(180px, 70%, 320px);
	}
	img {
		border-radius: var(--b-radius);

		width: 100%;
		object-fit: contain;
		height: min-content;

		display: flex;
		justify-content: center;
		align-items: center;

		/* hack to hide alt text if load fail (aviid layout shift uglyness) */
		color: rgba(0, 0, 0, 0);
		animation: fadeInAlt 0.2s 0.3s ease-in-out forwards;

		/* filter: url(#f); */
		filter: opacity(0.8);
	}
</style>
