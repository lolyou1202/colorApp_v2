import './CustomColorPicker.style.scss'
import { FC, memo, useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { Copy } from '../../icons/Copy'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { viewAlert } from '../../../redux/slices/alertSlice'
import { colorTokens } from '../../../constants/colorTokens'

interface Props {
	inputState: string
	setInputState: React.Dispatch<React.SetStateAction<string>>
}

export const CustomColorPicker: FC<Props> = memo(
	({ inputState, setInputState }) => {
		const [internalInputState, setInternalInputState] = useState(inputState)
		console.log(333333)
		const dispatch = useAppDispatch()

		const onChangeInternalInput = (value: string) => {
			setInternalInputState(value)

			const validValue = /^#[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/g.test(value)

			if (validValue) {
				setInputState(value)
			}
		}

		const onCopyClick = () => {
			navigator.clipboard.writeText(inputState)
			dispatch(viewAlert({ alertText: 'Сolor copied to the clipboard' }))
		}

		useEffect(() => {
			if (inputState !== internalInputState) {
				setInputState(internalInputState)
			}
		}, [internalInputState])

		const contrastColor = colorTokens.primaryDark
		const brightness = 'light'

		return (
			<BorderedLayout className='customColorPicker'>
				<div className='customColorPicker__interactive'>
					<HexColorPicker
						color={inputState}
						onChange={newColor =>
							setInternalInputState(newColor.toUpperCase())
						}
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
								background: inputState,
							}}
						/>
					</div>
				</div>
			</BorderedLayout>
		)
	}
)
