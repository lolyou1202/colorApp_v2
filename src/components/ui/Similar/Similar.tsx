import './Similar.style.scss'
import { ColorCard } from '../ColorCard/ColorCard'
import { PickerBlock } from '../PickerBlock/PickerBlock'

export const Similar = () => {
	const similarList = [
		{ name: 'Yellow Green', color: '#b246ac', similar: '55% similar' },
		{ name: 'Yellow Green', color: '#727272', similar: '55% similar' },
		{ name: 'Yellow Green', color: '#FF11F3', similar: '55% similar' },
		{ name: 'Yellow Green', color: '#f39188', similar: '55% similar' },
	]
	return (
		<PickerBlock
			classNameBlock='similar__block'
			title='Similar colors'
			description='View the most similar matches of this color with shades from the library.'
		>
			<div className='similar__list'>
				{similarList.map(similarColor => (
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
