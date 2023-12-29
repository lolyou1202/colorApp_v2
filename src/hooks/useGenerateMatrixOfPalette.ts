export const useGenerateMatrixOfPalette = () => {
	return (paletteLength: number, maxContrastValue: number): string[] => {
		const step = Math.ceil(maxContrastValue / (paletteLength - 1))

		const firstLine = [...Array(paletteLength)].map((_, index) =>
			index + 1 === paletteLength ? maxContrastValue : step * index
		)

		const result = []

		for (let i = 0; i < firstLine.length; i++) {
			for (let j = 0; j < firstLine.length; j++) {
				result.push(String(Math.abs(firstLine[i] - firstLine[j])))
			}
		}

		return result
	}
}