import { FC, ReactNode, useEffect, useState } from 'react'
import './PickerInput.style.scss'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { Copy } from '../../icons/Copy'
import classNames from 'classnames'
import { ButtonInColor } from '../ButtonInColor/ButtonInColor'
import { IColorVariant } from '../../../types/types'

interface IPickerInput {
	inputValue: string
	onChange: (value: string) => void
	onClickCopy?: () => void
	backgroundColor: string
	colorVariant: IColorVariant
	children?: ReactNode
	placeholder?: string
}

export const PickerInput: FC<IPickerInput> = ({
	inputValue,
	onChange,
	onClickCopy,
	backgroundColor,
	colorVariant,
	children,
	placeholder,
}) => {
	const [placeholderState, setPlaceholderState] = useState(true)

	const onCopyClick = () => {
		navigator.clipboard.writeText(inputValue)
		onClickCopy && onClickCopy()
	}

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value)
	}

	const placeholderClassNames = classNames({
		'pickerInput-placeholder': true,
		visible: placeholderState,
		invisible: !placeholderState,
		light: colorVariant.brightness === 'light',
		dark: colorVariant.brightness === 'dark',
	})

	useEffect(() => {
		if (inputValue) {
			setPlaceholderState(false)
		} else {
			setPlaceholderState(true)
		}
	}, [inputValue])

	return (
		<div className='pickerInput'>
			<BorderedLayout
				style={{
					background: backgroundColor ? `#${backgroundColor}` : '',
				}}>
				<input
					className='pickerInput-input'
					type='text'
					spellCheck='false'
					style={{ color: colorVariant.contrastHEX }}
					value={inputValue}
					onChange={onChangeInput}
				/>
				<span className={placeholderClassNames}>{placeholder}</span>
				<div className='pickerInput-ico'>{children}</div>
				<div className='pickerInput-copy'>
					<ButtonInColor
						type='withIcon'
						icon={
							<Copy
								size={32}
								stroke={colorVariant.contrastHEX}
								strokeWidth={3}
							/>
						}
						style={{ padding: '4px' }}
						onClick={onCopyClick}
						colorVariant={colorVariant}
						disabled={!inputValue}
						isVisible
					/>
				</div>
			</BorderedLayout>
		</div>
	)
}
