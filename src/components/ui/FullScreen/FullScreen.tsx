import './FullScreen.style.scss'
import { FC } from 'react'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import { Modal } from '@mui/material'
import { closeScreenMode } from '../../../redux/slices/screenModeSlice'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { useContrast } from '../../../hooks/useContrast'

interface Props {}

export const FullScreen: FC<Props> = () => {
	const { open, content } = useAppSelector(
		state => state.screenModeReducer.screenModeState
	)

	const dispatch = useAppDispatch()

	const handleClose = () => {
		dispatch(closeScreenMode())
	}
	const { brightness } = useContrast(content[content.length - 1])

	return (
		<Modal open={open} onClose={handleClose}>
			<div className='fullScreen-wrapper'>
				{content.map(item => (
					<div
						className='fullScreen-item'
						style={{ backgroundColor: item }}
					/>
				))}
				<DefaultHoveredButton
					className='fullScreen-button'
					brightness={brightness}
					onClick={handleClose}
				>
					X
				</DefaultHoveredButton>
			</div>
		</Modal>
	)
}
