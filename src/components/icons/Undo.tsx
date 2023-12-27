import { FC } from 'react'

interface IUndo {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Undo: FC<IUndo> = ({
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
				d='M5 11.069H19.3C23.5526 11.069 27 14.6352 27 19.0345C27 23.4337 23.5526 27 19.3 27H10.1333M5 11.069L10.8667 5M5 11.069L10.8667 17.1379'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
