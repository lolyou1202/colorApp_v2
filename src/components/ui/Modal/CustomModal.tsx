import './CustomModal.style.scss'
import { FC, ReactNode, MouseEvent } from 'react'
import { colorTokens } from '../../../constants/colorTokens'
import { Divider, Fade, Modal } from '@mui/material'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { MoreHorizontal } from '../../icons/MoreHorizontal'
import { Cross } from '../../icons/Cross'

const primaryDark = colorTokens.primaryDark
const primaryDarkTransparent50 = colorTokens.primaryDarkTransparent50
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
			onClose={(_, reason) => {
				reason === 'escapeKeyDown' && handleCloseModal()
			}}
			componentsProps={{
				backdrop: {
					style: {
						backgroundColor: primaryDarkTransparent50,
					},
				},
			}}
		>
			<Fade in={isOpenModal}>
				<div>
					<BorderedLayout className='customModal'>
						<div className='customModal__header'>
							{morePopoverMenu && (
								<>
									<DefaultHoveredButton
										className='customModal__header-more'
										brightness={brightness}
										onClick={handleClickPopover}
									>
										<MoreHorizontal stroke={primaryDark} />
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
								<Cross stroke={primaryDark} />
							</DefaultHoveredButton>
						</div>
						<Divider
							orientation='horizontal'
							variant='fullWidth'
							sx={{
								borderWidth: '1px',
								borderColor: primaryDark,
							}}
							flexItem
						/>
						<div className='customModal__main'>{children}</div>
					</BorderedLayout>
				</div>
			</Fade>
		</Modal>
	)
}
