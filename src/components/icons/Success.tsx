import { FC } from 'react'

interface ISuccess {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Success: FC<ISuccess> = ({
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
				d='M21 13L14.6416 19L11 15.5636'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx='16'
				cy='16'
				r='11.5'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
			/>
		</svg>
	)
}
