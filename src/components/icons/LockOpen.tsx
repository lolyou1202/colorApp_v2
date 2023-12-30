import { FC } from 'react'

interface ILockOpen {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const LockOpen: FC<ILockOpen> = ({
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
				d='M10 15V10.558C9.99849 9.18109 10.5555 7.85274 11.5629 6.83087C12.5703 5.809 13.9562 5.16651 15.4515 5.02812C16.9469 4.88974 18.445 5.26534 19.6551 6.08201C20.8652 6.89867 21.7009 8.09814 22 9.44755M8.22222 15H23.7778C25.0051 15 26 15.9768 26 17.1818V24.8182C26 26.0232 25.0051 27 23.7778 27H8.22222C6.99492 27 6 26.0232 6 24.8182V17.1818C6 15.9768 6.99492 15 8.22222 15Z'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
