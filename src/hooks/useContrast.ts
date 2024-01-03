import { RGB } from '../types/types'
import { useHEXtoRGB } from './useHEXtoRGB'
import { useRGBtoYIQ } from './useRGBtoYIQ'

export const useContrast = (
	colorHex: string | undefined,
	threshold: number = 128
): { brightness: 'light' | 'dark'; contrastHEX: string } => {
	if (colorHex === undefined) {
		return { brightness: 'light', contrastHEX: '#353535' }
	}

	const rgb: RGB | undefined = useHEXtoRGB(colorHex.toUpperCase())

	if (rgb === undefined) {
		return { brightness: 'light', contrastHEX: '#353535' }
	}

	return useRGBtoYIQ(rgb) >= threshold
		? { brightness: 'light', contrastHEX: '#353535' }
		: { brightness: 'dark', contrastHEX: '#FFFFFF' }
}
