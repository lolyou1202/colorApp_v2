import chroma from 'chroma-js'
import { useRGB2HWB } from './useRGB2HWB'
import { useXYZ2LUV } from './useRGB2LUV'
import { useRGB2XYZ } from './useRGB2XYZ'
import { useRGB2CMYK } from './useRGB2CMYK'

export type ColorModels = {
	HEX: string
	RGB: string
	LAB: string
	HWB: string
	LUV: string
	LCH: string
	HSB: string
	CMYK: string
	XYZ: string
	HSL: string
}

export const useColorModels = (HEXVithHash: string): ColorModels => {
	const HEX = HEXVithHash.replace(/[^0-9A-Z]/g, '')
	const RGB = chroma(HEXVithHash).rgb().join(', ')
	const LAB = chroma(HEXVithHash)
		.lab()
		.map(value => Math.round(value))
		.join(', ')
	const HWB = useRGB2HWB(chroma(HEXVithHash).rgb())
		.map(value => Math.round(value))
		.join(', ')
	const LUV = useXYZ2LUV(
		useRGB2XYZ(chroma(HEXVithHash).rgb()).map(value =>
			Math.round(value * 100)
		)
	)
		.map(value => Math.round(value))
		.join(', ')
	const LCH = chroma(HEXVithHash)
		.lch()
		.map(value => (isNaN(value) ? 0 : Math.round(value)))
		.join(', ')
	const HSB = chroma(HEXVithHash)
		.hsv()
		.map((value, index) =>
			isNaN(value)
				? 0
				: index === 0
					? Math.round(value)
					: Math.round(value * 100)
		)
		.join(', ')
	const CMYK = useRGB2CMYK(chroma(HEXVithHash).rgb())
		.map(value => Math.round(value * 100))
		.join(', ')
	const XYZ = useRGB2XYZ(chroma(HEXVithHash).rgb())
		.map(value => Math.round(value * 100))
		.join(', ')
	const HSL = chroma(HEXVithHash)
		.hsl()
		.map((value, index) =>
			isNaN(value)
				? 0
				: index === 0
					? Math.round(value)
					: Math.round(value * 100)
		)
		.slice(0, 3)
		.join(', ')

	return { HEX, RGB, LAB, HWB, LUV, LCH, HSB, CMYK, XYZ, HSL }
}
