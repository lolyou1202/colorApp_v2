import { FC } from "react"

interface IHash {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Hash: FC<IHash> = ({
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
				d='M5 12.3333H27M5 19.6667H27M13.25 5L10.5 27M21.5 5L18.75 27'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
