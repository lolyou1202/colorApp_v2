import { FC, ReactNode } from 'react'
import './BorderedLayout.style.scss'
import classNames from 'classnames'

interface IBorderedLayout {
	children?: ReactNode
	className?: string
	style?: React.CSSProperties | undefined
}

export const BorderedLayout: FC<IBorderedLayout> = ({
	children,
	className,
	style,
}) => {
	const borderedLayoutClassNames = classNames({
		borderedLayout: true,
		[className || '']: true,
	})

	return (
		<div className={borderedLayoutClassNames} style={style}>
			{children}
		</div>
	)
}
