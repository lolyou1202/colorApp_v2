import './PaletteButtons.style.scss'
import { Box } from '../../icons/Box'
import { Redo } from '../../icons/Redo'
import { Settings } from '../../icons/Settings'
import { Undo } from '../../icons/Undo'
import { PrimaryButton } from '../../ui/PrimaryButton/PrimaryButton'
import { FC } from 'react'

interface IPaletteButtons {
	onClickUndo: () => void
	onClickGenerate: () => void
	onClickRedo: () => void
	onClickSave: () => void
	onClickSettings: () => void
}

export const PaletteButtons: FC<IPaletteButtons> = ({
	onClickUndo,
	onClickGenerate,
	onClickRedo,
	onClickSave,
	onClickSettings,
}) => {
	return (
		<div className='palette__buttons'>
			<div className='palette__buttons-center'>
				<PrimaryButton
					onClickRule='localState'
					width='64px'
					ico={
						<Undo
							size={32}
							stroke='var(--primary-dark)'
							strokeWidth={3}
						/>
					}
					onClick={onClickUndo}
				/>
				<PrimaryButton
					onClickRule='localState'
					content='Generate'
					width='200px'
					ico={
						<Box
							size={32}
							stroke='var(--primary-dark)'
							strokeWidth={3}
						/>
					}
					onClick={onClickGenerate}
				/>
				<PrimaryButton
					onClickRule='localState'
					width='64px'
					ico={
						<Redo
							size={32}
							stroke='var(--primary-dark)'
							strokeWidth={3}
						/>
					}
					onClick={onClickRedo}
				/>
			</div>
			<div className='palette__buttons-right'>
				<PrimaryButton
					onClickRule='localState'
					content='Save'
					width='120px'
					onClick={onClickSave}
				/>
				<PrimaryButton
					onClickRule='controllState'
					width='64px'
					ico={
						<Settings
							size={32}
							stroke='var(--primary-dark)'
							strokeWidth={3}
						/>
					}
					onClick={onClickSettings}
				/>
			</div>
		</div>
	)
}
