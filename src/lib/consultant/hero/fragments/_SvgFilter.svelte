<svg width="0" height="0" style="position: absolute;" aria-hidden="true">
	<defs>
		<filter id="ca">
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
			<feOffset in="b_" dx="-3" dy="-1" result="blue" />
			<feBlend mode="screen" in="red" in2="blue" result="res_" />
		</filter>
		<filter id="pxl">
			<feFlood height="1" width="1" />
			<feComposite width="2" height="2" />
			<feTile result="a_" />
			<feComposite in="SourceGraphic" in2="a_" operator="in" />
			<feMorphology operator="dilate" radius="1" />
		</filter>
	</defs>
</svg>
