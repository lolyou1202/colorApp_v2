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
				d='M3.9975 7.44483L12 11.9722L20.0025 7.44483M12 21V11.9632M20.25 15.5492V8.3772C20.2497 8.06277 20.1648 7.75395 20.0039 7.48173C19.843 7.20951 19.6118 6.98346 19.3333 6.82624L12.9167 3.24022C12.638 3.08285 12.3218 3 12 3C11.6782 3 11.362 3.08285 11.0833 3.24022L4.66667 6.82624C4.38824 6.98346 4.15698 7.20951 3.99609 7.48173C3.8352 7.75395 3.75033 8.06277 3.75 8.3772V15.5492C3.75033 15.8637 3.8352 16.1725 3.99609 16.4447C4.15698 16.7169 4.38824 16.943 4.66667 17.1002L11.0833 20.6862C11.362 20.8436 11.6782 20.9264 12 20.9264C12.3218 20.9264 12.638 20.8436 12.9167 20.6862L19.3333 17.1002C19.6118 16.943 19.843 16.7169 20.0039 16.4447C20.1648 16.1725 20.2497 15.8637 20.25 15.5492Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
