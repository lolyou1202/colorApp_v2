import { FC } from 'react'

interface IImport {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Import: FC<IImport> = ({
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
				d='M7.4444 13.1481V8.25926C7.4444 6.45922 8.90362 5 10.7037 5H23.7407C25.5408 5 27 6.45922 27 8.25926V21.2963C27 23.0963 25.5408 24.5556 23.7407 24.5556H18.8518M5 27L13.1482 18.8519M13.1482 18.8519H6.62963M13.1482 18.8519L13.1481 25.3704'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
