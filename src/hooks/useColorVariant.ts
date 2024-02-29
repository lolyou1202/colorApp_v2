import { colorTokens } from '../constants/colorTokens'

export const useColorVariant = ({
	brightness,
	colorToken,
}: {
	brightness?: 'light' | 'dark'
	colorToken?: keyof typeof colorTokens
}) => {
	const contrastColor = colorTokens[colorToken]

	return {
		brightness,
		contrastColor,
	}
}
