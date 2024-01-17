import './ColorModels.style.scss'
import { FC } from 'react'
import { IColorVariant } from '../../../types'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'

interface Props {
	colorVariant: IColorVariant
}

export const ColorModels: FC<Props> = ({ colorVariant }) => {
	return (
		<BorderedLayout className='colorModels'>
			<div className='colorModels-list'>
				<DefaultHoveredButton
					className='colorModels__option'
					brightness={colorVariant.brightness}>
					<p className='colorModels__option-title'>HEX</p>
					<p className='colorModels__option-value'>D7FF01</p>
				</DefaultHoveredButton>
			</div>
			<div className='divider vertical'></div>
		</BorderedLayout>
	)
}
