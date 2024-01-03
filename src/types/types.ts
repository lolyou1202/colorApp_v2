export interface RGB {
	b: number
	g: number
	r: number
}

export interface IColorVariant {
	brightness: 'light' | 'dark'
	contrastHEX: string
}

export interface IColor {
	id?: number
	HEX: string
	variant: IColorVariant
	lock?: boolean
	inCollection?: boolean
}

export interface ISwapColors {
	direction: 'right' | 'left'
	colorPosition: number
}
