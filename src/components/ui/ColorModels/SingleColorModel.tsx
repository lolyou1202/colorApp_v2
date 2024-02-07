import { FC } from 'react'
import { IColorVariant } from '../../../types'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'

interface Props {
	colorModel: string
	value: string
	onClick: (value: string) => void
}

export const SingleColorModel: FC<Props> = ({ colorModel, value, onClick }) => {
	const { brightness }: IColorVariant = {
		brightness: 'light',
		contrastColor: '#353535',
	}

	return (
		<DefaultHoveredButton
			key={colorModel}
			className='colorModels__option'
			onClick={() => onClick(value)}
			brightness={brightness}>
			<p className='colorModels__option-title'>{colorModel}</p>
			<p className='colorModels__option-value'>{value}</p>
		</DefaultHoveredButton>
	)
}
