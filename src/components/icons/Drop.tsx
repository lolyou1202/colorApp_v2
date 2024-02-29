export const Drop = ({
	className,
	size = 24,
	stroke,
	strokeWidth = 2,
	fill = 'none',
}: {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}) => {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M15.8571 14.0037C15.8571 16.2117 14.1302 18.0016 12 18.0016M18.75 13.7392C18.75 10.8945 15.3532 6.1834 13.3789 3.68542C12.6566 2.77153 11.3434 2.77153 10.6211 3.68542C8.6468 6.1834 5.25 10.8945 5.25 13.7392C5.25 17.7492 8.27208 21 12 21C15.7279 21 18.75 17.7492 18.75 13.7392Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
