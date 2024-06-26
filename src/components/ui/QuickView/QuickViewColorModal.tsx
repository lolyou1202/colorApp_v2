import { FC, useState, MouseEvent } from 'react'
import { QuickViewModal } from './QuickViewModal'
import { IColorVariant } from '../../../types/types'
import { ColorQuickViewPopover } from '../MenuPopover/ColorQuickViewPopover'

interface Props {
	color: string
	variant: IColorVariant
	isOpenModal: boolean
	handleCloseModal: () => void
}

export const QuickViewColorModal: FC<Props> = ({
	color,
	variant,
	isOpenModal,
	handleCloseModal,
}) => {
	const [anchorMorePopover, setAnchorMorePopover] =
		useState<HTMLElement | null>(null)

	const handleClickPopover = (event: MouseEvent<HTMLElement>) => {
		setAnchorMorePopover(event.currentTarget)
	}
	const handlePopoverClose = () => {
		setAnchorMorePopover(null)
	}

	return (
		<QuickViewModal
			name='Quick view'
			color={color}
			variant={variant}
			isOpenModal={isOpenModal}
			handleCloseModal={handleCloseModal}
			handleClickPopover={handleClickPopover}
			morePopoverMenu={
				<ColorQuickViewPopover
					color={color}
					anchorMorePopover={anchorMorePopover}
					handleClosePopover={handlePopoverClose}
				/>
			}
		/>
	)
}
