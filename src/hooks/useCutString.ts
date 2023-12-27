export const useCutString = (string: string): string[] | null => {
	let cutArray: string[] = []
	let startIndex = 0

	for (let index = 0; index <= string.length; index++) {
		if (cutArray.length < 2) {
			if (string[index] === ',') {
				let cutString = string.slice(startIndex, index)
				cutArray.push(cutString)
				startIndex = index + 1
			}
		} else {
			let cutString = string.slice(startIndex, string.length)
			cutArray.push(cutString)
			break
		}
	}

	if (cutArray.length !== 3) {
		return null
	}

	return cutArray
}
