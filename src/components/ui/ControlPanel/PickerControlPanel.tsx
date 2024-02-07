import './ControlPanel.style.scss'
import { FC } from 'react'
import { IColorVariant } from '../../../types'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { MoreHorizontal } from '../../icons/MoreHorizontal'

interface Props {}

export const PickerControlPanel: FC<Props> = () => {
	const { brightness, contrastColor }: IColorVariant = {
		brightness: 'light',
		contrastColor: '#353535',
	}

	return (
		<BorderedLayout className='controlPanel'>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={brightness}>
				<MoreHorizontal stroke={contrastColor} />
			</DefaultHoveredButton>
			<div className='divider vertical'></div>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={brightness}>
				<MoreHorizontal stroke={contrastColor} />
			</DefaultHoveredButton>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={brightness}>
				<MoreHorizontal stroke={contrastColor} />
				<p
					className='controlPanel__option-name'
					style={{ color: contrastColor }}>
					Generate
				</p>
			</DefaultHoveredButton>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={brightness}>
				<MoreHorizontal stroke={contrastColor} />
			</DefaultHoveredButton>
			<div className='divider vertical'></div>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={brightness}>
				<MoreHorizontal stroke={contrastColor} />
				<p
					className='controlPanel__option-name'
					style={{ color: contrastColor }}>
					Export
				</p>
			</DefaultHoveredButton>
		</BorderedLayout>
	)
}
