import './Picker.style.scss'
import chroma from 'chroma-js'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useAppRedux'
import { EnumLocation, setLocation } from '../../redux/slices/locationSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { HeaderNavigation } from '../../components/ui/HeaderNavigation/HeaderNavigation'
import { PickerMain } from '../../components/basic/PickerMain/PickerMain'
import { setColor } from '../../redux/slices/pickerSlice'
import { ScrollToTop } from '../../components/helpers/ScrollToTop'

export const Picker = () => {
	const colorState = useAppSelector(
		state => state.pickerReducer.colorState.color
	)

	const { pickerID } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (pickerID && pickerID !== colorState.replace(/[^\d\w]/g, '')) {
			dispatch(setColor({ newColor: `#${pickerID}` }))
		}
	}, [pickerID])

	useEffect(() => {
		if (!pickerID) {
			navigate(
				`/picker/${chroma
					.random()
					.hex()
					.toUpperCase()
					.replace(/[^\d\w]/g, '')}`
			)
		}
		if (colorState && pickerID !== colorState.replace(/[^\d\w]/g, '')) {
			navigate(`/picker/${colorState.replace(/[^\d\w]/g, '')}`)
		}
	}, [colorState])

	useEffect(() => {
		dispatch(setLocation({ locationType: EnumLocation.picker }))
	}, [])

	return (
		colorState && (
			<div className='picker'>
				<header className='pickerHeader'>
					<HeaderNavigation pageName='Color picker' />
				</header>
				<PickerMain />
				<ScrollToTop />
			</div>
		)
	)
}
