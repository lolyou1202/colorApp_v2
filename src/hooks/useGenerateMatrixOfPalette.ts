export const useGenerateMatrixOfPalette = () => {
	return (palette: any[], maxContrastValue: number): string[] => {
		const step = Math.floor(maxContrastValue / palette.length)
		const startArray = palette.map((_, index) => step * index)
		const result = []

		for (let i = 0; i < startArray.length; i++) {
			for (let j = 0; j < startArray.length; j++) {
				result.push(String(Math.abs(startArray[i] - startArray[j])))
			}
		}

		return result
	}
}
