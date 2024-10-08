/* eslint-disable react/display-name */
import React, { memo } from 'react';

const Tent = ({ width = 50, height = 50, color = '#4CAF50' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 100 100"
		width={width}
		height={height}
	>
		<path
			d="M10,90 L50,20 L90,90 Z"
			fill={color}
			stroke="#000"
			strokeWidth="2"
		/>
		<line x1="10" y1="90" x2="90" y2="90" stroke="#000" strokeWidth="2" />
	</svg>
);

export default memo(({ data }) => {
	return (
		<Tent width={50} height={50} color={data.color || '#4CAF50'} />
	);
});