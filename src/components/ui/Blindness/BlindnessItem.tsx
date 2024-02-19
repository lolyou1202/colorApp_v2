import { FC } from 'react'
import { PaletteStripe } from '../PaletteStripe/PaletteStripe'
import { Bage } from '../Bage/Bage'

interface Props {
	colorState: string
	listColors: string[]
	info: { title: string; subtitle: string; bageInfo: string }
}

export const BlindnessItem: FC<Props> = ({ colorState, listColors, info }) => {
	return (
		<div className='blindness__item'>
			<div className='blindness__item-info'>
				<div className='blindness__item-info-name'>
					<p className='blindness__item-info-title'>{info.title}</p>
					<p className='blindness__item-info-subtitle'>
						{info.subtitle}
					</p>
				</div>
				<Bage text='55% similar' brightness='light' />
			</div>
			<PaletteStripe
				curentColor={colorState}
				listColors={listColors}
				howerWidth='80px'
			/>
		</div>
	)
}
