<script lang="ts">
	export let consultant: ConsultantType;
</script>

<div>
	<img src={consultant.headshot} alt="consultant {consultant.name}" width="500px" height="500px" />
</div>

<svg width="0" height="0">
	<filter id="f">
		<feColorMatrix
			type="matrix"
			result="r_"
			values="4 0 0 0 0
              0 0 0 0 0 
              0 0 0 0 0 
              0 0 0 1 0"
		/>
		<feOffset in="r_" dx="1" dy="1" result="red" />
		<feColorMatrix
			type="matrix"
			in="SourceGraphic"
			result="b_"
			values="1 0 0 0 0
              0 3 0 0 0 
              0 0 2 0 0 
              0 0 0 1 0"
		/>
		<feOffset in="b_" dx="-1" dy="-0" result="blue" />
		<feBlend mode="screen" in="red" in2="blue" result="res_" />
		<feFlood height="1" width="1" />
		<feComposite width="2" height="2" />
		<feTile result="a_" />
		<feComposite in="res_" in2="a_" operator="in" />
		<feMorphology operator="dilate" radius="0.3" />
	</filter>
</svg>

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

		width: clamp(180px, 70%, 310px);
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
		filter: url(#f);
	}

	/* div::after,
	div::before {
		content: '';
		position: absolute;

		border: var(--b-thickness) solid var(--color-interact);
		border-radius: var(--b-radius);

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		width: 90%;
		height: 90%;

		transition: transform 1.2s 1s ease-in-out, width 1.3s 0.5s ease-out, height 1.3s 0.5s ease-out;

		margin: auto;
		transform: rotate(0);

		pointer-events: none;
	} */
</style>
