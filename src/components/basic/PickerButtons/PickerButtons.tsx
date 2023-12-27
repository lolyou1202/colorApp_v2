import { FC } from 'react'
import './PickerButtons.style.scss'
import { PrimaryButton } from '../../ui/PrimaryButton/PrimaryButton'

interface IPickerButtons {
	onClickRandom: () => void
	onClickSave: () => void
	onClickClear: () => void
}

export const PickerButtons: FC<IPickerButtons> = ({
	onClickRandom,
	onClickSave,
	onClickClear,
}) => {
	return (
		<div className='picker__buttons'>
			<PrimaryButton
				onClickRule='localState'
				content='Random'
				onClick={onClickRandom}
			/>
			<PrimaryButton
				onClickRule='localState'
				content='Save'
				onClick={onClickSave}
			/>
			<PrimaryButton
				onClickRule='localState'
				content='Clear'
				onClick={onClickClear}
			/>
		</div>
	)
}
