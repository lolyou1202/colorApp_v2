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
				d='M19.5 4.5V9.75H14.25'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M11.839 19.5C10.4942 19.5008 9.17497 19.1235 8.02566 18.4093C6.87636 17.6952 5.9412 16.6717 5.32244 15.4507C4.70367 14.2297 4.42511 12.8583 4.51723 11.4863C4.60934 10.1144 5.06857 8.79473 5.84471 7.67167C6.62085 6.54861 7.68403 5.66537 8.91799 5.11851C10.152 4.57166 11.5092 4.38224 12.8414 4.57097C14.1735 4.7597 15.4293 5.31931 16.4714 6.18862C17.5134 7.05793 18.3017 8.20347 18.75 9.5'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
