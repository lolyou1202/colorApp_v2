import './Blindness.style.scss'
import { FC } from 'react'
import { PickerBlock } from '../PickerBlock/PickerBlock'
import { BlindnessItem } from './BlindnessItem'
import { useBlindness } from '../../../hooks/useBlindness'
import chroma from 'chroma-js'
import { BlindnessScheme } from '../../../types'

interface Props {
	colorState: string
}

export const Blindness: FC<Props> = ({ colorState }) => {
	const rgbColorState = chroma(colorState).rgb()

	const getBlindnessColor = (blindness: BlindnessScheme): string => {
		return chroma(
			Object.values(
				useBlindness(
					{
						r: rgbColorState[0],
						g: rgbColorState[1],
						b: rgbColorState[2],
						a: 100,
					},
					blindness
				)
			).map(color => Math.round(color))
		).hex()
	}

	const aaa = [
		{
			name: 'Protanopia',
			description: '1.3% of men, 0.02% of women',
			color: getBlindnessColor('Protanopia'),
		},
		{
			name: 'Protanomaly',
			description: '1.3% of men, 0.02% of women',
			color: getBlindnessColor('Protanomaly'),
		},
	]
	console.log(aaa)

	return (
		<PickerBlock
			classNameBlock='blindness__block'
			title='Blindness simulator'
			description='Check how a color is perceived by color blind people to create accessible designs. '
		>
			<div className='blindness__list'>
				<BlindnessItem
					colorState={colorState}
					info={{
						title: 'Protanopia',
						subtitle: '1.3% of men, 0.02% of women',
						bageInfo: '55% similar',
					}}
					listColors={[colorState, '#8ea313']}
				/>
				<BlindnessItem
					colorState={colorState}
					info={{
						title: 'Protanopia',
						subtitle: '1.3% of men, 0.02% of women',
						bageInfo: '55% similar',
					}}
					listColors={[colorState, '#8ea313']}
				/>
			</div>
		</PickerBlock>
	)
}
