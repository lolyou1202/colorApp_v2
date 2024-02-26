import './ControlPanel.style.scss'
import chroma from 'chroma-js'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { IColorVariant } from '../../../types'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../../ui/DefaultHoveredButton/DefaultHoveredButton'
import { Undo } from '../../icons/Undo'
import { Redo } from '../../icons/Redo'
import { Share } from '../../icons/Share'
import { Box } from '../../icons/Box'
import { setColor } from '../../../redux/slices/pickerSlice'
import { BorderedSection } from '../../ui/BorderedSection/BorderedSection'

export const PickerControlPanel = () => {
	const dispatch = useAppDispatch()

	const generateCkickHandler = () => {
		dispatch(setColor({ newColor: chroma.random().hex().toUpperCase() }))
	}

	const { brightness, contrastColor }: IColorVariant = {
		brightness: 'light',
		contrastColor: '#353535',
	}

	return (
		<BorderedLayout className='controlPanel'>
			<BorderedSection className='controlPanel-section' direction='right'>
				<DefaultHoveredButton
					className='controlPanel__option undo'
					brightness={brightness}
				>
					<Undo stroke={contrastColor} />
				</DefaultHoveredButton>
				<DefaultHoveredButton
					className='controlPanel__option redo'
					brightness={brightness}
				>
					<Redo stroke={contrastColor} />
				</DefaultHoveredButton>
			</BorderedSection>
			<BorderedSection className='controlPanel-section' direction='right'>
				<DefaultHoveredButton
					className='controlPanel__option generate'
					brightness={brightness}
					onClick={generateCkickHandler}
				>
					<Box stroke={contrastColor} />
					<p
						className='controlPanel__option-name'
						style={{ color: contrastColor }}
					>
						Generate
					</p>
				</DefaultHoveredButton>
			</BorderedSection>
			<BorderedSection className='controlPanel-section'>
				<DefaultHoveredButton
					className='controlPanel__option share'
					brightness={brightness}
				>
					<Share stroke={contrastColor} />
					<p
						className='controlPanel__option-name'
						style={{ color: contrastColor }}
					>
						Export
					</p>
				</DefaultHoveredButton>
			</BorderedSection>
		</BorderedLayout>
	)
}
