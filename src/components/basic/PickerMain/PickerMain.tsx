import './PickerMain.style.scss'
import { FC, useState } from 'react'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'
import { ColorModels } from '../../ui/ColorModels/ColorModels'
import { ColorGenerator } from '../../ui/ColorGenerator/ColorGenerator'
import { Variations } from '../../ui/Variations/Variations'
import { Blindness } from '../../ui/Blindness/Blindness'

export const PickerMain: FC = () => {
	const colorState = useAppSelector(state => state.pickerReducer.colorState)
    console.log(colorState)
    
	const [inputState, setInputState] = useState(colorState.color.toUpperCase())

	return (
		<main className='picker-main'>
			<ColorGenerator
				colorState={colorState.color.toUpperCase()}
				inputState={inputState}
				setInputState={setInputState}
			/>
			<ColorModels colorState={colorState.color} />
			<Variations colorState={colorState.color} />
			<Blindness colorState={colorState.color} />
		</main>
	)
}
