import { RGB } from "../types/types"

export const useRGBtoYIQ = ({ r, g, b }: RGB): number =>
	(r * 299 + g * 587 + b * 114) / 1000
