import './ColorCard.style.scss'
import { FC, useState, MouseEvent } from 'react'
import { useContrast } from '../../../hooks/useContrast'
import { PaletteStripeColor } from '../PaletteStripe/PaletteStripeColor'
import { Bage } from '../Bage/Bage'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { MoreHorizontal } from '../../icons/MoreHorizontal'
import { Eye } from '../../icons/Eye'
import { ColorCardMorePopover } from '../../basic/Popover/ColorCardMorePopover'
import { colorTokens } from '../../../constants/colorTokens'
import { QuickViewColorModal } from '../../basic/QuickView/QuickViewColorModal'

interface Props {
	color: string
	name: string
	similar: number
}

export const ColorCard: FC<Props> = ({ color, name, similar }) => {
	const [isOpenModal, setOpenModal] = useState(false)
	const [anchorMorePopover, setAnchorMorePopover] =
		useState<HTMLElement | null>(null)

	const handleOpenModal = () => setOpenModal(true)
	const handleCloseModal = () => setOpenModal(false)

	const handleClickPopover = (event: MouseEvent<HTMLElement>) => {
		setAnchorMorePopover(event.currentTarget)
	}
	const handleClosePopover = () => {
		setAnchorMorePopover(null)
	}

	const contarstColorVariant = useContrast(color)

	const contrastColorInfo = colorTokens.primaryDark
	const brightnessInfo = 'light'

	return (
		<div className='colorCard'>
			<PaletteStripeColor
				color={color}
				variant={contarstColorVariant}
				classNameWrapper='colorCard__board'
			>
				<Bage
					text={`${similar}% similar`}
					brightness={contarstColorVariant.brightness}
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
					<>
						<DefaultHoveredButton
							brightness={brightnessInfo}
							onClick={handleOpenModal}
						>
							<Eye stroke={contrastColorInfo} />
						</DefaultHoveredButton>
						<QuickViewColorModal
							color={color}
							variant={contarstColorVariant}
							isOpenModal={isOpenModal}
							handleCloseModal={handleCloseModal}
						/>
					</>
					<>
						<DefaultHoveredButton
							brightness={brightnessInfo}
							onClick={handleClickPopover}
						>
							<MoreHorizontal stroke={contrastColorInfo} />
						</DefaultHoveredButton>
						<ColorCardMorePopover
							color={color}
							anchorMorePopover={anchorMorePopover}
							handleClosePopover={handleClosePopover}
						/>
					</>
				</div>
			</div>
		</div>
	)
}
