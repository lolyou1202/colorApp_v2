import './CustomColorPicker.style.scss'
import { FC, useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { Copy } from '../../icons/Copy'
import { IColorVariant } from '../../../types'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { viewAlert } from '../../../redux/slices/alertSlice'
import { setColor } from '../../../redux/slices/pickerSlice'
import { useDebounce } from '../../../hooks/useDebounce'

interface Props {
	colorState: string
	inputState: string
	setInputState: React.Dispatch<React.SetStateAction<string>>
}

export const CustomColorPicker: FC<Props> = ({
	colorState,
	inputState,
	setInputState,
}) => {
	const [internalInputState, setInternalInputState] = useState(inputState)

	const debounceValue = useDebounce(inputState, 100)

	const dispatch = useAppDispatch()

	const onCopyClick = () => {
		navigator.clipboard.writeText(inputState)
		dispatch(viewAlert({ alertText: 'Сolor copied to the clipboard' }))
	}

	const onChangeInternalInput = (value: string) => {
		setInternalInputState(value)

		const validValue = /^#[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/g.test(value)

		if (validValue) {
			setInputState(value)
		}
	}

	useEffect(() => {
		if (internalInputState !== inputState) {
			setInternalInputState(inputState)
		}
	}, [inputState, setInternalInputState])

	useEffect(() => {
		if (colorState !== debounceValue) {
			dispatch(setColor({ newColor: debounceValue }))
		}
	}, [debounceValue])

	const { brightness, contrastColor }: IColorVariant = {
		brightness: 'light',
		contrastColor: '#353535',
	}

	return (
		<BorderedLayout className='customColorPicker'>
			<div className='customColorPicker__interactive'>
				<HexColorPicker
					color={inputState}
					onChange={newColor => setInputState(newColor.toUpperCase())}
				/>
			</div>
			<div className='divider horizontal'></div>
			<div className='customColorPicker__info'>
				<input
					type='text'
					className='customColorPicker__info-value'
					value={internalInputState}
					onChange={e => onChangeInternalInput(e.target.value)}
				/>
				<div className='customColorPicker__info-currentColor'>
					<BorderedLayout
						className='customColorPicker__info-view'
						style={{
							background: inputState,
						}}
					/>
					<DefaultHoveredButton
						brightness={brightness}
						onClick={() => onCopyClick()}
					>
						<Copy stroke={contrastColor} />
					</DefaultHoveredButton>
				</div>
			</div>
		</BorderedLayout>
	)
}
