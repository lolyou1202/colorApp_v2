import { FC } from 'react'

interface IBox {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Box: FC<IBox> = ({
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
				d='M5.33 9.92644L16 15.9629L26.67 9.92644M16 28V15.951M27 20.7323V11.1696C26.9996 10.7504 26.8864 10.3386 26.6719 9.97564C26.4574 9.61268 26.149 9.31127 25.7778 9.10166L17.2222 4.32029C16.8506 4.11046 16.4291 4 16 4C15.5709 4 15.1494 4.11046 14.7778 4.32029L6.22222 9.10166C5.85099 9.31127 5.54264 9.61268 5.32812 9.97564C5.1136 10.3386 5.00044 10.7504 5 11.1696V20.7323C5.00044 21.1516 5.1136 21.5633 5.32812 21.9263C5.54264 22.2892 5.85099 22.5906 6.22222 22.8003L14.7778 27.5816C15.1494 27.7915 15.5709 27.9019 16 27.9019C16.4291 27.9019 16.8506 27.7915 17.2222 27.5816L25.7778 22.8003C26.149 22.5906 26.4574 22.2892 26.6719 21.9263C26.8864 21.5633 26.9996 21.1516 27 20.7323Z'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
