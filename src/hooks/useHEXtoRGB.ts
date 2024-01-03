import { RGB } from "../types"
import { useValidateHEX } from "./useValidateHEX"

export const useHEXtoRGB = (HEX: string): RGB | undefined => {
	if (!HEX) {
		return undefined
	}

	const result = useValidateHEX(HEX)

	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: undefined
}
