import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/useAppRedux'
import { EnumLocation, setLocation } from '../redux/slices/locationSlice'
import { Dashboard } from '../components/basic/Dashboard/Dashboard'
import { PaletteButtons } from '../components/basic/PaletteButtons/PaletteButtons'
import { useGeneratePaletteTemplate } from '../hooks/useGeneratePaletteTemplate'
import { useGenerateMatrixOfPalette } from '../hooks/useGenerateMatrixOfPalette'
import {
	fetchPalette,
	lockColor,
	removeColor,
	saveColor,
	swapColors,
} from '../redux/slices/paletteSlice'
import { CustomAlert } from '../components/ui/CustomAlert/CustomAlert'
import { closeAlert, viewAlert } from '../redux/slices/alertSlice'
import { ISwapColors } from '../types'
import { useNavigate } from 'react-router-dom'
import { HexColorPicker } from 'react-colorful'

export const Palette = () => {
	const palette = useAppSelector(store => store.paletteReducer.palette)
	const alert = useAppSelector(store => store.alertReducer)

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const fetchPaletteTemplate = useGeneratePaletteTemplate()
	const fetchPaletteAdjacency = useGenerateMatrixOfPalette()

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

	const onClickArrows = (swapColorsArgs: ISwapColors) => {
		dispatch(swapColors(swapColorsArgs))
	}
	const onClickLock = (positionIndex: number) => {
		dispatch(lockColor({ positionIndex: positionIndex }))
	}
	const onClickSave = (positionIndex: number) => {
		dispatch(saveColor({ positionIndex: positionIndex }))
	}
	const onClickRemove = (positionIndex: number) => {
		dispatch(removeColor({ positionIndex: positionIndex }))
	}
	const onClickImport = (HEX: string) => {
		navigate(`/picker/${HEX}`)
	}
	const onClickCopy = (HEX: string) => {
		navigator.clipboard.writeText(HEX)
		dispatch(viewAlert({ alertText: 'Сolor copied to the clipboard' }))
	}
	const handleCloseAlert = (
		_?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		dispatch(closeAlert({ reason: reason }))
	}

	useEffect(() => {
		dispatch(setLocation({ locationType: EnumLocation.palette }))
	}, [])

	return (
		<div className='palette'>
			<Dashboard
				palette={palette}
				onClickArrows={onClickArrows}
				onClickLock={onClickLock}
				onClickCopy={onClickCopy}
				onClickSave={onClickSave}
				onClickRemove={onClickRemove}
				onClickImport={onClickImport}
			/>
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
