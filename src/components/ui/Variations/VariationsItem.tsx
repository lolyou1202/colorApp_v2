import { FC } from 'react'
import { PaletteStripe } from '../PaletteStripe/PaletteStripe'

interface Props {
	title: string
	description: string
	listColors: {
		color: string
		current: boolean
	}[]
}

export const VariationsItem: FC<Props> = ({
	title,
	description,
	listColors,
}) => {
	return (
		<div className='variations__item'>
			<div className='variations__item-name'>
				<p className='variations__item-name-title'>{title}</p>
				<p className='variations__item-name-description'>
					{description}
				</p>
			</div>
			<PaletteStripe listColors={listColors} howerWidth='80px' />
		</div>
	)
}
