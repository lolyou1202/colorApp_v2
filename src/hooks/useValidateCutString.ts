export const useValidateCutString = (
	array: string[]
): {
	r: number
	g: number
	b: number
} | null => {
	const resultNumberArray: number[] = []

	for (let index = 0; index < array.length; index++) {
		const stringWithoutSpaces = array[index].replace(/\s/g, "")
		const testingString = /^\d+$/.test(stringWithoutSpaces)

		if (!testingString) {
			return null
		} else {
			const validateNumber = Number(stringWithoutSpaces)
			if (stringWithoutSpaces[0] === "0" && validateNumber !== 0) {
				return null
			}
			if (validateNumber >= 0 && validateNumber <= 255) {
				resultNumberArray.push(validateNumber)
			} else {
				return null
			}
		}
	}

	return {
		r: resultNumberArray[0],
		g: resultNumberArray[1],
		b: resultNumberArray[2],
	}
}
