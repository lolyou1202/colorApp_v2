import './ColorCard.style.scss'
import { FC, useState, MouseEvent } from 'react'
import { colorTokens } from '../../../constants/colorTokens'
import { useContrast } from '../../../hooks/useContrast'
import { PaletteStripeColor } from '../PaletteStripe/PaletteStripeColor'
import { QuickViewColorModal } from '../QuickView/QuickViewColorModal'
import { Bage } from '../Bage/Bage'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { MoreHorizontal } from '../../icons/MoreHorizontal'
import { Eye } from '../../icons/Eye'
import { ColorCardMorePopover } from '../MenuPopover/ColorCardMorePopover'
import { ExportColor } from '../Export/ExportColor'

const contrastColorInfo = colorTokens.primaryDark
const brightnessInfo = 'light'

interface Props {
	color: string
	name: string
	similar: number
}

export const ColorCard: FC<Props> = ({ color, name, similar }) => {
	const [isOpenQuickViewModal, setOpenQuickViewModal] = useState(false)
	const [isOpenExportModal, setOpenExportModal] = useState(false)
	const [anchorMorePopover, setAnchorMorePopover] =
		useState<HTMLElement | null>(null)

	const handleOpenQuickViewModal = () => setOpenQuickViewModal(true)
	const handleCloseQuickViewModal = () => setOpenQuickViewModal(false)
	const handleOpenExportModal = () => setOpenExportModal(true)
	const handleCloseExportModal = () => setOpenExportModal(false)
	const handleClickPopover = (event: MouseEvent<HTMLElement>) => {
		setAnchorMorePopover(event.currentTarget)
	}
	const handleClosePopover = () => {
		setAnchorMorePopover(null)
	}

	const contarstColorVariant = useContrast(color)

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
					<DefaultHoveredButton
						brightness={brightnessInfo}
						onClick={handleOpenQuickViewModal}
					>
						<Eye stroke={contrastColorInfo} />
					</DefaultHoveredButton>
					<DefaultHoveredButton
						brightness={brightnessInfo}
						onClick={handleClickPopover}
					>
						<MoreHorizontal stroke={contrastColorInfo} />
					</DefaultHoveredButton>
				</div>
			</div>
			<>
				<QuickViewColorModal
					color={color}
					variant={contarstColorVariant}
					isOpenModal={isOpenQuickViewModal}
					handleCloseModal={handleCloseQuickViewModal}
				/>
				<ColorCardMorePopover
					color={color}
					anchorMorePopover={anchorMorePopover}
					handleClosePopover={handleClosePopover}
					handleOpenQuickViewModal={handleOpenQuickViewModal}
					handleOpenExportModal={handleOpenExportModal}
				/>
				<ExportColor
					color={color}
					isOpenModal={isOpenExportModal}
					handleCloseModal={handleCloseExportModal}
				/>
			</>
		</div>
	)
}
