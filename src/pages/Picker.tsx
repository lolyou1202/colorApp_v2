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
	const pickerColor = useAppSelector(store => store.pickerReducer)

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

			if (!RGB) return setRGBInputState('')

			const { r, g, b } = RGB

			if (location.pathname !== `/picker/${validValue}`) {
				navigate(`/picker/${validValue}`)
			}

			if (validValue !== pickerColor.color) {
				dispatch(setColor({ color: validValue }))
			}

			setRGBInputState(`${r}, ${g}, ${b}`)
		},
		[pickerColor.color]
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
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		console.log(reason)
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
		if (colorId !== pickerColor.color) {
			if (pickerColor.color) {
				HEXToRGB(pickerColor.color)
			} else {
				HEXToRGB(colorId || '')
			}
		} else {
			HEXToRGB(pickerColor.color)
		}
	}, [HEXToRGB, pickerColor.color, colorId])

	return (
		<div className='picker'>
			<div className='picker__wrap'>
				<PickerInput
					inputValue={HEXInputState}
					onChange={HEXToRGB}
					placeholder='HEX'
					backgroundColor={pickerColor.color}
					contrastColor={pickerColor.contrastColor}>
					<Hash
						size={40}
						stroke={pickerColor.contrastColor}
						strokeWidth={4}
					/>
				</PickerInput>
				<PickerInput
					inputValue={RGBInputState}
					onChange={RGBToHEX}
					onClickCopy={onClickCopy}
					placeholder='RGB'
					backgroundColor={pickerColor.color}
					contrastColor={pickerColor.contrastColor}>
					<Drop
						size={40}
						stroke={pickerColor.contrastColor}
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
