import './ColorCard.style.scss'
import { FC, useState, MouseEvent } from 'react'
import { useContrast } from '../../../hooks/useContrast'
import { PaletteStripeColor } from '../PaletteStripe/PaletteStripeColor'
import { Bage } from '../Bage/Bage'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { MoreHorizontal } from '../../icons/MoreHorizontal'
import { Eye } from '../../icons/Eye'
import { ColorCardPopover } from '../../basic/Popover/ColorCardPopover/ColorCardPopover'

interface Props {
	color: string
	name: string
	similar: number
}

export const ColorCard: FC<Props> = ({ color, name, similar }) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

	const handlePopoverClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handlePopoverClose = () => {
		setAnchorEl(null)
	}

	const { brightness, contrastColor } = useContrast(color)

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
				variant={{ brightness, contrastColor }}
				classNameWrapper='colorCard__board'
			>
				<Bage
					text={`${similar}% similar`}
					brightness={brightness}
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
						<Eye stroke={contrastColorInfo} />
					</DefaultHoveredButton>
					<>
						<DefaultHoveredButton
							brightness={brightnessInfo}
							onClick={handlePopoverClick}
						>
							<MoreHorizontal stroke={contrastColorInfo} />
						</DefaultHoveredButton>
						<ColorCardPopover
							color={color}
							anchorEl={anchorEl}
							handlePopoverClose={handlePopoverClose}
						/>
					</>
				</div>
			</div>
		</div>
	)
}
