import { FC, ReactNode, MouseEvent } from 'react'
import { CustomModal } from '../Modal/CustomModal'
import { useColorModels } from '../../../hooks/useColorModels'
import { Check } from '../../icons/Check'
import { IColorVariant } from '../../../types'

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
			<ul className='quickView__colorModels'>
				{Object.entries(colorModels).map(colorModel => (
					<li className='quickView__colorModels-single'>
						<div className='quickView__colorModels-description'>
							<span className='quickView__colorModels-modelName'>
								{colorModel[0]}
							</span>
							<p className='quickView__colorModels-model'>
								{colorModel[1]}
							</p>
						</div>
						<div className='quickView__colorModels-copy'>
							<p style={{ color: variant.contrastColor }}>Copy</p>
							<Check
								className='quickView__colorModels-check'
								stroke={variant.contrastColor}
								size={24}
							/>
						</div>
					</li>
				))}
			</ul>
		</CustomModal>
	)
}
