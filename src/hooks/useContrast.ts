import chroma from 'chroma-js'
import { useRGBtoYIQ } from './useRGBtoYIQ'
import { colorTokens } from '../constants/colorTokens'

export const useContrast = (
	colorHex: string | undefined,
	threshold: number = 128
): { brightness: 'light' | 'dark'; contrastColor: string } => {
	if (colorHex === undefined || !chroma.valid(colorHex)) {
		return { brightness: 'light', contrastColor: colorTokens.primaryDark }
	}

	const [r, g, b] = chroma(colorHex).rgb()

	const rgb = { r: r, g: g, b: b }

	return useRGBtoYIQ(rgb) >= threshold
		? { brightness: 'light', contrastColor: colorTokens.primaryDark }
		: { brightness: 'dark', contrastColor: colorTokens.primaryWhite }
}
