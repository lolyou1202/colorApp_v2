import './Picker.style.scss'
import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useAppRedux'
import { EnumLocation, setLocation } from '../../redux/slices/locationSlice'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { HeaderNavigation } from '../../components/ui/HeaderNavigation/HeaderNavigation'
import { PickerMain } from '../../components/basic/PickerMain/PickerMain'
import { setColor } from '../../redux/slices/pickerSlice'
import chroma from 'chroma-js'

export const Picker = () => {
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	)
	const dispatch = useAppDispatch()

	const { pickerID } = useParams()

	const location = useLocation()
	const navigate = useNavigate()

	const aaa = useCallback(
		(value: string) => {
			if (location.pathname !== `/picker/${value}`) {
				navigate(`/picker/${value}`)
			}
			if (value !== colorState.replace(/[^\d\w]/g, '')) {
				dispatch(setColor({ newColor: `#${value}` }))
			}
		},
		[colorState]
	)

	useEffect(() => {
		dispatch(setLocation({ locationType: EnumLocation.picker }))
	}, [])

	useEffect(() => {
		if (colorState) {
			aaa(colorState.replace(/[^\d\w]/g, ''))
		} else {
			if (pickerID) {
				aaa(pickerID)
			} else {
				aaa(
					chroma
						.random()
						.hex()
						.toUpperCase()
						.replace(/[^\d\w]/g, '')
				)
			}
		}
	}, [aaa, colorState, pickerID])

	return (
		colorState && (
			<div className='picker'>
				<header className='pickerHeader'>
					<HeaderNavigation pageName='Color picker' />
				</header>
				<PickerMain />
			</div>
		)
	)
}
