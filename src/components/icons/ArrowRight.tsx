import { FC } from 'react'

interface IArrowRight {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const ArrowRight: FC<IArrowRight> = ({
	className,
	size = 32,
	stroke,
	strokeWidth,
	fill = 'none',
}) => {
	return (
		<svg
			className={className}
			width={`${size}`}
			height={`${size}`}
			viewBox='0 0 32 32'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M5 16L27 16M27 16L19.6667 23M27 16L19.6667 9'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
