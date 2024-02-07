import './PickerBlock.style.scss'
import classNames from 'classnames'
import { FC, ReactNode } from 'react'

interface Props {
	title?: string
	description?: string
	classNameBlock?: string
	classNameContainer?: string
	children?: ReactNode
}

export const PickerBlock: FC<Props> = ({
	title,
	description,
	classNameBlock,
	classNameContainer,
	children,
}) => {
	const containerClassNames = classNames({
		'picker__block-container': true,
		[classNameContainer || '']: true,
	})
	const blockClassNames = classNames({
		picker__block: true,
		[classNameBlock || '']: true,
	})

	return (
		<div className={blockClassNames}>
			{(title || description) && (
				<div className='picker__block-name'>
					{title && <h2 className='picker__block-title'>{title}</h2>}
					{description && (
						<p className='picker__block-description'>
							{description}
						</p>
					)}
				</div>
			)}
			<div className={containerClassNames}>{children}</div>
		</div>
	)
}
