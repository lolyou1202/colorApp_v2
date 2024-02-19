import { FC } from 'react'

interface IUndo {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Undo: FC<IUndo> = ({
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
				d='M4.5 4.5V9.75H9.75'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.161 19.5C13.5058 19.5008 14.825 19.1235 15.9743 18.4093C17.1236 17.6952 18.0588 16.6717 18.6776 15.4507C19.2963 14.2297 19.5749 12.8583 19.4828 11.4863C19.3907 10.1144 18.9314 8.79473 18.1553 7.67167C17.3791 6.54861 16.316 5.66537 15.082 5.11851C13.848 4.57166 12.4908 4.38224 11.1586 4.57097C9.82649 4.7597 8.57073 5.31931 7.52865 6.18862C6.48657 7.05793 5.69829 8.20347 5.25 9.5'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
