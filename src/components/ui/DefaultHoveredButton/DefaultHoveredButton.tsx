import './DefaultHoveredButton.style.scss'
import classNames from 'classnames'
import { CSSProperties, ComponentProps, FC, ReactNode } from 'react'

interface Props extends ComponentProps<'button'> {
	brightness: 'light' | 'dark'
	disabled?: boolean
	borderRadius?: number
	padding?: string
	className?: string
	style?: CSSProperties
	children?: ReactNode
}

export const DefaultHoveredButton: FC<Props> = ({
	brightness,
	disabled,
	children,
	className,
	borderRadius = 4,
	padding = '4px',
	...rest
}) => {
	const defaultHoveredButtonClassNames = classNames({
		defaultHoveredButton: true,
		[brightness]: true,
		[className || '']: className,
	})
	
	return (
		<button
			className={defaultHoveredButtonClassNames}
			style={{ borderRadius: `${borderRadius}px`, padding: padding }}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	)
}
