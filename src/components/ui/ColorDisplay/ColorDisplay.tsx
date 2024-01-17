import './ColorDisplay.style.scss'
import chroma from 'chroma-js'
import classNames from 'classnames'
import { FC } from 'react'
import { Expand } from '../../icons/Expand'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { IColorVariant } from '../../../types'
import { useGetColorName } from '../../../hooks/useGetColorName'

interface Props {
	colorVariant: IColorVariant
	background: chroma.Color
}

export const ColorDisplay: FC<Props> = ({ colorVariant, background }) => {
	const colorDisplayHEXClassNames = classNames({
		'colorDisplay-HEX': true,
		[colorVariant.brightness]: true,
	})

	return (
		<BorderedLayout
			className='colorDisplay'
			style={{ background: background.hex() }}>
			<p className={colorDisplayHEXClassNames}>
				{background.hex().toUpperCase().replace(/[^0-9A-Z]/g, '')}
			</p>
			<p
				className='colorDisplay-colorName'
				style={{ color: `#${colorVariant.contrastHEX}` }}>
				{useGetColorName(background.hex())}
			</p>
			<div className='colorDisplay-iconBar'>
				<DefaultHoveredButton brightness={colorVariant.brightness}>
					<Expand stroke={colorVariant.contrastHEX} />
				</DefaultHoveredButton>
			</div>
		</BorderedLayout>
	)
}
