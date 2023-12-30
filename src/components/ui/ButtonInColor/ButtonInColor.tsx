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
	onClick?: () => void
}

export const ButtonInColor: FC<IButtonInColor> = ({
	type,
	icon,
	text,
	colorVariant,
	isVisible,
	onClick,
}) => {
	const buttonInColorClassNames = classNames({
		buttonInColor: true,
		[type]: true,
		[colorVariant.brightness]: colorVariant,
		visible: isVisible,
	})

	return (
		<button className={buttonInColorClassNames} onClick={onClick}>
			{icon}
			{text && <p style={{ color: colorVariant.contrastHEX }}>{text}</p>}
		</button>
	)
}
