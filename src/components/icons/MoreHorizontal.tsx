import { FC } from 'react'

interface Props {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const MoreHorizontal: FC<Props> = ({
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
				d='M5.25 12.75C5.66421 12.75 6 12.4142 6 12C6 11.5858 5.66421 11.25 5.25 11.25C4.83579 11.25 4.5 11.5858 4.5 12C4.5 12.4142 4.83579 12.75 5.25 12.75Z'
				fill={stroke}
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75Z'
				fill={stroke}
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M18.75 12.75C19.1642 12.75 19.5 12.4142 19.5 12C19.5 11.5858 19.1642 11.25 18.75 11.25C18.3358 11.25 18 11.5858 18 12C18 12.4142 18.3358 12.75 18.75 12.75Z'
				fill={stroke}
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
