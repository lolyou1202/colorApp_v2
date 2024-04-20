import { FC } from 'react'

interface Props {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Expand: FC<Props> = ({
	className,
	size = 24,
	stroke,
	strokeWidth = 2,
	fill = 'none',
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
				d='M14 10L20 4M20 4H14M20 4V10M10 14L4 20M4 20H10M4 20L4 14'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
