export const useValidateHEX = (stringHEX: string) => {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

	const HEX = stringHEX.replace(shorthandRegex, (m, r, g, b) => {
		return r + r + g + g + b + b
	})

	const result: RegExpExecArray | null =
		/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(HEX)

	return result
}
