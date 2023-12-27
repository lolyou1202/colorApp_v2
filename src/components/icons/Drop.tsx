import { FC } from 'react'

interface IDrop {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Drop: FC<IDrop> = ({
	className,
	size = 40,
	stroke,
	strokeWidth,
	fill = 'none',
}) => {
	return (
		<svg
			className={className}
			width={`${size}`}
			height={`${size}`}
			viewBox='0 0 40 40'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M26.6667 23.3333C26.6667 27.0152 23.6819 30 20 30M31.6667 22.8922C31.6667 18.1485 25.7957 10.2924 22.3833 6.12692C21.1349 4.60295 18.8652 4.60295 17.6168 6.12692C14.2044 10.2924 8.33337 18.1485 8.33337 22.8922C8.33337 29.5791 13.5567 35 20 35C26.4434 35 31.6667 29.5791 31.6667 22.8922Z'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
			/>
		</svg>
	)
}
