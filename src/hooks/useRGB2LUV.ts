export const useXYZ2LUV = (xyz: number[]): number[] => {
	const x = xyz[0],
		y = xyz[1],
		z = xyz[2]

	const eps = 216 / 24389
	const kap = 24389 / 27

	const Xn = 95.05
	const Yn = 100
	const Zn = 108.9

	const vR = (9 * Yn) / (Xn + 15 * Yn + 3 * Zn)
	const uR = (4 * Xn) / (Xn + 15 * Yn + 3 * Zn)

	// If XYZ = [0,0,0], avoid division by zero and return conversion
	if (x === 0 && y === 0 && z === 0) {
		return [0, 0, 0]
	}

	const v1 = (9 * y) / (x + 15 * y + 3 * z)
	const u1 = (4 * x) / (x + 15 * y + 3 * z)
	const yR = y / Yn
	const cbrt =
		Math.cbrt != null ? Math.cbrt : (val: number) => Math.pow(val, 1 / 3)
	const L = yR > eps ? 116 * cbrt(yR) - 16 : kap * yR
	const u = 13 * L * (u1 - uR)
	const v = 13 * L * (v1 - vR)

	// Add zero to prevent signed zeros (force 0 rather than -0)
	return [L, u, v]
}
