import './ColorDisplay.style.scss'
import classNames from 'classnames'
import { FC, memo } from 'react'
import { Expand } from '../../icons/Expand'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { useGetColorName } from '../../../hooks/useGetColorName'
import { useValidateHEX } from '../../../hooks/useValidateHEX'
import { useContrast } from '../../../hooks/useContrast'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { openScreenMode } from '../../../redux/slices/screenModeSlice'

interface Props {
	colorGeneratorState: string
}

export const ColorDisplay: FC<Props> = memo(({ colorGeneratorState }) => {
	const dispatch = useAppDispatch()

	const { brightness, contrastColor } = useContrast(colorGeneratorState)

	const validHEX = useValidateHEX(colorGeneratorState)

	const validColor = validHEX ? validHEX : ''

	const colorName = useGetColorName(validColor)

	const onClickViewFull = () => {
		dispatch(openScreenMode({ content: [validColor] }))
	}

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
				<DefaultHoveredButton
					brightness={brightness}
					onClick={onClickViewFull}
				>
					<Expand stroke={contrastColor} />
				</DefaultHoveredButton>
			</div>
		</BorderedLayout>
	)
})
