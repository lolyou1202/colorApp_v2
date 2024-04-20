import { FC } from 'react'

interface Props {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Css: FC<Props> = ({
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
				d='M8.25 6.75H15.75L9.75 10.35H15V13.95L12.9 15.462C12.6404 15.6489 12.3246 15.75 12 15.75C11.6754 15.75 11.3596 15.6489 11.1 15.462L9 13.95M19.3057 15.1781C19.1767 15.8626 18.8005 16.4786 18.246 16.9132L13.845 20.3662C13.3217 20.7765 12.6716 21 12.0016 21C11.3316 21 10.6815 20.7765 10.1583 20.3662L5.75576 16.9132C5.20093 16.4782 4.8247 15.8617 4.69609 15.1766L3.04903 6.4197C2.97043 6.00213 2.98649 5.57272 3.09608 5.16192C3.20566 4.75112 3.40608 4.36899 3.68312 4.04264C3.96017 3.71629 4.30705 3.45371 4.69916 3.27352C5.09127 3.09334 5.51901 2.99995 5.95205 3H18.0482C18.4811 2.99999 18.9087 3.09335 19.3007 3.27345C19.6927 3.45356 20.0395 3.716 20.3165 4.04218C20.5935 4.36836 20.794 4.75029 20.9037 5.16091C21.0134 5.57153 21.0296 6.00079 20.9512 6.41825L19.3057 15.1781Z'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
