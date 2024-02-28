export type PositionType = 'first' | 'between' | 'last'
export type BrightnessType = 'light' | 'dark'
export type DirectionType = 'right' | 'left'
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
export type MenuListType = (
	| { name: string; icon: React.ReactNode; onClick: () => void }
	| ''
)[]

export interface IColor {
	color: string
	variant: IColorVariant
	lock?: boolean
}

export interface IColorVariant {
	brightness: BrightnessType
	contrastColor: string
}
export interface ISwapColors {
	direction: DirectionType
	colorPosition: number
}

export interface IPosition {
	positionType: PositionType
	positionIndex: number
}
