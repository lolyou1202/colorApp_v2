import { CSSProperties, ComponentProps, FC, ReactNode } from 'react'
import './BorderedLayout.style.scss'
import classNames from 'classnames'

interface Props extends ComponentProps<'div'> {
	children?: ReactNode
	className?: string
	style?: CSSProperties | undefined
}

export const BorderedLayout: FC<Props> = ({
	children,
	className,
	style,
	...rest
}) => {
	const borderedLayoutClassNames = classNames({
		borderedLayout: true,
		[className || '']: true,
	})

	return (
		<div className={borderedLayoutClassNames} style={style} {...rest}>
			{children}
		</div>
	)
}
