import { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks/useAppRedux'
import { EnumLocation, setLocation } from '../redux/slices/locationSlice'
import { Dashboard } from '../components/basic/Dashboard/Dashboard'
import { PaletteButtons } from '../components/basic/PaletteButtons/PaletteButtons'
import { useGeneratePaletteTemplate } from '../hooks/useGeneratePaletteTemplate'
import { useGenerateMatrixOfPalette } from '../hooks/useGenerateMatrixOfPalette'
import { fetchPalette } from '../redux/slices/paletteSlice'

export const Palette = () => {
	const dispatch = useAppDispatch()

	const fetchPaletteTemplate = useGeneratePaletteTemplate()
	const fetchPaletteAdjacency = useGenerateMatrixOfPalette()

	useEffect(() => {
		dispatch(setLocation({ locationType: EnumLocation.palette }))
	}, [])

	const onClickGenerate = () => {
		dispatch(
			fetchPalette({
				numColors: 5,
				mode: 'diffusion',
				adjacency: fetchPaletteAdjacency([0, 0, 0, 0, 0], 30),
				palette: fetchPaletteTemplate([]),
			})
		)
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
		</div>
	)
}
