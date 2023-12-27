import { FC } from "react"

interface ICopy {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Copy: FC<ICopy> = ({
	className,
	size = 32,
	stroke,
	strokeWidth,
	fill = "none",
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
				d='M8.3 19.3H7.2C6.61652 19.3 6.05695 19.0682 5.64436 18.6556C5.23178 18.2431 5 17.6835 5 17.1V7.2C5 6.61652 5.23178 6.05695 5.64436 5.64436C6.05695 5.23178 6.61652 5 7.2 5H17.1C17.6835 5 18.2431 5.23178 18.6556 5.64436C19.0682 6.05695 19.3 6.61652 19.3 7.2V8.3M14.9 12.7H24.8C26.015 12.7 27 13.685 27 14.9V24.8C27 26.015 26.015 27 24.8 27H14.9C13.685 27 12.7 26.015 12.7 24.8V14.9C12.7 13.685 13.685 12.7 14.9 12.7Z'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
