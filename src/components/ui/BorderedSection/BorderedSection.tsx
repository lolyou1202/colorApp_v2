import './BorderedSection.style.scss'
import classNames from 'classnames'
import { CSSProperties, ComponentProps, FC, ReactNode } from 'react'

interface Props extends ComponentProps<'div'> {
	direction?: 'right' | 'left' | 'top' | 'bottom'
	className?: string
	children?: ReactNode
	style?: CSSProperties | undefined
}

export const BorderedSection: FC<Props> = ({
	direction = '',
	className = '',
	children,
	...props
}) => {
	const borderedSectionClassNames = classNames({
		borderedSection: true,
		[direction]: true,
		[className]: true,
	})

	return (
		<div className={borderedSectionClassNames} {...props}>
			{children}
		</div>
	)
}
