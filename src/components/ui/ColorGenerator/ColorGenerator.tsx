import './ColorGenerator.style.scss'
import { useEffect, useState } from 'react'
import { ColorDisplay } from '../ColorDisplay/ColorDisplay'
import { CustomColorPicker } from '../CustomColorPicker/CustomColorPicker'
import { PickerBlock } from '../PickerBlock/PickerBlock'
import { PickerControlPanel } from '../../basic/ControlPanel/PickerControlPanel'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import { useDebounce } from '../../../hooks/useDebounce'
import { setColor } from '../../../redux/slices/pickerSlice'

export const ColorGenerator = () => {
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	).toUpperCase()

	const [inputState, setInputState] = useState(colorState)

	const dispatch = useAppDispatch()

	const debounceValue = useDebounce(inputState, 100)

	useEffect(() => {
		if (colorState !== debounceValue) {
			dispatch(setColor({ newColor: debounceValue }))
		}
	}, [debounceValue])

	useEffect(() => {
		if (colorState !== inputState) {
			setInputState(colorState)
		}
	}, [colorState])

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
					inputState={inputState}
					setInputState={setInputState}
				/>
				<PickerControlPanel />
			</div>
		</PickerBlock>
	)
}
