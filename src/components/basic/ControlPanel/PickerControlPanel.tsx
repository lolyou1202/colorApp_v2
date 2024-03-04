import './ControlPanel.style.scss'
import chroma from 'chroma-js'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../../ui/DefaultHoveredButton/DefaultHoveredButton'
import { Undo } from '../../icons/Undo'
import { Redo } from '../../icons/Redo'
import { Share } from '../../icons/Share'
import { Box } from '../../icons/Box'
import { setPositionStack, setColor } from '../../../redux/slices/pickerSlice'
import { Divider } from '@mui/material'
import { colorTokens } from '../../../constants/colorTokens'

export const PickerControlPanel = () => {
	const stackOfStates = useAppSelector(
		state => state.pickerReducer.stackOfStates
	)

	const dispatch = useAppDispatch()

	const undoCkickHandler = () => {
		dispatch(setPositionStack({ type: 'undo' }))
	}
	const redoCkickHandler = () => {
		dispatch(setPositionStack({ type: 'redo' }))
	}
	const generateCkickHandler = () => {
		dispatch(setColor({ newColor: chroma.random().hex().toUpperCase() }))
	}

	const primaryDark = colorTokens.primaryDark
	const primaryDarkTransparent50 = colorTokens.primaryDarkTransparent50
	const brightness = 'light'

	return (
		<BorderedLayout className='controlPanel'>
			<DefaultHoveredButton
				className='controlPanel__option undo'
				brightness={brightness}
				disabled={stackOfStates.position === 0}
				onClick={undoCkickHandler}
			>
				<Undo
					stroke={
						stackOfStates.position === 0
							? primaryDarkTransparent50
							: primaryDark
					}
				/>
			</DefaultHoveredButton>
			<DefaultHoveredButton
				className='controlPanel__option redo'
				brightness={brightness}
				disabled={
					stackOfStates.position === stackOfStates.stack.length - 1
				}
				onClick={redoCkickHandler}
			>
				<Redo
					stroke={
						stackOfStates.position ===
						stackOfStates.stack.length - 1
							? primaryDarkTransparent50
							: primaryDark
					}
				/>
			</DefaultHoveredButton>
			<Divider
				orientation='vertical'
				variant='fullWidth'
				sx={{
					borderWidth: '1px',
					borderColor: 'var(--primary-dark)',
					borderRadius: 'var(--borderRadius-short)',
				}}
				flexItem
			/>
			<DefaultHoveredButton
				className='controlPanel__option generate'
				brightness={brightness}
				onClick={generateCkickHandler}
			>
				<Box stroke={primaryDark} />
				<p
					className='controlPanel__option-name'
					style={{ color: primaryDark }}
				>
					Generate
				</p>
			</DefaultHoveredButton>
			<Divider
				orientation='vertical'
				variant='fullWidth'
				sx={{
					borderWidth: '1px',
					borderColor: 'var(--primary-dark)',
					borderRadius: 'var(--borderRadius-short)',
				}}
				flexItem
			/>
			<DefaultHoveredButton
				className='controlPanel__option share'
				brightness={brightness}
			>
				<Share stroke={primaryDark} />
				<p
					className='controlPanel__option-name'
					style={{ color: primaryDark }}
				>
					Export
				</p>
			</DefaultHoveredButton>
		</BorderedLayout>
	)
}
