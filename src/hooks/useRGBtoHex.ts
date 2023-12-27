export const useRGBtoHEX = (r: number, g: number, b: number) =>
	((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()
