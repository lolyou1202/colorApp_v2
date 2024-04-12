import './Export.style.scss'
import { FC, ReactNode } from 'react'
import { CustomModal } from '../Modal/CustomModal'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { ExportListType } from '../../../types'

const brightness = 'light'

interface Props {
	name: string
	isOpenModal: boolean
	handleCloseModal: () => void
	exportList: ExportListType[]
	children?: ReactNode
}

export const Export: FC<Props> = ({
	name,
	isOpenModal,
	handleCloseModal,
	exportList,
	children,
}) => {
	return (
		<CustomModal
			name={name}
			isOpenModal={isOpenModal}
			handleCloseModal={handleCloseModal}
		>
			<div className='export__grid'>
				{exportList.map(exportItem => {
					const { icon, name, onClick } = exportItem
					return (
						<DefaultHoveredButton
							key={name}
							className='export__grid-cell'
							brightness={brightness}
							onClick={onClick}
						>
							<div className='export__grid-cell-ico'>{icon}</div>
							<p className='export__grid-cell-text'>{name}</p>
						</DefaultHoveredButton>
					)
				})}
			</div>
			{children}
		</CustomModal>
	)
}
