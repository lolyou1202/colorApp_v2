import { FC } from 'react'
import { PaletteStripe } from '../../ui/PaletteStripe/PaletteStripe'
import { Bage } from '../../ui/Bage/Bage'

interface Props {
	listColors: { color: string; current: boolean }[]
	info: { title: string; subtitle: string; bageInfo: string }
}

export const BlindnessItem: FC<Props> = ({ listColors, info }) => {
	return (
		<div className='blindness__item'>
			<div className='blindness__item-info'>
				<div className='blindness__item-info-name'>
					<p className='blindness__item-info-title'>{info.title}</p>
					<p className='blindness__item-info-subtitle'>
						{info.subtitle}
					</p>
				</div>
				<Bage
					text={info.bageInfo}
					brightness='light'
					classNameBage='blindness__item-info-bage'
					classNameText='blindness__item-info-bage-text'
				/>
			</div>
			<PaletteStripe listColors={listColors} />
		</div>
	)
}
