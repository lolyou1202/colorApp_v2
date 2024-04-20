import './Similar.style.scss'
import { useMemo } from 'react'
import { ColorCard } from '../../ui/ColorCard/ColorCard'
import { PickerBlock } from '../../ui/PickerBlock/PickerBlock'
import { colorNames } from '../../../constants/colorNames'
import { getSimilarPercent } from '../../../hooks/getSimilarPercent'
import { getRandomItemsFromArr } from '../../../hooks/getRandomItemsFromArr'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'

export const Similar = () => {
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	).toUpperCase()

	const similarList = useMemo(() => {
		return colorNames
			.map(color => ({
				color: color.hex.toUpperCase(),
				name: color.name,
				similar: getSimilarPercent(colorState, color.hex.toUpperCase()),
			}))
			.filter(color => color.similar > 90 && color.color !== colorState)
			.sort((a, b) => b.similar - a.similar)
	}, [colorState, colorNames])

	const randomSimilarList = useMemo(
		() => getRandomItemsFromArr(similarList, 12),
		[similarList, getRandomItemsFromArr]
	)

	return (
		<PickerBlock
			classNameBlock='similar__block'
			title='Similar colors'
			description='View the most similar matches of this color with shades from the library.'
		>
			<div className='similar__list'>
				{randomSimilarList.map(similarColor => (
					<ColorCard
						key={similarColor.color}
						color={similarColor.color}
						name={similarColor.name}
						similar={similarColor.similar}
					/>
				))}
			</div>
		</PickerBlock>
	)
}
