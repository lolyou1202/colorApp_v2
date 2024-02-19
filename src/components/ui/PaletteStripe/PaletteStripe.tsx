import './PaletteStripe.style.scss'
import { FC } from 'react'
import { PaletteStripeColor } from './PaletteStripeColor'
import { useContrast } from '../../../hooks/useContrast'
import classNames from 'classnames'

interface Props {
	curentColor: string
	listColors: string[]
	howerWidth?: string
	className?: string
}

export const PaletteStripe: FC<Props> = ({
	curentColor,
	listColors,
	howerWidth = '80px',
	className,
}) => {
	const paletteStripeClassNames = classNames({
		paletteStripe: true,
		[className || '']: true,
	})
	return (
		<div className={paletteStripeClassNames}>
			{listColors.map((color, index) => (
				<PaletteStripeColor
					key={index}
					isCurrentColor={color === curentColor}
					color={color}
					variant={useContrast(color)}
					howerWidth={howerWidth}
				/>
			))}
		</div>
	)
}
