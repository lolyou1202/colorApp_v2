import { FC, useState, MouseEvent } from 'react'
import { QuickViewModal } from './QuickViewModal'
import { IColorVariant } from '../../../types'
import { ColorQuickViewPopover } from '../Popover/ColorQuickPopover'

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
			morePopoverMenu={
				<ColorQuickViewPopover
					color={color}
					anchorMorePopover={anchorMorePopover}
					handleClosePopover={handlePopoverClose}
				/>
			}
			//morePopoverMenu={}
		/>
	)
}
