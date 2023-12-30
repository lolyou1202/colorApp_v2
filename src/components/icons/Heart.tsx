import { FC } from 'react'

interface IHeart {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Heart: FC<IHeart> = ({
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
				d='M26.1494 6.94496C24.9765 5.71174 23.3421 5 21.6831 5C20.024 5 18.3896 5.71174 17.2167 6.94496L15.9997 8.22404L14.7826 6.94496C13.5981 5.70004 11.9915 5.00065 10.3163 5.00065C8.64114 5.00065 7.03455 5.70004 5.85001 6.94496C4.66547 8.18988 4 9.87836 4 11.6389C4 14.1904 5.42904 15.8905 7.06705 17.612L15.9997 27L24.9323 17.612C26.581 15.8793 28 14.1502 28 11.6389C28 9.89533 27.3228 8.1776 26.1494 6.94496Z'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
