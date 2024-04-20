import { FC } from 'react'
import { SingleColorModel } from './SingleColorModel'

interface Props {
	colorModelsArr: { [colorModel: string]: string }
	onClickColorModel: (value: string) => void
	arrHalf: 'first' | 'last'
}

export const ColorModelHalf: FC<Props> = ({
	colorModelsArr,
	onClickColorModel,
	arrHalf,
}) => {
	const sliceHalfFirstNum =
		arrHalf === 'first' ? 0 : Object.entries(colorModelsArr).length / 2

	const sliceHalfSecondNum =
		arrHalf === 'first'
			? Object.entries(colorModelsArr).length / 2
			: Object.entries(colorModelsArr).length + 1

	return Object.entries(colorModelsArr)
		.slice(sliceHalfFirstNum, sliceHalfSecondNum)
		.map(([colorModel, value]) => (
			<SingleColorModel
				key={colorModel}
				colorModel={colorModel}
				value={value}
				onClick={onClickColorModel}
			/>
		))
}
