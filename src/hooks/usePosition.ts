import { IPosition } from '../types'

export const usePosition = (
	positionIndex: number,
	arrayLength: number
): IPosition => {
	switch (positionIndex) {
		case 0:
			return { positionIndex: positionIndex, positionType: 'first' }
		case arrayLength - 1:
			return { positionIndex: positionIndex, positionType: 'last' }
		default:
			return { positionIndex: positionIndex, positionType: 'between' }
	}
}
