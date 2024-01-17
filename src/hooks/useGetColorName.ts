import nearestColor from 'nearest-color'
import colorNames from '../colorNames.json'

export const useGetColorName = (HEX: string): string | null => {
	const colors = colorNames.reduce(
		(o, { name, hex }) => Object.assign(o, { [name]: hex }),
		{}
	)

	const nearest = nearestColor.from(colors)

	const findedColorName = nearest(HEX)

	return findedColorName ? findedColorName.name : null
}
