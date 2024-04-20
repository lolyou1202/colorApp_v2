import chroma from 'chroma-js'

export const getSimilarPercent = (
	currentColorHex: string,
	blindnessColorHex: string
): number => 100 - Math.round(chroma.deltaE(currentColorHex, blindnessColorHex))
