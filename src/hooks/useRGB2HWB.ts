export const useRGB2HWB = (rgb: number[]): number[] => {
	let r = rgb[0],
		g = rgb[1],
		b = rgb[2]

	const max = Math.max(r, g, b)
	const min = Math.min(r, g, b)

	if (max === min) {
		return [0, (100 * min) / 255, 100 - (100 * max) / 255]
	}

	let tmp = 0.0

	switch (max) {
		case r:
			tmp = (g - b) / (max - min) + 0.0
			break
		case g:
			tmp = (b - r) / (max - min) + 2.0
			break
		case b:
			tmp = (r - g) / (max - min) + 4.0
			break
	}

	const hue = ((tmp + 6.0) % 6.0) / 6.0

	return [
		360 * hue, // hue       (from 0 to 360 in degrees)
		(100 * min) / 255, // whiteness (from 0 to 100 in %)
		100 - (100 * max) / 255, // blackness (from 0 to 100 in %)
	]
}
