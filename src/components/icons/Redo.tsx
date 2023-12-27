import { FC } from 'react'

interface IRedo {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Redo: FC<IRedo> = ({
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
				d='M27 11.069H12.7C8.44741 11.069 5 14.6352 5 19.0345C5 23.4337 8.44741 27 12.7 27H21.8667M27 11.069L21.1333 5M27 11.069L21.1333 17.1379'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
