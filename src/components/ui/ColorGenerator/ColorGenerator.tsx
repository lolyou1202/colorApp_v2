import './ColorGenerator.style.scss'
import { useEffect, useState } from 'react'
import { ColorDisplay } from '../ColorDisplay/ColorDisplay'
import { CustomColorPicker } from '../CustomColorPicker/CustomColorPicker'
import { PickerBlock } from '../PickerBlock/PickerBlock'
import { PickerControlPanel } from '../../basic/ControlPanel/PickerControlPanel'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'

export const ColorGenerator = () => {
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	).toUpperCase()

	const [inputState, setInputState] = useState(colorState)

	useEffect(() => {
		if (colorState !== inputState) {
			setInputState(colorState)
		}
	}, [colorState, setInputState])

	return (
		<PickerBlock
			classNameBlock='pickerGenerate__block'
			classNameContainer='pickerGenerate'
			description='Get useful color information like conversion, combinations,
	blindness simulation and more.'
		>
			<ColorDisplay inputState={inputState} />
			<div className='pickerGenerate__funcBlock'>
				<CustomColorPicker
				colorState={colorState}
					inputState={inputState}
					setInputState={setInputState}
				/>
				<PickerControlPanel />
			</div>
		</PickerBlock>
	)
}
