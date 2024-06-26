import chroma from 'chroma-js'
import { getBlindnessColor } from './getBlindnessColor'
import { blindnessScheme } from '../constants/blindnessScheme'
import { getSimilarPercent } from './getSimilarPercent'

export const useBlindness = (currentColor: string) =>
	Object.values(blindnessScheme).map(blindness => {
		const colorStateRgb = chroma(currentColor).rgb()

		const blindnessColorHex = chroma(
			Object.values(
				getBlindnessColor(
					{
						r: colorStateRgb[0],
						g: colorStateRgb[1],
						b: colorStateRgb[2],
						a: 100,
					},
					blindness.scheme
				)
			).map(color => Math.round(color))
		).hex()

		const similarPercent = getSimilarPercent(
			currentColor,
			blindnessColorHex
		)

		return {
			name: blindness.name,
			description: blindness.description,
			color: blindnessColorHex,
			similar: similarPercent,
		}
	})
