import classNames from 'classnames'
import { FC, useState } from 'react'
import { IColorVariant } from '../../../types'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { viewAlert } from '../../../redux/slices/alertSlice'
import { Check } from '../../icons/Check'

interface Props {
	color: string
	variant: IColorVariant
	isCurrentColor?: boolean
	classNameWrapper?: string
	children?: React.ReactNode
}

export const PaletteStripeColor: FC<Props> = ({
	color,
	variant,
	isCurrentColor,
	classNameWrapper,
	children,
}) => {
	const [isChecked, setChecked] = useState(false)

	const dispatch = useAppDispatch()

	const onMouseLeave = () => {
		setChecked(false)
	}

	const onClickColorCell = (value: string) => {
		navigator.clipboard.writeText(value)
		dispatch(viewAlert({ alertText: 'Сolor copied to the clipboard' }))
		setChecked(true)
	}

	const paletteStripeClassNames = classNames({
		paletteStripe__color: true,
		current: isCurrentColor,
		checked: isChecked,
		[classNameWrapper || '']: true,
	})

	return (
		<div
			className={paletteStripeClassNames}
			onMouseLeave={() => onMouseLeave()}
			onClick={() => onClickColorCell(color)}
			style={{
				backgroundColor: color,
			}}
		>
			<p
				className='paletteStripe__color-hex'
				style={{ color: variant.contrastColor }}
			>
				{color.replace(/[^\d\w]/g, '')}
			</p>
			<div
				className='paletteStripe__color-dot'
				style={{ backgroundColor: variant.contrastColor }}
			></div>
			<Check
				className='paletteStripe__color-check'
				stroke={variant.contrastColor}
				size={24}
			/>
			{children}
		</div>
	)
}
