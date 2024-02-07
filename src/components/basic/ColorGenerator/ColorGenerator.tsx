import './ColorGenerator.style.scss'
import { FC } from 'react'
import { useContrast } from '../../../hooks/useContrast'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'
import { ColorDisplay } from '../../ui/ColorDisplay/ColorDisplay'
import { CustomColorPicker } from '../../ui/CustomColorPicker/CustomColorPicker'
import { PickerBlock } from '../../ui/PickerBlock/PickerBlock'
import { PickerControlPanel } from '../../ui/ControlPanel/PickerControlPanel'

interface Props {
	inputState: string
	setInputState: React.Dispatch<React.SetStateAction<string>>
}

export const ColorGenerator: FC<Props> = ({ inputState, setInputState }) => {
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	)

	return (
		<PickerBlock
			classNameBlock='pickerGenerate__block'
			classNameContainer='pickerGenerate'
			description='Get useful color information like conversion, combinations,
	blindness simulation and more.'>
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
