import './ColorGenerator.style.scss'
import { FC, useState } from 'react'
import { ColorDisplay } from '../ColorDisplay/ColorDisplay'
import { CustomColorPicker } from '../CustomColorPicker/CustomColorPicker'
import { PickerBlock } from '../PickerBlock/PickerBlock'
import { PickerControlPanel } from '../ControlPanel/PickerControlPanel'

interface Props {
	colorState: string
}

export const ColorGenerator: FC<Props> = ({ colorState }) => {
	const [inputState, setInputState] = useState(colorState.toUpperCase())

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
