import { FC } from 'react'

interface Props {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Check: FC<Props> = ({
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
				d='M20.25 7.5L10.7125 16.5L5.25 11.3454'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
