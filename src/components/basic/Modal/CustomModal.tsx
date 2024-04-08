import './CustomModal.style.scss'
import { FC, ReactNode, MouseEvent } from 'react'
import { Modal } from '@mui/material'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../../ui/DefaultHoveredButton/DefaultHoveredButton'
import { MoreHorizontal } from '../../icons/MoreHorizontal'
import { Cross } from '../../icons/Cross'
import { colorTokens } from '../../../constants/colorTokens'

const contrastColor = colorTokens.primaryDark
const brightness = 'light'

interface Props {
	name: string
	isOpenModal: boolean
	handleCloseModal: () => void
	morePopoverMenu?: ReactNode
	handleClickPopover?: (event: MouseEvent<HTMLElement>) => void
	children?: ReactNode
}

export const CustomModal: FC<Props> = ({
	name,
	isOpenModal,
	handleCloseModal,
	morePopoverMenu,
	handleClickPopover,
	children,
}) => {
	return (
		<Modal
			open={isOpenModal}
			onClose={handleCloseModal}
			closeAfterTransition
		>
			<BorderedLayout className='customModal'>
				<div className='customModal__header'>
					{morePopoverMenu && (
						<>
							<DefaultHoveredButton
								className='customModal__header-more'
								brightness={brightness}
								onClick={handleClickPopover}
							>
								<MoreHorizontal stroke={contrastColor} />
							</DefaultHoveredButton>
							{morePopoverMenu}
						</>
					)}
					<p className='customModal__header-name'>{name}</p>
					<DefaultHoveredButton
						className='customModal__header-close'
						brightness={brightness}
						onClick={handleCloseModal}
					>
						<Cross stroke={contrastColor} />
					</DefaultHoveredButton>
				</div>
				<div className='customModal__main'>{children}</div>
			</BorderedLayout>
		</Modal>
	)
}
