import './ControlPanel.style.scss'
import { IColorVariant } from '../../../types'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { MoreHorizontal } from '../../icons/MoreHorizontal'
import { Undo } from '../../icons/Undo'
import { Redo } from '../../icons/Redo'
import { Share } from '../../icons/Share'
import { Box } from '../../icons/Box'

export const PickerControlPanel = () => {
	const { brightness, contrastColor }: IColorVariant = {
		brightness: 'light',
		contrastColor: '#353535',
	}

	return (
		<BorderedLayout className='controlPanel'>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={brightness}
			>
				<MoreHorizontal stroke={contrastColor} />
			</DefaultHoveredButton>
			<div className='divider vertical'></div>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={brightness}
			>
				<Undo stroke={contrastColor} />
			</DefaultHoveredButton>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={brightness}
			>
				<Box stroke={contrastColor} />
				<p
					className='controlPanel__option-name'
					style={{ color: contrastColor }}
				>
					Generate
				</p>
			</DefaultHoveredButton>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={brightness}
			>
				<Redo stroke={contrastColor} />
			</DefaultHoveredButton>
			<div className='divider vertical'></div>
			<DefaultHoveredButton
				className='controlPanel__option'
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
		</BorderedLayout>
	)
}
