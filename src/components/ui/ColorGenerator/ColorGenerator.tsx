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

	const [colorGeneratorState, setColorGeneratorState] = useState(colorState)

	useEffect(() => {
		if (colorState !== colorGeneratorState) {
			setColorGeneratorState(colorState)
		}
	}, [colorState])

	return (
		<PickerBlock
			classNameBlock='pickerGenerate__block'
			classNameContainer='pickerGenerate'
			description='Get useful color information like conversion, combinations,
	blindness simulation and more.'
		>
			<ColorDisplay colorGeneratorState={colorGeneratorState} />
			<div className='pickerGenerate__funcBlock'>
				<CustomColorPicker
					colorGeneratorState={colorGeneratorState}
					setColorGeneratorState={setColorGeneratorState}
				/>
				<PickerControlPanel />
			</div>
		</PickerBlock>
	)
}
