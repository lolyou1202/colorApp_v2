export const getBlindnessColor = (
	rgbaObj: { r: number; g: number; b: number; a: number },
	matrixArr: number[]
) => {
	function fu(n: number) {
		return n < 0 ? 0 : n < 255 ? n : 255
	}

	const r =
		rgbaObj.r * matrixArr[0] +
		rgbaObj.g * matrixArr[1] +
		rgbaObj.b * matrixArr[2] +
		rgbaObj.a * matrixArr[3] +
		matrixArr[4]
	const g =
		rgbaObj.r * matrixArr[5] +
		rgbaObj.g * matrixArr[6] +
		rgbaObj.b * matrixArr[7] +
		rgbaObj.a * matrixArr[8] +
		matrixArr[9]
	const b =
		rgbaObj.r * matrixArr[10] +
		rgbaObj.g * matrixArr[11] +
		rgbaObj.b * matrixArr[12] +
		rgbaObj.a * matrixArr[13] +
		matrixArr[14]

	return { r: fu(r), g: fu(g), b: fu(b) }
}
