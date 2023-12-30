import { FC } from 'react'

interface ILockClose {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const LockClose: FC<ILockClose> = ({
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
				d='M10 15V10.5556C10 9.08213 10.6321 7.66905 11.7574 6.62718C12.8826 5.58532 14.4087 5 16 5C17.5913 5 19.1174 5.58532 20.2426 6.62718C21.3679 7.66905 22 9.08213 22 10.5556V15M8.22222 15H23.7778C25.0051 15 26 15.9768 26 17.1818V24.8182C26 26.0232 25.0051 27 23.7778 27H8.22222C6.99492 27 6 26.0232 6 24.8182V17.1818C6 15.9768 6.99492 15 8.22222 15Z'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
