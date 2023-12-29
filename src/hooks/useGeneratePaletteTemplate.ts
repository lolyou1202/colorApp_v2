import { IColorInPalette } from '../redux/slices/paletteSlice'

export const useGeneratePaletteTemplate = () => {
	return (palette: IColorInPalette[]): string[] =>
		palette.length === 0
			? ['-', '-', '-', '-', '-']
			: palette.map(color => (color.lock ? `#${color.HEX}` : '-'))
}
