import './CustomColorPicker.style.scss'
import { FC, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { BorderedLayout } from '../../layout/BorderedLayout/BorderedLayout'
import { DefaultHoveredButton } from '../DefaultHoveredButton/DefaultHoveredButton'
import { Copy } from '../../icons/Copy'
import { IColorVariant } from '../../../types'
import { useValidateHEX } from '../../../hooks/useValidateHEX'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { viewAlert } from '../../../redux/slices/alertSlice'

interface Props {
	color: string
	setColor: React.Dispatch<React.SetStateAction<string>>
}

export const CustomColorPicker: FC<Props> = ({ color, setColor }) => {
	const [inputState, setInputState] = useState(color.toUpperCase())

	const dispatch = useAppDispatch()

	const colorVariant: IColorVariant = {
		brightness: 'light',
		contrastHEX: '353535',
	}

	const onChangeInput = (value: string) => {
		setInputState(value)
		const validHEX = useValidateHEX(value)
		if (validHEX) {
			setColor(validHEX[0])
		}
	}

	const onChangePicker = (newColor: string) => {
		setInputState(newColor)
		setColor(newColor)
	}

	const onCopyClick = () => {
		navigator.clipboard.writeText(color)
		dispatch(viewAlert({ alertText: 'Сolor added to the collection' }))
	}

	return (
		<BorderedLayout className='customColorPicker'>
			<div className='customColorPicker__interactive'>
				<HexColorPicker
					color={color}
					onChange={newColor =>
						onChangePicker(
							newColor.toUpperCase().replace(/[^0-9A-Z]/g, '')
						)
					}
				/>
			</div>
			<div className='divider horizontal'></div>
			<div className='customColorPicker__info'>
				<div>
					<p>#</p>
					<input
						type='text'
						className='customColorPicker__info-value'
						value={inputState}
						onChange={e => onChangeInput(e.target.value)}
					/>
				</div>
				<div className='customColorPicker__info-currentColor'>
					<BorderedLayout
						className='customColorPicker__info-view'
						style={{ background: `#${color}` }}
					/>
					<DefaultHoveredButton
						brightness={colorVariant.brightness}
						onClick={() => onCopyClick()}>
						<Copy stroke={colorVariant.contrastHEX} />
					</DefaultHoveredButton>
				</div>
			</div>
		</BorderedLayout>
	)
}
