import './QuickViewModal.style.scss'
import { FC, ReactNode, MouseEvent } from 'react'
import { IColorVariant } from '../../../types/types'
import { useColorModels } from '../../../hooks/useColorModels'
import { CustomModal } from '../Modal/CustomModal'
import { QuickViewSingleColorModel } from './QuickViewSingleColorModel'

interface Props {
	color: string
	variant: IColorVariant
	name: string
	isOpenModal: boolean
	handleCloseModal: () => void
	morePopoverMenu: ReactNode
	handleClickPopover: (event: MouseEvent<HTMLElement>) => void
}

export const QuickViewModal: FC<Props> = ({
	color,
	variant,
	name,
	isOpenModal,
	handleCloseModal,
	morePopoverMenu,
	handleClickPopover,
}) => {
	const colorModels = useColorModels(color)

	return (
		<CustomModal
			name={name}
			isOpenModal={isOpenModal}
			handleCloseModal={handleCloseModal}
			handleClickPopover={handleClickPopover}
			morePopoverMenu={morePopoverMenu}
		>
			<div
				className='quickView__colorModels'
				style={{ backgroundColor: color }}
			>
				{Object.entries(colorModels).map(colorModel => (
					<QuickViewSingleColorModel
						key={colorModel[0]}
						colorModel={colorModel}
						variant={variant}
					/>
				))}
			</div>
		</CustomModal>
	)
}
