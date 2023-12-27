import { RGB } from "../types/types"
import { useHEXtoRGB } from "./useHEXtoRGB"
import { useRGBtoYIQ } from "./useRGBtoYIQ"

export const useContrast = (
	colorHex: string | undefined,
	threshold: number = 128
): string => {
	if (colorHex === undefined) {
		return '#353535'
	}

	const rgb: RGB | undefined = useHEXtoRGB(colorHex)

	if (rgb === undefined) {
		return '#353535'
	}

	return useRGBtoYIQ(rgb) >= threshold ? '#353535' : '#FFFFFF'
}
