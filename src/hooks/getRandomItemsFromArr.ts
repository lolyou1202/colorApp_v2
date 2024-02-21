export const getRandomItemsFromArr = <T extends unknown>(
	arr: T[],
	numRandomItems: number
): T[] => {
	const shuffled = Array.from(arr).sort(() => 0.5 - Math.random())
	return shuffled.slice(0, numRandomItems)
}
