import './ColorDisplay.style.scss'
import classNames from 'classnames'
import { FC } from 'react'
import { Expand } from '../../icons/Expand'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { IColorVariant } from '../../../types'
import { useGetColorName } from '../../../hooks/useGetColorName'
import { useValidateHEX } from '../../../hooks/useValidateHEX'

interface Props {
	colorState: string
	inputState: string
	colorVariant: IColorVariant
}

export const ColorDisplay: FC<Props> = ({
	colorState,
	inputState,
	colorVariant,
}) => {
	const { brightness, contrastColor } = colorVariant

	const colorDisplayHEXClassNames = classNames({
		'colorDisplay-HEX': true,
		[brightness]: true,
	})

	const validHEX = useValidateHEX(inputState)

	const validColor = validHEX ? validHEX : colorState

	return (
		<BorderedLayout
			className='colorDisplay'
			style={{ background: validColor }}>
			<p className={colorDisplayHEXClassNames}>
				{validColor.toUpperCase().replace(/[^0-9A-Z]/g, '')}
			</p>
			<p
				className='colorDisplay-colorName'
				style={{ color: contrastColor }}>
				{useGetColorName(validColor)}
			</p>
			<div className='colorDisplay-iconBar'>
				<DefaultHoveredButton brightness={brightness}>
					<Expand stroke={contrastColor} />
				</DefaultHoveredButton>
			</div>
		</BorderedLayout>
	)
}
