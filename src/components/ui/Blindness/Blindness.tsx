import './Blindness.style.scss'
import { PickerBlock } from '../PickerBlock/PickerBlock'
import { BlindnessItem } from './BlindnessItem'
import { useBlindness } from '../../../hooks/useBlindness'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'

export const Blindness = () => {
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	).toUpperCase()

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
							bageInfo: `${blindness.similar}% similar`,
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
