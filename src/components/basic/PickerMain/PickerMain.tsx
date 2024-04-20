import './PickerMain.style.scss'
import { ColorModels } from '../ColorModels/ColorModels'
import { ColorGenerator } from '../ColorGenerator/ColorGenerator'
import { Variations } from '../Variations/Variations'
import { Blindness } from '../Blindness/Blindness'
import { Similar } from '../Similar/Similar'

export const PickerMain = () => {
	return (
		<main className='picker-main'>
			<ColorGenerator />
			<ColorModels />
			<Variations />
			<Blindness />
			<Similar />
		</main>
	)
}
