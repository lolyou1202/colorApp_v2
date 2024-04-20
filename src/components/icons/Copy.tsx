import { FC } from 'react'

interface Props {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Copy: FC<Props> = ({
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
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M6.225 14.475H5.4C4.96239 14.475 4.54271 14.3012 4.23327 13.9917C3.92384 13.6823 3.75 13.2626 3.75 12.825V5.4C3.75 4.96239 3.92384 4.54271 4.23327 4.23327C4.54271 3.92384 4.96239 3.75 5.4 3.75H12.825C13.2626 3.75 13.6823 3.92384 13.9917 4.23327C14.3012 4.54271 14.475 4.96239 14.475 5.4V6.225M11.175 9.525H18.6C19.5113 9.525 20.25 10.2637 20.25 11.175V18.6C20.25 19.5113 19.5113 20.25 18.6 20.25H11.175C10.2637 20.25 9.525 19.5113 9.525 18.6V11.175C9.525 10.2637 10.2637 9.525 11.175 9.525Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
