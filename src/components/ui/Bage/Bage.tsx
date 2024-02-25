import './Bage.style.scss'
import classNames from 'classnames'
import { FC } from 'react'
import { BrightnessType } from '../../../types'

interface Props {
	text: string
	brightness?: BrightnessType
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
		[classNameText || '']: true,
		[brightness]: true,
	})
	return (
		<div className={bageClassNames}>
			<p className={bageTextClassNames}>{text}</p>
		</div>
	)
}
