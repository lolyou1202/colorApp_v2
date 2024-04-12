import { FC } from 'react'

interface Props {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Code: FC<Props> = ({
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
				d='M3.00012 6.75009H21.0001M9.75008 11.9998L7.50011 14.2498L9.75008 16.4997M14.25 11.9998L16.4999 14.2498L14.25 16.4997M19.6153 3H4.38473C3.62003 3 3.00012 3.61991 3.00012 4.3846V19.6152C3.00012 20.3798 3.62003 20.9998 4.38473 20.9998H19.6153C20.38 20.9998 20.9999 20.3798 20.9999 19.6152V4.3846C20.9999 3.61991 20.38 3 19.6153 3Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
