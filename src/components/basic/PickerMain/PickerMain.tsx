import './PickerMain.style.scss'
import { FC } from 'react'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'
import { ColorModels } from '../../ui/ColorModels/ColorModels'
import { ColorGenerator } from '../../ui/ColorGenerator/ColorGenerator'
import { Variations } from '../../ui/Variations/Variations'
import { Blindness } from '../../ui/Blindness/Blindness'
import { Similar } from '../../ui/Similar/Similar'

export const PickerMain: FC = () => {
	const colorState = useAppSelector(state => state.pickerReducer.colorState)
	console.log(213)

	return (
		<main className='picker-main'>
			<ColorGenerator colorState={colorState.color.toUpperCase()} />
			<ColorModels colorState={colorState.color} />
			<Variations colorState={colorState.color} />
			<Blindness colorState={colorState.color} />
			
			<Similar />
		</main>
	)
}
