import './FullScreen.style.scss'
import { useCallback, useEffect } from 'react'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import { Fade, Modal } from '@mui/material'
import { closeScreenMode } from '../../../redux/slices/screenModeSlice'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { useContrast } from '../../../hooks/useContrast'
import { Cross } from '../../icons/Cross'

export const FullScreen = () => {
	const { open, content } = useAppSelector(
		state => state.screenModeReducer.screenModeState
	)

	const dispatch = useAppDispatch()

	const handleClose = () => {
		dispatch(closeScreenMode())
	}

	const escClickHandler = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			handleClose()
		}
	}, [])

	useEffect(() => {
		document.addEventListener('keydown', escClickHandler, false)

		return () => {
			document.removeEventListener('keydown', escClickHandler, false)
		}
	}, [escClickHandler])

	const { brightness, contrastColor } = useContrast(
		content[content.length - 1]
	)

	return (
		<Modal open={open} onClose={handleClose}>
			<Fade in={open}>
				<div className='fullScreen-wrapper'>
					{content.map(item => (
						<div
							key={item}
							className='fullScreen-item'
							style={{ backgroundColor: item }}
						/>
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
