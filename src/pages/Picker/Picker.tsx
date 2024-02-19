import { useEffect } from 'react'
import './Picker.style.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useAppRedux'
import { EnumLocation, setLocation } from '../../redux/slices/locationSlice'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { HeaderNavigation } from '../../components/ui/HeaderNavigation/HeaderNavigation'
import { PickerMain } from '../../components/basic/PickerMain/PickerMain'
import chroma from 'chroma-js'
import { setColor } from '../../redux/slices/pickerSlice'

export const Picker = () => {
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	)
	const dispatch = useAppDispatch()

	const { pickerID } = useParams()

	const location = useLocation()
	const navigate = useNavigate()

	//const HEXToRGB = useCallback(
	//	(value: string) => {
	//		const validValue = value.replace(/[^\d\w]/g, '')
	//		setHEXInputState(validValue)

	//		if (!validValue && color.HEX) {
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

	//const RGBToHEX = useCallback((value: string) => {
	//	const validValue = value.replace(/[^\d, ]/g, '')
	//	setRGBInputState(validValue)

	//	if (!validValue && color.HEX) {
	//		dispatch(setColor({ color: '' }))
	//		navigate('/picker')
	//		return
	//	}

	//	const RGB = useStringRGBtoObjectRGB(validValue)

	//	if (!RGB) return setHEXInputState('')

	//	const { r, g, b } = RGB

	//	const HEX = useRGBtoHEX(r, g, b)

	//	if (location.pathname !== `/picker/${HEX}`) {
	//		navigate(`/picker/${HEX}`)
	//	}

	//	dispatch(setColor({ color: HEX }))

	//	setHEXInputState(HEX)
	//}, [])

	//const onClickRandom = () => {
	//	dispatch(getRandom())
	//}
	//const onClickSave = () => {
	//	dispatch(viewAlert({ alertText: 'Сolor added to the collection' }))
	//}
	//const onClickClear = () => {
	//	if (HEXInputState) {
	//		HEXToRGB('')
	//	}
	//	if (RGBInputState) {
	//		RGBToHEX('')
	//	}
	//}
	//const onClickCopy = () => {
	//	dispatch(viewAlert({ alertText: 'Сolor copied to the clipboard' }))
	//}

	useEffect(() => {
		dispatch(setLocation({ locationType: EnumLocation.picker }))
	}, [])

	//useEffect(() => {
	//	if (color.HEX) {
	//		HEXToRGB(color.HEX)
	//	} else {
	//		HEXToRGB(colorId || '')
	//	}
	//}, [HEXToRGB, color.HEX, colorId])

	useEffect(() => {
		if (colorState && location.pathname !== `/picker/${colorState}`) {
			console.log(123)

			navigate(`/picker/${colorState}`)
		} else {
			console.log(321)

			dispatch(
				setColor({
					newColor: pickerID || chroma.random().hex().toUpperCase(),
				})
			)
		}
	}, [colorState, pickerID])

	return (
		<div className='picker'>
			<header className='pickerHeader'>
				<HeaderNavigation pageName='Color picker' />
			</header>
			{/*<PickerMain />*/}
		</div>
	)
}
