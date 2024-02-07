import './PickerMain.style.scss'
import { FC, useState } from 'react'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'
import { ColorModels } from '../../ui/ColorModels/ColorModels'
import { ColorGenerator } from '../ColorGenerator/ColorGenerator'

export const PickerMain: FC = () => {
	const colorState = useAppSelector(state => state.pickerReducer.colorState)

	const [inputState, setInputState] = useState(colorState.color.toUpperCase())

	return (
		<main className='picker-main'>
			<ColorGenerator
				inputState={inputState}
				setInputState={setInputState}
			/>
			<ColorModels />
		</main>
	)
}
