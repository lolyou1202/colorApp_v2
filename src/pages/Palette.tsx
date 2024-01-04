import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/useAppRedux'
import { EnumLocation, setLocation } from '../redux/slices/locationSlice'
import { Dashboard } from '../components/basic/Dashboard/Dashboard'
import { PaletteButtons } from '../components/basic/PaletteButtons/PaletteButtons'
import { useGeneratePaletteTemplate } from '../hooks/useGeneratePaletteTemplate'
import { useGenerateMatrixOfPalette } from '../hooks/useGenerateMatrixOfPalette'
import { fetchPalette } from '../redux/slices/paletteSlice'
import { CustomAlert } from '../components/ui/CustomAlert/CustomAlert'

export const Palette = () => {
	const palette = useAppSelector(store => store.paletteReducer.palette)
	const alert = useAppSelector(store => store.alertReducer)

	const dispatch = useAppDispatch()

	const fetchPaletteTemplate = useGeneratePaletteTemplate()
	const fetchPaletteAdjacency = useGenerateMatrixOfPalette()

	useEffect(() => {
		dispatch(setLocation({ locationType: EnumLocation.palette }))
	}, [])

	const onClickGenerate = () => {
		if (palette.length < 2) {
			dispatch(
				fetchPalette({
					numColors: 5,
					mode: 'diffusion',
					temperature: '0.2',
					adjacency: fetchPaletteAdjacency(5, 50),
					palette: fetchPaletteTemplate([]),
				})
			)
		} else {
			dispatch(
				fetchPalette({
					numColors: palette.length,
					mode: 'diffusion',
					temperature: '0.2',
					adjacency: fetchPaletteAdjacency(palette.length, 50),
					palette: fetchPaletteTemplate(palette),
				})
			)
		}
	}

	return (
		<div className='palette'>
			<Dashboard />
			<PaletteButtons
				onClickUndo={() => {}}
				onClickGenerate={onClickGenerate}
				onClickRedo={() => {}}
				onClickSave={() => {}}
				onClickSettings={() => {}}
			/>
			<CustomAlert
				open={alert.open}
				text={alert.text}
				onClose={handleCloseAlert}
			/>
		</div>
	)
}
