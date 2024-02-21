import './PickerMain.style.scss'
import { ColorModels } from '../../ui/ColorModels/ColorModels'
import { ColorGenerator } from '../../ui/ColorGenerator/ColorGenerator'
import { Variations } from '../../ui/Variations/Variations'
import { Blindness } from '../../ui/Blindness/Blindness'
import { Similar } from '../../ui/Similar/Similar'

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
