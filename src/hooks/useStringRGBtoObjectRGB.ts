import { useCutString } from "./useCutString"
import { useValidateCutString } from "./useValidateCutString"

export function useStringRGBtoObjectRGB(string: string) {
	const arrayCutString = useCutString(string)

	if (!arrayCutString) {
		return null
	}

	return useValidateCutString(arrayCutString)
}
