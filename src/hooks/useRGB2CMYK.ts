export const useRGB2CMYK = (rgb: number[]): number[] => {
	let r = rgb[0] / 255,
		g = rgb[1] / 255,
		b = rgb[2] / 255

	const k = 1 - Math.max(r, Math.max(g, b))

	const f = k < 1 ? 1 / (1 - k) : 0

	const c = (1 - r - k) * f
	const m = (1 - g - k) * f
	const y = (1 - b - k) * f

	return [c, m, y, k]
}
