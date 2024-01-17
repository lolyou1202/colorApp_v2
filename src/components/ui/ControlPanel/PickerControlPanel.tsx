import './ControlPanel.style.scss'
import { FC } from 'react'
import { IColorVariant } from '../../../types'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { MoreHorizontal } from '../../icons/MoreHorizontal'

interface Props {}

export const PickerControlPanel: FC<Props> = () => {
	const colorVariant: IColorVariant = {
		brightness: 'light',
		contrastHEX: '353535',
	}
	return (
		<BorderedLayout className='controlPanel'>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={colorVariant.brightness}>
				<MoreHorizontal stroke={colorVariant.contrastHEX} />
			</DefaultHoveredButton>
			<div className='divider vertical'></div>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={colorVariant.brightness}>
				<MoreHorizontal stroke={colorVariant.contrastHEX} />
			</DefaultHoveredButton>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={colorVariant.brightness}>
				<MoreHorizontal stroke={colorVariant.contrastHEX} />
				<p
					className='controlPanel__option-name'
					style={{ color: `#${colorVariant.contrastHEX}` }}>
					Generate
				</p>
			</DefaultHoveredButton>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={colorVariant.brightness}>
				<MoreHorizontal stroke={colorVariant.contrastHEX} />
			</DefaultHoveredButton>
			<div className='divider vertical'></div>
			<DefaultHoveredButton
				className='controlPanel__option'
				brightness={colorVariant.brightness}>
				<MoreHorizontal stroke={colorVariant.contrastHEX} />
				<p
					className='controlPanel__option-name'
					style={{ color: `#${colorVariant.contrastHEX}` }}>
					Export
				</p>
			</DefaultHoveredButton>
		</BorderedLayout>
	)
}
