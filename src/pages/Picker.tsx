import { useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/useAppRedux'
import { EnumLocation, setLocation } from '../redux/slices/locationSlice'
import { PickerInput } from '../components/ui/PickerInput/PickerInput'
import { Hash } from '../components/icons/Hash'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchRandom, setColor } from '../redux/slices/pickerSlice'
import { useHEXtoRGB } from '../hooks/useHEXtoRGB'
import { Drop } from '../components/icons/Drop'
import { useRGBtoHEX } from '../hooks/useRGBtoHex'
import { useStringRGBtoObjectRGB } from '../hooks/useStringRGBtoObjectRGB'
import { PickerButtons } from '../components/basic/PickerButtons/PickerButtons'
import { CustomAlert } from '../components/ui/CustomAlert/CustomAlert'

export const Picker = () => {
	const color = useAppSelector(store => store.pickerReducer.color)

	const { colorId } = useParams()

	const [HEXInputState, setHEXInputState] = useState(colorId || '')
	const [RGBInputState, setRGBInputState] = useState('')

	const [alertState, setAlertState] = useState<{
		open: boolean
		text: string
	}>({ open: false, text: '' })

	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const HEXToRGB = useCallback(
		(value: string) => {
			const validValue = value.replace(/[^\d\w]/g, '').toLocaleUpperCase()
			setHEXInputState(validValue)

			if (!validValue) {
				dispatch(setColor({ color: '' }))
				navigate('/picker')
				return
			}

			const RGB = useHEXtoRGB(validValue)

			if (!RGB) {
				setRGBInputState('')
				return
			}

			const { r, g, b } = RGB

			if (location.pathname !== `/picker/${validValue}`) {
				navigate(`/picker/${validValue}`)
			}

			if (validValue !== color.HEX) {
				dispatch(setColor({ color: validValue }))
			}

			setRGBInputState(`${r}, ${g}, ${b}`)
		},
		[color.HEX]
	)

	const RGBToHEX = useCallback((value: string) => {
		const validValue = value.replace(/[^\d, ]/g, '')
		setRGBInputState(validValue)

		if (!validValue) {
			dispatch(setColor({ color: '' }))
			navigate('/picker')
			return
		}

		const RGB = useStringRGBtoObjectRGB(validValue)

		if (!RGB) return setHEXInputState('')

		const { r, g, b } = RGB

		const HEX = useRGBtoHEX(r, g, b)

		if (location.pathname !== `/picker/${HEX}`) {
			navigate(`/picker/${HEX}`)
		}

		dispatch(setColor({ color: HEX }))

		setHEXInputState(HEX)
	}, [])

	const onClickRandom = () => {
		dispatch(fetchRandom())
	}
	const onClickSave = () => {
		setAlertState({ open: true, text: 'Сolor added to the collection' })
	}
	const onClickClear = () => {
		if (HEXInputState) {
			HEXToRGB('')
		}
		if (RGBInputState) {
			RGBToHEX('')
		}
	}
	const onClickCopy = () => {
		setAlertState({ open: true, text: 'Сolor copied to the clipboard' })
	}
	const handleCloseAlert = (
		_?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			setAlertState(prevState => ({ ...prevState, open: false }))
			return
		}
		setAlertState(prevState => ({ ...prevState, open: false }))
	}

	useEffect(() => {
		dispatch(setLocation({ locationType: EnumLocation.picker }))
	}, [])

	useEffect(() => {
		if (colorId !== color.HEX) {
			if (color.HEX) {
				HEXToRGB(color.HEX)
			} else {
				HEXToRGB(colorId || '')
			}
		} else {
			HEXToRGB(color.HEX)
		}
	}, [HEXToRGB, color.HEX, colorId])

	return (
		<div className='picker'>
			<div className='picker__wrap'>
				<PickerInput
					inputValue={HEXInputState}
					onChange={HEXToRGB}
					placeholder='HEX'
					backgroundColor={color.HEX}
					colorVariant={color.variant}>
					<Hash
						size={40}
						stroke={color.variant.contrastHEX}
						strokeWidth={4}
					/>
				</PickerInput>
				<PickerInput
					inputValue={RGBInputState}
					onChange={RGBToHEX}
					onClickCopy={onClickCopy}
					placeholder='RGB'
					backgroundColor={color.HEX}
					colorVariant={color.variant}>
					<Drop
						size={40}
						stroke={color.variant.contrastHEX}
						strokeWidth={4}
					/>
				</PickerInput>
				<PickerButtons
					onClickRandom={onClickRandom}
					onClickSave={onClickSave}
					onClickClear={onClickClear}
				/>
				<CustomAlert
					open={alertState.open}
					text={alertState.text}
					onClose={handleCloseAlert}
				/>
			</div>
		</div>
	)
}
