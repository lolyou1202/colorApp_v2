export interface IColor {
	color: string
	variant: IColorVariant
	lock?: boolean
	inCollection?: boolean
}

export type IBrightness = 'light' | 'dark'

export interface IColorVariant {
	brightness: IBrightness
	contrastColor: string
}
export interface ISwapColors {
	direction: 'right' | 'left'
	colorPosition: number
}

export type IPositionType = 'first' | 'between' | 'last'
export type IPositionIndex = number

export interface IPosition {
	positionIndex: IPositionIndex
	positionType: IPositionType
}


export type BlindnessScheme =
	| 'Normal'
	| 'Protanopia'
	| 'Protanopia'
	| 'Protanomaly'
	| 'Deuteranopia'
	| 'Deuteranomaly'
	| 'Tritanopia'
	| 'Tritanomaly'
	| 'Achromatopsia'
	| 'Achromatomaly'
