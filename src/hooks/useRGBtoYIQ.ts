export const useRGBtoYIQ = ({
	r,
	g,
	b,
}: {
	r: number
	g: number
	b: number
}): number => (r * 299 + g * 587 + b * 114) / 1000
