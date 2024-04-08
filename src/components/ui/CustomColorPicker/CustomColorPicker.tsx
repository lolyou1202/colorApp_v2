import './CustomColorPicker.style.scss'
import { FC, memo, useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { Copy } from '../../icons/Copy'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { viewAlert } from '../../../redux/slices/alertSlice'
import { colorTokens } from '../../../constants/colorTokens'
import { useDebounce } from '../../../hooks/useDebounce'
import { setColor } from '../../../redux/slices/pickerSlice'

interface Props {
	colorGeneratorState: string
	setColorGeneratorState: React.Dispatch<React.SetStateAction<string>>
}

export const CustomColorPicker: FC<Props> = memo(
	({ colorGeneratorState, setColorGeneratorState }) => {
		const [localInputState, setLocalInputState] =
			useState(colorGeneratorState)
		const [localPickerState, setLocalPickerState] =
			useState(colorGeneratorState)

		const dispatch = useAppDispatch()

		const debounceValue = useDebounce(localPickerState, 100)

		const onChangeInternalInput = (value: string) => {
			setLocalInputState(value)

			const validValue = /^#[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/g.test(value)

			if (validValue) {
				setColorGeneratorState(value)
			}
		}

		const onCopyClick = () => {
			navigator.clipboard.writeText(localPickerState)
			dispatch(viewAlert({ alertText: 'Сolor copied to the clipboard' }))
		}

		useEffect(() => {
			if (colorGeneratorState !== debounceValue) {
				dispatch(setColor({ newColor: debounceValue }))
			}
		}, [debounceValue])

		useEffect(() => {
			if (localPickerState !== localInputState) {
				setLocalInputState(localPickerState)
			}
		}, [localPickerState])

		useEffect(() => {
			if (
				colorGeneratorState !== localInputState &&
				colorGeneratorState !== localPickerState
			) {
				setLocalInputState(colorGeneratorState)
				setLocalPickerState(colorGeneratorState)
			}
		}, [colorGeneratorState])

		const contrastColor = colorTokens.primaryDark
		const brightness = 'light'

		return (
			<BorderedLayout className='customColorPicker'>
				<div className='customColorPicker__interactive'>
					<HexColorPicker
						color={localPickerState}
						onChange={newColor =>
							setLocalPickerState(newColor.toUpperCase())
						}
					/>
				</div>
				<div className='divider horizontal'></div>
				<div className='customColorPicker__info'>
					<input
						type='text'
						className='customColorPicker__info-value'
						value={localInputState}
						onChange={e => onChangeInternalInput(e.target.value)}
					/>
					<div className='customColorPicker__info-functional'>
						<DefaultHoveredButton
							className='customColorPicker__info-copy'
							brightness={brightness}
							onClick={() => onCopyClick()}
						>
							<Copy stroke={contrastColor} />
						</DefaultHoveredButton>
						<BorderedLayout
							className='customColorPicker__info-view'
							style={{
								background: localPickerState,
							}}
						/>
					</div>
				</div>
			</BorderedLayout>
		)
	}
)
