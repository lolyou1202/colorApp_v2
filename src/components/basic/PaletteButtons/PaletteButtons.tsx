import { PrimaryButton } from '../../ui/PrimaryButton/PrimaryButton'

export const PaletteButtons = () => {
	return (
		<div className='palette__buttons'>
			<div className='palette__buttons-center'>
				<PrimaryButton
					onClickRule='localState'
					content='Random'
					onClick={() => {}}
				/>
				<PrimaryButton
					onClickRule='localState'
					content='Save'
					onClick={() => {}}
				/>
				<PrimaryButton
					onClickRule='localState'
					content='Clear'
					onClick={() => {}}
				/>
			</div>
			<div className='palette__buttons-right'>
				<PrimaryButton
					onClickRule='localState'
					content='Clear'
					onClick={() => {}}
				/>
				<PrimaryButton
					onClickRule='controllState'
					content='Clear'
					onClick={() => {}}
				/>
			</div>
		</div>
	)
}
