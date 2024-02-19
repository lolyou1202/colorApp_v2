import './ColorGenerator.style.scss'
import { FC } from 'react'
import { useContrast } from '../../../hooks/useContrast'
import { ColorDisplay } from '../ColorDisplay/ColorDisplay'
import { CustomColorPicker } from '../CustomColorPicker/CustomColorPicker'
import { PickerBlock } from '../PickerBlock/PickerBlock'
import { PickerControlPanel } from '../ControlPanel/PickerControlPanel'

interface Props {
	colorState: string
	inputState: string
	setInputState: React.Dispatch<React.SetStateAction<string>>
}

export const ColorGenerator: FC<Props> = ({
	colorState,
	inputState,
	setInputState,
}) => {
	return (
		<PickerBlock
			classNameBlock='pickerGenerate__block'
			classNameContainer='pickerGenerate'
			description='Get useful color information like conversion, combinations,
	blindness simulation and more.'
		>
			<ColorDisplay
				colorState={colorState}
				inputState={inputState}
				colorVariant={useContrast(inputState)}
			/>
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
