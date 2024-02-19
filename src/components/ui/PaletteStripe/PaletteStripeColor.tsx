import { FC, useState } from 'react'
import classNames from 'classnames'
import { IColorVariant } from '../../../types'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { viewAlert } from '../../../redux/slices/alertSlice'
import { Check } from '../../icons/Check'

interface Props {
	color: string
	variant: IColorVariant
	isCurrentColor: boolean
	howerWidth: string
}

export const PaletteStripeColor: FC<Props> = ({
	color,
	variant,
	isCurrentColor,
	howerWidth,
}) => {
	const [hover, setHover] = useState(false)
	const [isChecked, setChecked] = useState(false)

	const dispatch = useAppDispatch()

	const paletteStripeColorClassNames = classNames({
		paletteStripe__color: true,
	})
	const paletteStripeDotClassNames = classNames({
		'paletteStripe__color-dot': true,
		show: !hover && isCurrentColor,
	})
	const paletteStripeHexClassNames = classNames({
		'paletteStripe__color-hex': true,
		show: hover && !isChecked,
	})
	const paletteStripeCheckClassNames = classNames({
		'paletteStripe__color-check': true,
		show: isChecked,
	})

	const onMouseEnter = () => {
		setHover(true)
	}
	const onMouseLeave = () => {
		setHover(false)
		setChecked(false)
	}

	const onClickColorCell = (value: string) => {
		navigator.clipboard.writeText(value)
		dispatch(viewAlert({ alertText: 'Сolor copied to the clipboard' }))
		setChecked(true)
	}

	return (
		<div
			className={paletteStripeColorClassNames}
			onMouseEnter={() => onMouseEnter()}
			onMouseLeave={() => onMouseLeave()}
			onClick={() => onClickColorCell(color)}
			style={{
				backgroundColor: color,
				flexBasis: hover ? howerWidth : '',
			}}
		>
			<p
				className={paletteStripeHexClassNames}
				style={{ color: variant.contrastColor }}
			>
				{color.replace(/[^\d\w]/g, '')}
			</p>
			<div
				className={paletteStripeDotClassNames}
				style={{ backgroundColor: variant.contrastColor }}
			></div>
			<Check
				className={paletteStripeCheckClassNames}
				stroke={variant.contrastColor}
				size={24}
			/>
		</div>
	)
}
