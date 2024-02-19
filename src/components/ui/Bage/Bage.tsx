import './Bage.style.scss'
import { FC } from 'react'
import { IBrightness } from '../../../types'
import classNames from 'classnames'

interface Props {
	text: string
	brightness?: IBrightness
	classNameBage?: string
	classNameText?: string
}

export const Bage: FC<Props> = ({
	text,
	brightness = 'dark',
	classNameBage,
	classNameText,
}) => {
	const bageClassNames = classNames({
		bage: true,
		[brightness]: true,
		[classNameBage || '']: true,
	})
	const bageTextClassNames = classNames({
		'bage-text': true,
		[brightness]: true,
		[classNameText || '']: true,
	})
	return (
		<div className={bageClassNames}>
			<p className={bageTextClassNames}>{text}</p>
		</div>
	)
}
