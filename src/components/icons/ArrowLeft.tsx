import { FC } from 'react'

interface IArrowLeft {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const ArrowLeft: FC<IArrowLeft> = ({
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
				d='M27 16H5M5 16L12.3333 9M5 16L12.3333 23'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
