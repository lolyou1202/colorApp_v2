import { colorTokens } from '../constants/colorTokens'

export function useColorVariant<
	B extends 'light' | 'dark',
	C extends keyof typeof colorTokens,
>({ brightness, colorToken }: { brightness?: B; colorToken?: C }) {
	const contrastColor = colorToken && colorTokens[colorToken]

	return {
		brightness: brightness!,
		contrastColor: contrastColor!,
	}
}