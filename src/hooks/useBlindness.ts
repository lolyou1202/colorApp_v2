import { blindnessScheme } from '../constants/blindnessScheme'
import { BlindnessScheme } from '../types'

export const useBlindness = (
	rgbaObj: { r: number; g: number; b: number; a: number },
	matrixArr: BlindnessScheme
): { r: number; g: number; b: number } => {
	const currentMatrix = blindnessScheme[matrixArr]

	function fu(n: number) {
		return n < 0 ? 0 : n < 255 ? n : 255
	}

	const r =
		rgbaObj.r * currentMatrix[0] +
		rgbaObj.g * currentMatrix[1] +
		rgbaObj.b * currentMatrix[2] +
		rgbaObj.a * currentMatrix[3] +
		currentMatrix[4]
	const g =
		rgbaObj.r * currentMatrix[5] +
		rgbaObj.g * currentMatrix[6] +
		rgbaObj.b * currentMatrix[7] +
		rgbaObj.a * currentMatrix[8] +
		currentMatrix[9]
	const b =
		rgbaObj.r * currentMatrix[10] +
		rgbaObj.g * currentMatrix[11] +
		rgbaObj.b * currentMatrix[12] +
		rgbaObj.a * currentMatrix[13] +
		currentMatrix[14]

	return { r: fu(r), g: fu(g), b: fu(b) }
}
