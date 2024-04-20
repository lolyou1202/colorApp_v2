export const Cross = ({
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
				d='M6 18L12 12M12 12L18 6M12 12L18 18M12 12L6 6'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}