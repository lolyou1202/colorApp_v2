import { FC, ReactNode, useState } from 'react'
import './PrimaryButton.style.scss'
import classNames from 'classnames'

interface IPrimaryButton {
	size?: 'large' | 'small'
	onClickRule?: 'localState' | 'controllState'
	pressed?: boolean
	content?: string
	ico?: ReactNode
	onClick?: () => void
}

export const PrimaryButton: FC<IPrimaryButton> = ({
	size = 'large',
	onClickRule = 'localState',
	pressed,
	content,
	ico,
	onClick,
}) => {
	const [localPressed, setLocalPressed] = useState(pressed)

	const onPressButton = () => {
		if (onClickRule === 'localState') {
			setTimeout(() => setLocalPressed(prevState => !prevState), 200)
			setLocalPressed(prevState => !prevState)
		}
		onClick && onClick()
	}

	const platformClassNames = classNames({
		primaryButton__platform: true,
		onPress: onClickRule === 'controllState' ? pressed : localPressed,
	})

	const primaryButtonClassNames = classNames({
		primaryButton: true,
		[size]: true,
	})

	return (
		<button className={primaryButtonClassNames} onClick={onPressButton}>
			<div className={platformClassNames}>
				{content && (
					<p className='primaryButton__platform-content'>{content}</p>
				)}
				{ico}
			</div>
		</button>
	)
}
