import './ColorCard.style.scss'
import { FC } from 'react'
import { useContrast } from '../../../hooks/useContrast'
import { Bage } from '../Bage/Bage'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { MoreHorizontal } from '../../icons/MoreHorizontal'
import { PaletteStripeColor } from '../PaletteStripe/PaletteStripeColor'

interface Props {
	color: string
	name: string
	similar: string
}

export const ColorCard: FC<Props> = ({ color, name, similar }) => {
	const variant = useContrast(color)
	const {
		brightness: brightnessInfo,
		contrastColor: contrastColorInfo,
	}: {
		brightness: 'light' | 'dark'
		contrastColor: string
	} = {
		brightness: 'light',
		contrastColor: '#353535',
	}

	return (
		<div className='colorCard'>
			<PaletteStripeColor
				color={color}
				variant={variant}
				classNameWrapper='colorCard__board'
			>
				<Bage
					text={similar}
					brightness={variant.brightness}
					classNameBage='colorCard__board-bage'
					classNameText='colorCard__board-bage-text'
				/>
			</PaletteStripeColor>
			<div className='colorCard__info'>
				<p
					className='colorCard__info-name'
					style={{ color: contrastColorInfo }}
				>
					{name}
				</p>
				<div className='colorCard__info-buttons'>
					<DefaultHoveredButton brightness={brightnessInfo}>
						<MoreHorizontal stroke={contrastColorInfo} />
					</DefaultHoveredButton>
					<DefaultHoveredButton brightness={brightnessInfo}>
						<MoreHorizontal stroke={contrastColorInfo} />
					</DefaultHoveredButton>
				</div>
			</div>
		</div>
	)
}