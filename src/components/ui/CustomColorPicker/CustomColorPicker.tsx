import './CustomColorPicker.style.scss'
import { FC, useEffect } from 'react'
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
	const debounceValue = useDebounce(inputState, 100)

	const dispatch = useAppDispatch()

	const { brightness, contrastColor }: IColorVariant = {
		brightness: 'light',
		contrastColor: '#353535',
	}

	const onCopyClick = () => {
		navigator.clipboard.writeText(inputState)
		dispatch(viewAlert({ alertText: 'Сolor copied to the clipboard' }))
	}

	useEffect(() => {
		if (debounceValue !== colorState) {
			dispatch(setColor({ newColor: debounceValue }))
		}
	}, [debounceValue])

	return (
		<BorderedLayout className='customColorPicker'>
			<div className='customColorPicker__interactive'>
				<HexColorPicker
					color={colorState}
					onChange={newColor => setInputState(newColor.toUpperCase())}
				/>
			</div>
			<div className='divider horizontal'></div>
			<div className='customColorPicker__info'>
				<input
					type='text'
					className='customColorPicker__info-value'
					value={inputState}
					onChange={e =>
						setInputState(
							e.target.value.replace(/[^#0-9A-Fa-f]/g, '')
						)
					}
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
