import { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks/useAppRedux'
import { EnumLocation, setLocation } from '../redux/slices/locationSlice'
import { Dashboard } from '../components/basic/Dashboard/Dashboard'
import { PaletteButtons } from '../components/basic/PaletteButtons/PaletteButtons'

export const Palette = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setLocation({ locationType: EnumLocation.palette }))
	}, [])

	return (
		<div className='palette'>
			<Dashboard />
			<PaletteButtons />
		</div>
	)
}
