import { FC, ReactNode } from 'react'
import './ButtonInColor.style.scss'
import classNames from 'classnames'

interface IButtonInColor {
	type: 'withIcon' | 'withText'
	text?: string
	icon?: ReactNode
	contrastColor?: string
	onClick?: () => void
}

export const ButtonInColor: FC<IButtonInColor> = ({
	type,
	icon,
	text,
	contrastColor,
	onClick,
}) => {
	const buttonInColorClassNames = classNames({
		buttonInColor: true,
		[type]: true,
	})

	return (
		<button className={buttonInColorClassNames} onClick={onClick}>
			{icon}
			{text && <p style={{ color: contrastColor }}>{text}</p>}
		</button>
	)
}
