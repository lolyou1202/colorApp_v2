import { FC, ReactNode, useEffect, useState } from "react"
import "./PickerInput.style.scss"
import { BorderedLayout } from "../../layout/BorderedLayout/BorderedLayout"
import { Copy } from "../../icons/Copy"
import classNames from "classnames"

interface IPickerInput {
	inputValue: string
	onChange: (value: string) => void
	onClickCopy?: () => void
	backgroundColor: string
	contrastColor: string
	children?: ReactNode
	placeholder?: string
}

export const PickerInput: FC<IPickerInput> = ({
	inputValue,
	onChange,
	onClickCopy,
	backgroundColor,
	contrastColor,
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
		"pickerInput-placeholder": true,
		visible: placeholderState,
		invisible: !placeholderState,
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
					background: backgroundColor ? `#${backgroundColor}` : "",
				}}>
				<input
					className='pickerInput-input'
					type='text'
					spellCheck='false'
					style={{ color: contrastColor }}
					value={inputValue}
					onChange={onChangeInput}
				/>
				<span className={placeholderClassNames}>{placeholder}</span>
				<div className='pickerInput-ico'>{children}</div>
				<button
					className={"pickerInput-copy"}
					disabled={!inputValue}
					onClick={onCopyClick}>
					<Copy size={32} stroke={contrastColor} strokeWidth={4} />
				</button>
			</BorderedLayout>
		</div>
	)
}
