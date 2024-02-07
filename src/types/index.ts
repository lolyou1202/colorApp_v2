
export interface IColor {
	color: string
	variant: IColorVariant
	lock?: boolean
	inCollection?: boolean
}

export interface IColorVariant {
	brightness: 'light' | 'dark'
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
