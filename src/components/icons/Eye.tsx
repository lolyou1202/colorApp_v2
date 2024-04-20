import { FC } from 'react'

interface Props {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Eye: FC<Props> = ({
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
				d='M3.24124 12.6113C3.11674 12.4265 3.05448 12.334 3.01963 12.1915C2.99346 12.0844 2.99346 11.9156 3.01963 11.8085C3.05448 11.666 3.11674 11.5735 3.24124 11.3887C4.27015 9.86129 7.33276 6 12 6C16.6672 6 19.7299 9.86129 20.7588 11.3887C20.8833 11.5735 20.9455 11.666 20.9804 11.8085C21.0065 11.9156 21.0065 12.0844 20.9804 12.1915C20.9455 12.334 20.8833 12.4265 20.7588 12.6113C19.7299 14.1387 16.6672 18 12 18C7.33276 18 4.27015 14.1387 3.24124 12.6113Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 14.5714C13.5148 14.5714 14.7427 13.4202 14.7427 12C14.7427 10.5798 13.5148 9.42857 12 9.42857C10.4852 9.42857 9.25726 10.5798 9.25726 12C9.25726 13.4202 10.4852 14.5714 12 14.5714Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
