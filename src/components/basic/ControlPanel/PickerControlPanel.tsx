import './ControlPanel.style.scss'
import chroma from 'chroma-js'
import { memo, useState } from 'react'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import { colorTokens } from '../../../constants/colorTokens'
import { setPositionStack, setColor } from '../../../redux/slices/pickerSlice'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../../ui/DefaultHoveredButton/DefaultHoveredButton'
import { Undo } from '../../icons/Undo'
import { Redo } from '../../icons/Redo'
import { Share } from '../../icons/Share'
import { Box } from '../../icons/Box'
import { Divider } from '@mui/material'
import { ExportColor } from '../../ui/Export/ExportColor'

const primaryDark = colorTokens.primaryDark
const primaryDarkTransparent50 = colorTokens.primaryDarkTransparent50
const brightness = 'light'

export const PickerControlPanel = memo(() => {
	const [isOpenExportModal, setOpenExportModal] = useState(false)

	const stackOfStates = useAppSelector(
		state => state.pickerReducer.stackOfStates
	)
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	)

	const dispatch = useAppDispatch()

	const handleOpenExportModal = () => setOpenExportModal(true)
	const handleCloseExportModal = () => setOpenExportModal(false)

	const handleClickUndo = () => {
		dispatch(setPositionStack({ type: 'undo' }))
	}
	const handleClickRedo = () => {
		dispatch(setPositionStack({ type: 'redo' }))
	}
	const handleClickGenerate = () => {
		dispatch(setColor({ newColor: chroma.random().hex().toUpperCase() }))
	}

	return (
		<BorderedLayout className='controlPanel'>
			<DefaultHoveredButton
				className='controlPanel__option undo'
				brightness={brightness}
				disabled={stackOfStates.position === 0}
				onClick={handleClickUndo}
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
				onClick={handleClickRedo}
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
					borderColor: primaryDark,
					borderRadius: 'var(--borderRadius-short)',
				}}
				flexItem
			/>
			<DefaultHoveredButton
				className='controlPanel__option generate'
				brightness={brightness}
				onClick={handleClickGenerate}
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
					borderColor: primaryDark,
					borderRadius: 'var(--borderRadius-short)',
				}}
				flexItem
			/>
			<DefaultHoveredButton
				className='controlPanel__option share'
				brightness={brightness}
				onClick={handleOpenExportModal}
			>
				<Share stroke={primaryDark} />
				<p
					className='controlPanel__option-name'
					style={{ color: primaryDark }}
				>
					Export
				</p>
			</DefaultHoveredButton>
			<>
				<ExportColor
					color={colorState}
					isOpenModal={isOpenExportModal}
					handleCloseModal={handleCloseExportModal}
				/>
			</>
		</BorderedLayout>
	)
})
