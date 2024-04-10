import './FullScreen.style.scss'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import { useContrast } from '../../../hooks/useContrast'
import { closeScreenMode } from '../../../redux/slices/screenModeSlice'
import { Fade, Modal, Slide } from '@mui/material'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { Cross } from '../../icons/Cross'

export const FullScreen = () => {
	const { isOpen, content } = useAppSelector(
		state => state.screenModeReducer.screenModeState
	)

	const dispatch = useAppDispatch()

	const handleClose = () => {
		dispatch(closeScreenMode())
	}

	const { brightness, contrastColor } = useContrast(
		content[content.length - 1]
	)

	return (
		<Modal open={isOpen} onClose={handleClose} closeAfterTransition>
			<Fade in={isOpen}>
				<div className='fullScreen-wrapper'>
					{content.map((color, index) => (
						<Slide key={index} in={isOpen} direction='up'>
							<div
								className='fullScreen-item'
								style={{ backgroundColor: color }}
							/>
						</Slide>
					))}
					<DefaultHoveredButton
						className='fullScreen-button'
						brightness={brightness}
						onClick={handleClose}
					>
						<Cross stroke={contrastColor} />
					</DefaultHoveredButton>
				</div>
			</Fade>
		</Modal>
	)
}
