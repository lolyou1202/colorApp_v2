import './PaletteStripe.style.scss'
import classNames from 'classnames'
import { FC } from 'react'
import { PaletteStripeColor } from './PaletteStripeColor'
import { useContrast } from '../../../hooks/useContrast'

interface Props {
	listColors: {
		color: string
		current: boolean
	}[]
	className?: string
}

export const PaletteStripe: FC<Props> = ({
	listColors,
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
					isCurrentColor={color.current}
					color={color.color}
					variant={useContrast(color.color)}
				/>
			))}
		</div>
	)
}
