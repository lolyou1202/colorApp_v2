import { FC, ReactNode } from 'react'
import './ButtonInColor.style.scss'
import classNames from 'classnames'
import { IColorVariant } from '../../../types/types'

interface IButtonInColor {
	type: 'withIcon' | 'withText'
	text?: string
	icon?: ReactNode
	colorVariant: IColorVariant
	isVisible?: boolean
	className?: string
	style?: React.CSSProperties | undefined
	disabled?: boolean
	onClick?: () => void
}

export const ButtonInColor: FC<IButtonInColor> = ({
	type,
	icon,
	text,
	colorVariant,
	isVisible,
	className,
	style,
	onClick,
	...props
}) => {
	const buttonInColorClassNames = classNames({
		buttonInColor: true,
		[className || '']: true,
		[type]: true,
		[colorVariant.brightness]: colorVariant,
		visible: isVisible,
	})

	return (
		<button
			className={buttonInColorClassNames}
			onClick={onClick}
			style={style}
			{...props}>
			{icon}
			{text && <p style={{ color: colorVariant.contrastHEX }}>{text}</p>}
		</button>
	)
}
