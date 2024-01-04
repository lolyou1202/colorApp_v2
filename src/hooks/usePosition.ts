export const usePosition = (positionIndex: number, arrayLength: number) => {
	switch (positionIndex) {
		case 0:
			return 'first'
		case arrayLength - 1:
			return 'last'
		default:
			return 'between'
	}
}
