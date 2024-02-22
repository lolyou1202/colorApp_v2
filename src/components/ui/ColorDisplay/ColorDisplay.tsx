import './ColorDisplay.style.scss'
import classNames from 'classnames'
import { FC } from 'react'
import { Expand } from '../../icons/Expand'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { useGetColorName } from '../../../hooks/useGetColorName'
import { useValidateHEX } from '../../../hooks/useValidateHEX'
import { useContrast } from '../../../hooks/useContrast'

interface Props {
	inputState: string
}

export const ColorDisplay: FC<Props> = ({ inputState }) => {
	const { brightness, contrastColor } = useContrast(inputState)

	const validHEX = useValidateHEX(inputState)

	const validColor = validHEX ? validHEX : ''

	const colorName = useGetColorName(validColor)

	const colorDisplayHEXClassNames = classNames({
		'colorDisplay-hex': true,
		[brightness]: true,
	})

	return (
		<BorderedLayout
			className='colorDisplay'
			style={{ background: validColor }}
		>
			<p className={colorDisplayHEXClassNames}>
				{validColor.toUpperCase().replace(/[^0-9A-Z]/g, '')}
			</p>
			<p
				className='colorDisplay-colorName'
				style={{ color: contrastColor }}
			>
				{colorName}
			</p>
			<div className='colorDisplay-iconBar'>
				<DefaultHoveredButton brightness={brightness}>
					<Expand stroke={contrastColor} />
				</DefaultHoveredButton>
			</div>
		</BorderedLayout>
	)
}
