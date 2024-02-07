export const useValidateHEX = (stringHEX: string) => {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

	const HEX = stringHEX.replace(shorthandRegex, (m, r, g, b) => {
		return r + r + g + g + b + b
	})

	const RegExpExecArray: RegExpExecArray | null =
		/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(HEX)

	return RegExpExecArray
		? `#${RegExpExecArray[0].toUpperCase().replace(/[^0-9A-Z]/g, '')}`
		: null
}
