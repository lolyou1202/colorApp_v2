import './PickerMain.style.scss'
import chroma from 'chroma-js'
import { FC, useState } from 'react'
import { ColorDisplay } from '../../ui/ColorDisplay/ColorDisplay'
import { PickerControlPanel } from '../../ui/ControlPanel/PickerControlPanel'
import { CustomColorPicker } from '../../ui/CustomColorPicker/CustomColorPicker'

export const PickerMain: FC = () => {
	const [color, setColor] = useState('FFFFFF')

	return (
		<main className='picker-main'>
			<h2 className='picker-description'>
				Get useful color information like conversion, combinations,
				blindness simulation and more.
			</h2>
			<div className='pickerGenerate'>
				<ColorDisplay
					background={chroma(color)}
					colorVariant={{
						brightness: 'light',
						contrastHEX: '353535',
					}}
				/>
				<div className='pickerGenerate__funcBlock'>
					<CustomColorPicker color={color} setColor={setColor} />
					<PickerControlPanel />
				</div>
			</div>
			{/*<ColorModels
				colorVariant={{
					brightness: 'light',
					contrastHEX: '353535',
				}}
			/>*/}
		</main>
	)
}
