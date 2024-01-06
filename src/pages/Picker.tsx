import { useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/useAppRedux'
import { EnumLocation, setLocation } from '../redux/slices/locationSlice'
import { PickerInput } from '../components/ui/PickerInput/PickerInput'
import { Hash } from '../components/icons/Hash'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getRandom, setColor } from '../redux/slices/pickerSlice'
import { useHEXtoRGB } from '../hooks/useHEXtoRGB'
import { Drop } from '../components/icons/Drop'
import { useRGBtoHEX } from '../hooks/useRGBtoHex'
import { useStringRGBtoObjectRGB } from '../hooks/useStringRGBtoObjectRGB'
import { PickerButtons } from '../components/basic/PickerButtons/PickerButtons'
import { CustomAlert } from '../components/ui/CustomAlert/CustomAlert'
import { closeAlert, viewAlert } from '../redux/slices/alertSlice'

export const Picker = () => {
	const color = useAppSelector(store => store.pickerReducer.color)
	const alert = useAppSelector(store => store.alertReducer)

	const { colorId } = useParams()

	const [HEXInputState, setHEXInputState] = useState(colorId || '')
	const [RGBInputState, setRGBInputState] = useState('')

	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	//const HEXToRGB = useCallback(
	//	(value: string) => {
	//		const validValue = value.replace(/[^\d\w]/g, '').toUpperCase()
	//		setHEXInputState(validValue)

	//		if (!validValue) {
	//			dispatch(setColor({ color: '' }))
	//			navigate('/picker')
	//			return
	//		}

	//		const RGB = useHEXtoRGB(validValue)

	//		if (!RGB) {
	//			setRGBInputState('')
	//			return
	//		}

	//		const { r, g, b } = RGB

	//		if (location.pathname !== `/picker/${validValue}`) {
	//			navigate(`/picker/${validValue}`)
	//		}

	//		if (validValue !== color.HEX) {
	//			dispatch(setColor({ color: validValue }))
	//		}

	//		setRGBInputState(`${r}, ${g}, ${b}`)
	//	},
	//	[color.HEX]
	//)
	const HEXToRGB = useCallback((value: string) => {
		const validValue = value.replace(/[^\d\w]/g, '').toUpperCase()
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

		if (validValue !== color.HEX) {
			dispatch(setColor({ color: validValue }))
		}

		setRGBInputState(`${r}, ${g}, ${b}`)
	}, [])

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
		dispatch(getRandom())
	}
	const onClickSave = () => {
		dispatch(viewAlert({ alertText: 'Сolor added to the collection' }))
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
		dispatch(viewAlert({ alertText: 'Сolor copied to the clipboard' }))
	}
	const handleCloseAlert = (
		_?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		dispatch(closeAlert({ reason: reason }))
	}

	useEffect(() => {
		dispatch(setLocation({ locationType: EnumLocation.picker }))
	}, [])

	//useEffect(() => {
	//	if (colorId !== color.HEX) {
	//		if (color.HEX) {
	//			HEXToRGB(color.HEX)
	//		} else {
	//			HEXToRGB(colorId || '')
	//		}
	//	} else {
	//		HEXToRGB(color.HEX)
	//	}
	//}, [HEXToRGB, color.HEX, colorId])
	useEffect(() => {
		//HEXToRGB(color.HEX || '')
		setHEXInputState(color.HEX || '')
		navigate(`/picker/${color.HEX.replace(/[^\d\w]/g, '')}`)
	}, [color.HEX])
	useEffect(() => {
		if (color.HEX !== colorId) {
			//console.log(typeof color.HEX != typeof colorId)
			console.log('HEX:',typeof color.HEX, 'colorID:', typeof colorId)
			dispatch(setColor({ color: colorId || '' }))
		}
	}, [])

	return (
		<div className='picker'>
			<div className='picker__wrap'>
				<PickerInput
					inputValue={HEXInputState}
					onChange={HEXToRGB}
					onClickCopy={onClickCopy}
					placeholder='HEX'
					backgroundColor={color.HEX}
					colorVariant={color.variant}
				>
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
					colorVariant={color.variant}
				>
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
					open={alert.open}
					text={alert.text}
					onClose={handleCloseAlert}
				/>
			</div>
		</div>
	)
}
