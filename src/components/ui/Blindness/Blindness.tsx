import './Blindness.style.scss'
import { FC } from 'react'
import { PickerBlock } from '../PickerBlock/PickerBlock'
import { BlindnessItem } from './BlindnessItem'
import { useBlindness } from '../../../hooks/useBlindness'

interface Props {
	colorState: string
}

export const Blindness: FC<Props> = ({ colorState }) => {
	const blindnessList = useBlindness(colorState)

	return (
		<PickerBlock
			classNameBlock='blindness__block'
			title='Blindness simulator'
			description='Check how a color is perceived by color blind people to create accessible designs. '
		>
			<div className='blindness__list'>
				{blindnessList.map(blindness => (
					<BlindnessItem
						key={blindness.name}
						info={{
							title: blindness.name,
							subtitle: blindness.description,
							bageInfo: blindness.similar,
						}}
						listColors={[
							{ color: colorState, current: true },
							{ color: blindness.color, current: false },
						]}
					/>
				))}
			</div>
		</PickerBlock>
	)
}
