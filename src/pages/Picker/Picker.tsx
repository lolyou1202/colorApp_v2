import './Picker.style.scss'
import chroma from 'chroma-js'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useAppRedux'
import { EnumLocation, setLocation } from '../../redux/slices/locationSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { HeaderNavigation } from '../../components/ui/HeaderNavigation/HeaderNavigation'
import { PickerMain } from '../../components/basic/PickerMain/PickerMain'
import { setColor } from '../../redux/slices/pickerSlice'

export const Picker = () => {
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	)
	const dispatch = useAppDispatch()

	const { pickerID } = useParams()

	const navigate = useNavigate()

	useEffect(() => {
		dispatch(setLocation({ locationType: EnumLocation.picker }))
	}, [])

	useEffect(() => {
		if (colorState && colorState !== pickerID) {
			navigate(`/picker/${colorState.replace(/[^\d\w]/g, '')}`)
		} else {
			if (pickerID && colorState !== pickerID) {
				dispatch(setColor({ newColor: `#${pickerID}` }))
			} else {
				navigate(
					`/picker/${chroma
						.random()
						.hex()
						.toUpperCase()
						.replace(/[^\d\w]/g, '')}`
				)
			}
		}
	}, [colorState, pickerID])

	return (
		colorState && (
			<div className='picker'>
				исправить отображение бордеров
				<header className='pickerHeader'>
					<HeaderNavigation pageName='Color picker' />
				</header>
				<PickerMain />
			</div>
		)
	)
}
