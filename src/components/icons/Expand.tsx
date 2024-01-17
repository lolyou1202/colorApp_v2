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
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M14 10L21 3M21 3H15M21 3V9M10 14L3 21M3 21H9M3 21L3 15'
				stroke={`#${stroke}`}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
